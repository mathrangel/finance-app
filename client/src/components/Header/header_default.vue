<template>
  <header class="row bg-success mb-5 text-white">
    <div class="col-10 m-auto">
      <div class="py-3 d-flex justify-content-between">
        <div>
          Olá, <strong>{{ name }}</strong>! Vamos ver como está sua carteira?
        </div>
          <a href="#" class="text-white" @click="this.$store.dispatch('auth/ActionLogout')">
            Log Out
          </a>
      </div>
      <div>
        <!-- SELEÇÃO DE MESES -->
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
      required: true
    }
  }
}
</script>