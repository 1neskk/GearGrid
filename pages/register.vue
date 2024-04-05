<template>
    <section class="page bg-slate-900">
        <main>
            <NavbarMain />
            <div class="flex h-screen items-center justify-center">
                <div class="w-full max-w-[330px] px-5">
                <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Sign Up</h1>
                <p class="mt-1 text-muted-foreground">Enter your email & password to register.</p>
    
                <form class="mt-10" @submit="submit">
                    <fieldset :disabled="isSubmitting" class="grid gap-5">
                    <div>
                        <UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
                    </div>
                    <div>
                        <UiVeeInput label="Password" type="password" name="password" />
                    </div>
                    <div>
                        <UiButton @click="handleSubmit"  class="w-full" type="submit" text="Sign Up" />
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
    </section>  
</template>

<script lang="ts" setup>
import { object, string, type InferType } from 'yup';
import { useRouter } from 'vue-router';
const { registerUser } = useFirebaseAuth();

useSeoMeta({
  title: "Register",
  description: "Register to access the GearGrid website.",
});

const router = useRouter();

const RegisterSchema = object({
  email: string().email().required().label("Email"),
  password: string().required().label("Password").min(8),
});

const { handleSubmit, isSubmitting } = useForm<InferType<typeof RegisterSchema>>({
  validationSchema: RegisterSchema,
});

const submit = handleSubmit(async (values) => {
  if(await registerUser(values.email, values.password))
  {
    useSonner.success('Success', {
      description: 'Account created successfully.',
    })
    router.push('/login');
  }
  else
  {
    useSonner.warning('Error', {
      description: 'Failed to create account. Please try again.',
    })
  }
});
</script>

<style lang="css" scoped>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.page {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>