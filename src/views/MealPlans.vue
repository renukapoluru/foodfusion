<template>
  <div class="meal-plans page-view">
    <div class="page-header">
        MEAL PLANS
    </div>
    <div class="meal-plans-container">
      <div class="meal-plan">
        <div class="meal-plan-image">
          <h4>Keto Diet</h4>  
        </div>
        <div class="meal-plan-desc">
          <ul>
            <li><img src="@/assets/calories.png"/> Calories: 1000 kcal</li>
            <li><img src="@/assets/meals.png"/> Protein: 40g</li>
            <li><img src="@/assets/meals.png"/> Fat: 40g</li>
            <li><img src="@/assets/meals.png"/> Carbs: 40g</li>
          </ul>
        </div>
      </div>
      <div class="meal-plan">
        <div class="meal-plan-image">
          <h4>Skin Care Diet</h4>  
        </div>
        <div class="meal-plan-desc">
          <ul>
            <li><img src="@/assets/calories.png"/>1200 kcal</li>
            <li><img src="@/assets/meals.png"/>Protein: 50g</li>
            <li><img src="@/assets/meals.png"/>Fat: 70g</li>
            <li><img src="@/assets/meals.png"/>Carbs: 40g</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="create-meal-plan">
      <router-link to="/create-meal-plan" exact>
      <b-icon
                icon="plus"
                size="is-medium">
            </b-icon></router-link>
    </div>
  </div>
</template>
<script lang="ts">

export default {
  methods: {
  },
}
</script>

<style>
.meal-plans .page-header {
  background: rgb(197,140,251);
background: linear-gradient(90deg, rgba(197,140,251,1) 0%, rgba(150,115,250,1) 100%);
  min-height: 120px;
  background-size: cover;
}
.meal-plans .page-header {
  z-index: 1;
    position: relative;
    padding: 40px 20px;
    text-align: left;
    font-size: 30px;
    color: #ffffff;
    font-weight: 600;
}

.meal-plans-container {
    text-align: left;
    padding: 30px 20px;
}

.meal-plans-container .meal-plan .meal-plan-image {
    padding: 20px 15px 0;
}

.meal-plans-container .meal-plan h4 {
    font-weight: 600;
    font-size: 24px;
}

.meal-plans-container .meal-plan .meal-plan-desc {
    padding: 5px 15px 15px;
}

.meal-plans-container .meal-plan .meal-plan-desc li {
    font-size: 16px;
    font-weight: 500;
}

.meal-plans-container .meal-plan {
    box-shadow: 0 0 9px 0px #0000001f;
    border-radius: 5px;
    background: #9673fa42;
    margin-bottom: 30px;
}

.meal-plan .meal-plan-desc li img {
    vertical-align: middle;
    height: 30px;
    margin-right: 10px;
}
.meal-plans-container .meal-plan .meal-plan-desc li {
    display: inline-block;
    margin-right: 15px;
    vertical-align: middle;
    position: relative;
}
.meal-plans-container .meal-plan .meal-plan-desc li img {
    display: none;
}

.meal-plans-container .meal-plan .meal-plan-desc li:after {
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: #8e8b8b;
    top: 10px;
    right: -7px;
}

.meal-plans-container .meal-plan .meal-plan-desc li:last-child:after {
    display: none;
}
.meal-plans-container .meal-plan:nth-child(5n+1) {
  
  background: #eddfdf;
}
.meal-plans-container .meal-plan:nth-child(5n+2) {
  background:#FFC1C1;
}
.meal-plans-container .meal-plan:nth-child(5n+3) {
  background:#DCECE0;
}
.meal-plans-container .meal-plan:nth-child(5n+4) {
  background:#FFF2C6;
}
.meal-plans-container .meal-plan:nth-child(5n+5) {
  background:#D9EBFF;
}

.create-meal-plan {
    position: fixed;
    bottom: 100px;
    left: 0;
    right: 0;
}

.create-meal-plan .icon {
    background: #9673fa;
    color: #ffffff;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    cursor: pointer;
}
</style>
