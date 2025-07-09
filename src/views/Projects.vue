<template>
  <div class="min-h-screen py-20 px-4 text-center bg-white dark:bg-black text-gray-800 dark:text-white">
    <h1 class="text-4xl font-bold text-yellow-500 mb-8">My Projects</h1>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        v-for="(project, i) in projects"
        :key="i"
        class="border p-6 rounded-lg shadow-md hover:shadow-lg transition"
        :class="[isDark ? 'bg-[#1E253D] border-yellow-700' : 'bg-white border-yellow-300']"
      >
        <h2 class="text-xl font-semibold text-yellow-400 mb-2">{{ project.title }}</h2>
        <p class="text-sm italic text-gray-400 mb-1">Category: {{ project.category }}</p>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(true)

const projects = [
  { title: 'Bright Investment Platform', category: 'Fintech', description: 'KES-based platform with 2FA and reinvestment.' },
  { title: 'Solar Installation Site', category: 'Business', description: 'Vue site with gallery, WhatsApp button, and animations.' },
  { title: 'Money Exchange Portal', category: 'Finance', description: 'Live currency platform with auto rate updates.' },
  { title: 'Crypto Dashboard', category: 'Crypto', description: 'Admin dashboard with charts and real-time data.' },
  { title: 'Trust Wallet Clone', category: 'Crypto', description: 'Vue clone with wallet integration and token display.' },
]
</script>
