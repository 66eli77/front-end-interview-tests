<template>

  <div class="top-container">
    <div id="add" @click="add">
      <div id="text">+</div>
    </div>
    <box :items="items"/>
  </div>

</template>


<script>

  // A central event bus defined in bus.js for Non Parent_Child communication.
  const bus = require('./bus');

  module.exports = {
    components: {
      'box': require('./box'),
    },
    data: () => ({
      items: [1],
    }),
    methods: {
      add() {
        this.items.push(1);
      },
    },
    created() {
      bus.$on('delete', (index) => {
        this.items.splice(index, 1);
      });
    },
  };

</script>


<style lang="stylus" scoped>

  @require 'theme.styl'
  
  .top-container
    top: 100px
    position: relative
    min-width: 320px
    padding: 4px
    width: 400px
    margin: auto
    @media (max-width: $portrait-breakpoint)
      width: 100%
  
  #add
    background-color: $action-color
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
