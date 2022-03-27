<template>
<div class="row">
  <AppModalRegister 
  @close="toggleModalRegister()" 
  @openLogin="closeRegisterAndOpenLogin()" v-if="modalRegister">
  </AppModalRegister>
  <AppModalLogin 
  @close="toggleModalLogin()" 
  @openRegister="closeLoginAndOpenRegister()" v-if="modalLogin">
  </AppModalLogin>
  <header class="m-auto col-10 d-flex justify-content-between align-items-center">
    <div>LOGOTIPO</div>
    <div>
      <button @click="toggleModalLogin()" class="btn btn-outline-success px-3 mx-2 my-3">
        Login
      </button>
       <AppButtonDefault
        @onClick="toggleModalRegister()" 
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
    toggleModalRegister() {
      this.modalRegister = !this.modalRegister
    },
    toggleModalLogin() {
      this.modalLogin = !this.modalLogin
    },
    closeLoginAndOpenRegister() {
      this.toggleModalLogin()
      this.toggleModalRegister()
    },
    closeRegisterAndOpenLogin() {
      this.toggleModalRegister()
      this.toggleModalLogin()
    }
  }
 }
</script>