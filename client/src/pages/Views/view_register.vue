<template>
  <section class="row d-flex align-items-center justify-content-center bg-success">
    <div class="row col-8 p-5 d-flex align-items-center flex-column bg-light">
      <h3 class="text-success mb-5"><strong>Faça seu cadastro</strong></h3>
      <div class="col-8">
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
      <button @click="newUser()">CREATE User</button>
    </div>
    <div class="col-4 text-light d-flex align-items-center flex-column">
      <h3>Já é cadastrado?</h3>
        <div class="input-group mb-3 w-50 d-flex flex-column">
          <span>Email</span>
          <input class="form-control w-100" type="text">
        </div>
        <div class="input-group mb-3 w-50 d-flex flex-column">
          <span>Senha</span>
          <input class="form-control w-100" type="password">
        </div>
    </div>
  </section>
</template>

<script>
import AppInputDefault from '../../components/Input/input_default.vue'
import auth from '../../services/auth.service'
export default {
  name: 'ViewRegister',
  components: {
    AppInputDefault
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
      auth.newUser(this.user).then(e => { console.log(e) })
    }
  },
}
</script>