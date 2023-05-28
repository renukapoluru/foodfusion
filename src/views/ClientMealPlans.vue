<template>
  <div class="create-meal-plan page-view">
    <div class="page-header">MEAL PLAN</div>
    <div class="sections-container meals-container">
      <div class="meal-section" v-for="meal in meals" :key="meal.type">
        <div class="meal-type">
          <h4>{{ meal.type }}</h4>
        </div>
        <div class="meals">
          <div v-if="meal.meals.length">
            <Meal v-for="meal in meal.meals" :meal="meal" :key="meal.name" />
          </div>
          <p class="no-meal" v-else>No meals found. Add a meal!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Meal from "@/components/Meal.vue";

export default {
  data: () => ({
    meals: [
      {
        id: 0,
        type: "Breakfast",
        meals: [
          [
            {
              id: "d9a9b02b-7093-4819-9df8-7b6d1ac5f470",
              name: "soup",
              preference: "Vegetarian",
              short_description: "vegetable soup",
              calories: 20,
            },
          ],
        ],

        showAddMeal: false,
      },
      {
        id: 1,
        type: "Mid-Snacks",
        meals: [
          {
            id: "80dff2ca-dcaa-4c4e-8a5b-77240cd25b4b",
            name: "omelette",
            preference: "Eggetarian",
            short_description: "vegetable omlette",
            calories: 50,
          },
        ],
        showAddMeal: false,
      },
      {
        id: 2,
        type: "Lunch",
        meals: [
          {
            id: "c5366d32-2ed9-4e99-8d08-120860c504dc",
            name: "Fruit bowl",
            preference: "Vegan",
            short_description: "choice of fruit",
            calories: 50,
          },
        ],
        showAddMeal: false,
      },
      {
        id: 3,
        type: "Evening Mid-Snacks",
        meals: [
          {
            id: "d9a9b02b-7093-4819-9df8-7b6d1ac5f470",
            name: "soup",
            preference: "Vegetarian",
            short_description: "vegetable soup",
            calories: 20,
          },
        ],
        showAddMeal: false,
      },
      {
        id: 4,
        type: "Dinner",
        meals: [
          {
            id: "4fc5df65-59da-475b-9401-9b1ef6beaaf5",
            name: "Sprouts",
            preference: "Vegan",
            short_description:
              "a fresh mix of moong dal, onion, tomato and salt",
            calories: 20,
          },
        ],
        showAddMeal: false,
      },
    ],
  }),
  components: { Meal },
  methods: {},
};
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
.meals-container .meal-section:nth-child(5n + 1) > .meal-type {
  background: #eddfdf;
}
.meals-container .meal-section:nth-child(5n + 2) > .meal-type {
  background: #ffc1c1;
}
.meals-container .meal-section:nth-child(5n + 3) > .meal-type {
  background: #dcece0;
}
.meals-container .meal-section:nth-child(5n + 4) > .meal-type {
  background: #fff2c6;
}
.meals-container .meal-section:nth-child(5n + 5) > .meal-type {
  background: #d9ebff;
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
.client-profile .meals-container.sections-container {
    padding: 30px 1px;
}
</style>
