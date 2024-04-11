<template>
    <section class="page">
        <main class="bg-gradient-to-b from-purple-600 to-bg-slate-950">
            <NavbarMain class="bg-black" />
            <!-- mice -->
            <section class="container mx-auto py-12">
                <h1 class="text-4xl text-white text-center font-bold mb-8">Mice</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductCard
                        v-for="mouse in mice"
                        :id="mouse.id"
                        :title="mouse.name"
                        :price="mouse.price"
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
import { type Mice } from '../../composables/useFirestoreDB';

const { $auth} = useNuxtApp();
const { user } = useFirebaseAuth();
const { fetchMice } = useFirestoreDB();

const mice = ref<Mice[]>([]);

onMounted( async () => {
    mice.value = await fetchMice();
});

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
    overflow-y: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>