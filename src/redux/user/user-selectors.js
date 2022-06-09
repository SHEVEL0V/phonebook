const token = state => state.auth.token;

const isLoggedIn = state => state.auth.isLoggedIn;

const userName = state => state.auth.user.name;

export { token, isLoggedIn, userName };
