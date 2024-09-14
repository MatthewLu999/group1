<template>
  <router-view/>
</template>
<script>
export default {
  methods: {
    redirect () {
      this.$router.push({ name: 'HomeView' })
    },
    back () {
      this.$router.go(-1)
    },
    forward () {
      this.$router.go(+1)
    }
  }
}
</script>

<style>
@import '@css/footer.css';
</style>
