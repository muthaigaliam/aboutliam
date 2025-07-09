<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, provide } from 'vue'

// Global dark mode state
const isDark = ref(true)
provide('isDark', isDark)
</script>

<template>
  <div :class="isDark ? 'bg-black text-white' : 'bg-white text-gray-900'" class="min-h-screen transition-colors duration-500 font-sans">
    <!-- Navbar -->
    <Navbar />

    <!-- Routed content -->
    <router-view />
  </div>
</template>
