<template>
  <div class="main">
    <div class="header">
      <h1>Listlike</h1>
      <hr>
    </div>
    <div class="content">
      <h3>Get your likes list ! </h3>
      <button class="loginButton" @click="isLogin">GO</button>
    </div>
    <div class="footer">
      <hr>
      <p>Develop by Iris Yang</p>
    </div>
  </div>
</template>

<script>
import fb from 'facebook-login-promises';
const params = {
  appId: 328231444178125,
  scope: 'user_likes',
};

function callback(state) {
  const process = state.loading ? 'loading' : 'loaded';
  const connected = state.status === 'connected';
  const firstname = state.data ? state.data.first_name : null;
  const lastname = state.data ? state.data.last_name : null;
  if (firstname) {
    console.log(state);
    console.log(state.data);
    console.log(`process: ${process}`);
    console.log(`connected: ${connected}`);
    console.log(`your logged as: ${firstname} ${lastname}`);
  }
}

function login() {
  fb.callback.login(params, callback);
}

export default {
  data() {
    return {
      msg: 'ListLike',
    };
  },
  methods: {
    isLogin() {
      login();
      this.$route.router.go({ name: 'list' });
    },
  },
};
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
