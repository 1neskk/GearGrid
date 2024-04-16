<template>
    <nav class="navbar bg-black-500 border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="transform transition-transform duration-200 hover:scale-110
            text-white font-medium text-xl" href="/">GearGrid</a>
            
            <div class="flex md:order-2">
            </div>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50
            md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                <li>
                <a href="/mice" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:underline
                underline-offset-4 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700" aria-current="page">Mice</a>
                </li>
                <li>
                <a href="/keyboards" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:underline 
                nderline-offset-4 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700">Keyboards</a>
                </li>
                <li>
                <a href="/mousepads" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:underline 
                nderline-offset-4 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700">Mousepads</a>
                </li>
            </ul>
            </div>

        </div>
    </nav>
</template>

<style lang="css">
.navbar {
    font-weight: 300;
    font-family: "Roboto", sans-serif;
}
</style>
