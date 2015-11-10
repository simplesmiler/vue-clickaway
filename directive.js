var _ = require('vue').util;

// @NOTE: written with regard to `v-on`
// @REFERENCE: https://github.com/vuejs/vue/blob/1.0.0/src/directives/public/on.js

module.exports = {

  acceptStatement: true,
  priority: 700,

  update: function(handler) {
    if (typeof handler !== 'function') {
      if (process.env.NODE_ENV !== 'production') {
        _.warn(
          this.name + '="' +
          this.expression + '" expects a function value, ' +
          'got ' + handler
        );
      }
      return;
    }

    this.reset();

    var self = this;
    var scope = this._scope || this.vm;

    this.handler = function(ev) {
      // @NOTE: IE 5.0+
      // @REFERENCE: https://developer.mozilla.org/en/docs/Web/API/Node/contains
      if (!self.el.contains(ev.target)) {
        scope.$event = ev;
        var res = handler(ev);
        scope.$event = null;
        return res;
      }
    };

    _.on(document.documentElement, 'click', this.handler);
  },

  reset: function() {
    _.off(document.documentElement, 'click', this.handler);
  },

  unbind: function() {
    this.reset();
  },

};
