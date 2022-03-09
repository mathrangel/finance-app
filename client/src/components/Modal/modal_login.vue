<template>
  <section id="glass-effect" 
  class="h-100 w-100 d-flex justify-content-center align-items-center position-fixed">
    <div id="bg-modal-login" 
    class="rounded d-flex flex-column align-items-center justify-content-center">
      <div>
        <h3 class="text-success"></h3>
      </div>
      <div class="w-100 border-bottom my-4"></div>
      <div class="mb-3">
        <h3 class="text-success">Entrar</h3>
      </div>
      <AppInputDefault 
      v-model="email"
      type="email"
      placeholder="Digite seu Email"
      label="Email">
      </AppInputDefault>
      <AppInputDefault
      v-model="password"
      type="password"
      placeholder="Digite sua Senha" 
      label="Senha">
      </AppInputDefault>
      <div class="mt-5"></div>
      <AppButtonDefault 
      @onClick="login" 
      label="Entrar"
      type="submit"></AppButtonDefault>
      <div class="w-100 border-bottom my-4"></div>
      <span>Não possui conta? <a @click="redirectToRegister()" href="#">Criar conta</a></span>
    </div>
  </section>
</template>

<script>
import AppInputDefault from '../Input/input_default.vue'
import AppButtonDefault from '../Button/button_default.vue'
export default {
  name: 'ModalLogin',
  components: {
    AppInputDefault,
    AppButtonDefault
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('login')
    },
    redirectToRegister() {
      this.$router.push('/createaccount')
    },
  }
}
</script>

<style>
  #bg-modal-login {
    border: 5px solid #eee;
    padding: 70px 50px;
    background-color: #fff;
  }
  #glass-effect {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    backdrop-filter: blur(5px);
  }
</style>