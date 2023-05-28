<template>
  <div class="page-view client-profile">
    <div class="go-back" @click="$router.go(-1)">
    <b-icon size="is-medium" icon="chevron-left"></b-icon>
  </div>
    <div class="client-image">
      <img src="https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png" />
    </div>
    <div class="client-info">
      <h4>{{ nutritionist.name  }}</h4>
      <h5>{{ nutritionist.specialisations.join(',')  }}</h5>
      <div v-html="nutritionist.description"></div>
      <b-button type="is-primary" @click="showSnackbar()">SCHEDULE CONSULTATION</b-button>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    nutritionist: {
      name: 'Prita Sharma',
      specialisations: ['Paediatrics', 'Sports', 'Weight Management and Eating Disorders'],
      description: "<p>As a skilled and dedicated nutritionist, I am passionate about helping individuals achieve optimal health through proper nutrition and lifestyle choices. With a deep understanding of the science of nutrition and its impact on the human body, I provide personalized guidance and support to my clients, empowering them to make informed decisions about their diet and overall well-being.</p><p>In my role as a nutritionist, I conduct thorough assessments of my clients' nutritional needs, taking into account their unique goals, medical history, and lifestyle factors. Through in-depth consultations, I develop customized nutrition plans that are practical, sustainable, and tailored to their specific requirements. I believe in a holistic approach to health, considering not only the nutritional aspect but also the psychological and emotional factors that influence one's relationship with food.</p>"
    }
  }),
  methods: {
    showSnackbar() {
      this.$buefy.snackbar.open(`Consultation scheduled successfully. You will receive an email with the communication`);
    }
  }
}
</script>

<style scoped>
.client-profile .client-image {
  background: rgb(197, 140, 251);
  background: linear-gradient(
    90deg,
    rgba(197, 140, 251, 1) 0%,
    rgba(150, 115, 250, 1) 100%
  );
  line-height: 1;
}
.client-profile .client-image {
    line-height: 1;
    position: relative;
    z-index: 4;
}

.client-info {
    padding: 15px 25px;
    margin-top: -15px;
    background: #ffffff;
    border-radius: 25px;
    z-index: 99999;
    position: relative;
}

.client-profile h4 + h5 {
    margin-bottom: 15px;
}
.client-profile .client-info p {
    margin-bottom: 15px;
}
</style>