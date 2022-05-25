<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center jusity-content-center">
      <img :style="{ backgroundColor: color }" class="m-auto p-3 rounded mb-2" :src="icon">
    </div> 
    <div class="d-flex flex-column align-items-center justify-content-center flex-wrap" style="max-width: 250px">
      <h5>{{ title }}</h5>
      <p class="text-center">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardInfo',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>