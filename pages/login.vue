<template>
  <section class="page bg-slate-900">
    <main>
        <NavbarMain />
        <div class="flex h-screen items-center justify-center">
            <div class="w-full max-w-[330px] px-5">
            <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Sign in</h1>
            <p class="mt-1 text-muted-foreground">Enter your email & password to log in.</p>

            <form class="mt-10" @submit="submit">
                <fieldset :disabled="isSubmitting"  class="grid gap-5">
                <div>
                    <UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
                </div>
                <div>
                    <UiVeeInput label="Password" type="password" name="password" />
                </div>
                <div>
                    <UiButton @click="handleSubmit"  class="w-full" type="submit" text="Log in" />
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
import { object, string, type InferType } from 'yup';
import { useRouter } from 'vue-router';
const { loginUser } = useFirebaseAuth();

useSeoMeta({
  title: "Log in",
  description: "Enter your email & password to log in.",
});

const router = useRouter();

const LoginSchema = object({
  email: string().email().required().label("Email"),
  password: string().required().label("Password").min(8),
});

const { handleSubmit, isSubmitting } = useForm<InferType<typeof LoginSchema>>({
  validationSchema: LoginSchema,
});

const submit = handleSubmit(async (values) => {
  if(await loginUser(values.email, values.password))
  {
    useSonner.success('Success', {
      description: 'Logged in successfully.',
    })
    router.push('/');
  }
  else
  {
    useSonner.warning('Error', {
      description: 'Failed to log in. Please check your email & password.',
    })
  }
});

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
