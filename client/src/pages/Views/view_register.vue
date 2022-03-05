<template>
  <section class="row d-flex align-items-center justify-content-center bg-success">
    <div class="row col-8 p-5 d-flex align-items-center flex-column bg-light">
      <h3 class="text-success mb-5"><strong>Faça seu cadastro aqui!</strong></h3>
      <div class="col-8">
        <div>
          <!-- 
            COMPONENTIZAR OS INPUTS
          -->
          <div class="input-group mb-1 d-flex flex-column">
            <span>Nome</span>
            <input class="form-control w-50" type="text">
          </div>
          <div class="input-group mb-5 d-flex flex-column">
            <span>Sobrenome</span>
            <input class="form-control w-50" type="text">
          </div>
        </div>
         <div class="input-group mb-5 d-flex flex-column">
            <span>Email</span>
            <input class="form-control w-50" type="email">
          </div>
         <div class="input-group mb-1 d-flex flex-column">
            <span>Senha</span>
            <input class="form-control w-50" type="password">
          </div>
         <div class="input-group mb-5 d-flex flex-column">
            <span>Confirmar Senha</span>
            <input class="form-control w-50" type="password">
          </div>
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
export default {
  name: 'ViewRegister'
}
</script>