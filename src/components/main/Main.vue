<template>
  <div class="main">
    <div class="header">
      <h1>Listlike</h1>
      <hr>
    </div>
    <div class="content">
      <h3>Get your likes list ! </h3>
      <a v-link="{path: '/login'}"><button class="loginButton">Go</button></a>
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
      msg: 'ListLike'
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

.loginButton {
  border-radius: 8px;
  background-color: #42b983;
  width: 30%;
  height: 10%;
  min-height: 40px;
  color: white;
  font-size: 16px;
}

.loginButton:hover {
  background-color: #00AA55;
}

</style>
