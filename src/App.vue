<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Nanum Square', sans-serif;
  font-weight: 900;
}
button:focus {outline: 0;}
.btn {
  display: inline-block;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: none;
  font-size:0;
}
</style>
