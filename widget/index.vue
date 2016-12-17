<template>

  <div class="box">
    <select v-model="city" v-on:change="getDataByAjax">
      <option>Amsterdam</option>
      <option>Ankara</option>
      <option>Beijing</option>
      <option>Berlin</option>
      <option>Cape Town</option>
      <option>Chicago</option>
      <option>Delhi</option>
      <option>Damascus</option>
      <option>Helsinki</option>
      <option>Hong Kong</option>
      <option>Jerusalem</option>
      <option>Kansas City</option>
      <option>Lodon</option>
      <option>Los Angeles</option>
      <option>New York</option>
    </select>
    <div id="temp">Temperature: {{ kelvinToCelsius }} &#8451;</div>
    <div id="delete" @click="deleteMe">
      <div id="text">&#10005</div>
    </div>
  </div>

</template>


<script>

  const bus = require('../bus');
  var data = {
    apiKey: '645a8bfda0ec12d2f37bd56e8d6f5004',
    city: null,
    temp: 0,
  }

  module.exports = {
    props: {
      itemIndex: {
        type: Number
      }
    },
    data: () => {
      return data;
    },
    methods: {
      getDataByAjax() {
        if (this.city) {
          const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=' + this.apiKey;
          const xhr = new XMLHttpRequest();
          xhr.open('GET', apiUrl);
          xhr.onload = () => {
            this.temp = JSON.parse(xhr.response).main.temp;
          };
          xhr.send();
        }
      },
      deleteMe() {
        bus.$emit('delete', this.itemIndex);
      },
    },
    computed: {
      kelvinToCelsius() {
        return this.temp ? (this.temp - 273.15).toFixed(2) : 0;
      }
    },
  };

</script>

<style lang="stylus" scoped>

  @require '../theme.styl'

  .box
    background-color: $color
    padding: $width
    margin: $width
    color: $light-color
  
  #temp
    display:inline
    font-family: $font
    
  #delete
    float: right
    right: 6px
    position: relative
    cursor:pointer
    background-color: $light-color
    border-radius: 10px
    width: 20px
    height: 20px
    display: inline-table
    
  #text
    color: $color
    display: table-cell
    vertical-align: middle
    text-align: center
    no-selete()

</style>