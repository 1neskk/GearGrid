<template>
    <section class="page">
        <main class="bg-gradient-to-b from-purple-600 to-bg-slate-950">
            <NavbarMain class="bg-black" />
            <!-- products -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                <div class="bg-white rounded-xl shadow-lg">
                    <div class="min-h-48 h-auto bg-gradient-to-b from-purple-600 to-purple-800 rounded-t-xl">
                        <img class="min-h-48 h-auto w-full object-cover rounded-t-xl" src="https://www.nbplaza.com.my/32046-thickbox_default/logitech-g-pro-x-superlight-wireless-high-speed-lightweight-gaming-mouse.jpg" alt="Logitech G Pro X Superlight" />
                    </div>
                    <div class="p-4">
                        <h2 class="text-xl text-black font-bold">Logitech G Pro X Superlight</h2>
                        <p class="text-sm text-muted-foreground">Wireless Gaming Mouse</p>
                        <p class="text-black text-lg font-bold mt-2">US$149.99</p>
                        <div class="mt-4">
                            <UiButton class="w-full" variant="outline" text="View details" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onAuthStateChanged, type Auth } from 'firebase/auth';

const { $auth} = useNuxtApp();
const { user } = useFirebaseAuth();

const router = useRouter();

onBeforeMount(() => {
    onAuthStateChanged($auth as Auth, (firebaseUser) => {
        if(firebaseUser)
        {
            user.value = firebaseUser;
            useSonner.info('User is logged in as ' + firebaseUser.email);
        }
        else {
            router.push('/login');
        }
    });
});

useSeoMeta({
  title: "Mice",
  description: "Browse our selection of high-end computer mice.",
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