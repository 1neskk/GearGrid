<template>
    <main>
        <NavbarMain />
        <div class="flex h-screen items-center justify-center">
            <div class="w-full max-w-[330px] px-5">
            <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Sign Up</h1>
            <p class="mt-1 text-muted-foreground">Enter your email & password to register.</p>
  
            <form class="mt-10" @submit="submit">
                <fieldset class="grid gap-5">
                <div>
                    <UiVeeInput v-model="creds.email" label="Email" type="email" name="email" placeholder="john@example.com" />
                </div>
                <div>
                    <UiVeeInput v-model="creds.password" label="Password" type="password" name="password" />
                </div>
                <div>
                    <UiButton @click="handleRegister"  class="w-full" type="submit" text="Sign Up" />
                </div>
                </fieldset>
            </form>
            <p class="mt-4 text-sm text-muted-foreground">
                Already have an account?
                <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/login"
                >Sign In</NuxtLink
                >
            </p>
            </div>
        </div>
    </main>
  </template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const {registerUser} = useFirebaseAuth();

useSeoMeta({
  title: "Register",
  description: "Register to access the GearGrid website.",
});

const router = useRouter();
const creds = reactive({
    email: '',
    password: ''
});

const handleRegister = async () => {
  try {
      await registerUser(creds.email, creds.password);
      router.push('/products/mice');
  } catch (error) {
      console.error(error);
  }
};

const submit = (event: Event) => {
  event.preventDefault();
  handleRegister();
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