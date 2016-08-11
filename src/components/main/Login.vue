<template>
  <div class="login">
    <div class="header">
      <h1>Listlike</h1>
      <hr>
    </div>
    <div class="content">
      <h3>Loading ... </h3>
    </div>
    <div class="footer">
      <hr>
      <p>Develop by Iris Yang</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 5px;
}

.header {
  width: 600px;
}

.content {
  height: 200px;
  padding: 50px;
}
</style>
