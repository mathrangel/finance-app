<template>
  <div class="d-flex flex-column">
    <div id="input-default-label">
      <span class="position-absolute text-success mx-3 px-1">
      <strong style="background-color: #fff;" >{{label}}</strong>
      </span>
    </div>
    <input 
    class="my-3 p-2 rounded border border-success" 
    style="width: 250px; font-size: 14px" 
    @input="$emit('update:modelValue', $event.target.value)"
    :type="type"
    :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'InputDefault',
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
}
</script>
<style>
#input-default-label {
  margin-bottom: -4px;
}
</style>