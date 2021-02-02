<template>
  <div class="app">
    <MainMenuComponent />
    <SearchComponent />
    <router-view />
  </div>
</template>

<script>
import MainMenuComponent from '@/components/MainMenuComponent.vue';
import SearchComponent from '@/components/SearchComponent';

export default {
  name: 'App',
  components: {
    MainMenuComponent,
    SearchComponent
  }
};
</script>