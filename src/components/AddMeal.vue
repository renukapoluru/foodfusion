<template>
  <div class="add-meal-flow">
    <b-field>
            <b-autocomplete
                :data="data"
                placeholder="Search Meal"
                field="name"
                :loading="isFetching"
                @typing="getAsyncData"
                @select="addToMeal">

                <template slot-scope="props">
                    <div class="media">
                        <div class="media-left">
                            <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
                        </div>
                        <div class="media-content">
                            {{ props.option.name }}
                            <br>
                            <small>
                               {{ props.option.description }},
                            </small>
                        </div>
                    </div>
                </template>
            </b-autocomplete>
        </b-field>
  </div>
</template>

<script>
import { debounce } from "debounce";

export default {
  name: 'AddMeal',
  props: {
    mealId: ''
  },
  data: () => ({
    data: [],
    selected: null,
    isFetching: false,
    meals: []
  }),
  methods: {
      addToMeal(option) {
        this.meals.push(option);
        console.log('Add to meal called', this.meals);
        this.$emit('addMeal',{mealId: this.mealId, option: option});
      },
    // You have to install and import debounce to use it,
            // it's not mandatory though.
            getAsyncData: debounce(function (name) {
                if (!name.length) {
                    this.data = []
                    return
                }
                this.isFetching = true;
                const requestOptions = {
                  method: "POST",
                  headers: { "Content-Type": "application/json", "x-hasura-admin-secret": "bHsf9xbpcupH13rtVcJdAxu32wgJfeGRFSWEzWfIwVaUNUj9lqIvH6THQ6Q39f5W" },
                  body: JSON.stringify({
                      "query": "query MyQuery {\n  Meal {\n    id\n    name\n    preference\n    short_description\n    calories\n  }\n}\n",
                      "variables": null,
                      "operationName": "MyQuery"
                  })
                };
                fetch(`https://loyal-mayfly-19.hasura.app/v1/graphql`, requestOptions)
                .then(response => response.json())    
                .then((data) => {
                        this.data = []
                        console.log('Data', data.data);
                        data.data.Meal.forEach((item) => this.data.push(item))
                    })
                    .catch((error) => {
                        this.data = []
                        throw error
                    })
                    .finally(() => {
                        this.isFetching = false
                    })
            }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-meal-flow .field {
  margin-bottom: 10px;
}
</style>
