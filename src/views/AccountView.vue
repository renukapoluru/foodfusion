<template>
  <div class="page-view account">
    <div class="edit-profile" @click="editMode=true">
            <b-icon
                icon="pencil">
            </b-icon>
          </div>
    <div class="profile-pic">
      <img src="https://cdn4.vectorstock.com/i/1000x1000/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg" />
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
  </div>
</template>
<script>

export default {
  data: () => ({
    editMode: false,
  }),
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
}

.edit-profile {
  position: absolute;
  right:20px;
  top:15px;
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
    right: 15px;
    top: 15px;
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
    background:#42b983;
}
</style>