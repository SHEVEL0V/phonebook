const isLoggedIn = state => state.auth.isLoggedIn;

const loading = state => state.auth.loading;

const error = state => state.auth.error;

const userName = state => state.auth.user.name;

export { isLoggedIn, userName, loading, error };
