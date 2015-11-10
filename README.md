# vue-clickaway

> Reusable clickaway directive for reusable [Vue.js](https://github.com/vuejs/vue) components

## Requirements

- vue: ^1.0.0 or ^0.12.9
- browserify or webpack

## Install

``` sh
$ npm install vue-clickaway --save
$ npm install vue-clickaway@0.1 --save # for vue ^0.12.9
```

## Usage

1. Make directive available to your component
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
   Scince 1.0 this is not possible. If you still want to define the directive
   application-wide, you should `Vue.directive('on-clickaway', onClickaway);`
   in your application entry point. But bear in mind that this introduces
   implicit dependency for your components, making them less reusable.

## License

[MIT](https://opensource.org/licenses/MIT)
