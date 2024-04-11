<template>
    <div class="page">
        <main class="bg-gradient-to-b from-purple-600 to-bg-slate-950">
            <div class="p-8 text-white text-2xl">Admin</div>
            <!-- Mouse -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                <input v-model="mouse.name" type="text" placeholder="Name" class="p-2 text-black border border-gray-300 
                rounded-lg" />
                <input v-model="mouse.price" type="number" placeholder="Price" class="p-2 text-black border
                border-gray-300 rounded-lg" />
                <input v-model="mouse.img" type="text" placeholder="Image" class="p-2 text-black border
                border-gray-300 rounded-lg" />
                <button @click="submitMouse" class="p-2 bg-purple-600 text-white rounded-lg">Add Mouse</button>
            </div>
            <!-- Keyboard -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                <input v-model="keyboard.name" type="text" placeholder="Name" class="p-2 text-black border border-gray-300 
                rounded-lg" />
                <input v-model="keyboard.price" type="number" placeholder="Price" class="p-2 text-black border
                border-gray-300 rounded-lg" />
                <input v-model="keyboard.img" type="text" placeholder="Image" class="p-2 text-black border
                border-gray-300 rounded-lg" />
                <button @click="submitKeyboard" class="p-2 bg-purple-600 text-white rounded-lg">Add Keyboard</button>
            </div>
            <!-- Mousepads -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                <input v-model="mousepad.name" type="text" placeholder="Name" class="p-2 text-black border border-gray-300 
                rounded-lg" />
                <input v-model="mousepad.price" type="number" placeholder="Price" class="p-2 text-black border
                border-gray-300 rounded-lg" />
                <input v-model="mousepad.img" type="text" placeholder="Image" class="p-2 text-black border
                border-gray-300 rounded-lg" />
                <button @click="submitMousepad" class="p-2 bg-purple-600 text-white rounded-lg">Add Mousepad</button>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onAuthStateChanged, type Auth } from 'firebase/auth';

const { $auth } = useNuxtApp();
const { user } = useFirebaseAuth();
const { addMouse, addKeyboard, addMousepad } = useFirestoreDB();

const router = useRouter();

onBeforeMount(() => {
    onAuthStateChanged($auth as Auth, (firebaseUser) => {
        if(firebaseUser && firebaseUser.email === 'contato.nesk@outlook.com')
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
    price: 0,
    img: ''
});

const keyboard = ref({
    name: '',
    price: 0,
    img: ''
});

const mousepad = ref({
    name: '',
    price: 0,
    img: ''
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

const submitKeyboard = () => {
    addKeyboard(keyboard.value).then(() => {
        useSonner.success('Keyboard added successfully');
        keyboard.value = {
            name: '',
            price: 0
        };
    }).catch((error) => {
            useSonner.error('Error adding keyboard: ' + error.message);
    });
}

const submitMousepad = () => {
    addMousepad(mousepad.value).then(() => {
        useSonner.success('Mousepad added successfully');
        mousepad.value = {
            name: '',
            price: 0
        };
    }).catch((error) => {
            useSonner.error('Error adding mousepad: ' + error.message);
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
