<template>
    <section class="page">
        <main class="bg-gradient-to-b from-purple-600 to-bg-slate-950">
            <NavbarMain class="bg-black" />
            <!-- products page fetching from firestore -->

        </main>
    </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { onAuthStateChanged, type Auth } from 'firebase/auth';

const { $auth} = useNuxtApp();
const { user } = useFirebaseAuth();
const { getCollection } = useFirebaseDb();

const router = useRouter();

onBeforeMount(() => {
    onAuthStateChanged($auth as Auth, (firebaseUser) => {
        if(firebaseUser)
        {
            console.log('User is logged in');
            user.value = firebaseUser;
        }
        else {
            console.log('User is not logged in');
            router.push('/login');
        }
    });
});

useSeoMeta({
  title: "Mice",
  description: "Browse our selection of high-end computer mice.",
});

onMounted(() => {
    console.log('Mice page mounted');
    console.log(getCollection('mice'));
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