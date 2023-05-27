<template>
  <div class="page-view client-profile">
    <div class="go-back" @click="$router.go(-1)">
    <b-icon size="is-medium" icon="chevron-left"></b-icon>
  </div>
    <div class="client-image">
      <img src="https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png" />
    </div>
    <div class="client-info">
      <h4>{{ client.name  }}</h4>
      <h5>{{ client.type  }}</h5>
    </div>
  </div>
</template>
<script>

export default {
  data: () => ({
    client: {
      name: 'Prita Sharma',
      type: 'Skin'
    }
  }),
}
</script>

<style scoped>
.client-profile .client-image {
  background: rgb(197, 140, 251);
  background: linear-gradient(
    90deg,
    rgba(197, 140, 251, 1) 0%,
    rgba(150, 115, 250, 1) 100%
  );
  line-height: 1;
}
.client-profile .client-image {
    line-height: 1;
    position: relative;
    z-index: 4;
}

.client-info {
    padding: 15px 25px;
    margin-top: -15px;
    background: #ffffff;
    border-radius: 25px;
    z-index: 99999;
    position: relative;
}
</style>