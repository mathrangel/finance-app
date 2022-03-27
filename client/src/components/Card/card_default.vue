<template>
  <div style="width: 500px">
    <h6 v-if="!error" class="text-white p-2 bg-success">{{ label }}</h6>
    <h6 v-if="error" class="text-white p-2 bg-danger">{{ label }}</h6>
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
    },
    error: {
      type: Boolean,
      required: false
    }
  },
}
</script>