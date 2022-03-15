<template>
  <section>
    <div class="d-flex">
      <AppCardDefault class="mx-5" label="Ganhos"></AppCardDefault>
      <AppCardDefault label="Gastos"></AppCardDefault>
    </div>
  </section>
</template>

<script>
import AppCardDefault from '../../components/Card/card_default.vue'
export default {
  name: 'ViewDefault',
  components: {
    AppCardDefault
  }
}
</script>

<style>

</style>