<template>
  <div v-if="" class="absolute inline-flex items-center justify-center top-0 right-0 px-4 py-5 lg:px-8 xl:px-20 lg:py-12">
    <span class="hidden sm:block text-sm tracking-wide font-medium mr-8">
      Already have an account?
    </span>
    <NuxtLink
        to="/login"
        class="lg:min-w-40 w-auto bg-black text-white cursor-pointer px-5 py-2 rounded text-sm hover:bg-opacity-80 flex items-center justify-center hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
      <span class="flex items-center justify-center">
        Login
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "LoginButton"
}
</script>

<style scoped>

</style>