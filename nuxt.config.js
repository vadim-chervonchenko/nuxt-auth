export default {
    modules: ['@nuxtjs/axios', '@nuxtjs/auth'],

    env: {
        fbAPIKey: 'AIzaSyAg2JhDB24dm8ny7dCaQPndZxZuAjAPubs',
    },
    router: {
        middleware: ['auth']
    },

    buildModules: ['@nuxtjs/tailwindcss']
};
