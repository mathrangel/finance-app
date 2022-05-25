<template>
  <button
  :class="{'btn-success': success, 'btn-light text-success': !success}"
  class="btn"
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
    success: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick($event) {
      this.$emit('onClick', $event)
    }
  }
}
</script>