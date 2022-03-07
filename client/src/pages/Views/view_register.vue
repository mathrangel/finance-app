<template>
  <section class="row d-flex align-items-center justify-content-center bg-success">
    <div class="row col-8 p-5 d-flex align-items-center flex-column bg-light">
      <h3 class="text-success mb-5"><strong>Faça seu cadastro</strong></h3>
      <div class="col-8">
        <div>
          <AppInputDefault 
          v-model="user.firstName"
          label="Nome"
          placeholder="Digite seu Nome"
          type="text">
          </AppInputDefault>
          <AppInputDefault 
          v-model="user.lastName"
          label="Sobrenome"
          placeholder="Digite seu Sobrenome"
          type="text">
          </AppInputDefault>
        </div>
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
export default {
  name: 'ViewRegister',
  components: {
    AppInputDefault
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
}
</script>