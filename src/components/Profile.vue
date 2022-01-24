<template>
    <div class="flex items-center justify-center py-4 px-8">
        <div class="bg-neutral-100 dark:bg-neutral-900 w-full h-96 rounded-lg
                    shadow-xl hover:bg-neutral-200 dark:hover:bg-neutral-800 group">

            <div class="relative opacity-50 group-hover:opacity-100">
               <button class="absolute top-80 right-10 bg-white dark:bg-rarible-900
                    hover:bg-gray-100 text-black dark:text-white font-semibold dark:hover:bg-gray-800
                    py-3 px-4 rounded-full shadow-lg">
                   Add cover
               </button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Profile',
        data: () => {
            return {
                hover:false
            }
        },
    }
</script>

