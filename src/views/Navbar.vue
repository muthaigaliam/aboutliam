<script setup>
import { inject } from 'vue'
const isDark = inject('isDark')
</script>

<template>
  <header
    :class="isDark ? 'bg-[#0B0F1C] text-yellow-400' : 'bg-yellow-100 text-gray-900'"
    class="flex justify-between items-center px-6 py-4 shadow-md transition duration-500"
  >
    <!-- Title -->
    <h1 :class="isDark ? 'text-yellow-400' : 'text-yellow-600'" class="text-2xl font-bold">
      Samuel Mwangi
    </h1>

    <!-- Toggle Button -->
    <button
      @click="isDark.value = !isDark.value"
      class="text-2xl hover:text-yellow-400 transition duration-300"
      title="Toggle Theme"
    >
      <span v-if="isDark.value">🌞</span>
      <span v-else>🌙</span>
    </button>
  </header>
</template>
