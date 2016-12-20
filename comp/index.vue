<template>

  <div class="container">
    <h4>component-1</h4>
    <p>{{ states }}</p>
    <p>{{ state1 }}</p>
    <p>{{ state2 }}</p>
  </div>

</template>


<script>

  module.exports = {
    computed: {
      states() {
        if (this.$store.state.state2) {
          return 'state2 first';
        }
        if (this.$store.state.state1) {
          return 'state1 first';
        }
        return 'states lol';
      },
      state1() {
        if (this.$store.state.state1) {
          return 'state1 changed';
        } else {
          return 'state1 lol';
        }
      },
      state2() {
        if (this.$store.state.state2) {
          return 'state2 changed';
        } else {
          return 'state2 lol';
        }
      },
    },
  };

</script>


<style lang="stylus" scoped>

  @require '../theme.styl'
  
  .container
    top: 100px
    position: relative
    background-color: #ffbaba
    min-width: 320px
    padding: 4px
    width: 400px
    margin: auto
    @media (max-width: $portrait-breakpoint)
      width: 100%

</style>
