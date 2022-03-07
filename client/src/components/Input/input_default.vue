<template>
  <div class="d-flex flex-column">
    <div id="input-default-label">
      <span 
      style="background-color: #fff;" 
      class="position-absolute text-success mx-3 px-1">
      <strong>{{label}}</strong>
      </span>
    </div>
    <input 
    class="my-3 p-2 rounded border border-success" 
    style="width: 250px; font-size: 14px" 
    :type="type"
    :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'InputDefault',
  data() {
    return {
      inputColorDefault: true
    }
  },
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
  }
}
</script>
<style>
#input-default-label {
  margin-bottom: -4px;
}
</style>