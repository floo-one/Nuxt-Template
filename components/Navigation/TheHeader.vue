<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <NuxtLink to="/">
        <a class="btn btn-ghost text-xl">FLOO.ONE Nuxt Template</a>
      </NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <NuxtLink to="/gsap">
          <li><a>GSAP</a></li>
        </NuxtLink>
        <NuxtLink to="/vuemotion">
          <li><a>VUEMOTION</a></li>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>
