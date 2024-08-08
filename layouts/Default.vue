<template>
  <div class="flex min-h-svh w-screen flex-col justify-between">
    <!-- Your header content -->
    <NavigationTheHeader />

    <main class="text-center">
      <slot></slot>
    </main>

    <NavigationTheFooter />
  </div>
</template>
