<script setup>
import { inject } from 'vue'
const isDark = inject('isDark') // Get global dark mode state
</script>

<template>
  <nav
    class="flex justify-between items-center px-6 py-4 shadow-md transition-colors duration-300"
    :class="isDark ? 'bg-[#0B0F1C] text-yellow-400' : 'bg-yellow-100 text-gray-900'"
  >
    <!-- Logo / Brand -->
    <div class="text-2xl font-bold" :class="isDark ? 'text-yellow-400' : 'text-yellow-600'">
      Dev Mwangi
    </div>

    <!-- Links + Toggle -->
    <div class="flex items-center gap-6 text-lg font-semibold">
      <router-link to="/" class="hover:text-yellow-400 transition">Home</router-link>
      <router-link to="/about" class="hover:text-yellow-400 transition">About</router-link>
      <router-link to="/projects" class="hover:text-yellow-400 transition">Projects</router-link>
      <router-link to="/contact" class="hover:text-yellow-400 transition">Contact</router-link>

      <!-- 🌗 Toggle Button -->
      <button
        @click="isDark.value = !isDark.value"
        class="text-2xl hover:text-yellow-400 transition"
        title="Toggle Dark/Light Mode"
      >
        <span v-if="isDark.value">🌞</span>
        <span v-else>🌙</span>
      </button>
    </div>
  </nav>
</template>
