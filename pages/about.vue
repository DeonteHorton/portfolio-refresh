<script setup>

const skills = [
    'Git',
    'Laravel',
    'PHP',
    'Vue',
    'JavaScript',
    'Tailwind CSS',
    'CSS',
    'HTML',
    'MariaDB',
    'MySQL',
    'Linux',
    'Ubuntu',
    'Docker',
    'React',
    'Node.js',
    'TypeScript',
    'Vultr',
    'Digital Ocean',
]

const recentSkills = [
    'Git',
    'Laravel',
    'PHP',
    'Vue 2/3',
    'JavaScript',
    'Tailwind CSS',
    'MariaDB',
    'MySQL',
    'Linux',
    'Ubuntu',
    'Docker',
    'Vultr',
    'Inertia',
]

</script>

<style>

/* #about{
    animation: slide-in 6s;
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

    <PageHeader title="About Page"/>

    <div id="about" class="min-h-screen w-full space-y-10">
        <div class="text-3xl flex flex-col items-center justify-around">
            <div class="text-center">Hello There 🙋🏾‍♂️</div>
            <div class="bg-black h-[2px] w-1/2  justify-end"></div>
        </div>
        <div class="mx-auto flex-col sm:flex-row md:flex-row lg:flex-row max-w-7xl flex items-center justify-around pt-10 space-y-5">
            <div class="flex items-center max-w-2xl text-lg font-medium px-10 md:px-2 lg:px-2">Hey, I'm Deonte Horton and I'm from Mississippi. I'm a Full Stack Web Developer that prefers either front-end or back-end but I do enjoy doing more backend work. I love playing video games, soccer, basketball, hanging out with my friends, and driving my car. I'm always curious to learn more about new technologies and creative coding. </div>
            <div class="flex flex-col items-center justify-between mx-auto space-y-3 px-10  md:px-2 lg:px-2">
                <div class="mb-2 font-bold text-lg italic">Technologies I worked with recently</div>
                <div class="flex-wrap space-x-2 space-y-2">
                    <p-chip v-for="skill in recentSkills" :label="skill" />
                </div>
            </div>
        </div>
        <div class="mx-auto flex-col sm:flex-row md:flex-row lg:flex-row max-w-7xl flex items-center justify-start pt-10 space-y-5">
            <div class="flex flex-col items-center w-full px-10 md:px-2 lg:px-2">
                <div class="mb-2 font-bold text-lg italic">Technologies I worked with overall</div>
                <div class="flex-wrap space-x-2 space-y-2">
                    <p-chip v-for="skill in skills" :label="skill" />
                </div>
            </div>
            <div class="flex flex-col items-center w-full px-4 md:px-2 lg:px-2">
            <a target="_blank" href="https://docs.google.com/document/d/1XP-EEvDjPHG2MC3-bG_GacJ_sJly3zJmokDOf1ItX8w/export?format=pdf">
                <div class="mb-2 font-bold text-lg italic">My Resume <i class="pi pi-download"></i></div>
            </a>
                <!-- <div class="mb-2 font-bold text-lg italic">My Resume</div> -->
                <iframe width="100%" height="500px" src="https://docs.google.com/document/d/e/2PACX-1vSkRraxFQ-0C-mSGpOTxdkFvIsX8iEknzeZGSoi5Ui7Jo_2VMIPqn2azN94bNYGaT4mWYyCgV6hfgnR/pub?embedded=true"></iframe>
            </div>
        </div>
    </div>
</template>