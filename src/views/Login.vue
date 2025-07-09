<template>
  <div
    :class="[isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800']"
    class="min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-500"
  >
    <div
      class="w-full max-w-md p-8 rounded-3xl shadow-xl border"
      :class="isDark ? 'bg-[#1F2937] border-gray-700' : 'bg-yellow-50 border-yellow-200'"
    >
      <h2 class="text-3xl font-extrabold text-center mb-6">Login to Your Account</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block mb-1 font-medium">Email</label>
          <input
            v-model="form.email"
            type="email"
            required
            class="input"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Password</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              required
              class="input pr-10"
              placeholder="Enter your password"
            />
            <button type="button" class="absolute right-3 top-2.5" @click="showPassword = !showPassword">
              <span class="text-lg">{{ showPassword ? '🙈' : '👁️' }}</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
        >
          Login
        </button>
      </form>

      <p class="mt-6 text-center text-sm">
        Don’t have an account?
        <router-link to="/signup" class="text-blue-500 hover:underline font-medium">Sign Up</router-link>
      </p>

      <div class="mt-6 flex justify-center">
        <button @click="isDark = !isDark" class="text-xs hover:underline text-gray-500">
          Toggle {{ isDark ? 'Light' : 'Dark' }} Mode
        </button>
      </div>
    </div>

    <!-- Success Toast -->
    <div
      v-if="showToast"
      class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fade"
    >
      ✅ Login successful! Redirecting...
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDark = ref(false)
const showPassword = ref(false)
const showToast = ref(false)

const form = ref({
  email: '',
  password: '',
})

function handleLogin() {
  // Example check (replace with real API later)
  if (form.value.email && form.value.password.length >= 4) {
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
      router.push('/dashboard') // or whatever your landing page is
    }, 2000)
  } else {
    alert('Invalid credentials')
  }
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800;
}
.dark .input {
  @apply bg-gray-800 text-white border-gray-600;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
.animate-fade {
  animation: fade 0.4s ease-out;
}
</style>
