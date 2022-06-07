const isLoggedIn = state => state.auth.isLoggedIn;

const userName = state => state.auth.user.name;

export { isLoggedIn, userName };
