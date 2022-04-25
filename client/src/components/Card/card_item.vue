<template>
  <section>
    <div class="my-2 pb-2 border-bottom d-flex justify-content-between align-items-end">
      <div class="p-1">
      {{ data.title }}<br>
      R${{ data.value }}
      </div>
      <span class="m-2 text-white px-3 rounded" :style="{ backgroundColor: data.category.color.hex }">
        {{ data.category.title }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>