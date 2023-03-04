<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'
import PageIntroLayout from '@/components/pageIntroLayout/PageIntroLayout.vue'
import Title from '@/components/pageIntroLayout/Title.vue'
import ImageBanner from '@/components/imageBanner/ImageBanner.vue'
import noWinNoFeeBanner from '@/assets/no-win-no-fee-banner.jpg'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const showErrors = ref(false)
const errors = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const inputs: { modelName: Ref<string>; error: string; type: string; placeholder: string }[] = [
  {
    modelName: name.value,
    error: 'phone',
    type: 'text',
    placeholder: 'Name',
  },
  {
    modelName: email.value,
    error: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    modelName: phone.value,
    error: 'phone',
    type: 'tel',
    placeholder: 'Phone',
  },
  {
    modelName: message.value,
    error: 'message',
    type: 'text',
    placeholder: 'Message',
  },
]

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/, 'Invalid phone number format').required(),
  message: yup.string().required(),
})

const submitForm = async () => {
  try {
    await schema.validate({
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }, { abortEarly: false })
    errors.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }
    name.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
    alert('Form submitted successfully')
  }
  catch (err) {
    showErrors.value = true
    errors.value = err.inner.reduce((acc, { path, message }) => {
      acc[path] = message
      return acc
    }, {})
  }
}
</script>

<template>
  <ImageBanner :src="noWinNoFeeBanner" />
  <PageIntroLayout layout-class="flex md:flex-col">
    <template #title>
      <Title>Contact</Title>
    </template>
  </PageIntroLayout>
  <div class="flex justify-center w-full">
    <div class="w-full grid md:grid-cols-3 md:gap-4 lg:w-10/12 md:w-11/12 2xl:w-8/12">
      <div class="col-span-1 p-4 flex flex-col space-y-5">
        <div>
          <h2 class="text-[22px] font-semibold">
            Address
          </h2>
          <p>1234 Main St</p>
          <p>Anytown, USA 12345</p>
          <br>
          <p>5 Big Head Roman St</p>
          <p>Anytown, USA 12345</p>
        </div>
        <div>
          <h2 class="text-[22px] font-semibold">
            Phone
          </h2>
          <p>123-456-7890</p>
        </div>
        <div>
          <h2 class="text-[22px] font-semibold">
            Email
          </h2>
          <p>contact@Email.com</p>
        </div>
        <div>
          <h2 class="text-[22px] font-semibold">
            Media contact
          </h2>
          <p>
            Suzy Picler, Communications Advisor
            suzy@advisor.com.au
          </p>
        </div>
      </div>
      <div class="col-span-2 p-4">
        <form class="flex flex-col space-y-4" @submit.prevent="submitForm">
          <h2 class="text-[22px] font-semibold">
            Get in Touch
          </h2>
          <!-- <div v-for="input in inputs" :key="input.error">
            <input v-model.trim="input.modelName" :type="input.type" :placeholder="input.placeholder" class="w-full px-4 py-4 bg-[#f6f6f6] rounded-lg">
            <span v-if="showErrors && errors.[input.error]" class="text-[#dc3232]">
              {{ errors.[input.error] }}
            </span>
          </div> -->
          <div>
            <input v-model.trim="name" type="text" placeholder="Name" class="w-full px-4 py-4 bg-[#f6f6f6] rounded-lg">
            <span v-if="showErrors && errors.name" class="text-[#dc3232]">
              {{ errors.name }}
            </span>
          </div>
          <div>
            <input v-model.trim="email" type="email" placeholder="Email" class="w-full px-4 py-4 bg-[#f6f6f6] rounded-lg">
            <span v-if="showErrors && errors.email" class="text-[#dc3232]">
              {{ errors.email }}
            </span>
          </div>
          <div>
            <input v-model.trim="phone" type="tel" placeholder="Phone" class="w-full px-4 py-4 bg-[#f6f6f6] rounded-lg">
            <span v-if="showErrors && errors.phone" class="text-[#dc3232]">
              {{ errors.phone }}
            </span>
          </div>
          <div>
            <textarea v-model.trim="message" type="text" rows="10" placeholder="Message" class="w-full px-4 py-4 bg-[#f6f6f6] rounded-lg" />
            <span v-if="showErrors && errors.message" class="text-[#dc3232]">
              {{ errors.message }}
            </span>
          </div>
          <button type="submit" class="text-white font-semibold bg-[#25ade3] w-[100px] rounded-full py-2 self-end">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
