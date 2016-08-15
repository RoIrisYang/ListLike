<template>
  <div id="list">
    <div class="header">
      <div class="header-up">
        <button class="logoutButton" @click="isLogout">Logout</button>
        <button class="logoutButton"><a href="{{web}}">{{Name}}</a></button>
        <h1>Listlike</h1>
      </div>
      <hr>
    </div>
    <div class="content">
      <h3>List of Likes ({{length}})</h3>
      <div class="limit">
        <table>
          <tr>
            <th>Name</th>
            <th>Created Time</th>
          </tr>
          <tbody v-for="like in likes">
            <td>{{like.name}}</td>
            <td>{{like.created_time}}</td>
          </tbody>
        </table>
      </div>
    </div>
    <div class="footer">
      <hr>
      <p>Develop by Iris Yang</p>
    </div>
  </div>
</template>

<script>
const request = require('superagent');
import fb from 'facebook-login-promises';
const params = {
  appId: 328231444178125,
};

export default {
  data() {
    return {
      Name: localStorage.getItem('Name'),
      State: '',
      length: 0,
      likes: [],
      web: `https://www.facebook.com/${localStorage.getItem('userID')}`,
    };
  },
  init() {
    request.get(`https://graph.facebook.com/v2.7/me/likes?access_token=${localStorage.getItem('accessToken')}`)
      .end((err, res) => {
        this.length = res.body.data.length;
        this.likes = res.body.data;
      });
  },
  methods: {
    isLogout() {
      this.logout();
    },
    logout() {
      fb.callback.logout(params, this.callback);
      localStorage.clear();
      this.$route.router.go({ name: 'main' });
    },
    callback(state) {
      this.State = state;
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

.logoutButton:hover {
  background-color: #FFEE99;
}

.content {
  max-height: 450px;
  padding: 10px;
  overflow-y: auto;
}

table {
    width: 100%;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
</style>