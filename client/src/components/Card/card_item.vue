<template>
  <section>
    <div class="my-2 pb-2 border-bottom d-flex justify-content-between">
      <div class="d-flex justify-content-start align-items-center">
        <div class="d-flex align-items-center justify-content-center flex-column" style="width: 50px">
          <div class="m-1 rounded-circle" :style="{ backgroundColor: data.category.color.hex }" style="padding: 12px; word-wrap: break-word;"></div>
          <small style="font-size: 12px" classb="text-center">{{ data.category.title }}</small>
        </div>
        <div class="p-1 mx-3">
          <h6>{{ data.title }}</h6>
          <small>R${{ data.value }}</small>
        </div>
      </div>
      <div class="d-flex flex-column justify-content-around mx-3">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30"
        style=" fill:#ccc;"><path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path></svg> -->
        <button @click="$emit('onDelete', this.data.id)" style="background: transparent; border: 0; cursor: pointer;">
          <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24"
          style=" fill:#ccc;"><path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path></svg>
        </button>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'CardItem',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>