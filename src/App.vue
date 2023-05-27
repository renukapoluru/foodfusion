<template>
  <div id="app">
    <div class="header-logo">
      <img src="@/assets/FoodFusion.jpg" />
    </div>
    <div v-if="signedIn">
      <div class="fixed-bottom-nav" v-if="nutritionist">
        <ul>
            
            <li><router-link to="/" exact><b-icon
              icon="home"
                  size="is-large">
              </b-icon></router-link></li>
              <li><router-link exact 
                  to="/meal-plans"
                  type="is-link"><b-icon
                  icon="rice"
                  size="is-large">
              </b-icon></router-link></li>
              <li><router-link exact
                  to="/account"
                  type="is-link"><b-icon
                  icon="account"
                  size="is-large">
              </b-icon></router-link></li>
          </ul> 
        </div>
      <router-view/>
    </div>
    <div v-else>
      <SignIn v-on:signIn="signInUser()"/>
    </div>
  </div>
</template>
<script lang="ts">
import router from './router'
import SignIn from './components/SignIn.vue';

export default {
  data: () => ({
    nutritionist: true,
    signedIn: false
  }),
  beforeMount() {
    console.log('Inside mounted');
      if(localStorage.getItem('userSignedIn') == "true") {
        this.signedIn = true;
      }
  },
  methods: {
    signInUser() {
      localStorage.setItem('userSignedIn', "true");
      this.signedIn = true;
    }
  },
  components: {
    SignIn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.page-view {
  min-height: calc(100vh - 80px);
  overflow-y:scroll;
  padding-bottom: 80px;
}
.fixed-bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    padding: 15px;
    box-shadow: -1px -2px 13px 3px #0000001a;
    z-index: 99;
}

.fixed-bottom-nav ul {
    display: flex;
    padding: 0;
    list-style: none;
    justify-content: space-between;
}

.fixed-bottom-nav ul li {
    display: inline-block;
    margin: 0 15px;
}

.fixed-bottom-nav ul li i.mdi:before {
    font-size: 40px;
    line-height: 1;
}

.fixed-bottom-nav .icon.is-large {
    height: 2rem;
    line-height: 1;
}
.fixed-bottom-nav a {
    background: transparent;
    border: 0;
    color: #000000;
}
.fixed-bottom-nav a.router-link-active {
    color: #42b983;
}

#app  button.button.is-primary {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 35px;
    background:#42b983;
}
h4 {
    font-size: 22px;
    font-weight: 500;
    text-align: left;
}
.header-logo {padding: 15px;text-align: left;}

.header-logo img {
    height: 70px;
}
</style>
