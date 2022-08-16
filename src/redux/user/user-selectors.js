const isLoggedIn = state => state.auth.isLoggedIn;

const authentication = state => state.auth.authentication;

const loading = state => state.auth.loading;

const error = state => state.auth.error;

const userName = state => state.auth.user.name;

const avatarURL = state => state.auth.user.avatarURL;

export {
  isLoggedIn,
  userName,
  loading,
  error,
  authentication,
  avatarURL,
};
