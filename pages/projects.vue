<script setup>

const items = ref([
    // { title: 'title 1', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/laravel-openAI', projectLink: 'https://openai-app.deonte.dev/login' },
    { title: 'Open AI App', img: '/img/keyboard-redo.jpg', codeLink: 'http://localhost', projectLink: 'http://localhost:3000' },
    { title: 'Canvas Particles', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.particles', projectLink: 'https://deontehorton.github.io/Deonte-Horton.particles/index.html' },
    { title: 'Adventure Game', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.dungeon.rpg', projectLink: 'https://deontehorton.github.io/Deonte-Horton.Adventure.Game/dist/index.html' },
    { title: 'Bootstrap project', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.Bloom.project', projectLink: 'https://deontehorton.github.io/Deonte-Horton.Bloom.project/' },
    { title: '960 project', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.detroix.project', projectLink: 'https://deontehorton.github.io/Deonte-Horton.detroix.project/' },
    { title: '960 project', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.airbox.project', projectLink: 'https://deontehorton.github.io/Deonte-Horton.airbox.project/' },
    { title: 'Playground area', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.pacman.playground', projectLink: 'https://deontehorton.github.io/Deonte-Horton.pacman.playground/' },
    { title: 'Bootstrap project', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.g-umbrella', projectLink: 'https://deontehorton.github.io/Deonte-Horton.g-umbrella/' },
    { title: 'Simple Calculator', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.Simple.Calc', projectLink: 'https://deontehorton.github.io/Deonte-Horton.Simple.Calc/' },
    { title: 'Age Tester', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.Age.Tester', projectLink: 'https://deontehorton.github.io/Deonte-Horton.Age.Tester/' },
    { title: 'Password Validation', img: '/img/keyboard-redo.jpg', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.password.validation', projectLink: 'https://deontehorton.github.io/Deonte-Horton.password.validation/' },
])

const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
    }
]);

</script>

<style>

/* #about{
    animation: slide-in 1s;
    animation-delay: 0.4s;
    margin-left: 0%;
    width: 100%;
}
@keyframes slide-in{
    0%{margin-left:-200%;
        opacity: 0.25;
    }
    50%{opacity: 0.75;}
    100%{margin-left:0%;
        opacity: 1;
    }
} */

</style>

<template>

    <PageHeader title="Projects Page"/>

    <div class="min-h-screen w-full">
        <div class="mx-auto w-full max-w-7xl md:mt-28 lg:mt-32 px-10 space-y-10">
            <p-carousel class=" z-0" :value="items" :numVisible="3" circular :autoplayInterval="3000" :responsiveOptions="responsiveOptions">
                <template #item="{ data, index}">
                    <div class="bg-white border-1 surface-border border-round m-2 text-center py-5 px-3 rounded-md flex flex-col space-y-5">
                        <p-image :src="data.img" :alt="`${data.title} Image`" preview/>
                        <div class="font-semibold text-2xl italic">{{ data.title }}</div>
                        <div class="flex items-center justify-around space-x-3">
                            <a target="_blank" :href="data.codeLink">
                                <p-button label="Code Link" icon="pi pi-github" iconPos="right" rounded class="p-button-info p-button-sm" />
                            </a>
                            <a target="_blank" :href="data.projectLink">
                                <p-button label="Project Link" icon="pi pi-external-link" iconPos="right" rounded class="p-button-info p-button-sm" />
                            </a>
                        </div>
                    </div>
                </template>
            </p-carousel>
        </div>
    </div>
</template>