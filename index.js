import Vue from 'vue';

export var version = '1.2.0';

var compatible = (/^1\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 1.x, and does not support Vue ' + Vue.version);
}

export var directive = {

  acceptStatement: true,
  priority: 700,

  bind: function() {
    var self = this;

    // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
    //        in macrotasks. This causes the listener to be set up before
    //        the "origin" click event (the event that lead to the binding of
    //        the directive) arrives at the document root. To work around that,
    //        we ignore events until the end of the "initial" macrotask.
    // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
    // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
    self.initialMacrotaskEnded = false;
    setTimeout(function() {
      self.initialMacrotaskEnded = true;
    });
  },

  update: function(handler) {
    if (typeof handler !== 'function') {
      if (process.env.NODE_ENV !== 'production') {
        Vue.util.warn(
          this.name + '="' +
          this.expression + '" expects a function value, ' +
          'got ' + handler
        );
      }
      return;
    }

    this.reset();

    var self = this;
    var el = this.el;
    var scope = this._scope || this.vm;

    this.handler = function(ev) {
      // @NOTE: IE 5.0+
      // @REFERENCE: https://developer.mozilla.org/en/docs/Web/API/Node/contains
      if (self.initialMacrotaskEnded && !el.contains(ev.target)) {
        scope.$event = ev;
        var res = handler(ev);
        scope.$event = null;
        return res;
      }
    };

    Vue.util.on(document.documentElement, 'click', this.handler);
  },

  reset: function() {
    Vue.util.off(document.documentElement, 'click', this.handler);
  },

  unbind: function() {
    this.reset();
  },

};

export var mixin = {
  directives: { onClickaway: directive },
};
