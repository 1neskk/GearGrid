<template>
    <section class="page">
        <main class="bg-gradient-to-b from-purple-600 to-bg-slate-950">
            <NavbarMain class="bg-black" />
            <!-- mice -->
            <ul class="grid grid-cols-1 gap-4 p-4">
                <li v-for="mouse in mice" :key="mouse.id" class="bg-white p-4 rounded shadow">
                    <h2 class="text-xl text-black font-bold">{{ mouse.name }}</h2>
                    <p class="text-gray-500">R${{ mouse.price }}.00</p>
                </li>
            </ul>
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
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>