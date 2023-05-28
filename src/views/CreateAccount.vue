<template>
  <div class="create-account-page">
    <div class="logo">
      <img src="@/assets/FoodFusion.jpg" />
    </div>

    <h1>Create Account</h1>
    <div class="form-inputs">
      <b-field label="I am a">
        <b-select v-model="role" placeholder="I am a">
          <option v-for="option in data" :value="option.id" :key="option.id">
            {{ option.name }}
          </option>
        </b-select>
      </b-field>
      <b-field v-if="role == 'nutritionist'" label="Specialisations">
        <b-checkbox v-model="specialisations"
                native-value="weight-management-and-eating-disorders">
                Weight Management and Eating Disorders
            </b-checkbox>
            <b-checkbox v-model="specialisations"
                native-value="sports">
                Sports
            </b-checkbox>
            <b-checkbox v-model="specialisations"
                native-value="pediatric">
                Pediatric
            </b-checkbox>
            <b-checkbox v-model="specialisations"
                native-value="geriatric">
                Geriartic Nutrition
            </b-checkbox>
            <b-checkbox v-model="specialisations"
                native-value="oncology-nutrition">
                Oncology Nutrition
            </b-checkbox>
            <b-checkbox v-model="specialisations"
                native-value="renal">
                Renal Nutrition
            </b-checkbox>
      </b-field>
      <b-field label="Email">
        <b-input
          placeholder="Email"
          v-model="email"
          type="email"
          icon-right="close-circle"
          icon-right-clickable
          @icon-right-click="clearIconClick"
        >
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input v-model="password" type="password" value="" password-reveal> </b-input>
      </b-field>
      <b-field label="Confirm Password">
        <b-input v-model="confirmPassword" type="password" value="" password-reveal> </b-input>
      </b-field>
      <b-button :disabled="checkIfDisabled()" type="is-primary" @click="signUp()">SIGN UP</b-button>
      <h5 @click="signIn()">Already have an account? Sign In.</h5>
    </div>
    <h3 class="or">OR</h3>
    <!-- <GoogleLogin :params="params" :onSuccess="alert('Hi')" :onFailure="onFailure">Login</GoogleLogin> -->
    <div id="mySignin" onclick="login()">
      <img
        src="https://i.ibb.co/kqLg2wQ/google-signin-button.png"
        alt="google"
        style="cursor: pointer; height: auto; width: 85%;"
      />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    password: '',
    email: '',
    confirmPassword: '',
    role: "",
    specialisations: [],
    data: [
      {
        id: "nutritionist",
        name: "Nutritionist",
      },
      {
        id: "customer",
        name: "Customer",
      },
    ],
  }),
  methods: {
    signUp() {
      console.log("signup", this.role);
      localStorage.setItem("role", this.role);
      this.$router.push("/sign-in");
    },
    signIn() {
      this.$router.push("/sign-in");
    },
    checkIfDisabled() {
      if(this.role.length && this.email.length && this.password.length && (this.password == this.confirmPassword)){
        return false;
      } else {
        return true;
      }
    }
  },
};
</script>

<style>
.create-account-page label.label {
  text-align: left;
}

.create-account-page {
  padding: 50px 20px;
  padding-bottom: 80px;
}

.create-account-page .logo img {
  max-height: 150px;
  margin-bottom: 10px;
}

.create-account-page h1 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
}

.create-account-page label.label,
.create-account-page input {
  font-size: 18px;
}

.create-account-page h3.or {
  font-size: 20px;
  font-weight: 500;
  margin: 30px 0;
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
.create-account-page .field.has-addons {
    flex-wrap: wrap;
    text-align: left;
}

.create-account-page label.b-checkbox.checkbox {
    margin: 0;
    width: 100%;
    /* display: block; */
    margin-bottom: 15px;
}
.create-account-page h5 {
  margin-top:10px;
}

</style>
