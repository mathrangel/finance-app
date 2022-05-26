<template>
<div>
    <AppModalRegister 
    @close="toggleModalRegister()" 
    @openLogin="closeRegisterAndOpenLogin()" v-if="modalRegister">
    </AppModalRegister>
    <AppModalLogin 
    @close="toggleModalLogin()" 
    @openRegister="closeLoginAndOpenRegister()" v-if="modalLogin">
    </AppModalLogin>
    <header style="max-width: 1080px" class="m-auto d-flex justify-content-between align-items-center">
      <div>
        <img src="/images/logo.svg" alt="">
      </div>
      <div>
        <button @click="toggleModalLogin()" class="btn btn-outline-success px-3 mx-2 my-3">
          Login
        </button>
        <AppButtonDefault
          :success="true"
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