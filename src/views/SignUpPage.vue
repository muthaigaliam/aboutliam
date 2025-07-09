<template>
  <div
    :class="[isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800']"
    class="min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-500"
  >
    <div
      class="w-full max-w-lg p-8 rounded-3xl shadow-xl border"
      :class="isDark ? 'bg-[#1F2937] border-gray-700' : 'bg-yellow-50 border-yellow-200'"
    >
      <h2 class="text-4xl font-extrabold text-center mb-8 tracking-tight">
        Create an Account
      </h2>

      <form @submit.prevent="handleSignup" class="space-y-5 text-sm md:text-base">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 font-medium">First Name</label>
            <input v-model="form.firstName" type="text" required class="input" placeholder="John" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Last Name</label>
            <input v-model="form.lastName" type="text" required class="input" placeholder="Doe" />
          </div>
        </div>

        <div>
          <label class="block mb-1 font-medium">Username</label>
          <input v-model="form.username" type="text" required class="input" placeholder="johndoe254" />
        </div>

        <div>
          <label class="block mb-1 font-medium">Email Address</label>
          <input v-model="form.email" type="email" required class="input" placeholder="you@example.com" />
        </div>

        <div>
          <label class="block mb-1 font-medium">Phone Number</label>
          <input v-model="form.phone" type="tel" required class="input" placeholder="+254712345678" />
        </div>

        <div>
          <label class="block mb-1 font-medium">Password</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              class="input pr-10"
              required
              placeholder="Enter your password"
            />
            <button type="button" class="absolute right-3 top-2.5" @click="showPassword = !showPassword">
              <span class="text-lg">
                {{ showPassword ? '🙈' : '👁️' }}
              </span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
        >
          Sign Up
        </button>
      </form>

      <p class="mt-6 text-center text-sm">
        Already have an account?
        <router-link to="/login" class="text-blue-500 hover:underline font-medium">Login</router-link>
      </p>

      <div class="mt-6 flex justify-center">
        <button @click="isDark = !isDark" class="text-xs hover:underline text-gray-500">
          Toggle {{ isDark ? 'Light' : 'Dark' }} Mode
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDark = ref(false)
const showPassword = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  phone: '',
  password: '',
})

function handleSignup() {
  // Example success logic after registration
console.log('User registered successfully!')
// redirect to login
window.location.href = '/login'



  // Replace with API call
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-gray-800;
}
.dark .input {
  @apply bg-gray-800 text-white border-gray-600;
}
</style>
