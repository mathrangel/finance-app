<template>
  <section @click.self="this.$emit('close')"
  id="glass-effect" 
  class="h-100 w-100 d-flex justify-content-center align-items-center position-fixed">
    <div id="bg-modal-login" 
    class="rounded d-flex flex-column align-items-center justify-content-center">
      <div class="w-100 border-bottom my-4"></div>
      <div class="mb-3">
        <h3 class="text-success">Entrar</h3>
      </div>
      <AppInputDefault 
      v-model="user.email"
      type="email"
      placeholder="Digite seu Email"
      label="Email">
      </AppInputDefault>
      <AppInputDefault
      v-model="user.password"
      type="password"
      placeholder="Digite sua Senha" 
      label="Senha">
      </AppInputDefault>
      <div class="mt-5"></div>
      <AppButtonDefault 
      @onClick="login()" 
      label="Entrar"
      type="submit"></AppButtonDefault>
      <div class="w-100 border-bottom my-4"></div>
      <span>Não possui conta? <a @click="this.$emit('openRegister')" href="#">Criar conta</a></span>
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
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
        this.$store.dispatch('auth/ActionLogIn', this.user)
        .then(() => {
          this.$router.push('/home')
        })
      }
  }
}
</script>

<style>
  #bg-modal-login {
    border: 5px solid #eee;
    padding: 70px 50px;
    background-color: #fff;
    box-shadow: 5px 5px 32px 0 rgba(0, 0, 0, 0.37);
  }
  #glass-effect {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    backdrop-filter: blur(5px);
  }
</style>