<template>
    <div class="bg-rarible-100 dark:bg-rarible-900">
        <div class="flex items-center justify-center">
            <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-10">
                <div class="block mr-6 mb-5">
                    <p class="font-bold text-neutral-600 dark:text-white mb-5">Join (NAME) community</p>
                    <div class="flex">
                        <a href="#" class="py-3 px-2 bg-neutral-300 dark:bg-neutral-800 rounded-lg mr-2">
                            <img src="../assets/placeholder.png" alt="" class="w-8 h-8">
                        </a>
                        <a href="#" class="py-3 px-2 bg-neutral-300 dark:bg-neutral-800 rounded-lg mr-2">
                            <img src="../assets/placeholder.png" alt="" class="w-8 h-8">
                        </a>
                        <a href="#" class="py-3 px-2 bg-neutral-300 dark:bg-neutral-800 rounded-lg mr-2">
                            <img src="../assets/placeholder.png" alt="" class="w-8 h-8">
                        </a>
                        <a href="#" class="py-3 px-2 bg-neutral-300 dark:bg-neutral-800 rounded-lg mr-2">
                            <img src="../assets/placeholder.png" alt="" class="w-8 h-8">
                        </a>
                        <a href="#" class="py-3 px-2 bg-neutral-300 dark:bg-neutral-800 rounded-lg mr-2">
                            <img src="../assets/placeholder.png" alt="" class="w-8 h-8">
                        </a>
                        <a href="#" class="py-3 px-2 bg-neutral-300 dark:bg-neutral-800 rounded-lg mr-2">
                            <img src="../assets/placeholder.png" alt="" class="w-8 h-8">
                        </a>
                        <a href="#" class="py-3 px-2 bg-neutral-300 dark:bg-neutral-800 rounded-lg mr-2">
                            <img src="../assets/placeholder.png" alt="" class="w-8 h-8">
                        </a>
                    </div>
                </div>

                <div class="block">
                    <img src="../assets/qr.png" alt="" class="rounded-lg shadow-lg">
                    <p class="font-bold text-neutral-600 dark:text-white py-6">Download the (NAME) app to explore.</p>
                    <button class="bg-black text-white py-2 px-2 rounded-lg shadow-lg
                                    dark:bg-white dark:text-black">Download</button>
                </div>

            </div>
        </div>

        <div class="flex lg:items-center lg:justify-center px-8">
            <div class="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 py-10 gap-x-48">
                <div class="block">
                    <p class="font-bold text-neutral-600 dark:text-white mb-5">Get the latest (NAME) updates</p>
                    <input type="text" placeholder="Subscribe" class="w-full rounded-full px-4 py-2 border-2 border-slate-800 bg-neutral-200
                                    focus:outline-none focus:shadow-lg focus:border-none
                                    dark:bg-gray-800 dark:text-white dark:border-1 dark:border-gray-500">
                </div>
                <div class="block">
                    <p class="font-bold text-neutral-600 dark:text-white mb-5">Community</p>
                    <ul class="list-none">
                        <li class="mb-4">
                            <router-link to="/about" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-neutral-400 dark:text-white">About</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/blog" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-neutral-400 dark:text-white">Blog</router-link>
                        </li>
                    </ul>
                </div>
                <div class="block">
                    <p class="font-bold text-neutral-600 dark:text-white mb-5">Security</p>
                    <ul class="list-none">
                        <li class="mb-4">
                            <router-link to="/privacy-policy" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-neutral-400 dark:text-white">Privacy Policy</router-link>
                        </li>
                        <li class="mb-4">
                            <router-link to="/terms-and-conditions" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-neutral-400 dark:text-white">Terms and conditions</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="flex py-5 px-8">
            <p class="text-xs text-neutral-600 dark:text-white">© (NAME), Inc. All rights reserve</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

