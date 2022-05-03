<template>
  <div class="d-flex flex-column">
    <div>
      <span class="position-absolute text-success mx-3 px-1" style="margin-top: -12px">
      <strong style="background-color: #fff;" >{{ label }}</strong>
      </span>
    </div>
    <select 
    @change="$emit('update:modelValue', $event.target.value)"
    class="rounded border border-success" 
    style="font-size: 14px; padding: 7.5px; width: 170px">
      <option value="">Selecione uma opção</option>
      <option 
      v-for="item of array"
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
    array: {
      required: true
    }
  }
}
</script>