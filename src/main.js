import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import store from './store';

import 'primevue/resources/themes/nova-vue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(PrimeVue);
app.use(InputText);
app.use(store);
app.use(router);

app.component('InputText', InputText);

app.mount('#app');
