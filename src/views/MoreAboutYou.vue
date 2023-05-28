<template>
  <div class="complete-profile page-view">
      <div class="gradient-bg page-heading">Schedule a Consultation</div>
      <div class="sections-container">
      <div class="section-detail" :key="steps[0].name">
        <h3>{{ steps[0].label  }}</h3>
        <h4 v-html="steps[0].questions"></h4>
        <b-input v-model="dietaryHabits"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[0].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[1].name">
        <h3>{{ steps[1].label  }}</h3>
        <h4 v-html="steps[1].questions"></h4>
        <b-input v-model="eatingPatterns"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[1].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[2].name">
        <h3>{{ steps[2].label  }}</h3>
        <h4 v-html="steps[2].questions"></h4>
        <b-input v-model="lifestyleAndActivity"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[2].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[3].name">
        <h3>{{ steps[3].label  }}</h3>
        <h4 v-html="steps[3].questions"></h4>
        <b-input v-model="goalsAndMotivation"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[3].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>

      <b-button type="is-primary">SCHEDULE CONSULTATION</b-button>
    </div>
    
  </div>
</template>
<script lang="ts">

export default {
  data: () => ({
    runtimeTranscription_: "",
       transcription_: [],
       lang_: "en-IN",
      dietaryHabits: '',
      eatingPatterns: '',
      lifestyleAndActivity: '',
      goalsAndMotivation: '',
      steps: [
        {
          name: 'dietaryHabits',
          label: 'Dietary Habits',
          questions: '1. What does your typical daily diet look like?<br>2. How often do you eat out or consume processed foods?'
        },
        {
          name: 'eatingPatterns',
          label: 'Eating Patterns',
          questions: '1. Do you have regular meal times or do you tend to graze throughout the day?<br>2. How often do you snack, and what do you usually snack on?<br>3. Are there any specific foods or food groups you avoid?' 
        },
        {
          name: 'lifestyleAndActivity',
          label: 'Lifestyle and Activity',
          questions: '1. What is your occupation or daily activity level?<br>2. Do you engage in any physical exercise or sports? If so, what type and frequency?<br>3. Do you have any specific lifestyle factors that may influence your nutrition, such as travel or irregular work hours?' 
        },
        {
          name: 'goalsAndMotivation',
          label: 'Goals and Motivation',
          questions: '1. What are your health goals or reasons for seeking nutritional guidance?<br>2. Are you looking to manage your weight, improve energy levels, address specific health concerns, or enhance athletic performance?' 
        }
      ]
  }),
  methods: {
    getStepName(name) {
      return name;
    },
    runSpeechRecog(fieldName) {
      window.SpeechRecognition =
    window.SpeechRecognition || 
    window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    recognition.lang = this.lang_;
    recognition.start();
    recognition.interimResults = true;

    // event current voice reco word
    recognition.addEventListener("result", event => {      
      var text = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
      this.runtimeTranscription_ = text;
    });
    // end of transcription
    recognition.addEventListener("end", () => {
      this.transcription_.push(this.runtimeTranscription_);
      this.runtimeTranscription_ = "";
      recognition.stop();
      this[fieldName] = this.transcription_.join(' ');
      this.transcription_= [];
    });
     recognition.start();
    }
  }
}
</script>

<style >
.complete-profile {
  padding:0px 0px ;
  padding-bottom: 80px;
}
.complete-profile .section-detail h3 {
    text-align: left;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 5px;
}

.complete-profile .sections-container {
  padding:10px 15px;
}

.complete-profile .section-detail h4 {
    font-size: 20px;
    margin-bottom: 15px;
}

.complete-profile .section-detail input.input {
    font-size: 20px;
}

.complete-profile .section-detail {
    position: relative;
}

.complete-profile .section-detail .mic-icon {
    position: absolute;
    bottom: 5px;
    right: 5px;
}


.complete-profile .section-detail {
    position: relative;
    margin-top: 30px;
}

.complete-profile .section-detail h3 {
    text-align: left;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 5px;
    background: rgb(197,140,251);
    background: linear-gradient(90deg, rgba(197,140,251,1) 0%, rgba(150,115,250,1) 100%);
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 25px;
}

.complete-profile .gradient-bg.page-heading {
    background: rgb(197,140,251);
    background: linear-gradient(90deg, rgba(197,140,251,1) 0%, rgba(150,115,250,1) 100%);
    border-radius: 5px;
    text-align: left;
    padding: 35px 15px;
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
}


.complete-profile .sections-container .section-detail:nth-child(5n+1) h3 {
  
  background: #f1f1f1;
}
.complete-profile .sections-container .section-detail:nth-child(5n+2) h3 {
  background:#FFC1C1;
}
.complete-profile .sections-container .section-detail:nth-child(5n+3) h3 {
  background:#DCECE0;
}
.complete-profile .sections-container .section-detail:nth-child(5n+4) h3 {
  background:#FFF2C6;
}
.complete-profile .sections-container .section-detail:nth-child(5n+5) h3 {
  background:#D9EBFF;
}

.complete-profile .section-detail .icon {
    color: #9673fa;
}

</style>