import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import store from './store';

import 'primevue/resources/themes/nova-vue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

createApp(App)
  .use(PrimeVue, {ripple: true})
  .use(store)
  .use(router)
  .mount('#app');
