<template>
  <div>
    <AppHeaderInitial></AppHeaderInitial>
    <section style="max-width: 1080px" class="m-auto d-flex align-items-center py-3 justify-content-center">
      <div class="d-flex py-5 justify-content-between w-100">
        <div>
          <h2>
            Controle sua <strong class="text-success">GRANA</strong> de <br>forma inteligente
          </h2>
          <p>
            Organize seu dinheiro de forma adequada e <br> sem deixar os mimos de lado
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <img width="400px" src="/images/image_initial.svg">
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