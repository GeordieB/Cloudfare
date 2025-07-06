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

// Access the secret from the environment

try {
  // eslint-disable-next-line no-undef
  fetch('/api/').then((res) => res.json() as Promise<{ name: string }>);
} catch (error) {
  // eslint-disable-next-line no-console
  console.log(error);
}
// const GA_TAG_ID = await response.
//
// if (!GA_TAG_ID) {
//   // eslint-disable-next-line no-console
//   console.error('GA_TAG_ID is not defined in the environment.');
// }

const gtag = createGtag({
  tagId: /*GA_TAG_ID || */ '',
});

createApp(App)
  .use(router)
  .use(i18n)
  .use(vuetify)
  .directive('appear', appear)
  .use(gtag)
  .mount('#app');
