<script setup>


</script>

<template>

    <PageHeader title="Contact Page"/>

    <div class="min-h-screen w-full">
        <div class="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-around mx-auto max-w-7xl pt-10 px-10 lg:pt-15 sm:pt-52 sm:space-y-10">
            <div class="mx-10 flex items-center space-x-2">
                <label class="font-bold text-3xl" for="email">Email: </label>
                <a id="email" href="mailto:dhorton@deonte.dev">dhorton@deonte.dev</a>
            </div>
            <div class="flex items-center  justify-between space-x-5 text-lg">
                <label class="font-bold text-3xl" for="social_links">Social Links</label>
                <div id="social_links" class="flex flex-col items-center">
                    <a class="hover:animate-pulse" href="https://www.linkedin.com/in/deonte-horton-b34aab189/" target="_blank">
                        <p-button label="Linkedin" icon="pi pi-linkedin" iconPos="right" class="p-button-info p-button-text p-button-sm" />
                    </a>
                    <a class="hover:animate-pulse" href="https://github.com/DeonteHorton" target="_blank">
                        <p-button label="GitHub" icon="pi pi-github" iconPos="right" class="p-button-info p-button-text p-button-sm" />
                    </a>
                    <a class="hover:animate-pulse" href="https://twitter.com/Deonte_Horton_" target="_blank">
                        <p-button label="Twitter" icon="pi pi-twitter" iconPos="right" class="p-button-info p-button-text p-button-sm" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>