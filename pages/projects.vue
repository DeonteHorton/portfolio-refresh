<script setup>

const items = ref([
    { title: 'Portfolio Refresh', img: '/img/portfolio-refresh.png', codeLink: 'https://github.com/DeonteHorton/portfolio-refresh', projectLink: 'https://deonte,dev', tech: ['Nuxt 3', 'JavaScript', 'Vue', 'PrimeVue', 'TailwindCSS'] },
    { title: 'Open AI Laravel App', img: '/img/ai-app.png', codeLink: 'https://github.com/DeonteHorton/laravel-openAI', projectLink: 'https://openai-app.deonte.dev/login', tech: ['Laravel', 'Vue', 'JavaScript', 'PHP', 'InertiaJS', 'Jet Stream', 'TailwindCSS', 'OpenAI', 'PrimeVue', 'MariaDB' ] },
    { title: 'Destiny 2 Clan Sign Website', img: '/img/destiny2.png', codeLink: 'https://github.com/DeonteHorton/Final-Project', projectLink: 'https://destiny2.deonte.dev', tech: ['ReactJS', 'Nodejs', 'Nodejs Express', 'CSS', 'JavaScript', 'SocketIO', 'MySQL'] },
    { title: 'Canvas Particles', img: '/img/canvas.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.particles', projectLink: 'https://deontehorton.github.io/Deonte-Horton.particles/index.html', tech: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Adventure Game', img: '/img/rpg.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.dungeon.rpg', projectLink: 'https://deontehorton.github.io/Deonte-Horton.Adventure.Game/dist/index.html', tech: ['HTML', 'CSS', 'TypeScript', 'Phaser'] },
    { title: 'Simple Calculator', img: '/img/calc.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.Simple.Calc', projectLink: 'https://deontehorton.github.io/Deonte-Horton.Simple.Calc/', tech: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Age Tester', img: '/img/age (2).png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.Age.Tester', projectLink: 'https://deontehorton.github.io/Deonte-Horton.Age.Tester/', tech: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Password Validation', img: '/img/password.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.password.validation', projectLink: 'https://deontehorton.github.io/Deonte-Horton.password.validation/', tech: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Old Portfolio Site', img: '/img/portfolio-old.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.github.io', projectLink: 'https://portfolio.deonte.dev/', tech: ['HTML', 'CSS']},
    { title: 'Bootstrap project', img: '/img/bloom.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.Bloom.project', projectLink: 'https://deontehorton.github.io/Deonte-Horton.Bloom.project/', tech: ['HTML', 'CSS'] },
    { title: '960 project', img: '/img/detroix1.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.detroix.project', projectLink: 'https://deontehorton.github.io/Deonte-Horton.detroix.project/', tech: ['HTML', 'CSS'] },
    { title: '960 project', img: '/img/airbox1.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.airbox.project', projectLink: 'https://deontehorton.github.io/Deonte-Horton.airbox.project/', tech: ['HTML', 'CSS'] },
    { title: 'Playground area', img: '/img/pac.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.pacman.playground', projectLink: 'https://deontehorton.github.io/Deonte-Horton.pacman.playground/', tech: ['HTML', 'CSS', 'JavaScript'] },
    { title: 'Bootstrap project', img: '/img/umbrella.png', codeLink: 'https://github.com/DeonteHorton/Deonte-Horton.g-umbrella', projectLink: 'https://deontehorton.github.io/Deonte-Horton.g-umbrella/', tech: ['HTML', 'CSS'] },
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
            <div class="text-3xl flex flex-col items-center justify-around">
                <div class="border-b-2 border-black">Projects <span class="oldstyle-nums slashed-zero tabular-nums">{{ items.length }}</span></div>
            </div>
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
                        <div>
                            <div class="font-semibold text-lg italic">Technologies Used</div>
                            <div class="flex flex-wrap justify-center items-center space-x-1 space-y-1">
                                <p-chip v-for="tech in data.tech" :label="tech" />
                            </div>
                        </div>
                    </div>
                </template>
            </p-carousel>
        </div>
    </div>
</template>