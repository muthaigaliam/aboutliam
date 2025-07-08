<template>
  <div :class="isDark ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-white text-gray-800'" class="transition-colors duration-500 min-h-screen font-sans">
    <!-- Navbar -->
    <div class="flex justify-between px-6 py-4 items-center">
      <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Samuel Mwangi</h1>
      <button @click="isDark = !isDark" class="text-xl">
        <span v-if="isDark">🌞</span>
        <span v-else>🌙</span>
      </button>
    </div>

    <!-- Hero -->
    <section class="flex flex-col justify-center items-center text-center min-h-[60vh] px-4 animate-fade-in">
      <h2 class="text-5xl font-extrabold rainbow-text animate-typing">Hi, I’m Samuel Mwangi</h2>
      <p class="text-2xl mt-4 font-medium">Professional Full Stack Developer</p>
      <p class="mt-6 max-w-2xl text-lg opacity-80">
        I build secure, scalable, and smart web applications. Passionate about transforming ideas into elegant code with a modern touch.
      </p>
    </section>

    <!-- About -->
    <section class="py-20 px-6 max-w-4xl mx-auto animate-fade-in">
      <h3 class="text-3xl font-bold mb-4 border-b-4 border-blue-500 w-max">About Me</h3>
      <div class="backdrop-blur-xl p-6 rounded-xl bg-white/30 dark:bg-white/10 shadow-lg">
        <p class="text-lg leading-8">
          I’m <strong>Samuel Mwangi</strong>, a results-driven full-stack developer with expertise in modern frontend frameworks like Vue.js and React, as well as backend platforms like Node.js, Laravel, and Django.
          I have years of experience designing and building real-world web applications with strong focus on security, user experience, and speed.
          I believe in clean code, continuous learning, and delivering professional-grade work. Let’s build something powerful together.
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section class="py-20 bg-blue-100 dark:bg-gray-800 px-6 animate-fade-in">
      <h3 class="text-3xl font-bold mb-6 text-center">Tech Stack</h3>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        <img v-for="logo in techLogos" :key="logo" :src="logo" class="h-12 hover:scale-110 transition-transform" />
      </div>
    </section>

    <!-- Projects -->
    <section class="py-20 px-6 max-w-6xl mx-auto animate-fade-in">
      <h3 class="text-3xl font-bold mb-8 border-b-4 border-blue-500 w-max">Projects</h3>
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(project, i) in projects" :key="i" class="bg-white/30 dark:bg-white/10 rounded-xl p-6 shadow-xl backdrop-blur-xl hover:scale-[1.02] transition-transform">
          <h4 class="text-xl font-semibold mb-2">{{ project.title }}</h4>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-20 px-6 text-center bg-blue-100 dark:bg-gray-800 animate-fade-in">
      <h3 class="text-3xl font-bold mb-6">Get In Touch</h3>
      <p class="text-lg mb-2">📧 <a href="mailto:samuelngari93@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">samuelngari93@gmail.com</a></p>
      <p class="text-lg mb-2">📞 <a href="tel:+254752341183" class="text-blue-600 dark:text-blue-400 hover:underline">+254 752 341183</a></p>
      <p class="text-lg mb-2">💬 <a href="https://wa.me/254752341183" target="_blank" class="text-green-600 hover:underline">WhatsApp Me</a></p>
    </section>

    <!-- Footer -->
    <footer class="py-6 text-center text-sm bg-gray-200 dark:bg-gray-900">
      <p>© {{ new Date().getFullYear() }} Samuel Mwangi — Built with Vue 💚</p>
    </footer>

    <!-- Floating WhatsApp Button -->
    <a
      href="https://wa.me/254752341183"
      target="_blank"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
    >
      💬
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const techLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
]

const projects = [
  {
    title: "Bright Investment Platform",
    description: "A smart investment platform built with Django and Vue.js, offering real-time profits, 2FA security, and automated profit reinvestment.",
  },
  {
    title: "Solar Installation Website",
    description: "A modern responsive website for a solar company with project gallery, animations, WhatsApp support, and dark mode.",
  },
]
</script>

<style scoped>
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-typing {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid currentColor;
  animation: typing 2.5s steps(30, end), blink 0.75s step-end infinite;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out both;
}

.rainbow-text {
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
