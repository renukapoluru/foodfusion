<template>
  <div class="add-meal-flow">
    <b-field>
            <b-input v-model="searchWord" placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
        </b-field>
  </div>
</template>

<script>
export default {
  name: 'AddMeal',
  props: {
    mealType: '',
    meals: []
  },
  data: () => ({
    searchWord
  }),
  methods: {
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
  margin-top:10px;
}
</style>
