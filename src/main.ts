import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './plugins/i18n.ts';
import vuetify from './plugins/vuetify.ts';

createApp(App).use(router).use(i18n).use(vuetify).mount('#app');
