<template>
  <button
  class="btn btn-success"
  style="width: 200px"
  @click="onClick"
  :type="type">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonDefault',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
  },
  methods: {
    onClick($event) {
      this.$emit('onClick', $event)
    }
  }
}
</script>