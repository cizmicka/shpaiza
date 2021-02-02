<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText
      v-model="search"
      type="text"
      placeholder="Search"
    />
  </span>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'SearchComponent',
  setup () {
    const state = reactive({
      search: '',
    });

    return {
      ...toRefs(state),
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
