<template>
  <div class="sign-up-flow">
    <div class="illustration-image" v-for="step,index in steps" :class="['step-'+index]" :key="index">
      <div v-if="currentStep == index+1">
      <img src="@/assets/one-stop-solution.jpg" v-bind:alt="step.heading" />
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
        image: 'one-stop-solution',
        heading: 'Your one-stop solution for health & nutrition'
      },
      {
        image: '@/assets/one-stop-solution.png',
        heading: 'Assess your nutrition needs with minute detail included'
      },
      {
        image: '@/assets/one-stop-solution.png',
        heading: 'Find a nutrionist that resonates with your thoughts of nutrition'
      },
      {
        image: '@/assets/one-stop-solution.png',
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
</style>
