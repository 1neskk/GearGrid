<template>
    <div class="profile">
        <h1>{{ user.name }}</h1>
        <p>{{ user.bio }}</p>
        <ul>
            <li><strong>Email:</strong> {{ user.email }}</li>
            <li><strong>Location:</strong> <input 
                    v-model="user.location" 
                    :class="{'input-error': locationError}" 
                    placeholder="Enter your location" 
                    @blur="validateLocation"
                />
                <span v-if="locationError" class="error-message">Location is required.</span>
            </li>
        </ul>
        <button @click="logout" class="logout-button">Logout</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'John Doe',
                bio: 'I am a software developer.',
                email: 'john.doe@example.com',
                location: ''
            }
        };
    },
    methods: {
        logout() {
            // Implement logout logic here
            // For example, clear user data, redirect to login page, etc.
            console.log("User logged out");
        }
    }
};
</script>

<style scoped>
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