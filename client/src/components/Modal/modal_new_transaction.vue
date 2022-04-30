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
      <Datepicker v-model="transaction.created_at" 
      :clearable="false"
      :type="Date" 
      :monthChangeOnScroll="false"
      />
      <AppInputDropdown
      v-model.number="transaction.category_id"
      label="Categoria"
      :array="$store.state.transactions.transactions.categories"/>
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

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'ModalNewTransaction',
  components: {
    AppInputDefault,
    AppButtonDefault,
    AppInputDropdown,
    Datepicker
  },
  data() {
    return {
      transaction: {
        title: null,
        category_id: null,
        type_transaction_id: this.typeTransactionId,
        value: null,
        user_id: this.$store.state.auth.user.id,
        created_at: new Date()
      }
    }
  },
  methods: {
    newTransaction() {
      this.$store.dispatch('transactions/ActionPostTransaction', this.transaction).then(() => {
        this.$emit('close')
      })
    }
  },
  props: {
    typeTransactionId: {
      type: Number,
      required: true
    }
  },
  mounted() {
     this.$store.dispatch('transactions/ActionGetCategories', this.typeTransactionId)
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

  .dp__button, .dp__selection_preview {
    display: none;
  }

  .dp__action_buttons {
    width: 100% !important;
    display: flex;
    justify-content: space-around;
  }

  .dp__input_icon_pad {
    border: 0;
    background: transparent;
  }
  
  .dp__input_wrap {
    border: #198754 1px solid;
    border-radius: 4px;
    width: 250px; 
    font-size: 14px;
    padding: 2px 0;
    margin: 10px 0;
  }

  .dp__main::after{
    position: absolute;
    content: 'Data';
    background: #fff;
    font-weight: bold;
    color: #198754;
    margin-left: 20px;
    margin-top: -65px !important;
  }

</style>