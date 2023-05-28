<template>
  <div id="app">
    
    <div>


<router-view/>
      <div class="fixed-bottom-nav" v-if="nutritionist">
        <ul>
            
            <li><router-link to="/home" exact><b-icon
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
      <div class="fixed-bottom-nav customer" v-else>
        <ul>
            
            <li><router-link to="/client-home" exact><b-icon
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
    </div>
  </div>
</template>
<script lang="ts">
import router from './router'

export default {
  data: () => ({
    nutritionist: false,
    signedIn: false,
    introDone: false
  }),
  beforeMount() {
      if(localStorage.getItem('userSignedIn') == "true") {
        
      } else {
        this.$router.push('/introduction');
      }
      if(localStorage.getItem('role') == "nutritionist") {
        this.nutritionist = true;
      } else {
        this.nutritionist = false;
        this.$router.push('/client-home');
      }
  }
}
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
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
  color: #9673fa;
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
    color: #9673fa;
}

#app  button.button {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 35px;
}
#app  button.button.is-primary {
    background:#9673fa;
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
.go-back {
    display: flex;
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: 99999;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    line-height: 1;
    align-items: center;
    justify-content: center;
    background: #ffffff63;
}

.client-info {
  text-align: left;
}

.client-info h4 {
  font-size: 18px;
    font-weight: 600;
    margin-bottom: 0px;
}
.client-info h5 {
    color: #7a7878;
}
</style>
