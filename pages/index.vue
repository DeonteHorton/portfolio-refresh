<script setup>


</script>

<template>

    <PageHeader title="Home Page"/>

    <div class="min-h-screen w-full table">
            <div class="table-cell align-middle text-center text-base sm:text-lg md:text-2xl lg:text-5xl px-10">
                <div>Hey, I'm <span class="font-serif font-semibold italic">Deonte Horton</span> but you can call me <span class="font-serif font-semibold italic">Dee</span>. Welcome to my portfolio! I'm a Full Stack Web Developer </div>
                <div class="flex items-center justify-center space-x-3 mt-2">
                    <NuxtLink to="/about"><p-button label="More About Me" class="p-button-info p-button-text" icon="pi pi-arrow-right" /></NuxtLink>
                    <NuxtLink to="/projects"><p-button label="See my Projects" class="p-button-info p-button-text" icon="pi pi-arrow-right" /></NuxtLink>
                </div>
            </div>
    </div>
</template>