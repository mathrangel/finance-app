<template>
  <section>
    <div class="d-flex">
      <AppCardDefault type="true" class="mx-5" label="Ganhos">
        <div v-for="(item, index) of items" :key="index" class="d-flex justify-content-around">
          <div style="width: 150px">
            <span>
              {{ item.type }}R${{ item.value }}
            </span>
          </div>
          <div class="w-100">
            <span>
              {{ item.title }}
            </span>
          </div>
          <span>
            {{ item.date }}
          </span>
        </div>
      </AppCardDefault>
    </div>
  </section>
</template>

<script>
import AppCardDefault from '../../components/Card/card_default.vue'
export default {
  name: 'ViewDefault',
  components: {
    AppCardDefault
  },
  data() {
    return {
      items: [
        {title: 'Salário', type: '+', value: 10000, date: '15/03/2022'},
        {title: 'Bonus de aniversário', type: '+', value: 100, date: '12/03/2022'},
        {title: 'Salário', type: '+', value: 100000, date: '15/03/2022'},
      ]
    }
  }
}
</script>

<style>

</style>