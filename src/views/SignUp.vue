<template>
  <div class="min-h-screen flex items-center justify-center bg-yellow-50 text-gray-800">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block mb-1 font-medium">Full Name</label>
          <input v-model="form.name" type="text" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Email</label>
          <input v-model="form.email" type="email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block mb-1 font-medium">Password</label>
          <input v-model="form.password" type="password" class="w-full p-2 border rounded" required />
        </div>
        <button type="submit" class="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full w-full">
          Create Account
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  password: ''
})

function submitForm() {
  alert(`Welcome, ${form.name}! (Form data logged in console)`)
  console.log(form)
}
</script>
