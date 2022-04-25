<template>
  <router-view/>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'App',
    computed: {
      ...mapState({
        autoLogout: (state) => state.auth.loggedIn
      })
    },
    watch: {
      autoLogout(value, previousValue) {
        if(previousValue && !value) {
          this.$router.replace('/')
        }
      }
    },
    created() {
      this.$store.dispatch('auth/ActionAutoLogin')
    }
  }
</script>
<style>
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #e0e0e0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #d6d6d6;
  }
</style>