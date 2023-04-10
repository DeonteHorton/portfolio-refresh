<script setup>
    const test = ref('hello there world wide!! how are you?');
    const navLinks = ref([
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About' },
        { href: '/contact', text: 'Contact' },
    ]);

    const route = useRoute();
</script>

<template>
  <div class="min-h-full">
    <nav class="bg-gray-900">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <NuxtLink v-for="link in navLinks" :class="[link.href == route.path ? 'bg-gray-600 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium', 'transition ease-in-out hover:-translate-y-1 hover:scale-120']" :to="link.href">{{ link.text }}</NuxtLink>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center space-x-3 md:ml-6">
                <a target="_blank" href="https://github.com/DeonteHorton"><i class="pi pi-github text-blue-400 transition ease-in-out hover:-translate-y-1 hover:scale-120" style="font-size: 1.3rem;" ></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/deonte-horton-b34aab189/"><i class="pi pi-linkedin text-blue-400 transition ease-in-out hover:-translate-y-1 hover:scale-120" style="font-size: 1.3rem;" ></i></a>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button type="button" class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <NuxtLink v-for="link in navLinks" :class="[link.href == route.path ? 'bg-gray-600 text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium']" :to="link.href">{{ link.text }}</NuxtLink>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center space-x-5 px-5">
                <a target="_blank" href="https://github.com/DeonteHorton"><i class="pi pi-github text-blue-400" style="font-size: 1.5rem;" ></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/deonte-horton-b34aab189/"><i class="pi pi-linkedin text-blue-400" style="font-size: 1.5rem;" ></i></a>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <!-- <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"> -->
       <slot />
      <!-- </div> -->
    </main>
  </div>

  </template>