<template>
  <div class="min-h-screen py-16 px-4 text-center font-sans" :class="isDark ? 'bg-black text-white' : 'bg-white text-gray-800'">
    <h1 class="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 animate-typing">About Dev Mwangi</h1>

    <p class="max-w-3xl mx-auto text-lg leading-7 mb-8" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      I'm <strong>Samuel Mwangi</strong>, a passionate and results-driven <span class="text-yellow-500 font-semibold">Software Engineer</span> based in Kenya.
      I specialize in building modern, secure, and scalable web applications using technologies like Vue.js, React, Node.js, Laravel, and Django.
    </p>

    <p class="max-w-3xl mx-auto text-lg leading-7 mb-8" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      With years of experience, I’ve developed platforms in <span class="text-yellow-500 font-medium">fintech</span>, <span class="text-yellow-500 font-medium">e-commerce</span>, <span class="text-yellow-500 font-medium">AI</span>, and more.
      My mission is to turn ideas into powerful digital solutions that solve real-world problems and provide seamless user experiences.
    </p>

    <p class="max-w-3xl mx-auto text-lg leading-7 mb-8" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
      Whether you're a startup looking for your MVP, a business in need of a custom dashboard, or a founder looking for a trusted tech partner — I'm here to help.
    </p>

    <router-link
      to="/projects"
      class="mt-4 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
    >
      View My Projects
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isDark = ref(true)
</script>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.animate-typing {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: typing 2.5s steps(30, end) forwards;
}
</style>
