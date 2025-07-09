<template>
  <header
    class="w-full fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md"
  >
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo / Site Name -->
      <router-link to="/" class="text-2xl font-bold tracking-wide">
        🌐 DEV MWANGI
      </router-link>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center gap-6">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>

        <div class="flex gap-2">
          <router-link
            to="/signup"
            class="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
          >
            Sign Up
          </router-link>
          <router-link
            to="/login"
            class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Login
          </router-link>
        </div>
      </nav>

      <!-- Mobile Hamburger -->
      <button @click="menuOpen = !menuOpen" class="md:hidden text-2xl focus:outline-none">
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="menuOpen"
      class="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 space-y-4 transition-all duration-300"
    >
      <router-link to="/" class="block nav-link" @click="menuOpen = false">Home</router-link>
      <router-link to="/about" class="block nav-link" @click="menuOpen = false">About</router-link>

      <router-link
        to="/signup"
        class="block w-full text-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
        @click="menuOpen = false"
      >
        Sign Up
      </router-link>
      <router-link
        to="/login"
        class="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
        @click="menuOpen = false"
      >
        Login
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply text-sm font-medium hover:underline transition;
}
</style>
