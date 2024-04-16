<template>
    <section class="page bg-gradient-to-b from-purple-950 to-slate-950">
        <main>
            <NavbarProducts />
            <!-- Keyboards -->
            <section class="container mx-auto py-12">
                <AnimatedHeader class="not-italic text-4xl justify-center text-white text-center font-bold mb-8" text="Keyboards" />
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard
                        v-for="keyboard in keyboards"
                        :id="keyboard.id"
                        :name="keyboard.name"
                        :price="keyboard.price"
                        :img="keyboard.img"
                    />
                </div>
            </section>
        </main>
    </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { onAuthStateChanged, type Auth } from 'firebase/auth';
import { type Products } from '../../composables/useFirestoreDB';

const { $auth} = useNuxtApp();
const { user } = useFirebaseAuth();
const { fetchKeyboards } = useFirestoreDB();

const keyboards = ref<Products[]>([]);

onMounted( async () => {
    keyboards.value = await fetchKeyboards();
});

const router = useRouter();

onBeforeMount(() => {
    onAuthStateChanged($auth as Auth, (firebaseUser) => {
        if(firebaseUser)
        {
            user.value = firebaseUser;
            // useSonner.info('User is logged in as ' + firebaseUser.email);
        }
        else {
            router.push('/login');
            useSonner.error('User is not logged in!');
        }
    });
});

useSeoMeta({
  title: "Keyboards",
  description: "Browse our selection of high-end gaming keyboards.",
});

</script>

<style lang="scss" scoped>
.page {
    overflow-y: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>
