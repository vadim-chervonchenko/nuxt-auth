<template>
  <div>
    <Header/>
    <div class="flex flex-col justify-center pt-12 w-full text-center">
      <h1 class="mt-20 text-4xl font-semibold">Welcome to Plutopay</h1>
    </div>
    <Footer/>
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
