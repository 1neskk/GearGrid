<template>
    <nav class="navbar bg-black-500 border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="text-white font-medium text-xl" href="/">GearGrid</a>
        <div class="flex md:order-2">
            <div class="relative hidden md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900
            border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500
            dark:focus:border-blue-500" placeholder="Search...">
            </div>
        </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50
            md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
                <li>
                <a href="/mice" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 md:dark:hover:underline
                underline-offset-4 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700" aria-current="page">Mice</a>
                </li>
                <li>
                <a href="/keyboards" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 md:dark:hover:underline 
                nderline-offset-4 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                dark:border-gray-700">Keyboards</a>
                </li>
                <li>
                <a href="/404" class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent
                md:hover:text-blue-700 md:p-0 md:dark:hover:text-violet-500 md:dark:hover:underline 
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
