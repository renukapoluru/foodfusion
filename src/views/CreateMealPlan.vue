<template>
  <div class="create-meal-plan page-view">
    <div class="page-header">
        CREATE MEAL PLAN
    </div>
    <div class="sections-container">
      <div class="meal-section">
        <h4>Breakfast</h4>
        <div class="meals">

        </div>
      </div>
    </div>
  </div>
</template>
<style>
.create-meal-plan .page-header {
  background:url(@/assets/meal-plans.jpg);
  min-height: 120px;
  background-size: cover;
}
.create-meal-plan .page-header {
  z-index: 1;
    position: relative;
    padding: 40px 20px;
    text-align: left;
    font-size: 30px;
    color: #ffffff;
    font-weight: 600;
}

.create-meal-plan .page-header:before {
    position: absolute;
    content: '';
    background: #42b983d9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
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
}

.meal-section h4 {
    font-size: 24px;
    padding: 10px;
    background: #e1e1e1;
}

.meal-section .meals {
    padding: 10px;
}

.create-meal-plan .sections-container {
    padding: 30px 15px;
}
</style>
