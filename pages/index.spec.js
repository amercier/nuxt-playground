import Vue from 'vue';
import index from './index.vue';

function getRenderedText(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el.textContent;
}

describe('Index Component', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = new Vue(index).$mount();
  });

  test('snapshot', () => {
    const $html = $mounted.$el.outerHTML;
    expect($html).toMatchSnapshot();
  });

  test('renders correctly with different props', () => {
    expect(getRenderedText(index, {})).toBe('Hello world!');
  });

  afterEach(() => {
    $mounted = null;
  });
});
