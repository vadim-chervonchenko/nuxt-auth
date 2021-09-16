<template>
  <div class="flex flex-col justify-center pt-6 w-full mb-auto">
    <div class="flex flex-row justify center pt-6 px-8 w-full">
      <NuxtLink to="/">
        <Logo/>
      </NuxtLink>
      <SignUpButton/>
    </div>
    <h1 class="py-0 px-2 text-2xl font-semibold text-black text-center">
      Log In
    </h1>
    <div
        class="flex flex-col justify-center px-4 sm:px-12 w-full max-w-md mx-auto"
    >
      <button
          class="flex items-center justify-center w-full mx-auto max-w-[560px] border px-3 py-2 mt-8 mb-6 font-semibold border-none rounded-md shadow-sm placeholder-grey text-sm bg-background focus:ring-2 focus:ring-grey focus:bg-white focus:text-black"
      >
        <img
            :src="require('~/assets/icons/google.svg')"
            alt="Google"
            class="mr-1.5"
        />
        Google
      </button>
      <div class="flex mt-7 items-center text-center">
        <hr class="border-textColor border-1 w-full rounded-md"/>
        <label class="block font-medium text-sm text-textColor w-full">
          or
        </label>
        <hr class="border-textColor border-1 w-full rounded-md"/>
      </div>
    </div>

    <div
        class="flex flex-col justify-center px-4 sm:px-12 w-full max-w-md mx-auto"
    >
      <form method="post" class="" @submit.prevent="userLogin">
        <div>
          <label for="email" class="block mt-5 mb-2 text-black"
          >Email</label
          >
        </div>
        <div>
          <input
              type="text"
              id="email"
              name="email"
              class="block appearance-none placeholder-gray w-full px-3 py-2 rounded-md border-none bg-lightGray focus:ring-2 focus:ring-grey focus:bg-white focus:text-black"
              placeholder="your@example.com"
              required
              v-model="email"
          />
          <span v-if="msg.email" class="text-errorColor text-sm">! {{ msg.email }}</span>
        </div>
        <div>
          <label for="password" class="block mt-5 mb-2 text-black"
          >Password</label
          >
        </div>
        <div>
          <input
              type="password"
              id="password"
              name="password"
              class="block appearance-none placeholder-gray w-full px-3 py-2 rounded-md border-none bg-lightGray focus:bg-white focus:text-black"
              placeholder="password"
              required
              v-model="password"
          />
        </div>
        <div>
          <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer";
import SignUpButton from "../components/SignUpButton";
import Logo from '../components/icons/Logo';

export default {
  components: {Footer, Logo, SignUpButton},
  data() {
    return {
      email: '',
      password: '',
      msg: [],
    };
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
  },
  methods: {
    validateEmail(value) {
      const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (emailRegexp.test(value)) {
        this.msg['email'] = '';
      } else {
        this.msg['email'] = 'Enter a valid Email';
      }
    },
    userLogin() {
      this.$store.dispatch('signIn', {
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push('/dashboard');
      });
    },
  },
};
</script>

<style></style>
