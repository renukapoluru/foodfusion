<template>
  <div class="signin-page">
    <div class="go-back" @click="$router.push('/sign-up')">
    <b-icon size="is-medium" icon="chevron-left"></b-icon>
  </div>
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
                value=""
                password-reveal>
            </b-input>
        </b-field>
        <b-button type="is-primary" @click="signIn()">SIGN IN</b-button>
    </div>
    <h3 class="or">OR</h3>
    <!-- <GoogleLogin :params="params" :onSuccess="alert('Hi')" :onFailure="onFailure">Login</GoogleLogin> -->
    <div id="mySignin" onclick="login()"><img src="google_image_here.png" alt="google" style="cursor:pointer;height: 60px;width: 309px;"/></div>

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
    signIn() {
      localStorage.setItem('userSignedIn',"true");
      this.$router.push('/');
    },  
    onSuccess(googleUser) {
        console.log(googleUser);

        // This only gets the user information: id, name, imageUrl and email
        console.log(googleUser.getBasicProfile());
    }
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