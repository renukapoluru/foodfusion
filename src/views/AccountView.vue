<template>
  <div class="page-view account">
    <div class="edit-profile" @click="editMode=true">
            <b-icon
                icon="pencil">
            </b-icon>
          </div>
    <div class="profile-pic">
      <img src="https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png" />
    </div>
    <div class="personal-info">
      <h4>Name</h4>
      <b-input v-if="editMode" v-model="name"></b-input>
      <p v-else>John Doe</p>
      <h4>Email</h4>
      <b-input v-if="editMode" v-model="name"></b-input>
      <p v-else>johndoe@gmail.com</p>
      <h4>Phone</h4>
      <b-input v-if="editMode" v-model="name"></b-input>
      <p v-else>+9199999999</p>
      <h4>Date of Birth</h4>
      <b-input v-if="editMode" v-model="name"></b-input>
      <p v-else>13/08/1999</p>
      <b-button v-if="editMode" type="is-primary">Save</b-button>

    </div>
    <div class="logout-button">
      <b-button @click="logout()" type="is-danger">LOGOUT</b-button>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    editMode: false,
  }),
  methods: {
    logout() {
      localStorage.removeItem('role');
      localStorage.removeItem('userSignedIn');
      this.$router.push('/sign-in');
    }
  }
}
</script>

<style>
.profile-pic {
  padding:20px 15px;
  background:#f1f1f1;
}
.account .profile-pic img {
    border-radius: 100%;
    max-height: 180px;
    background:#9673fa;
}

.edit-profile {
  position: absolute;
  right: 25px;
    top: 125px;
  z-index: 99;
}

.account .personal-info {
  padding:20px 15px;
  text-align: left;
}

.account .personal-info h4 {
    font-size: 18px;
    font-weight: bold;
}

.account .personal-info p {
    font-size: 18px;
    margin-bottom: 15px;
}
.account .edit-profile {
    position: absolute;

    right: 25px;
    top: 20px;
}

.account .personal-info input.input {
    border-left: 0;
    border: 0;
    box-shadow: none;
    border-bottom: 1px solid #e1e1e1;
    border-radius: 0;
    margin-bottom: 15px;
    padding-left: 0;
    /* padding-top: 0; */
    font-size: 16px;
    line-height: 1;
    height: auto;
}

.personal-info button.button.is-primary {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 15px;
    background:#9673fa;
}
.logout-button {
  padding:0 15px;
}
</style>