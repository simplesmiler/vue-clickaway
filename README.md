# vue-clickaway

> Reusable clickaway directive for reusable [Vue.js](https://github.com/vuejs/vue) components

## Requirements

- vue: ^0.12.9
- browserify or webpack

## Install

``` sh
$ npm install vue-clickaway --save
```

## Usage

As an asset:

``` js
var onClickaway = require('vue-clickaway/directive');

module.exports = {
  // use the declared directive in the template
  template: '<p v-on-clickaway="away">Click away</p>',
  methods: {
    // define a method to be called
    away: function() {
      console.log('clicked away');
    },
  },
  directives: {
    // declare directive as an asset
    onClickaway: onClickaway,
  },
};
```

As a mixin:

``` js
var onClickaway = require('vue-clickaway/mixin');

module.exports = {
  // now directive `v-on-clickaway` is available to use in the template
  mixins: [onClickaway],
};
```

## License

[MIT](https://opensource.org/licenses/MIT)
