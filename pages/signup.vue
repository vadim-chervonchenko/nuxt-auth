<template>
    <div class="flex flex-col justify-center pt-12 w-full mb-auto">
        <h1 class="py-0 px-2 text-2xl font-semibold text-black text-center">
            Sign Up
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
                <hr class="border-textColor border-1 w-full rounded-md" />
                <label class="block font-medium text-sm text-textColor w-full">
                    or
                </label>
                <hr class="border-textColor border-1 w-full rounded-md" />
            </div>
        </div>

        <div
            class="flex flex-col justify-center px-4 sm:px-12 w-full max-w-md mx-auto"
        >
            <form class="" action="">
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
                    <span v-if="msg.email" class="text-errorColor"
                        >! {{ msg.email }}</span
                    >
                </div>
                <div>
                    <label for="password" class="block mt-5 mb-2 text-black"
                        >Password</label
                    >
                </div>
                <div>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        class="block appearance-none placeholder-gray w-full px-3 py-2 rounded-md border-none bg-lightGray focus:bg-white focus:text-black"
                        placeholder="password"
                        required
                        v-model="password"
                    />
                    <span v-if="msg.password" class="text-errorColor"
                        >! {{ msg.password }}
                    </span>
                </div>
                <div>
                    <button
                        type="submit"
                        class="w-full flex justify-center py-2 px-4 mt-8 border border-transparent rounded-md shadow-sm text-sm text-white bg-black hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Footer from '../components/Footer';

export default {
    components: { Footer },

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
        password(value) {
            this.password = value;
            this.validatePassword(value);
        },
    },

    methods: {
        userSignup() {
            this.$store
                .dispatch('singUp', {
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    this.$router.push('/dashboard');
                });
        },
        validateEmail(value) {
            const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (emailRegexp.test(value)) {
                this.msg['email'] = '';
            } else {
                this.msg['email'] = 'Enter a valid Email';
            }
        },
        validatePassword(value) {
            const passRegexp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/;
            if (passRegexp.test(value)) {
                this.msg['password'] = '';
            } else {
                this.msg['password'] =
                    'Not strong enough! Must be at least 6 characters and must contain numbers, letters and symbols.';
            }
        },
    },
};
</script>

<style></style>
