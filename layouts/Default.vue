<template>
    <div class="min-w-screen min-h-svh flex flex-col justify-between">
      <!-- Your header content -->
      <CommonsGenericPanel class="z-10 place-content-start">
        <AppHeader />
      </CommonsGenericPanel>
  
      <main class="">
        <slot />
      </main>
  
      <CommonsGenericPanel class="z-10 place-content-end">
        <AppFooter />
      </CommonsGenericPanel>
    </div>
  </template>