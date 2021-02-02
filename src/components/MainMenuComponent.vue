<template>
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
</template>

<script>
import router from '@/router';

export default {
  name: 'MainMenuComponent',
  setup () {
    const routes = router.options.routes;

    return {
      routes
    };
  }
};
</script>
