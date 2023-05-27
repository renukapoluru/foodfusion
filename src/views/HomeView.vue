<template>
  <div class="home page-view">
    <div class="home-content">
    <h4 class="side-lines-header">NEW CLIENTS</h4>
    <div class="clients">
      <div class="client" v-for="client in clients" :key="client.name">
          <router-link to="/client"></router-link>
          <div class="client-image">
            <img v-bind:src="client.image" :alt="client.name"/>
          </div>
          <div class="client-info">
          <h4>{{  client.name  }}</h4>
          <h5>{{ client.category  }}</h5>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data: () => ({
    clients: [
      {
        id: 1,
        name: 'John Doe',
        age: '27',
        category: 'Skin Care',
        signedUpOn: '12th Apr 2023',
        image: "https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png"
      },
      {
        id: 2,
        name: 'Prita Sharma',
        age: '32',
        category: 'Pregnancy & Lactation',
        signedUpOn: '11th Apr 2023',
        image: "https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png"
      },
      {
        id: 3,
        name: 'Ysh Doe',
        age: '27',
        category: 'Weight Loss',
        signedUpOn: '12th Apr 2023',
        image: "https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png"
      },
      {
        id: 1,
        name: 'John Doe',
        age: '27',
        category: 'Weight Loss',
        signedUpOn: '12th Apr 2023',
        image: "https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png"
      },
      {
        id: 1,
        name: 'John Doe',
        age: '27',
        category: 'Weight Loss',
        signedUpOn: '12th Apr 2023',
        image: "https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png"
      },
      {
        id: 1,
        name: 'John Doe',
        age: '27',
        category: 'Weight Loss',
        signedUpOn: '12th Apr 2023',
        image: "https://i.ibb.co/txk3dtS/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-removebg-pr.png"
      },
    ]
  })
}
</script>
<style>
h4.side-lines-header {
    font-size: 22px;
    font-weight: 500;
    position: relative;
    /* overflow: hidden; */
    display: inline-block;
}

h4.side-lines-header:before {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    right: calc(100% + 10px);
    background: #929191;
    top: 0;
    bottom: 0;
    margin: auto;
}
h4.side-lines-header:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    left: calc(100% + 10px);
    background: #929191;
    top: 0;
    bottom: 0;
    margin: auto;
}

.home-content {
    width: calc(100% - 30px);
    overflow: hidden;
    margin: auto;
}
.clients {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.clients > .client {
    width: 48%;
    margin-bottom: 25px;
    position: relative;
}

.clients > .client a {
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
}

.clients .client .client-image {
    line-height: 1;
    background: #f1f1f1;
    border-radius: 10px;
    margin-bottom: 10px;
}

.clients > .client:nth-child(5n+1) .client-image {
  
  background: #f1f1f1;
}
.clients > .client:nth-child(5n+2) .client-image {
  background:#FFC1C1;
}
.clients > .client:nth-child(5n+3) .client-image {
  background:#DCECE0;
}
.clients > .client:nth-child(5n+4) .client-image {
  background:#FFF2C6;
}
.clients > .client:nth-child(5n+5) .client-image {
  background:#D9EBFF;
}

h4.side-lines-header {
    margin-bottom: 30px;
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