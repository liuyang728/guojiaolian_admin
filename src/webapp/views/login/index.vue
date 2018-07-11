<template>
  <el-container>
    <app-header></app-header>
    <el-main></el-main>
  </el-container>
</template>

<script>
import AppHeader from 'Components/common/AppHeader.vue';

export default {
  components: {
    'app-header': AppHeader
  },
  data() {
    return {};
  }
};
</script>
<style>
@import url('./index');
</style>
