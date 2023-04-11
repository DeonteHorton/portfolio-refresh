<script setup>
const props = defineProps({
    title: '',
})
</script>

<template>
    <div>
        <div class="bg-gradient-to-r from-gray-800 to-gray-900 w-full text-gray-300 mx-auto h-12 flex items-center pl-12 font-medium text-lg capitalize">
            {{ props.title }}
        </div>
    </div>
</template>