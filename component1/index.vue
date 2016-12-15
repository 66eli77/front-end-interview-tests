<template>

  <div class="name">eli</div>

</template>


<script>

  // const constants = require('../state/constants');

  module.exports = {
    data: () => ({
      d1: 0,
    }),
    methods: {
      // hide and show the toolbar based on scrolling
      foo(position) {
        return position;
      },
    },
    computed: {
      exploreMode() {
        return d1 > 2;
      },
    },
  };

</script>


<style lang="stylus" scoped>

  @require '../theme.styl'

  .name
    background-color: $color

</style>