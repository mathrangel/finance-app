<template>
  <section>
    <div v-for="item of spends.data" :key="item.id" class="my-3">
      <span class="bg-danger p-1">
      </span>
        {{ categories[item.category_id - 1].title }}
      {{ item.title }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardItem',
  computed: {
    spends() {
      return this.$store.state.transactions.spends
    },
    categories() {
      return this.$store.state.transactions.transactions.types
    }
  },
  mounted() {
    console.log(this.spends)
    console.log(this.$store.state.transactions)
    console.log(this.categories)
  }
}
</script>