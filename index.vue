<template>

  <div class="top-container">
    <div id="add" @click="changeStates">
      <div id="text">👆</div>
    </div>
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
    methods: {
      changeStates() {
        this.$store.dispatch('mAction', true);
      },
    },
  };

</script>


<style lang="stylus" scoped>

  @require 'theme.styl'
  
  .top-container
    top: 100px
    position: relative
    background-color: $background-color
    min-width: 320px
    padding: 4px
    width: 400px
    margin: auto
    @media (max-width: $portrait-breakpoint)
      width: 100%
  
  #add
    background-color: #8cedff
    width: 40px
    height: 40px
    border-radius: 20px
    position: absolute
    display: table
    top: -15px
    right: 20px
    float: right
    cursor:pointer
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
  #text
    color: $color
    font-weight: bold
    font-size: 150%
    display: table-cell
    vertical-align: middle
    text-align: center
    no-selete()

</style>
