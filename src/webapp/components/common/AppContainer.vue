<template>
    <el-container>
        <app-header></app-header>
        <el-container>
            <app-aside></app-aside>
            <el-main>
                <slot></slot>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import AppHeader from 'Components/common/AppHeader.vue';
import AppAside from 'Components/common/AppAside.vue';

export default {
  components: {
    'app-header': AppHeader,
    'app-aside': AppAside
  }
};
</script>
<style lang="postcss">
</style>


