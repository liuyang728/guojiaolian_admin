<template>
  <div class="l-container">
    <header class="header">header</header>
    <footer class="footer">footer</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1
    };
  }
};
</script>

<style lang="scss">
// @import url('./index.css');
.l-container {
  color: red;
  background: goldenrod;
  height: 500px;
}
</style>
<style lang="postcss">
@import url('./index.css');
:root {
  --blue: blue;
}
.l-container {
  color: var(--blue);
  .header {
    height: 100px;
    background: var(--blue);
  }
}

</style>




