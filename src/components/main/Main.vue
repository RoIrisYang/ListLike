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
const request = require('superagent');
import facebookLogin from 'facebook-login';
const api = facebookLogin({ appId: '328231444178125', scope: 'user_likes' });

export default {
  data() {
    return {
      msg: 'ListLike',
    };
  },
  methods: {
    isLogin() {
      api.login().then(response => {
       // console.log(response);
        localStorage.setItem('accessToken', response.authResponse.accessToken);
        localStorage.setItem('userID', response.authResponse.userID);
        request.get(`https://graph.facebook.com/v2.7/me?access_token=${localStorage.getItem('accessToken')}`)
          .end((err, res) => {
            localStorage.setItem('Name', res.body.name);
            this.$route.router.go({ name: 'list' });
          });
      });
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

.logoutButton {
  float: right;
  margin-top: 10px;
  margin-right: 20px;
  min-width: 60px;
  min-height: 30px;
  border-radius: 8px;
  border: none;
  background-color: white;
  font-size: 14px;
  color: #55AA00;
}
</style>
