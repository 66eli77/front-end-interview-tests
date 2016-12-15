<template>

  <component1 class="components"></component1>

</template>


<script>

  // const constants = require('../state/constants');

  module.exports = {
    components: {
      'component1': require('./component1'),
    },
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

  @require 'theme.styl'

  .components
    background-color: $color

</style>
