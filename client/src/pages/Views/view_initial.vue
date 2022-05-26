<template>
  <div>
    <AppHeaderInitial></AppHeaderInitial>
    <div class="bg-success w-100">
      <div style="max-width: 1080px" class="d-flex align-items-center justify-content-between text-white p-5 m-auto mb-5">
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
          <img width="300" src="/images/background.svg">
        </div>
      </div>
    </div>
    <section style="max-width: 1080px" class="m-auto d-flex flex-column align-items-center py-3">
      <div class="d-flex justify-content-between align-items-center w-100 mb-5">
          <div>
            <img width="500" src="/images/background-1.svg">
          </div>
          <div class="d-flex flex-column justify-content-between" style="max-width: 500px">
              <div class="mb-3">
                <h5><strong>Saiba o destino de cada centavo</strong></h5>
                <p class="flex-wrap" style="max-width: 500px"><small>Mantenha tudo sob controle informando sua renda e ganhos extras para ter um ponto de partida.</small></p>
              </div>
              <div class="w-100 border-bottom"></div>
              <div class="my-3">
                <h5><strong>Cadastre seus gastos de onde você quiser</strong></h5>
              <p class="flex-wrap" style="max-width: 500px"><small>Garanta uma previsibilidade financeira poderosa cadastrando suas despesas em tempo real, de onde você estiver.</small></p>
              </div>
              <div class="w-100 border-bottom"></div>
              <div class="my-3">
                <h5><strong>Transforme em hábito</strong></h5>
              <p class="flex-wrap" style="max-width: 500px"><small>Lance os gastos do dia a dia, acompanhe os relatórios sempre que possível e assuma o controle do seu dinheiro.</small></p>
              </div>
            </div>
      </div>
      <div class="w-100 border-bottom"></div>
      <div class="d-flex justify-content-between w-100 mt-5">
          <AppCardInfo title="Controle" icon="/images/clipboard.svg" color="#157347" content="Com a Finance você controla suas finanças e organiza-as da melhor forma possível."/>
          <AppCardInfo title="Praticidade" icon="/images/calculator.svg" color="#157347" content="Você tem mais praticidade deixando de lado as planilhas e a calculadora, podendo usar qualquer dispositivo com acesso à internet."/>
          <AppCardInfo title="Planejamento" icon="/images/calendar.svg" color="#157347" content="A Finance oferece as melhores ferramentas para você se planejar e ter liberdade de poder desenvolver seu dinheiro."/>
      </div>
    </section>  
    <AppFooterInitial/>
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