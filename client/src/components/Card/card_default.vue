<template>
  <div style="width: 500px">
    <h6 class="bg-success text-white p-2 ">{{ label }}</h6>
    <div class="p-2">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDefault',
  props: {
    label: {
      type: String,
      required: true
    }
  },
}
</script>