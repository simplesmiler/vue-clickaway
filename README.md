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

The recommended way is to use mixin:

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

> NOTE: Pay attention to the letter case. `onClickaway` turns into `v-on-clickaway`, while `onClickAway` turns into `v-on-click-away`.

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

## License

[MIT](https://opensource.org/licenses/MIT)
