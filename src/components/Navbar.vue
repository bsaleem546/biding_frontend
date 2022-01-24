<template>
    <nav class="bg-white dark:bg-rarible-900">
        <div class="px-8 py-3 mx-auto">
            <div class="flex justify-between">
                <div class="flex items-center">
                    <div>
                        <router-link to="/">
                            <img src="../assets/logo.png" alt="" class="h-12 w-12">
                        </router-link>
                    </div>
                    <span class="text-2xl font-bold uppercase text-black dark:text-white">Heading</span>
                </div>

                <div class="hidden lg:flex items-center p-2">
                    <form action="" class="w-full max-w-md">
                        <div class="relative flex items-center text-gray-400
                                    focus-within:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 class="h-5 w-5 absolute ml-3 pointer-events-none"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type="text" placeholder="Search"
                                   class="rounded-full pr-3 pl-10 py-2 border-2 border-slate-800 w-96 bg-gray-100
                                    focus:outline-none focus:shadow-lg focus:border-none
                                    dark:bg-gray-800 dark:text-white dark:border-1 dark:border-gray-500">
                        </div>
                    </form>

                </div>

                <div class="hidden lg:flex items-center">
                    <a href="#" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-white">Explore</a>
                    <router-link to="/my-profile" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-white">My profile</router-link>
                    <a href="#" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-white">Following</a>
                    <a href="#" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-white">Activity</a>
                    <a href="#" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-white">How it works</a>
                    <a href="#" class="text-base font-semibold text-neutral-500 px-5 hover:text-neutral-600
                                    dark:hover:text-white">Community</a>


                    <button class="bg-gradient-to-r from-green-400 to-blue-500
                                px-5 py-3 rounded-full text-white font-bold shadow-lg mr-2 ml-2
                                hover:from-pink-500 hover:to-yellow-500 dark:shadow-white">
                        Create
                    </button>

                    <router-link to="/sign-in" class="px-5 py-3 rounded-full text-gray-500 font-bold mr-2 ml-2 border shadow-md
                                        dark:border-1 dark:border-gray-500">
                        Sign In
                    </router-link>

                    <button v-show="!DARKMOOD" class="bg-blue-900 px-2 py-2 rounded-full ml-2 shadow-lg
                                                        hover:bg-blue-700" @click="darkModeSwitch()">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </button>
                    <button v-show="DARKMOOD" class="bg-white px-2 py-2 rounded-full ml-2 shadow-lg
                                                        hover:bg-white" @click="darkModeSwitch()">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </div>

                <div class="lg:hidden flex items-center">
                    <button v-show="!MENUICON" @click="showMenu()"
                            class="bg-gray-300 px-2 py-2 rounded-full ml-2 shadow-lg hover:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button v-show="MENUICON" @click="showMenu()"
                            class="bg-gray-300 px-2 py-2 rounded-full ml-2 shadow-lg hover:bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button v-show="!DARKMOOD" class="bg-blue-900 px-2 py-2 rounded-full ml-2 shadow-lg
                                                        hover:bg-blue-700" @click="darkModeSwitch()">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </button>
                    <button v-show="DARKMOOD" class="bg-white px-2 py-2 rounded-full ml-2 shadow-lg
                                                        hover:bg-white" @click="darkModeSwitch()">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div v-show="MENUDIV">
            <a href="#" class="block text-sm font-semibold text-neutral-500 px-8 py-2 hover:text-neutral-600
                            dark:hover:text-white">Explore</a>
            <a href="#" class="block text-sm font-semibold text-neutral-500 px-8 py-2 hover:text-neutral-600
                            dark:hover:text-white">My profile</a>
            <a href="#" class="block text-sm font-semibold text-neutral-500 px-8 py-2 hover:text-neutral-600
                            dark:hover:text-white">Following</a>
            <a href="#" class="block text-sm font-semibold text-neutral-500 px-8 py-2 hover:text-neutral-600
                            dark:hover:text-white">Activity</a>
            <a href="#" class="block text-sm font-semibold text-neutral-500 px-8 py-2 hover:text-neutral-600
                            dark:hover:text-white">How it works</a>
            <a href="#" class="block text-sm font-semibold text-neutral-500 px-8 py-2 hover:text-neutral-600
                            dark:hover:text-white">Community</a>

            <div class="flex items-center px-6 mt-5">
                <button class="bg-gradient-to-r from-green-400 to-blue-500
                                px-5 py-3 rounded-full text-white font-bold shadow-lg mr-2 ml-2
                                hover:from-pink-500 hover:to-yellow-500">
                    Create
                </button>

                <router-link to="/sign-in" class="px-5 py-3 rounded-full text-gray-500 font-bold mr-2 ml-2 border shadow-md
                                        dark:border-1 dark:border-gray-500">
                    Sign In
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data () {
            return {
                MENUICON:false,
                MENUDIV:false,
                DARKMOOD:false
            }
        },
        methods:{
            showMenu(){
                this.MENUICON = this.MENUICON == false ?? true
                this.MENUDIV = this.MENUDIV == false ?? true
            },

            darkModeSwitch(){
                this.DARKMOOD = this.DARKMOOD == false ?? true
                if (this.DARKMOOD){
                    document.querySelector('html').classList.add('dark')
                } else {
                    document.querySelector('html').classList.remove('dark')
                }
            }
        }
    }
</script>
