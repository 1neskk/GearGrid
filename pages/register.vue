<template>
    <main class="">
        <NavbarMain />
        <div class="form-container">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email
                    </label>
                    <input
                        v-model="creds.email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="email"
                        placeholder="Enter your email address"
                    />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input
                        v-model="creds.password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div class="flex items-center justify-between gap-14">
                    <button
                        @click="handleRegister"
                        class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Sign Up
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-violet-500 hover:text-violet-800" href="/login">
                        Already have an account?
                    </a>
                </div>
            </form>
        </div>
    </main>
</template>

<script lang="ts" setup>
import { useHead } from 'nuxt/app';
import { reactive } from 'vue';
const {registerUser} = useFirebaseAuth();

useHead({
    title: 'Register',
    meta: [
        {
            name: 'description',
            content: 'Register to access the GearGrid website.'
        }
    ]
});

const creds = reactive({
    email: '',
    password: ''
});

const handleRegister = async () => {
    await registerUser(creds.email, creds.password);
    alert('Account registered successfully! Now you can login.');
};
</script>

<style lang="css" scoped>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>