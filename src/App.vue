<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  import NavButtons from '@/components/NavButtons.vue'

  export default {
    components: {
      NavButtons
    }
}
</script>

<style lang="scss">
  * {
    margin:0;
    padding:0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   min-height: 100vh;
   background: #8A2387;  /* fallback for old browsers */
   background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
   background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>
