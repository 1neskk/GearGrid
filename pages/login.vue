<template>
  <section class="page bg-slate-900">
    <main>
        <NavbarMain />
        <div class="flex h-screen items-center justify-center">
            <div class="w-full max-w-[330px] px-5">
            <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Sign in</h1>
            <p class="mt-1 text-muted-foreground">Enter your email & password to log in.</p>

            <form class="mt-10" @submit="submit">
                <fieldset class="grid gap-5">
                <div>
                    <UiVeeInput v-model="creds.email" label="Email" type="email" name="email" placeholder="john@example.com" />
                </div>
                <div>
                    <UiVeeInput v-model="creds.password" label="Password" type="password" name="password" />
                </div>
                <div>
                    <UiButton @click="handleLogin"  class="w-full" type="submit" text="Log in" />
                </div>
                </fieldset>
            </form>
            <p class="mt-8 text-sm">
                <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/recovery"
                >Forgot password?</NuxtLink
                >
            </p>
            <p class="mt-4 text-sm text-muted-foreground">
                Don't have an account?
                <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="/register"
                >Create account</NuxtLink
                >
            </p>
            </div>
        </div>
    </main>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const { loginUser } = useFirebaseAuth();

const creds = reactive({
  email: '',
  password: ''
});

useSeoMeta({
  title: "Log in",
  description: "Enter your email & password to log in.",
});

const router = useRouter();

const handleLogin = async () => {
  try {
      await loginUser(creds.email, creds.password);
      useSonner('Success', {
        description: 'Logged in successfully.',
      });
      router.push('/mice');
  } catch (error) {
      console.error(error);
  }
};

const submit = (event: Event) => {
  event.preventDefault();
  handleLogin();
};

</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
