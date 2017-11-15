(function (exports,Vue) { 'use strict';

  Vue = 'default' in Vue ? Vue['default'] : Vue;

  var version = '2.1.0';

  var compatible = (/^2\./).test(Vue.version);
  if (!compatible) {
    Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
  }

  // @REFERENCE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  if (!Array.prototype.indexOf) {

    Array.prototype.indexOf = function(vMember, nStartFrom) {

      if (this == null) {
        Vue.util.warn("Array.prototype.indexOf() - can't convert `" + this + "` to object");
      }

      var nIdx = isFinite(nStartFrom) ? Math.floor(nStartFrom) : 0,
        oThis = this instanceof Object ? this : new Object(this),
        nLen = isFinite(oThis.length) ? Math.floor(oThis.length) : 0;

      if (nIdx >= nLen) {
        return -1;
      }

      if (nIdx < 0) {
        nIdx = Math.max(nLen + nIdx, 0);
      }

      if (vMember === undefined) {
        do {
          if (nIdx in oThis && oThis[nIdx] === undefined) {
            return nIdx;
          }
        } while (++nIdx < nLen);
      } else {
        do {
          if (oThis[nIdx] === vMember) {
            return nIdx;
          }
        } while (++nIdx < nLen);
      }
      return -1;
    };
  }

  // @SECTION: implementation

  var HANDLER = '_vue_clickaway_handler';

  function bind(el, binding) {
    unbind(el);

    var callback = binding.value;
    if (typeof callback !== 'function') {
      if ('development' !== 'production') {
        Vue.util.warn(
          'v-' + binding.name + '="' +
          binding.expression + '" expects a function value, ' +
          'got ' + callback
        );
      }
      return;
    }

    // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
    //        in macrotasks. This causes the listener to be set up before
    //        the "origin" click event (the event that lead to the binding of
    //        the directive) arrives at the document root. To work around that,
    //        we ignore events until the end of the "initial" macrotask.
    // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
    // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
    var initialMacrotaskEnded = false;
    setTimeout(function() {
      initialMacrotaskEnded = true;
    }, 0);

    el[HANDLER] = function(ev) {
      // @NOTE: IE 5.0+
      if (initialMacrotaskEnded && ev.path.indexOf(el) < 0) {
        return callback(ev);
      }
    };

    document.documentElement.addEventListener('click', el[HANDLER], false);
  }

  function unbind(el) {
    document.documentElement.removeEventListener('click', el[HANDLER], false);
    delete el[HANDLER];
  }

  var directive = {
    bind: bind,
    update: function(el, binding) {
      if (binding.value === binding.oldValue) return;
      bind(el, binding);
    },
    unbind: unbind,
  };

  var mixin = {
    directives: { onClickaway: directive },
  };

  exports.version = version;
  exports.directive = directive;
  exports.mixin = mixin;

})((this.VueClickaway = {}),Vue);
