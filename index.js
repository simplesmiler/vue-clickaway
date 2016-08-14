import { util } from 'vue';

export var directive = {

  acceptStatement: true,
  priority: 700,

  update: function(handler) {
    if (typeof handler !== 'function') {
      if (process.env.NODE_ENV !== 'production') {
        util.warn(
          this.name + '="' +
          this.expression + '" expects a function value, ' +
          'got ' + handler
        );
      }
      return;
    }

    this.reset();

    var el = this.el;
    var scope = this._scope || this.vm;

    this.handler = function(ev) {
      // @NOTE: IE 5.0+
      // @REFERENCE: https://developer.mozilla.org/en/docs/Web/API/Node/contains
      if (!el.contains(ev.target)) {
        scope.$event = ev;
        var res = handler(ev);
        scope.$event = null;
        return res;
      }
    };

    util.on(document.documentElement, 'click', this.handler);
  },

  reset: function() {
    util.off(document.documentElement, 'click', this.handler);
  },

  unbind: function() {
    this.reset();
  },

};

export var mixin = {
  directives: { onClickaway: directive },
};
