import Vue from 'vue/dist/vue';
import { mount } from '@vue/test-utils';
import { mixin as clickaway } from 'vue-clickaway';

test('sanity test', () => {
  var wrapper = new Vue({
    mixins: [clickaway],
    template: '<p v-on-clickaway="away">Click away</p>',
    data: { foo: true },
    methods: {
      away() {
        console.log('clicked away');
        return 'boom';
      }
    }
  }).$mount();
  expect(wrapper.away()).toBe('boom');
});

// NOTES
// - look up rollup
