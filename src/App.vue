<!-- ✅ FILE: src/App.vue -->
<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, provide } from 'vue'

// 🌗 Global dark mode state
const isDark = ref(true)
provide('isDark', isDark)
</script>

<template>
  <div :class="isDark ? 'bg-black text-white' : 'bg-white text-gray-900'" class="min-h-screen font-sans transition-colors duration-500">
    <!-- ✅ Navbar -->
    <Navbar />

    <!-- ✅ Routed pages will appear here -->
    <router-view />
  </div>
</template>
