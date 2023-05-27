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
            <li><img src="@/assets/meals.png"/> 6 Meals</li>
            <li><img src="@/assets/calories.png"/> 1000 kcal</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.meal-plans .page-header {
  background:url(@/assets/meal-plans.jpg);
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

.meal-plans .page-header:before {
    position: absolute;
    content: '';
    background: #42b983d9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
.meal-plans-container {
    text-align: left;
    padding: 30px 20px;
}

.meal-plans-container .meal-plan .meal-plan-image {
    padding: 20px;
    background: #42b983;
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
}

.meal-plans-container .meal-plan h4 {
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
}

.meal-plans-container .meal-plan .meal-plan-desc {
    padding: 15px 15px;
}

.meal-plans-container .meal-plan .meal-plan-desc li {
    font-size: 20px;
    font-weight: 500;
}

.meal-plans-container .meal-plan {
    box-shadow: 0 0 9px 0px #0000001f;
    border-radius: 5px;
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
}
</style>
