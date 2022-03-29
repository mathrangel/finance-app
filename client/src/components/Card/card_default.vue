<template>
  <div style="width: 400px">
    <h6 v-if="!error" class="d-flex justify-content-between align-items-center text-white p-2 bg-success">
      <p>{{ label }}<br> <small style="color: #e0e0e0">Total: {{ total }}</small></p>
       <div>
        <button class="btn btn-success" @click="addTransaction(1)">
          +
        </button>
      </div>
    </h6>
    <h6 v-if="error" class="d-flex justify-content-between align-items-center text-white p-2 bg-danger">
      <p>{{ label }}<br> <small style="color: #e0e0e0">Total: {{ total }}</small></p>
      <div>
        <button class="btn btn-danger" @click="addTransaction(2)">
          +
        </button>
      </div>
    </h6>
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
    },
    total: {
      type: String,
      required: false
    }
  },
  methods: {
    addTransaction(typeTransactionId) {
      this.$emit('AddTransaction', typeTransactionId) 
    }
  }
}
</script>