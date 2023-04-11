<script setup>
const props = defineProps({
    title: '',
})
</script>

<template>
    <div>
        <div class="bg-white w-full mx-auto h-12 flex items-center pl-12 font-semibold text-lg capitalize">
            {{ props.title }}
        </div>
    </div>
</template>