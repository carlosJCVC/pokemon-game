<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 p-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <RouterLink class="flex items-center gap-2 font-semibold" to="/">
          <img alt="Home logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
        </RouterLink>
      </div>

      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/"> Dragon Ball Characters </RouterLink>
        <RouterLink to="/"> Pokemon Characters </RouterLink>
      </nav>
    </header>
    <!-- End Header -->

    <!-- Main -->
    <main>
      <RouterView />
    </main>
    <!-- End Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<style scoped></style>
