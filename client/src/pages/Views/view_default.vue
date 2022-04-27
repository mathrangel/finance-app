<template>
  <section>
    <AppModalNewTransaction
    :typeTransactionId="typeTransactionId" 
    @close="toggleModalTransaction()"
     v-if="this.visibleModalNewTransation"
     />
    <AppHeaderDefault :name="name"/>
    <div style="max-width: 1080px" class="m-auto col-10">
      <div class="d-flex justify-content-between ">
        <AppCardDefault 
        @AddTransaction="toggleModalTransaction(1)"
        v-model="typeTransactionId"
        :total="totalEarns"  
        label="Ganhos">
          <div
          v-for="(day, index) in earns.data"
          :key="index">
            <h5 class="p-2 pb-3 border-bottom text-success text-uppercase">
              {{ index.split('.')[0] + index.split('.')[1] }}
            </h5>
            <AppCardItem 
            v-for="item in day" 
            :key="item.id" :data="item"/>
          </div>
        </AppCardDefault>
        <AppCardDefault 
        @AddTransaction="toggleModalTransaction(2)" 
        :total="totalSpends" 
        :error="true" 
        label="Gastos">
         <div
          v-for="(day, index) in spends.data"
          :key="index">
            <h5 class="p-2 pb-3 border-bottom text-danger text-uppercase">
              {{ index.split('.')[0] + index.split('.')[1] }}
            </h5>
            <AppCardItem 
            v-for="item in day" 
            :key="item.id" :data="item"/>
          </div>
        </AppCardDefault>
      </div>
    </div>
  </section>
</template>

<script>
import AppCardDefault from '../../components/Card/card_default.vue'
import AppCardItem from '../../components/Card/card_item.vue'
import AppHeaderDefault from '../../components/Header/header_default.vue'
import AppModalNewTransaction from '../../components/Modal/modal_new_transaction.vue'

import userTransactionsService from '../../services/user-transactions.service'

export default {
  name: 'ViewDefault',
  components: {
    AppCardDefault,
    AppHeaderDefault,
    AppModalNewTransaction,
    AppCardItem
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
    this.$store.dispatch('transactions/ActionGetTransactionsTypes')
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
     return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(this.$store.state.transactions.earns.total)
    },
    totalSpends() {
      return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(this.$store.state.transactions.spends.total)
    },
  }
}
</script>