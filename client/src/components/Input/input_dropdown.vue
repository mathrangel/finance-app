<template>
  <div class="d-flex flex-column">
    <div id="input-default-label">
      <span class="position-absolute text-success mx-3 px-1">
      <strong style="background-color: #fff;" >{{ label }}</strong>
      </span>
    </div>
    <select 
    @change="$emit('update:modelValue', $event.target.value)"
    class="my-3 p-2 rounded border border-success" 
    style="width: 250px; font-size: 14px">
      <option value="">Selecione uma opção</option>
      <option 
      v-for="item of optionsValue"
      :value="item.id" 
      :key="item.id">
      {{ item.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "InputDropdown",
  props: {
    label: {
      type: String,
      required: true
    },
    optionsValue: {
      type: Array,
      required: true
    }
  }
}
</script>