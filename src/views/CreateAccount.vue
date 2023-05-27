<template>
  <div class="create-account-page">
    <div class="logo">
    <img src="@/assets/FoodFusion.jpg"/>
    </div>

    <h1>Create Account</h1>
    <div class="form-inputs">
        <b-field label="I am a">
            <b-select v-model="role" placeholder="I am a">
                <option
                    v-for="option in data"
                    :value="option.id"
                    :key="option.id">
                    {{ option.name }}
                </option>
            </b-select>
        </b-field>
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
        <b-field label="Password 2">
            <b-input type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>
        <b-button type="is-primary" @click="signUp()">SIGN UP</b-button>
    </div>
    <h3 class="or">OR</h3>
    <!-- <GoogleLogin :params="params" :onSuccess="alert('Hi')" :onFailure="onFailure">Login</GoogleLogin> -->
    <div id="mySignin" onclick="login()"><img src="google_image_here.png" alt="google" style="cursor:pointer;height: 60px;width: 309px;"/></div>

  </div>
</template>
<script>
export default {
  data: () => ({
    role: '',
    data: [{
      id: 'nutritionist',
      name: 'Nutritionist'
    },
    {
      id: 'customer',
      name: 'Customer'
    }
    ]
  }),
  methods: {
    signUp() {
      console.log('signup', this.role);
      localStorage.setItem('role', this.role);
      this.$router.push('/sign-in');
    }
  }
}
</script>

<style>
.create-account-page label.label {
    text-align: left;
}

.create-account-page {
    padding: 50px 20px;
}

.create-account-page .logo img {
    max-height: 200px;
    margin-bottom: 50px;
}

.create-account-page h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
}

.create-account-page label.label, .create-account-page input {
    font-size: 18px;
}

.create-account-page h3.or {
  font-size: 20px;
  font-weight: 500;
  margin:30px 0;
}

.create-account-page span.select {
    display: block;
    width: 100%;
}

.create-account-page span.select select {
    width: 100%;
    max-width: none;
    font-size: 16px;
}

</style>