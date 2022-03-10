<template>
  <section @click.self="this.$emit('close')"
  id="glass-effect" 
  class="h-100 w-100 d-flex justify-content-center align-items-center position-fixed">
    <div id="container-register" 
    class="row col-8 p-5 d-flex align-items-center flex-column rounded">
    <div class="w-100 border-bottom my-4"></div>
      <h3 class="text-success mb-5"><strong>Faça seu cadastro</strong></h3>
      <div class="col-8 d-flex flex-column align-items-center mb-4">
          <AppInputDefault 
          v-model="user.name"
          label="Nome Completo"
          placeholder="Digite seu Nome"
          type="text">
          </AppInputDefault>
        <AppInputDefault 
          v-model="user.email"
          label="Email"
          placeholder="Digite seu Email"
          type="email">
        </AppInputDefault>
        <AppInputDefault 
          v-model="user.password"
          label="Senha"
          placeholder="Digite sua Senha"
          type="password">
        </AppInputDefault>
        <AppInputDefault 
          v-model="user.confirmPassword"
          label="Confirmar Senha"
          placeholder="Confirme sua Senha"
          type="password">
        </AppInputDefault>
      </div>
      <AppButtonDefault
      @onClick="newUser" 
      label="Criar conta"
      type="submit">
      </AppButtonDefault>
      <div class="w-100 border-bottom my-4"></div>
      <span>Já possui conta? <a @click="this.$emit('openLogin')" href="#">Fazer login</a></span>
    </div>
  </section>
</template>

<script>
import AppInputDefault from '../Input/input_default.vue'
import AppButtonDefault from '../Button/button_default.vue'

import userService from '../../services/auth.service'

export default {
  name: 'ViewRegister',
  components: {
    AppInputDefault,
    AppButtonDefault,
  },
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
    }
  },
  methods: {
    newUser() {
      userService.newUser(this.user).then(e => { 
          this.$router.push('/')
          e
      })
    }
  },
}
</script>
<style>
  #container-register {
    border: 5px solid #eee;
    background-color: #fff;
    box-shadow: 5px 5px 32px 0 rgba(0, 0, 0, 0.37);
  }
</style>