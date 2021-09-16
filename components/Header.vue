<template>
  <div class="flex flex-col justify-center pt-6 w-full mb-auto">
    <div class="flex flex-row justify center pt-6 px-8 w-full">
      <NuxtLink to="/">
        <Logo/>
      </NuxtLink>
      <LoginButton/>
    </div>
  </div>
</template>

<script>
import Logo from './icons/Logo';
import LoginButton from "./LoginButton";

export default {
  name: 'Header',
  components: {LoginButton, Logo},
};
</script>

<style scoped></style>
