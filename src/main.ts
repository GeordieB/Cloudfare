import {
  createApp,
  type Directive,
  type DirectiveBinding,
  type VNode,
} from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './plugins/i18n.ts';
import vuetify from './plugins/vuetify.ts';
import { createGtag } from 'vue-gtag';

export const appear: Directive = {
  beforeMount(element: HTMLElement) {
    element.style.visibility = 'hidden';
  },
  updated(
    element: HTMLElement,
    binding: DirectiveBinding<boolean>,
    node: VNode,
  ) {
    if (!binding.value === !binding.oldValue || null === node.transition) {
      return;
    }

    if (!binding.value) {
      node.transition.leave(element, () => {
        element.style.visibility = 'hidden';
      });
      return;
    }

    node.transition.beforeEnter(element);
    element.style.visibility = '';
    node.transition.enter(element);
  },
};

const gtag = createGtag({
  tagId: 'G-MH4XDCPN32',
});

createApp(App)
  .use(router)
  .use(i18n)
  .use(vuetify)
  .directive('appear', appear)
  .use(gtag)
  .mount('#app');
