<template>
  <div class="meal-plans page-view">
    <div class="page-header">
        CREATE MEAL PLAN
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
    background: #42b98342;
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
.meal-plans-container .meal-plan:nth-child(2n+2) {
  background: #f9476a3b;
}

.create-meal-plan {
    position: fixed;
    bottom: 100px;
    left: 0;
    right: 0;
}

.create-meal-plan .icon {
    background: #42b983;
    color: #ffffff;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    cursor: pointer;
}
</style>
