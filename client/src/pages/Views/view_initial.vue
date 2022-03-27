<template>
  <div class="row">
    <AppHeaderInitial></AppHeaderInitial>
    <section class=" col-10 m-auto d-flex align-items-center py-3 justify-content-center">
      <div class="row w-100 py-5">
        <div class="col-5 mx-5">
          <h2>
            Controle sua <strong class="text-success">GRANA</strong> de <br>forma inteligente
          </h2>
          <p>
            Organize seu dinheiro de forma adequada e <br> sem deixar os mimos de lado
          </p>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <img width="500px" src="/images/image_initial.svg">
        </div>
      </div>
    </section>  
    <AppFooterInitial v-if="false"></AppFooterInitial>
  </div>
</template>

<script>
import AppHeaderInitial from '../../components/Header/header_initial.vue'
import AppFooterInitial from '../../components/Footer/footer_initial.vue'

export default {
  name: 'ViewInitial',
  components: {
    AppHeaderInitial,
    AppFooterInitial
  },
}
</script>