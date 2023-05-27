<template>
  <div class="client-home client-home-view page-view">
    <div class="page-heading">
    <h3>We're delighted to have you onboarded. Let's get begin!</h3>
    <h4>Here are some exclusive perks for you.</h4>
  </div>
    <div class="gradient-bg one-min-test">
        <router-link to="/assessment"></router-link>
        <h4>One minute quick health assessment</h4>
        <p>This handy assessment helps you in understanding how nourished you are.</p>
    </div>
    <div class="gradient-bg free-consultation">
        <router-link to="/consultation"></router-link>
        <h4>Free Consultation</h4>
        <p>Check in with our top nutrionists for guidance.</p>
    </div>
    <div class="home-content">
    <h4 class="side-lines-header">NUTRIONISTS</h4>
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
<style>
.client-home {
  padding:30px 15px;
  padding-bottom: 80px;
}

.client-home .page-heading h3 {
    font-size: 26px;
    text-align: left;
    font-weight: 500;
    margin-bottom: 15px;
}

.client-home .page-heading h4 {
    font-size: 20px;
    color: #9d9c9c;
    margin-bottom: 30px;
}

.client-home .gradient-bg h4 {
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1.25;
}

.client-home .gradient-bg {
    text-align: left;
}

.client-home .gradient-bg{
  background: rgb(197,140,251);
  background: linear-gradient(90deg, rgba(197,140,251,1) 0%, rgba(150,115,250,1) 100%);
  padding:20px 15px;
  border-radius: 15px;
  margin-bottom: 20px;
}

.client-home .gradient-bg p {
    font-size: 16px;
    color: #f1f1f1;
}
.client-home .gradient-bg {
    position: relative;
}

.client-home .gradient-bg a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
}
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
<script>
export default {
  name: 'ClientHomeView',
  components: {
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
