<template>
  <div class="signin-page">
    <div class="logo">
    <img src="@/assets/FoodFusion.jpg"/>
    </div>

    <h1>Sign In</h1>
    <div class="form-inputs">
      <b-field label="Email">
            <b-input placeholder="Email"
                v-model="email"
                type="email"
                icon-right="close-circle"
                icon-right-clickable
                @icon-right-click="clearIconClick">
            </b-input>
        </b-field>

        
        <b-field label="Password">
            <b-input type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>
        <b-button type="is-primary" @click="signIn()">SIGN IN</b-button>
    </div>
    <h3 class="or">OR</h3>
    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin>

  </div>
</template>
<script>
import GoogleLogin from 'vue-google-login';


export default {
  name: 'SignIn',
  props: {
  },
  data: () => ({
    email: null,
    password: null,
    // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
    params: {
        client_id: "522056815836-mtne3ap5sns3ukh8l8q0bc6t1g933uuk.apps.googleusercontent.com"
    },
    // only needed if you want to render the button with the google ui
    renderParams: {
        width: 250,
        height: 50,
        longtitle: true
    }
  }),
  methods: {
  },
  components: { GoogleLogin }
}
</script>

<style>
.signin-page label.label {
    text-align: left;
}

.signin-page {
    padding: 50px 20px;
}

.signin-page .logo img {
    max-height: 200px;
    margin-bottom: 50px;
}

.signin-page h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
}

.signin-page label.label, .signin-page input {
    font-size: 18px;
}

.signin-page h3.or {
  font-size: 20px;
  font-weight: 500;
  margin:30px 0;
}

</style>