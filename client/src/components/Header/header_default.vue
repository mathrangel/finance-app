<template>
  <header class="bg-success mb-5 text-white">
    <div style="max-width: 1080px" class="col-10 m-auto pb-3">
      <div class="pt-3 d-flex justify-content-between">
        <div>
          <div>
            Olá, <strong>{{ name }}</strong>! Vamos ver como está sua carteira?
          </div>
          <h6 class="mt-2">
            <small>Saldo total:<br> {{ balance }}</small>
          </h6>
        </div>
        <a href="#" class="text-white" @click="this.$store.dispatch('auth/ActionLogout')">
          Sair
        </a>
      </div>
      <div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderDefault',
  props: {
    name: {
      type: String,
      required: false
      },
    },
    computed: {
      balance() {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(this.$store.state.transactions.totalBalance) 
      }
    }
}
</script>