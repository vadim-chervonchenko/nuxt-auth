<template>
    <div>
        <Header />
        <div class="flex flex-col justify-center pt-12 w-full text-center">
            <div v-if="$auth.loggedIn">
                <h1>Hello {{ $auth.user.email }}</h1>
                <Dashboard />
                <button>Logout</button>
            </div>
            <div class="" v-else>
                <h1 class="text-4xl font-semibold">Welcome to plutopay</h1>
                <NuxtLink to="/login">
                    <button
                        class="flex justify-center py-2 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                        Log In
                    </button>
                </NuxtLink>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Login from '../pages/login';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard/index';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Dashboard,
        Signup,
        Login,
        Header,
        Footer,
    },
    name: 'App',
};
</script>
