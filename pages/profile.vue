<template>
    <section class="page bg-gradient-to-r from-indigo-950 to-slate-950">
        <main> 
		<NavbarProducts />
 		    <div class="container mx-auto h-full">
                <h1 class="py-5 text-2xl font-bold mb-4">Profile</h1>
                <div class="bg-white p-4 rounded-lg">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <!-- uiavatar -->
			    <UiAvatar :fallback="emailInitials" />
                            <div class="ml-4">
                                <h2 class="text-black text-lg font-bold">Email: {{ user?.email }}</h2>
                                <p class="text-gray-500">Member since {{ user?.metadata.creationTime }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 	</main>
    </section>
</template>

<script lang="ts" setup>

const { logout, user } = useFirebaseAuth()
const { $auth } = useNuxtApp();

const emailInitials = ref('');

onMounted(() => {
    if (user.value?.email) { 
        emailInitials.value = user.value.email.substring(0, 2).toUpperCase();
    }
});

watch(user, () => {
    if (user.value?.email) { 
        emailInitials.value = user.value.email.substring(0, 2).toUpperCase();
    }
});


</script>

<style lang="scss" scoped>
.page {
    overflow-y: auto;
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>
