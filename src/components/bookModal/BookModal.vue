<script setup lang="ts">
import { computed, ref } from 'vue'
import * as yup from 'yup'
import Appointment from './Appointment.vue'
const props = defineProps ({
  showModal: {
    type: Boolean,
    default: false,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
})

const username = ref('')
const password = ref('')
const showLogin = ref(false)
const showErrors = ref(false)

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
})

const errors = ref({
  username: '',
  password: '',
})

const loginExpendClass = computed(() => (showLogin.value) ? 'login_expended' : 'login_collapsed')

const toggleLogin = () => {
  showLogin.value = true
}

const closeLogin = () => {
  showLogin.value = false
}

const handleLogin = async () => {
  console.log('handleLogin')
  try {
    await schema.validate({
      username: username.value,
      password: password.value,
    }, { abortEarly: false })
    username.value = ''
    password.value = ''
    errors.value = {
      username: '',
      password: '',
    }
    alert('Login successfully')
  }
  catch (err: any) {
    showErrors.value = true
    errors.value = err.inner.reduce((acc: any, { path, message }: any) => {
      acc[path] = message
      return acc
    }, {})
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="props.showModal"
      class="h-full w-full top-0 right-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-50"
      @click.prevent.self="props.onClose()"
    >
      <div class="h-full w-full max-h-[800px] max-w-[900px] md:w-11/12 md:h-[98%] bg-white overflow-y-scroll">
        <div class="flex w-full justify-end px-2">
          <button @click="() => props.onClose()">
            <span class="text-[#00b0f0] font-avenirMedium font-black text-xl">
              X
            </span>
          </button>
        </div>
        <div :class="`w-full p-1 login_form ${loginExpendClass}`">
          <form class="p-4 border border-[#dfdfdf] border-1" @submit.prevent="handleLogin">
            <div class="flex w-full justify-end px-1">
              <button @click="() => closeLogin()">
                <span class="text-[#444444]">
                  X
                </span>
              </button>
            </div>
            <div class="flex flex-col">
              <label for="username">Username</label>
              <input
                id="username"
                v-model="username"
                type="text"
                class="border border-[#dfdfdf] border-1 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-2 py-2 mt-2 w-full !important"
              >
              <span v-if="showErrors && errors.username" class="text-[#dc3232]">
                {{ errors.username }}
              </span>
            </div>
            <div class="flex flex-col">
              <label for="password">Password</label>
              <input
                id="password"
                v-model="password"
                type="password"
                class="border border-[#dfdfdf] border-1 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-2 py-2 mt-2 w-full !important"
              >
              <span v-if="showErrors && errors.password" class="text-[#dc3232]">
                {{ errors.password }}
              </span>
            </div>
            <button type="submit" class="bg-[#00b0f0] py-1 px-4 text-white mt-2 rounded-sm" @click.prevent.self="handleLogin">
              Login
            </button>
          </form>
        </div>
        <div class="w-full flex justify-center my-3">
          <Appointment :toggle-login="toggleLogin" :show-modal="showModal" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.login_form {
  transition: height 0.5s ease;
  overflow: hidden;
}
.login_expended {
  height: 350px;
}

.login_collapsed {
  height: 0;
}
</style>
