<script setup lang="ts">
const mockAppointmentData: { name: string; price: string; preview: string }[] = [
  {
    name: 'Telephone Consultation (Principal Lawyer)',
    price: '440.00',
    preview: 'A telephone consultation with a Principal Lawyer of the firm.',
  },
  {
    name: 'Video Consultation (Principal Lawyer)',
    price: '440.00',
    preview: 'A video consultation with a Principal Lawyer of the firm.',
  },
  {
    name: 'In-Person Consultation (Principal Lawyer)',
    price: '550.00',
    preview: 'An in-person consultation at our East Melbourne office with a Principal Lawyer of the firm.',
  },
  {
    name: 'Document Review and Email Advice',
    price: '660.00',
    preview: 'A Principal Lawyer of the firm will review your document and will send email advice within 24 hours. Please note this option does not involve any telephone, video or in-person component.',
  },
  {
    name: 'Video Consultation (Senior Associate / Associate)',
    price: '330.00',
    preview: 'A video consultation with a Senior Associate or Associate of the firm.',
  },
  {
    name: 'In-Person Consultation (Senior Associate / Associate)',
    price: '440.00',
    preview: 'An in-person consultation at our East Melbourne office with a Senior Associate or Associate of the firm',
  },
]
</script>

<template>
  <div class="w-11/12 border border-[#dfdfdf] border-1 text-[#444444]">
    <div class="p-[15px]">
      <div class="w-full flex justify-end px-2 text-[14px]">
        <div>
          Returning?
          <span class="text-[#00b0f0] cursor-pointer">
            login
          </span>
        </div>
      </div>
      <div class="flex items-center space-x-3 font-semibold pb-3">
        <span class="w-10 h-10 rounded-full bg-[#00b0f0] flex items-center justify-center text-white font-bold">
          1
        </span>
        <h2>Choose Appointment</h2>
      </div>
      <div class="flex flex-col items-center space-y-3">
        <div v-for="data in mockAppointmentData" :key="data.name" class="w-[98%] border border-[#dfdfdf] border-1 appointment-card-layout p-[33px]">
          <div class="appointment-card__name font-semibold text-[16px]">
            {{ data.name }}
          </div>
          <div class="appointment-card__price text-[15px] text-[#777777]">
            1 hour @ A${{ data.price }}
          </div>
          <div class="appointment-card__btn flex justify-end items-center">
            <button class="rounded-md bg-[#00b0f0] py-1 px-8 text-white">
              Book
            </button>
          </div>
          <div class="appointment-card__preview mt-3 text-[15px] text-[#777777]">
            {{ data.preview }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.appointment-card-layout {
  display: grid;
  grid-template-areas:
    'name name name name btn'
    'price price price price btn'
    'preview preview preview preview preview'
  ;
  .appointment-card__name {
    grid-area: name;
  }

  .appointment-card__price {
    grid-area: price;
  }

  .appointment-card__preview {
    grid-area: preview;
  }

  .appointment-card__btn {
    grid-area: btn;
  }
}
</style>
