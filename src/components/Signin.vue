<template>
    <div class="bg-white dark:bg-rarible-900 py-28">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-neutral-100 dark:bg-neutral-900 px-6 py-8 rounded shadow-lg text-black w-full">
                    <h1 class="mb-8 text-4xl text-center dark:text-white">Sign in</h1>
                    <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                        <input v-model="form.email"
                                type="email" required name="email"
                                class="block border border-grey-light w-full p-3 rounded mb-4
                                        focus:outline-none focus:shadow-lg focus:border-none
                                        dark:bg-gray-800 dark:text-white dark:border-1 dark:border-gray-500"
                                placeholder="Email" />
                        <div v-if="form.errors.has('email')" v-html="form.errors.get('email')" />

                        <a href="" class="text-xs text-right text-neutral-500 hover:text-neutral-900
                                            dark:text-white dark:hover:text-neutral-500">Forget Password ?</a>
                        <input v-model="form.password"
                                type="password" required name="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4
                                        focus:outline-none focus:shadow-lg focus:border-none
                                        dark:bg-gray-800 dark:text-white dark:border-1 dark:border-gray-500"
                                placeholder="Password" />
                        <div v-if="form.errors.has('password')" v-html="form.errors.get('password')" />

                        <button :disabled="form.busy"
                                type="submit"
                                :class="[ loader ? 'flex w-full bg-blue-400 text-center py-3\n'+
'                                rounded bg-green text-white hover:bg-blue-500 focus:outline-none\n'+
'                                my-1' : 'w-full bg-blue-400 text-center py-3\n'+
'                                rounded bg-green text-white hover:bg-blue-500 focus:outline-none\n'+
'                                my-1' ]">
                            <div v-show="loader">
                                <div style="border-top-color:transparent"
                                     class="w-6 h-6 ml-24 mr-2 border-4 border-white
                                     border-solid rounded-full animate-spin"></div>
                            </div>
                            {{ loader == false ? 'Sign In' : 'Processing...' }}
                        </button>
                    </form>
                </div>

                <div class="text-black mt-6 dark:text-white">
                    Do not have an account?
                    <router-link class="no-underline border-b border-blue text-blue" to="/sign-up">
                        Sign up
                    </router-link>.
                </div>
        </div>
    </div>
</template>

<script>
    import Form from 'vform'

    export default {
        name: 'Signin',
        data () {
            return {
                loader:false,
                form: new Form({
                    email:'',
                    password:''
                })
            }
        },
        methods: {
            async login(){
                this.loader = true
                setTimeout( () => {
                    this.loader = false
                }, 5000)
            }
        }
    }
</script>
