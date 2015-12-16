# vue-clickaway

> Reusable clickaway directive for reusable [Vue.js](https://github.com/vuejs/vue) components

## Overview

Sometimes you need to detect clicks **outside** of the element (to close a modal
window or hide a dropdown select). There is no native event for that, and Vue.js
does not cover you either. This is why `vue-clickaway` exists.

## Requirements

- vue: ^1.0.0
- browserify or webpack

## Install

``` sh
$ npm install vue-clickaway --save
```

## Usage

1. Make the directive available to your component
2. Define a method to be called
3. Use the directive in the template

The recommended way is to use the mixin:

``` js
var onClickaway = require('vue-clickaway/mixin');

module.exports = {
  mixins: [onClickaway],
  template: '<p v-on-clickaway="away">Click away</p>',
  methods: {
    away: function() {
      console.log('clicked away');
    },
  },
};
```

If mixin does not suit your needs, you can use the directive directly:

``` js
var onClickaway = require('vue-clickaway/directive');

module.exports = {
  directives: {
    onClickaway: onClickaway,
  },
  template: '<p v-on-clickaway="away">Click away</p>',
  methods: {
    away: function() {
      console.log('clicked away');
    },
  },
};
```

## Caveats

1. Pay attention to the letter case. `onClickaway` turns into `v-on-clickaway`,
   while `onClickAway` turns into `v-on-click-away`.
2. Before vue 1.0 views were able to inherit assets from the parent views,
   which made it possible to define the directive on the root view
   and have it available across the whole view hierarchy.
   Since 1.0 this is not possible. If you still want to define the directive
   application-wide, you should `Vue.directive('on-clickaway', onClickaway);`
   in your application entry point. But bear in mind that this introduces
   implicit dependency for your components, making them less reusable.
3. A version for `vue@^0.12.9` is not supported, but is availabale as
   `vue-clickaway@0.1`.

## License

[MIT](https://opensource.org/licenses/MIT)
