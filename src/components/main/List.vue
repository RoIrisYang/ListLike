<template>
  <div class="list">
    <div class="header">
      <div class="header-up">
        <button class="logoutButton" @click="isLogout">Logout</button>
        <button class="logoutButton">{{Name}}</button>
        <h1>Listlike</h1>
      </div>
      <hr>
    </div>
    <div class="content">
      <h3>List of Likes ({{number}})</h3>
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Created Time</th>
        </tr>
        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tbody>
      </table>
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
};

function callback(state) {
  const process = state.loading ? 'loading' : 'loaded';
  const connected = state.status === 'connected';
  const firstname = state.data ? state.data.first_name : null;
  const lastname = state.data ? state.data.last_name : null;
  // console.log(state);
  if (firstname) {
    console.log(`process: ${process}`);
    console.log(`connected: ${connected}`);
    console.log(`your logged as: ${firstname} ${lastname}`);
  }
}

function logout() {
  fb.callback.logout(params, callback);
}

export default {
  data() {
    return {
     // Name: `${firstname} ${lastname}`,
    };
  },
  methods: {
    isLogout() {
      logout();
      this.$route.router.go({ name: 'main' });
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
  height: 200px;
  padding: 10px;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
</style>