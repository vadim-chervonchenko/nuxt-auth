<template>
    <div class="flex flex-row justify center pt-6 px-8 w-full">
        <Logo />
        <div class="flex flex-wrap">
            <div class="box-border w-1/4">
                <h4 class="text-black ">Already have an account?</h4>
            </div>
            <div class="box-border w-1/4">
                <NuxtLink to="/login">
                    <button
                        class=" flex justify-center py-2 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                        Log in
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from './icons/Logo';

export default {
    name: 'Header',
    components: { Logo },
};
</script>

<style scoped></style>
