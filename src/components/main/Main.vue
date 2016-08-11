<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <p>Login => <a v-link="{path: '/login'}">Go</a></p>
    <p>List => <a v-link="{path: '/list'}">Go</a></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'ListLike'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
