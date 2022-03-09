<template>
  <header class="d-flex justify-content-around align-items-center">
    <div>LOGOTIPO</div>
    <div>
      <button @click="openModalLogin()" class="btn btn-outline-success px-3 mx-2 my-3">
        Login
      </button>
       <AppButtonDefault
        @onClick="redirectToRegister()" 
        label="Começar agora"
        type="submit">
      </AppButtonDefault>
    </div>
  </header>
</template>

<script>
import AppButtonDefault from '../Button/button_default.vue'
export default { 
  name: "HeaderInitial",
  components: {
    AppButtonDefault,
  },
  methods: {
    redirectToRegister() {
      this.$router.push('/createaccount')
    },
    openModalLogin() {
      this.$router.push('/login')
    }
  }
 }
</script>