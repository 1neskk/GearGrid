<template>
    <div class="page profile">
        <h1>{{ emailInitials }}</h1>
        <ul>
            <li><strong>Email:</strong> {{ user?.email }}</li>
        </ul>
        <button @click="logout" class="logout-button">Logout</button>
    </div>
</template>

<script lang="ts" setup>

const { logout, user } = useFirebaseAuth()
const { $auth } = useNuxtApp();

const emailInitials = ref('');

onMounted(() => {
    if (user.value?.email) { 
        emailInitials.value = user.value.email.substring(0, 4).toUpperCase();
    }
});

watch(user, () => {
    if (user.value?.email) { 
        emailInitials.value = user.value.email.substring(0, 4).toUpperCase();
    }
});


</script>

<style scoped>
.submit-button {
  padding: 10px 105px;
  background-color: indigo;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
.page {
    overflow-y: auto;
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}

.profile {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #000000;
    border-radius: 25px;
}

.logout-button {
    padding: 10px 20px;
    background-color: indigo;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
}

.logout-button:hover {
    background-color: indigo;
}

h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 5px;
}
</style>