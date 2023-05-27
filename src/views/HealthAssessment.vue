<template>
  <div class="assessment page-view">
  <img src="@/assets/assessment.png"/>

    <h1>Get a free assessment</h1>
    <p>Select all the symptoms you are experiencing.</p>
    <div class="steps">
      <div v-if="step == 1" class="step-1">
        <h3>Behaviour</h3>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="decreased-performance">Decreased work and school performance</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="exhaustion">Exhaustion</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="dizziness">Dizziness</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="weakness">Weakness</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="sleepiness">Sleepiness</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="irritability">Irritability</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="confusion">Confusion</b-checkbox>
        </b-field>
      </div>
      <div v-if="step == 2" class="step-2">
        <h3>Digest</h3>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="bleeding-gums">Bleeding Gums</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="loss-of-appetite">Loss of Appetite</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="sore-throat">Sore Throat</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="constipation">Constipation</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="diarrhea">Diarrhea</b-checkbox>
        </b-field>
      </div>
      <div v-if="step == 3" class="step-3">
        <h3>Skin</h3>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="brittle-nails">Brittle Nails</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="cracked-lips">Cracked Lips</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="dry-hair">Dry Hair</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="greasy-skin">Greasy Skin</b-checkbox>
        </b-field>
        <b-field>
            <b-checkbox  v-model="symptoms" native-value="hair-loss">Hair Loss</b-checkbox>
        </b-field>
      </div>
      <div v-if="step > 0" class="next-button">

        <b-button v-if="step > 0 && step < 3" @click="step=step+1" type="is-primary">NEXT</b-button>
        <b-button v-if="step == 3" @click="submitTest" type="is-primary">EVALUATE TEST</b-button>
      </div>
      <div v-else>
        <div>
        <Doughnut :data="chartData" :options="options" />
      </div>
      <b-button type="is-primary">DOWNLOAD REPORT</b-button>

      </div>
    </div>
  </div>
</template>
<script>
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

import { Doughnut } from 'vue-chartjs'


export default {
  components: {
    Doughnut
  },
  data: () => ({
    symptoms: [],
    step: 1,
    chartData: {
  labels: [
    'Red',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
    ],
    hoverOffset: 4
  }]
},
  options:  {
  responsive: true,
  maintainAspectRatio: false
}

  }),
  methods: {
    submitTest() {
      this.step = 0;
      this.chartData.datasets[0].data = [];
      this.chartData.datasets[0].data = [100-parseInt((this.symptoms.length/18)*100), parseInt((this.symptoms.length/18)*100)]
    },
    sendEmail() {
    const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-ElasticEmail-ApiKey": "FC3DA4B722997FB3A554E885752D7E8992DAD6C1E80DA607A6984860659E76880EEE57D8F7B1A53F979170F95143FAC3" },
    body: JSON.stringify({
  "Recipients": {
    "To": [
      "renukapoluruv@gmail.com"
    ],
  },
  "Content": {
    "Body": [
      {
        "ContentType": "HTML",
        "Content": "<h1>Hi</h1>",
      }
    ]
  },
  "From": "renukapoluruv@gmail.com",
  "ReplyTo": "renukapoluruv@gmail.com",
  "Subject": "Hello!",
})
  };
  fetch("https://api.elasticemail.com/v4/emails/transactional", requestOptions)
      .then(response => response.json())
      .then(data => (console.log('send api response'+data)));
  }
  },

    
}
</script>
<style>
.assessment h1 {
    font-size: 28px;
    font-weight: 600;
    text-transform: uppercase;
}

.assessment {
    padding: 30px 20px;
    padding-bottom: 80px;
}

.assessment .steps h3 {
    font-size: 22px;
    font-weight: 500;
}

.assessment .steps {
    margin: 20px 0;
}

.assessment .steps h3 {
    margin-bottom: 20px;
}

.assessment .steps .field {
    text-align: left;
}

.assessment button.button.is-primary {
    display: block;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 35px;
    background:#9673fa;
}
</style>