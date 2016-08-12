import fb from 'facebook-login-promises';
const params = {
  appId: 328231444178125,
};

function callback(state) {
  const process = state.loading ? 'loading' : 'loaded';
  const connected = state.status === 'connected';
  const firstname = state.data ? state.data.first_name : null;
  const lastname = state.data ? state.data.last_name : null;
  console.log(state);
  if (firstname) {
    console.log(`process: ${process}`);
    console.log(`connected: ${connected}`);
    console.log(`your logged as: ${firstname} ${lastname}`);
  }
}

function login() {
  fb.callback.login(params, callback);
}

function logout() {
  fb.callback.logout(params, callback);
}

function checkStatus() {
  fb.callback.checkStatus(params, callback);
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
      checkStatus();
    },
    isLogout() {
      checkStatus();
      logout();
      this.$route.router.go({ name: 'main' });
    },
  },
};