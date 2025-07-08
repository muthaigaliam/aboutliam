<template>
  <div
    :class="[isDark ? 'bg-black text-white' : 'bg-white text-gray-800']"
    class="font-sans transition-colors duration-500 min-h-screen"
    ref="container"
  >
    <!-- Navbar -->
    <header :class="[isDark ? 'bg-[#0B0F1C]' : 'bg-yellow-100']" class="flex justify-between items-center px-6 py-4 shadow-md">
      <h1 :class="[isDark ? 'text-yellow-400' : 'text-yellow-600']" class="text-2xl font-bold">Samuel Mwangi</h1>
      <button @click="isDark = !isDark" class="text-xl hover:text-yellow-400 transition">
        <span v-if="isDark">🌞</span>
        <span v-else>🌙</span>
      </button>
    </header>

    <!-- Hero -->
    <section :class="[isDark ? 'bg-[#0B0F1C]' : 'bg-yellow-50']" class="text-center py-20 px-4">
      <h2 class="text-4xl md:text-5xl font-extrabold animate-typing inline-block">
        Hi, I'm Samuel Mwangi
      </h2>
      <p class="text-2xl mt-4" :class="isDark ? 'text-gray-300' : 'text-gray-800'">Professional Full Stack Developer</p>
      <p class="mt-6 max-w-2xl mx-auto leading-7" :class="isDark ? 'text-gray-400' : 'text-gray-700'">
        I build secure, scalable, and modern web applications with clean architecture and great user experience. I'm
        passionate about turning ideas into digital products that solve real-world problems.
      </p>
      <a
        href="/cv.pdf"
        download
        class="mt-6 inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition"
      >
        Download CV
      </a>
    </section>

    <!-- About -->
    <section :class="[isDark ? 'bg-[#121826] text-white' : 'bg-gray-100 text-gray-800']" class="py-20 px-4 md:px-12 max-w-5xl mx-auto reveal">
      <h3 class="text-3xl font-bold text-yellow-400 mb-6">About Me</h3>
      <div :class="[isDark ? 'bg-[#1E253D] border-yellow-800' : 'bg-white border-yellow-300']" class="p-6 rounded-xl border shadow-lg">
        <p class="leading-7" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          I’m <strong class="text-yellow-400">Samuel Mwangi</strong>, a full stack developer from Kenya. I specialize in
          Vue.js, React, Node.js, Laravel, and Django. I’ve built fintech platforms, dashboards, eCommerce sites, and
          clean UIs.
          <br /><br />
          I believe in continuous learning, problem-solving through code, and delivering polished user experiences with
          security and performance in mind.
        </p>
      </div>
    </section>

    <!-- Tech Stack -->
    <section :class="[isDark ? 'bg-[#0F1624] text-white' : 'bg-gray-50 text-gray-800']" class="py-20 px-4 text-center reveal">
      <h3 class="text-3xl font-bold text-yellow-400 mb-12">Tech Stack</h3>
      <div class="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        <div
          v-for="stack in techStacks"
          :key="stack.name"
          :class="[isDark ? 'bg-[#1E253D] border-yellow-700 hover:border-yellow-400' : 'bg-white border-yellow-300 hover:border-yellow-600']"
          class="p-4 rounded-xl shadow-md transition w-36 border"
        >
          <img :src="stack.logo" alt="" class="h-12 mx-auto mb-2" />
          <p class="text-sm" :class="isDark ? 'text-gray-300' : 'text-gray-700'">{{ stack.name }}</p>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section :class="[isDark ? 'bg-[#121826] text-white' : 'bg-gray-100 text-gray-800']" class="py-20 px-4 max-w-6xl mx-auto reveal">
      <h3 class="text-3xl font-bold text-yellow-400 mb-8">Projects</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, i) in projects"
          :key="i"
          :class="[isDark ? 'bg-[#1E253D] border-yellow-900 hover:border-yellow-500' : 'bg-white border-yellow-300 hover:border-yellow-600']"
          class="rounded-lg p-6 border transition transform hover:scale-[1.02] shadow-xl"
        >
          <h4 class="text-xl font-semibold mb-1 text-yellow-300">{{ project.title }}</h4>
          <p class="text-sm mb-2 italic text-gray-400">Category: {{ project.category }}</p>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section :class="[isDark ? 'bg-[#0F1624] text-white' : 'bg-yellow-50 text-gray-800']" class="py-20 px-4 text-center reveal">
      <h3 class="text-3xl font-bold text-yellow-400 mb-12">Pricing</h3>
      <div class="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        <div
          v-for="plan in pricingPlans"
          :key="plan.name"
          :class="[isDark ? 'bg-[#1E253D] border-yellow-700 hover:border-yellow-400' : 'bg-white border-yellow-300 hover:border-yellow-600']"
          class="p-6 rounded-xl shadow-md border transition w-72"
        >
          <h4 class="text-xl font-semibold text-yellow-400 mb-2">{{ plan.name }}</h4>
          <p class="text-2xl font-bold mb-4">KES {{ plan.price }}</p>
          <ul class="text-sm space-y-1 mb-4">
            <li v-for="feature in plan.features" :key="feature">- {{ feature }}</li>
          </ul>
          <button class="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section :class="[isDark ? 'bg-[#121826]' : 'bg-gray-100']" class="py-20 px-4 text-center reveal">
      <h3 class="text-3xl font-bold text-yellow-400 mb-12">Testimonials</h3>
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div
          v-for="t in testimonials"
          :key="t.name"
          :class="[isDark ? 'bg-[#1E253D] border-yellow-700' : 'bg-white border-yellow-300']"
          class="p-6 rounded-xl shadow-md border text-left"
        >
          <p class="mb-4">"{{ t.message }}"</p>
          <div class="flex items-center gap-4">
            <img :src="t.photo" alt="" class="w-12 h-12 rounded-full object-cover" />
            <div>
              <p class="text-yellow-300 font-semibold">{{ t.name }}</p>
              <p class="text-sm text-gray-400">{{ t.title }} - Kilimani, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted By -->
    <section :class="[isDark ? 'bg-[#0F1624]' : 'bg-gray-50']" class="py-20 px-4 text-center reveal">
      <h3 class="text-3xl font-bold text-yellow-400 mb-8">Trusted By</h3>
      <div class="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        <img v-for="logo in trustedLogos" :src="logo" :key="logo" class="h-12 opacity-80 hover:opacity-100 transition" />
      </div>
    </section>

    <!-- Location -->
    <section :class="[isDark ? 'bg-[#121826]' : 'bg-yellow-50']" class="py-20 px-4 text-center">
      <h3 class="text-3xl font-bold text-yellow-400 mb-6">My Location</h3>
      <p class="text-lg mb-4">I'm based in <strong>Nairobi, Kenya</strong>.</p>
      <a
        href="https://www.google.com/maps/place/Kilimani,+Nairobi,+Kenya"
        target="_blank"
        class="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition"
      >
        View Kilimani, Nairobi
      </a>
    </section>

    <!-- Contact -->
    <section :class="[isDark ? 'bg-[#121826]' : 'bg-white']" class="py-20 px-4 text-center">
      <h3 class="text-3xl font-bold text-yellow-400 mb-6">Contact Me</h3>
      <p class="text-lg mb-3">
        📧 <a href="mailto:samuelngari93@gmail.com" class="text-yellow-400 hover:underline">samuelngari93@gmail.com</a>
      </p>
      <p class="text-lg mb-3">
        📞 <a href="tel:+254752341183" class="text-yellow-400 hover:underline">+254 752 341183</a>
      </p>
      <p class="text-lg mb-3">
        💬 <a
          href="https://wa.me/254752341183?text=Hello%20Samuel%2C%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          class="text-green-400 hover:underline"
        >
          Chat via WhatsApp
        </a>
      </p>
    </section>

    <!-- Footer -->
    <footer :class="[isDark ? 'bg-[#0B0F1C]' : 'bg-yellow-100 text-gray-700']" class="py-6 text-center text-sm">
      © {{ new Date().getFullYear() }} Samuel Mwangi — Powered by Vue 💚
    </footer>

    <!-- Floating WhatsApp -->
    <a
      href="https://wa.me/254752341183?text=Hello%20Samuel%2C%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
    >
      💬
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

const techStacks = [
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
]

const projects = [
  { title: 'Bright Investment Platform', description: 'Investment platform with 2FA, KES currency, profit tracking, and automated reinvestment.', category: 'Fintech' },
  { title: 'Solar Installation Website', description: 'Modern Vue site for a solar company with gallery, WhatsApp, and animations.', category: 'Business' },
  { title: 'Money Exchange Portal', description: 'Live currency platform with auto rates, trading UI, and responsive design.', category: 'Finance' },
  { title: 'EazyShop Ecommerce UI', description: 'Sleek Vue-based storefront with cart logic, filters, and dark mode.', category: 'E-commerce' },
  { title: 'EduZone Learning Portal', description: 'Online learning system for video courses with progress tracking.', category: 'Education' },
  { title: 'CryptoTrendz Dashboard', description: 'Admin crypto dashboard with charts and real-time updates.', category: 'Crypto' },
  { title: 'Trust Wallet Clone', description: 'A clone of Trust Wallet with user management and token display.', category: 'Crypto' },
  { title: 'AI Kenya Hub', description: 'AI hub for showcasing models and Kenya-based AI projects.', category: 'AI' },
  { title: 'AfriLogiX Cargo Tracker', description: 'Logistics tracking dashboard for African cargo and freight.', category: 'Logistics' }
]

const pricingPlans = [
  { name: 'Basic', price: '4,999', features: ['1-page Website', 'Contact Form', 'WhatsApp Button'] },
  { name: 'Pro', price: '14,999', features: ['Multi-page Site', 'Animations', 'SEO Setup', 'Hosting Support'] },
  { name: 'Enterprise', price: '29,999', features: ['Dashboard or Platform', 'API Integration', 'Full Support'] }
]

const testimonials = [
  {
    name: 'James Otieno',
    title: 'CEO, J-Tech Group',
    message: 'Samuel built us a great web solution that increased client conversions by 40%. Highly recommended!',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Jane Wanjiku',
    title: 'Marketing Lead, SolarX',
    message: 'A pleasure to work with Samuel. His Vue skills are top-notch and always delivers on time.',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg'
  },
  {
    name: 'Brian Kiprotich',
    title: 'CTO, Fintech254',
    message: 'Samuel developed a secure investment backend for us. He knows clean code and great UI.',
    photo: 'https://randomuser.me/api/portraits/men/56.jpg'
  },
  {
    name: 'Mercy Chebet',
    title: 'Founder, HealthPlus',
    message: 'Professional and always delivers. Our dashboard is loved by our team!',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Kevin Njoroge',
    title: 'Lead Developer, SmartLogi',
    message: 'Working with Samuel felt like having a co-founder. His systems just work!',
    photo: 'https://randomuser.me/api/portraits/men/90.jpg'
  }
]

const trustedLogos = [
  'https://cryptologos.cc/logos/trust-wallet-token-trust-logo.png',
  'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
  'https://seeklogo.com/images/F/flutterwave-logo-CE123DD4F1-seeklogo.com.png',
  'https://seeklogo.com/images/P/paystack-logo-40DA8D39D0-seeklogo.com.png'
]

onMounted(() => {
  const revealElements = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    },
    { threshold: 0.2 }
  )
  revealElements.forEach(el => observer.observe(el))
})
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
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
