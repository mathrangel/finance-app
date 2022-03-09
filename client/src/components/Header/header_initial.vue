<template>
<div>
  <AppModalRegister v-if="modalRegister"></AppModalRegister>
  <AppModalLogin v-if="modalLogin"></AppModalLogin>
  <header class="d-flex justify-content-around align-items-center">
    <div>LOGOTIPO</div>
    <div>
      <button @click="openModalLogin()" class="btn btn-outline-success px-3 mx-2 my-3">
        Login
      </button>
       <AppButtonDefault
        @onClick="openModalRegister()" 
        label="Começar agora"
        type="submit">
      </AppButtonDefault>
    </div>
  </header>
</div>
</template>

<script>
import AppButtonDefault from '../Button/button_default.vue'

import AppModalRegister from '../Modal/modal_register.vue'
import AppModalLogin from '../Modal/modal_login.vue'

export default { 
  name: "HeaderInitial",
  components: {
    AppButtonDefault,
    AppModalRegister,
    AppModalLogin
  },
  data() {
    return {
      modalRegister: false,
      modalLogin: false,
    }
  },
  methods: {
    openModalRegister() {
      this.modalRegister = !this.modalRegister
    },
    openModalLogin() {
      this.modalLogin = !this.modalLogin
    }
  }
 }
</script>