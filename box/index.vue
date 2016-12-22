<template>

  <div id="wrapper">
    <p id="title"> {{ total }} Cit{{ total>1 ? 'ies' : 'y' }} </p>
    <widget v-for="(item, index) in items" :itemIndex="index" :key="item.id"/>
  </div>

</template>


<script>

  module.exports = {
    components: {
      'widget': require('../widget'),
    },
    props: {
      items: {
        type: Array
      }
    },
    computed: {
      total() {
        return this.items.length;
      }
    },
  };

</script>


<style lang="stylus" scoped>

  @require '../theme.styl'
  
  #title
    color: $color
    position: absolute
    top: 0
    font-weight: bold
    padding-left: 5px
    font-family: $font
  
  #wrapper
    background-color: $background-color
    padding: 30px 10px 10px 10px

</style>