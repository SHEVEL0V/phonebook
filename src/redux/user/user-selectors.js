const tokenUser = state => state.auth.token;

const isLoggedIn = state => state.auth.isLoggedIn;

const userName = state => state.auth.user.name;

export { tokenUser, isLoggedIn, userName };
