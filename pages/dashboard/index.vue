<template>
    <NuxtLink to="/">
        <h1>Hello user u logged in 123</h1>
    </NuxtLink>
</template>

<script>
export default {
    middleware: 'login-user',
    name: 'Dashboard',
};
</script>
