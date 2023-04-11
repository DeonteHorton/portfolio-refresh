<script setup>


</script>

<style>

#about{
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
}

</style>

<template>

    <PageHeader title="About Page"/>

    <div id="about" class="mx-auto">
        hello world
    </div>
</template>