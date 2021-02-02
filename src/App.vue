<template>
  <div class="app">
    <ul class="nav">
      <li
        v-for="(route, i) in routes"
        :key="i"
      >
        <router-link :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'App',

  setup () {
    const routes = router.options.routes;

    return {
      routes
    };
  }
};
</script>