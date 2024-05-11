<template>
    <section class="page bg-gradient-to-b from-purple-950 to-slate-950">
        <main>
            <NavbarProducts />
            <!-- mice -->
            <section class="container mx-auto py-12">
                <AnimatedHeader class="not-italic text-4xl justify-center text-white text-center font-bold mb-8" text="Mice" />
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard
                        v-for="mouse in mice"
                        :id="mouse.id"
                        :name="mouse.name"
                        :price="mouse.price"
                        :img="mouse.img"
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
import { type Product, type SimpleProduct } from '../../composables/useFirestoreDB';

const { $auth} = useNuxtApp();
const { user } = useFirebaseAuth();
const { fetchMice } = useFirestoreDB();

const mice = ref<Product[]>([]);

onMounted( async () => {
    mice.value = await fetchMice();
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
            useSonner.error('Error!', {
                description: 'User is not logged in.',
                duration: 2000,
            })
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
    overflow-y: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

</style>
