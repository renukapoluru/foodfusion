<template>
  <div class="create-meal-plan page-view">
    <div class="page-header">CREATE MEAL PLAN</div>
    <div class="sections-container meals-container">
      <div class="meal-section" v-for="meal in meals" :key="meal.type">
        <div class="meal-type">
          <h4>{{ meal.type  }}</h4>
          <div class="add-meal">
            <b-icon icon="plus"></b-icon>
          </div>
        </div>
        <div class="meals">
          <div v-if="meal.meals.length"></div>
          <p class="no-meal" v-else>No meals found. Add a meal!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    meals: [
      {
        type: 'Breakfast',
        meals: []
      },
      {
        type: 'Mid-Snacks',
        meals: []
      },
      {
        type: 'Lunch',
        meals: []
      },
      {
        type: 'Evening Mid-Snacks',
        meals: []
      },
      {
        type: 'Dinner',
        meals: []
      },
    ],
  }),
}
</script>
<style>
.create-meal-plan .page-header {
  background: rgb(197, 140, 251);
  background: linear-gradient(
    90deg,
    rgba(197, 140, 251, 1) 0%,
    rgba(150, 115, 250, 1) 100%
  );
  background-size: cover;
}
.create-meal-plan .page-header {
  z-index: 1;
  position: relative;
  padding: 25px 20px;
  text-align: left;
  font-size: 26px;
  color: #ffffff;
  font-weight: 600;
}
h4 {
  font-size: 22px;
  font-weight: 500;
  text-align: left;
}

.meal-section {
  padding: 0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px #0000002b;
  margin-bottom: 20px;
}

.meal-section h4 {
  font-size: 22px;
  padding: 10px 15px;
}

.meal-section .meals {
  padding: 20px 15px;
}

.create-meal-plan .sections-container {
  padding: 30px 15px;
}
.meals-container .meal-section:nth-child(5n+1) > .meal-type {
  
  background: #eddfdf;
}
.meals-container .meal-section:nth-child(5n+2) > .meal-type {
  background:#FFC1C1;
}
.meals-container .meal-section:nth-child(5n+3) > .meal-type {
  background:#DCECE0;
}
.meals-container .meal-section:nth-child(5n+4) > .meal-type {
  background:#FFF2C6;
}
.meals-container .meal-section:nth-child(5n+5) > .meal-type {
  background:#D9EBFF;
}
.meal-section .add-meal {
    position: absolute;
    right: 20px;
    top: 16px;
    z-index: 99;
}

.meal-section {
    position: relative;
    /* padding-right: 30px; */
}

.meal-type {
    position: relative;
    padding-right: 30px;
}

p.no-meal {
    text-align: left;
    font-size: 20px;
}
</style>
