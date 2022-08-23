const isLoggedIn = state => state.auth.isLoggedIn;

const authentication = state => state.auth.authentication;

const loading = state => state.auth.loading;

const error = state => state.auth.error;

const userSel = state => state.auth.user;

const avatarURL = state => state.auth.user.avatarURL;

export { isLoggedIn, userSel, loading, error, authentication, avatarURL };
