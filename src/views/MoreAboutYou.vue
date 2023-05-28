<template>
  <div class="complete-profile page-view">
      <div class="gradient-bg page-heading">Schedule a Consultation</div>
      <div class="sections-container">
      <div class="section-detail" :key="steps[0].name">
        <h3>{{ steps[0].label  }}</h3>
        <h4 v-html="steps[0].questions"></h4>
        <b-input v-model="typicalDailyDiet"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[0].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[1].name">
        <!-- <h3>{{ steps[1].label  }}</h3> -->
        <h4 v-html="steps[1].questions"></h4>
        <b-input v-model="processedFoods"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[1].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[2].name">
        <h3>{{ steps[2].label  }}</h3>
        <h4 v-html="steps[2].questions"></h4>
        <b-select v-model="mealsRegular" placeholder="Select">
                <option
                    value="Yes, I have regular meals."
                    :key="1">
                    Yes, I have regular meals.
                </option>
                <option
                    value="Nope, I don't have regular meals."
                    :key="2">
                    Nope, I don't have regular meals.
                </option>
            </b-select>
      </div>
      <div class="section-detail" :key="steps[3].name">
        <!-- <h3>{{ steps[3].label  }}</h3> -->
        <h4 v-html="steps[3].questions"></h4>
        <b-input v-model="snacking"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[3].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[4].name">
        <!-- <h3>{{ steps[3].label  }}</h3> -->
        <h4 v-html="steps[4].questions"></h4>
        <b-input v-model="foodToAvoid"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[4].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[5].name">
        <h3>{{ steps[5].label  }}</h3>
        <h4 v-html="steps[5].questions"></h4>
        <b-input v-model="dailyActivityLevel"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[5].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[6].name">
        <!-- <h3>{{ steps[3].label  }}</h3> -->
        <h4 v-html="steps[6].questions"></h4>
        <b-input v-model="physicalActivity"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[6].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[7].name">
        <h4 v-html="steps[7].questions"></h4>
        <b-select v-model="influenceNutrition" placeholder="Select">
                <option
                    value="Yes, it's compromised."
                    :key="1">
                    Yes, it's compromised.
                </option>
                <option
                    value="Nope, it's normal."
                    :key="2">
                    Nope, I don't have regular meals.
                </option>
            </b-select>
      </div>
      <div class="section-detail" :key="steps[8].name">
        <h3>{{ steps[8].label  }}</h3>
        <h4 v-html="steps[8].questions"></h4>
        <b-input v-model="sleepQualityAndStress"></b-input>
        <div class="mic-icon" @click="runSpeechRecog(steps[8].name)"><b-icon size="is-medium" icon="microphone"></b-icon></div>
      </div>
      <div class="section-detail" :key="steps[9].name">
        <h3>{{ steps[9].label  }}</h3>
        <h4 v-html="steps[9].questions"></h4>
        <b-select v-model="waterConsumption" placeholder="Select">
                <option
                    value="Less than 1 litre."
                    :key="1">
                    Less than 1 litre
                </option>
                <option
                    value="1-2 litres"
                    :key="2">
                    1-2 litres
                </option>
                <option
                    value="2-3 litres"
                    :key="3">
                    2-3 litres
                </option>
                <option
                    value="More than 3 litres"
                    :key="4">
                    More than 3 litres
                </option>
            </b-select>
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
      typicalDailyDiet: '',
      processedFoods: '',
      mealsRegular: null,
      snacking: '',
      foodToAvoid: '',
      dailyActivityLevel: '',
      physicalActivity: '',
      eatingPatterns: '',
      lifestyleAndActivity: '',
      goalsAndMotivation: '',
      influenceNutrition: null,
      sleepQualityAndStress: '',
      waterConsumption: '',
      steps: [
        {
          name: 'typicalDailyDiet',
          label: 'Dietary Habits',
          questions: 'What does your typical daily diet look like? <br><span>Eg., I have 3 meals a day and no snacks in between.</span>'
        },
        {
          name: 'processedFoods',
          label: 'Dietary Habits',
          questions: 'How often do you eat out or consume processed foods? <br><span>Eg., Every alternate day.</span>'
        },
        {
          name: 'mealsRegular',
          label: 'Eating Patterns',
          questions: 'Do you have regular meal times or do you tend to graze throughout the day?' 
        },
        {
          name: 'snacking',
          label: 'Eating Patterns',
          questions: 'How often do you snack, and what do you usually snack on?' 
        },
        {
          name: 'foodToAvoid',
          label: 'Eating Patterns',
          questions: 'Are there any specific foods or food groups you avoid?'
        },
        {
          name: 'dailyActivityLevel',
          label: 'Lifestyle and Activity',
          questions: 'What is your occupation or daily activity level?' 
        },
        {
          name: 'physicalActivity',
          label: 'Lifestyle and Activity',
          questions: 'Do you engage in any physical exercise or sports? If so, what type and frequency?' 
        },
        {
          name: 'influenceNutrition',
          label: 'Lifestyle and Activity',
          questions: 'Do you have any specific lifestyle factors that may influence your nutrition, such as travel or irregular work hours?' 
        },
        {
          name: 'sleepQualityAndStress',
          label: 'Sleep and Stress',
          questions: 'How is your sleep quality and duration?' 
        },
        {
          name: 'waterConsumption',
          label: 'Hydration',
          questions: 'How much water do you typically consume in a day?' 
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
    font-weight: 600;
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
    font-weight: 600;
    margin-bottom: 5px;
    padding: 0px 0px;
    border-radius: 5px;
    margin-bottom: 15px;
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


.complete-profile .section-detail .icon {
    color: #9673fa;
}

.complete-profile .section-detail h4 span {
    font-size: 16px;
    color: #7e7c7c;
}

.complete-profile span.select {
    display: block;
    width: 100%;
    font-size: 16px;
}

.complete-profile span.select select {
    width: 100%;
    font-size: 18px;
}

</style>