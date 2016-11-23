# vue-clickaway

> Reusable clickaway directive for reusable [Vue.js](https://github.com/vuejs/vue) components

[![npm version](https://img.shields.io/npm/v/vue-clickaway.svg)](https://www.npmjs.com/package/vue-clickaway)

## Overview

Sometimes you need to detect clicks **outside** of the element (to close a modal
window or hide a dropdown select). There is no native event for that, and Vue.js
does not cover you either. This is why `vue-clickaway` exists. Please check out
the [demo](https://jsfiddle.net/simplesmiler/bbbh5bt6/) before reading further.

## Requirements

- vue: ^1.0.0

## Install

From npm:

``` sh
$ npm install vue-clickaway --save
```

From CDN:

``` html
<script src="https://cdn.rawgit.com/simplesmiler/vue-clickaway/1.2.0/dist/vue-clickaway.js"></script>
<!-- OR -->
<script src="https://cdn.rawgit.com/simplesmiler/vue-clickaway/1.2.0/dist/vue-clickaway.min.js"></script>
```

## Usage

1. Make the directive available to your component
2. Define a method to be called
3. Use the directive in the template

The recommended way is to use the mixin:

``` js
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [ clickaway ],
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
import { directive as onClickaway } from 'vue-clickaway';

export default {
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

## Notes

1. `require('vue-clickaway/mixin')` was the recommended syntax prior to `1.1.0`.
   Although this syntax is still supported, it is recommended to use `import`
   syntax for es6 and `require('vue-clickaway').mixin` for common-js.
2. A version for `vue@^0.12.9` is not supported, but is availabale as
   `vue-clickaway@0.1`.

## Caveats

1. Pay attention to the letter case. `onClickaway` turns into `v-on-clickaway`,
   while `onClickAway` turns into `v-on-click-away`.
2. Prior to `vue@1.0` views were able to inherit assets from the parent views,
   which made it possible to define the directive on the root view
   and have it available across the whole view hierarchy.
   Since `vue@1.0` this is not possible. If you still want to define the directive
   application-wide, you should `Vue.directive('on-clickaway', onClickaway);`
   in your application entry point. But bear in mind that this introduces
   implicit dependency for your components, making them less reusable.

## License

[MIT](https://opensource.org/licenses/MIT)
