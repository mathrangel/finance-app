<template>
  <section class="row">
    <AppHeaderDefault :name="name"/>
    <div class="col-10 d-flex m-auto">
      <AppCardDefault class="mx-5" label="Ganhos">
        <div v-for="item of earns" :key="item.id" class="d-flex justify-content-around">
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
      <AppCardDefault :error="true" class="mx-5" label="Gastos">
        <div v-for="item of spends" :key="item.id" class="d-flex justify-content-around">
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
import userTransactionsService from '../../services/user-transactions.service'

export default {
  name: 'ViewDefault',
  components: {
    AppCardDefault,
    AppHeaderDefault
  },
  data() {
    return {
      earns: null,
      spends: null
    }
  },
  methods: {
    getTransactions() {
      const user = this.$store.state.auth.user
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
  },
  computed: {
    name() {
      return this.$store.state.auth.user?.name.split(' ')[0]
    }
  }
}
</script>