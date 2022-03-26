<template>
  <section>
    <div class="d-flex">
      <AppCardDefault class="mx-5" label="Ganhos">
        <div v-for="item of earns" :key="item.id" class="d-flex justify-content-around">
          <div style="width: 150px">
            <span>
              {{ item.type_transaction }}R${{ item.value }}
            </span>
          </div>
          <div class="w-100">
            <span>
              {{ item.title }}
            </span>
          </div>
        </div>
      </AppCardDefault>
      <AppCardDefault :error="true" class="mx-5" label="Gastos">
        <div v-for="item of spends" :key="item.id" class="d-flex justify-content-around">
          <div style="width: 150px">
            <span>
              {{ item.type_transaction }}R${{ item.value }}
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
import userTransactionsService from '../../services/user-transactions.service'

export default {
  name: 'ViewDefault',
  components: {
    AppCardDefault
  },
  data() {
    return {
      earns: null,
      spends: null
    }
  },
  methods: {
    getTransactions() {
      const user = JSON.parse(localStorage.getItem('user'))
      userTransactionsService
      .getTransactions(user.id)
        .then(e => {
          this.$store.dispatch('transactions/ActionSetTransactions', e.data)
          this.earns = this.$store.state.transactions.earns
          this.spends = this.$store.state.transactions.spends
          })
        .catch(err => console.error(err))
    },
  },
  mounted() {
    this.getTransactions()
  }
}
</script>