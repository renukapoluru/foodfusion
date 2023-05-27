<template>
  <div class="sign-up-flow">
    <div class="illustration-image" v-for="step,index in steps" :class="['step-'+index]" :key="index">
      <div v-if="currentStep == index+1">
      <img v-bind:src="step.image" v-bind:alt="step.heading" />
      <h3>{{  step.heading  }}</h3>
          </div>

    </div>
    <div class="signup-flow-bottom">
    <div v-if="currentStep < 4" class="next-icon" @click="nextStep()">
    <b-icon
                icon="arrow-right"
                size="is-medium">
            </b-icon>
          </div>
          <div v-else>

      <b-button type="is-primary">SIGN IN</b-button>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data: () => ({
  currentStep: 1,
    steps: [
      {
        image: 'https://i.ibb.co/L0QbBNj/one-stop-solution.jpg"',
        heading: 'Your one-stop solution for health & nutrition'
      },
      {
        image: 'https://i.ibb.co/TBRKYmk/assessment.png',
        heading: 'Assess your nutrition needs with minute details included'
      },
      {
        image: 'https://i.ibb.co/f0QKMx3/3255382.jpg',
        heading: 'Find a nutrionist that resonates with your thoughts of nutrition'
      },
      {
        image: 'https://i.ibb.co/4Y65ZcW/2105-i402-029-S-m004-c13-Ketogenic-diet-flat-composition.jpg',
        heading: 'Get meals curated that go in line with your preferences'
      },

    ]
  }),
  methods: {
    nextStep() {
      console.log('next step');
      this.currentStep = this.currentStep + 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sign-up-flow h3 {
    margin-top: 0;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 30px;
}

.sign-up-flow .icon.is-medium {
    background: green;
    height: 4rem;
    width: 4rem;
    color: #ffffff;
    border-radius: 100%;
}
.sign-up-flow {
    padding: 15px 25px;
}

.sign-up-flow .signup-flow-bottom {
    position: fixed;
    bottom: 80px;
    left: 0;
    right: 0;
    padding: 0 25px;
}
.sign-up-flow .illustration-image img {
    height: 30vh;
    width: auto;
}
</style>
