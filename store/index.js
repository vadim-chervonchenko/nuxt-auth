import Vuex from 'vuex';
import Cookie from 'js-cookie';

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: null,
        },
        mutations: {
            setToken(state, payload) {
                state.token = payload;
            },
            clearToken(state) {
                state.token = null;
            },
        },
        actions: {
            singUp(state, payload) {
                return this.$axios
                    .$post(
                        'https://identitytoolkit.googleapis.com/v1/accounts:signIn?key=' +
                            process.env.fbAPIKey,
                        {
                            email: payload.email,
                            password: payload.password,
                            returnSecureToken: true,
                        }
                    )
                    .then((result) => {
                        state.commit('setToken', result.idToken);

                        localStorage.setItem('token', result.idToken);
                        localStorage.setItem( 'tokenExpiration', new Date().getTime() + result.expiresIn * 1000 );

                        Cookie.set('jwt', result.idToken);
                        Cookie.set( 'expirationDate', new Date().getTime() + result.expiresIn * 1000 );

                        state.dispatch( 'setLogoutTimer', result.expiresIn * 1000 );
                    })
                    .catch((e) => console.error(e));
            },
            signIn(state, payload) {
                return this.$axios
                    .$post(
                        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
                        process.env.fbAPIKey,
                        {
                            email: payload.email,
                            password: payload.password,
                            returnSecureToken: true,
                        }
                    )
                    .then((result) => {
                        state.commit('setToken', result.idToken);

                        localStorage.setItem('token', result.idToken);
                        localStorage.setItem( 'tokenExpiration', new Date().getTime() + result.expiresIn * 1000 );

                        Cookie.set('jwt', result.idToken);
                        Cookie.set( 'expirationDate', new Date().getTime() + result.expiresIn * 1000 );

                        state.dispatch( 'setLogoutTimer', result.expiresIn * 1000 );
                    })
                    .catch((e) => console.error(e));
            },
            setLogoutTimer(state, duration) {
                setTimeout(() => {
                    state.commit('clearToken');
                }, duration);
            },
            initAuth(state, req) {
                let token;
                let expirationDate;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }
                    const jwtCookie = req.headers.cookie
                        .split(';')
                        .find((c) => c.trim().startsWith('jwt='));
                    if (!jwtCookie) {
                        return;
                    }
                    expirationDate = req.headers.cookie
                        .split(';')
                        .find((c) => c.trim().startsWith('expirationDate='))
                        .split('=')[1];
                    token = jwtCookie.split('=')[1];
                } else {
                    token = localStorage.getItem('token');
                    expirationDate = localStorage.getItem('tokenExpiration');

                    if (new Date().getTime() > +expirationDate || !token) {
                        return;
                    }
                }

                state.commit(
                    'setLogoutTimer',
                    +expirationDate - new Date().getTime()
                );
                state.commit('setToken', token);
            },
        },
        getters: {
            isAuthenticated(state) {

                console.log(state.token);

                return state.token != null;
            },
        },
    });
};

export default createStore;
