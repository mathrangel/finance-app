<template>
  <section class="row">
    <AppModalNewTransaction
    :typeTransactionId="typeTransactionId" 
    @close="toggleModalTransaction()"
     v-if="this.visibleModalNewTransation"
     />
    <AppHeaderDefault :name="name"/>
    <div class="col-10 d-flex m-auto">
      <AppCardDefault 
      @AddTransaction="toggleModalTransaction(1)"
      v-model="typeTransactionId"
      :total="totalEarns" 
      class="mx-5" 
      label="Ganhos">
        <div v-for="item of earns.data" :key="item.id" class="d-flex justify-content-around">
          <div style="width: 150px">
            <span>
              {{ item.type_transaction_id === 1 ? '+' : '-' }} R${{ item.value }}
            </span>
          </div>
          <div class="w-100">
            <span>
              {{ item.title }}
            </span>
          </div>
        </div>
      </AppCardDefault>
      <AppCardDefault 
      @AddTransaction="toggleModalTransaction(2)" 
      :total="totalSpends" 
      :error="true" 
      class="mx-5" 
      label="Gastos">
        <div v-for="item of spends.data" :key="item.id" class="d-flex justify-content-around">
          <div style="width: 150px">
            <span>
              {{ item.type_transaction_id === 1 ? '+' : '-' }} R${{ item.value }}
            </span>
          </div>
          <div class="w-100">
            <span>
              {{ item.title }}
            </span>
          </div>
        </div>
      </AppCardDefault>
    </div>
  </section>
</template>

<script>
import AppCardDefault from '../../components/Card/card_default.vue'
import AppHeaderDefault from '../../components/Header/header_default.vue'
import AppModalNewTransaction from '../../components/Modal/modal_new_transaction.vue'

import userTransactionsService from '../../services/user-transactions.service'

export default {
  name: 'ViewDefault',
  components: {
    AppCardDefault,
    AppHeaderDefault,
    AppModalNewTransaction
  },
  data() {
    return {
      visibleModalNewTransation: false,
      typeTransactionId: 0
    }
  },
  methods: {
    getTransactions() {
      const user = this.$store.state.auth.user
      userTransactionsService
      .getTransactions(user.id)
        .then(e => this.$store.dispatch('transactions/ActionSetTransactions', e.data))
        .catch(err => console.error(err))
    },
    toggleModalTransaction(id) {
      this.typeTransactionId = id
      this.visibleModalNewTransation = !this.visibleModalNewTransation
    }
  },
  mounted() {
    this.getTransactions()
  },
  computed: {
    name() {
      return this.$store.state.auth.user?.name.split(' ')[0]
    },
    earns() {
      return this.$store.state.transactions.earns
    },
    spends() {
      return this.$store.state.transactions.spends
    },
    totalEarns() {
     return this.$store.state.transactions.earns.total
    },
    totalSpends() {
      return this.$store.state.transactions.spends.total
    },
    totalBalance() {
      return this.$store.state.transactions.totalBalance
    }
  }
}
</script>