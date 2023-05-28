<template>
  <div class="consultation-page page-view">
    <h1>This is an about page</h1>
  </div>
</template>
<script>

export default {
  data: () => ({
    isDetailsFilled: false
  }),
  beforeMount() {
    if(!this.isDetailsFilled) {
      this.$router.push('/more-about-you');
    }
  },
  methods: {
    showSnackbar() {
      this.$buefy.snackbar.open(`Consultation scheduled successfully. You will receive an email with the communication`);
    }
  }
}
</script>

