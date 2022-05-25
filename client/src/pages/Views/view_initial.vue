<template>
  <div>
    <AppHeaderInitial></AppHeaderInitial>
    <div class="bg-success w-100">
      <div style="max-width: 1080px" class="d-flex align-items-center justify-content-between text-white p-4 m-auto">
        <div>
          <h1>Organize suas finanças<br>de forma mais rápida</h1>
          <p class="flex-wrap" style="max-width: 500px">
            <small>
              Com a finance você pode se organizar e planejar seu dinheiro da melhor forma e sem burocracia!
            </small>
          </p>
          <div class="mt-4">
            <AppButtonDefault @onClick="toggleModalRegister()"
              label="Começar agora"
              type="submit"/>
          </div>
        </div>
        <div>
          <img width="300" src="/images/background.svg" alt="">
        </div>
      </div>
    </div>
    <section style="max-width: 1080px" class="m-auto d-flex flex-column align-items-center py-3">
      <!-- <div class="w-100 my-4">
          <div>
            TESTE
          </div>
          <div>
            TESTE1
          </div>
      </div> -->
      <div class="d-flex justify-content-around w-100 my-4">
          <AppCardInfo title="Controle" icon="/images/clipboard.svg" color="#157347" content="Com a Finance você controla suas finanças e organiza-as da melhor forma possível."/>
          <AppCardInfo title="Praticidade" icon="/images/calculator.svg" color="#157347" content="Você tem mais praticidade deixando de lado as planilhas e a calculadora, podendo usar qualquer dispositivo com acesso à internet."/>
          <AppCardInfo title="Planejamento" icon="/images/calendar.svg" color="#157347" content="A Finance oferece as melhores ferramentas para você se planejar e ter liberdade de poder desenvolver seu dinheiro."/>
      </div>
    </section>  
    <AppFooterInitial v-if="false"/>
  </div>
</template>

<script>
import AppHeaderInitial from '../../components/Header/header_initial.vue'
import AppFooterInitial from '../../components/Footer/footer_initial.vue'
import AppCardInfo from '../../components/Card/card_info.vue'
import AppButtonDefault from '../../components/Button/button_default.vue'

export default {
  name: 'ViewInitial',
  components: {
    AppHeaderInitial,
    AppFooterInitial,
    AppCardInfo,
    AppButtonDefault
  },
  data() {
    return {
      show: true
    }
  }
}
</script>