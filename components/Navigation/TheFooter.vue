<template>
  <footer class="footer items-center bg-neutral p-4 text-neutral-content">
    <aside class="grid-flow-col items-center">
      <Icon name="mdi:laptop" class="text-2xl" />
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a>
        <NuxtLink to="https://github.com/floo-one" target="_blank">
          <Icon name="mdi:github" class="text-2xl" />
        </NuxtLink>
      </a>
      <a>
        <NuxtLink to="https://instagram.com/floo.one" target="_blank">
          <Icon name="mdi:instagram" class="text-2xl" />
        </NuxtLink>
      </a>
      <a>
        <NuxtLink to="https://floo.one" target="_blank">
          <Icon name="material-symbols:globe" class="text-2xl" />
        </NuxtLink>
      </a>
    </nav>
  </footer>
</template>
