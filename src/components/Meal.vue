<template>
  <div class="single-meal">
    <h4>
      {{ meal.name }}
    </h4>
    <h5>{{ meal.short_description }}</h5>
    <p>{{ meal.calories }} kcal</p>
  </div>
</template>

<script>
export default {
  name: "Meal",
  props: {
    meal: {},
  },
  data: () => ({}),
  methods: {},
};
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
  background: #9673fa;
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

.signup-flow-bottom h5 {
  margin-top: 10px;
}
.meals-container .single-meal {
    text-align: left;
    border: 1px solid;
    padding: 10px;
}

.meals-container .single-meal h4 {
    padding: 0;
}

.meals-container .single-meal h5 {
    color: #a7a7a7;
}
</style>
