<script setup>
const props = defineProps({
    title: '',
})
</script>

<template>
    <div>
        <div class="mx-auto bg-gradient-to-r from-gray-800 to-gray-900 w-full text-gray-300 h-12 flex items-center justify-center font-medium text-lg capitalize">
            {{ props.title }}
        </div>
    </div>
</template>