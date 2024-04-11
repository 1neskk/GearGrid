<template>
    <div class="page">
        <main class="bg-gradient-to-b from-purple-600 to-bg-slate-950">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                <input v-model="mouse.name" type="text" placeholder="Name" class="p-2 text-black border border-gray-300 
                rounded-lg" />
                <input v-model="mouse.price" type="number" placeholder="Price" class="p-2 text-black border
                border-gray-300 rounded-lg" />
                <button @click="submitMouse" class="p-2 bg-purple-600 text-white rounded-lg">Add Mouse</button>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onAuthStateChanged, type Auth } from 'firebase/auth';

const { $auth } = useNuxtApp();
const { user } = useFirebaseAuth();
const { addMouse } = useFirestoreDB();

const router = useRouter();

onBeforeMount(() => {
    onAuthStateChanged($auth as Auth, (firebaseUser) => {
        if(firebaseUser.email === 'contato.nesk@outlook.com')
        {
            user.value = firebaseUser;
            useSonner.info('User is logged in as ' + firebaseUser.email);
        }
        else {
            router.push('/login');
        }
    });
});

const mouse = ref({
    name: '',
    price: 0
});

const submitMouse = () => {
    addMouse(mouse.value).then(() => {
        useSonner.success('Mouse added successfully');
        mouse.value = {
            name: '',
            price: 0
        };
        }).catch((error) => {
            useSonner.error('Error adding mouse: ' + error.message);
        });
}
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
