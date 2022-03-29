<template>
  <section @click.self="this.$emit('close')"
  id="glass-effect" 
  class="h-100 w-100 d-flex justify-content-center align-items-center position-fixed">
  <div id="bg-modal-new-transaction">
    <h3 class="text-success my-4">Nova Transação</h3>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <AppInputDefault  
      v-model.trim="transaction.title"
      type="text"
      placeholder="Digite o titúlo da transação"
      label="Titúlo"/>
      <AppInputDefault  
      v-model.number="transaction.value"
      type="number"
      placeholder="Digite o valor da transação"
      label="Valor"/>
      <AppInputDropdown
      v-model.number="transaction.category_id"
      label="Categoria"
      :array="$store.state.transactions.transactions.types"/>
      <AppButtonDefault 
      @click="newTransaction()" 
      class="my-4" 
      type="submit" 
      label="Registrar"/>
    </div>
  </div>
  </section>
</template>

<script>
import AppInputDefault from '../Input/input_default.vue'
import AppInputDropdown from '../Input/input_dropdown.vue'
import AppButtonDefault from '../Button/button_default.vue'

export default {
  name: 'ModalNewTransaction',
  components: {
    AppInputDefault,
    AppButtonDefault,
    AppInputDropdown
  },
  data() {
    return {
      transaction: {
        title: null,
        category_id: null,
        type_transaction_id: this.typeTransactionId,
        value: null,
        user_id: this.$store.state.auth.user.id,
      }
    }
  },
  methods: {
    newTransaction() {
      this.$store.dispatch('transactions/ActionPostTransaction', this.transaction)
    }
  },
  props: {
    typeTransactionId: {
      type: Number,
      required: true
    }
  },
  created() {
    this.$store.dispatch('transactions/ActionGetTransactionsTypes')
  }
}
</script>

<style>
  #bg-modal-new-transaction {
    border: 5px solid #eee;
    padding: 70px 50px;
    background-color: #fff;
    box-shadow: 5px 5px 32px 0 rgba(0, 0, 0, 0.37);
  }
  #glass-effect {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    backdrop-filter: blur(5px);
  }
</style>