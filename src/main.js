import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css';
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: '<https://rickandmortyapi.com/graphql>',
})


Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
