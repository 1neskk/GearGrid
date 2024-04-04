<template>
  <main>
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
            id="email"
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
        <div class="flex items-center justify-between">
          <button
            @click="handleLogin"
            class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <UiButton @click="handlePasswordReset" variant="link" class="inline-block align-baseline font-bold text-sm text-violet-500 hover:text-violet-800" href="#">
            Forgot Password?
          </UiButton>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useHead } from 'nuxt/app';
import { reactive } from 'vue';
import { routerKey } from 'vue-router';
import { useRouter } from 'vue-router';
const { loginUser, passwordReset } = useFirebaseAuth();

useHead({
  title: 'Login',
  meta: [
    {
      name: 'description',
      content: 'Login to access the GearGrid website.'
    }
  ]
});

const creds = reactive({
  email: '',
  password: ''
});

const router = useRouter();

async function handleLogin() {
  if(await loginUser(creds.email, creds.password))
  {
    console.log('User logged in');
    alert('User logged in!');
    router.push('/products/mice');
  } else {
    console.log('Login failed');
  }
}

async function handlePasswordReset() {
  alert('In order to send the password reset email, you need to fill the email field and click the "Forgot Password?" button again!');
  if(await passwordReset(creds.email))
  {
    console.log('Password reset email sent');
    alert('Password reset email sent!');
  } else {
    console.log('Password reset failed');
  }
}

</script>

<style lang="css" scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>