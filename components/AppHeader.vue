<script lang="ts" setup>
</script>

<template>
  <!-- data-aos="fade-down" -->
  <div>
    <div class="navbar rounded-2xl bg-neutral text-neutral-content">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NuxtLink to="/">
                Startseite
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products">
                Produkte
              </NuxtLink>
              <ul class="p-2">
                <li>
                  <NuxtLink to="/produkte/vortrinken">
                    Vortrinken
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    Produkt 2
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink to="/about">
                Über uns
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/bestellstatus">
                Bestellstatus
              </NuxtLink>
            </li>
          </ul>
        </div>
        <NuxtLink to="/" class="btn btn-ghost text-xl">
          Vortrinken
        </NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NuxtLink to="/">
              Startseite
            </NuxtLink>
          </li>
          <li>
            <details>
              <summary>Produkte</summary>
              <ul class="p-2 bg-neutral">
                <li>
                  <NuxtLink to="/produkte/vortrinken">
                    Vortrinken
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/">
                    Produkt 2
                  </NuxtLink>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <NuxtLink to="/about">
              Über uns
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/bestellstatus">
              Bestellstatus
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <ElementThemeRandomizer />
      </div>
    </div>
  </div>
</template>

<style>
</style>