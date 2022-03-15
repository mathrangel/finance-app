<template>
  <div>
    <span>{{ label }}</span>
    <div>
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