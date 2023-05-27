<template>
  <div class="complete-profile page-view">
    <div class="speaker" style="display: flex;justify-content: space-between;width: 13rem;box-shadow: 0 0 13px #0000003d;border-radius: 5px;">
         <p id="action" style="color: grey;font-weight: 800; padding: 0; padding-left: 2rem;"></p>
         <button onclick="runSpeechRecog()" style="border: transparent;padding: 0 0.5rem;">
            Speech
         </button>
      </div>
    <h3 id="output" class="hide"></h3>
  </div>
</template>
<script lang="ts">

export default {
  data: () => ({
      stepsForm: [
        {
          name: 'Dietary Habits',
          questions: [
            {
              name: 'What does your typical daily diet look like?',
              answers: ['Vegetarian', 'Non-Vegeterian', 'Paleo','Low Carb or Ketogenic','Intermittent','Gluten Free']
            },
            {
              name: 'How often do you eat out or consume processed foods?',
              answers: ['Very less', 'Frequently', 'Very often']
            }
          ]
        },
        {
          name: 'Eating Patterns',
          questions: [
            {
              name: 'Do you have regular meal times or do you tend to graze throughout the day?',
              answers: ['Yes, I have meals on time regularly', 'No. My schedule is messed up.']
            },
            {
              name: 'How often do you snack, and what do you usually snack on?',
              answers: []
            },
            {
              name: 'Are there any specific foods or food groups you avoid?',
              answers: []
            }
          ]
        },
        {
          name: 'Lifestyle and Activity',
          questions: [
            {
              name: 'What is your occupation or daily activity level?',
              answers: []
            },
            {
              name: 'Do you engage in any physical exercise or sports? If so, what type and frequency?',
              answers: []
            },
            {
              name: 'Do you have any specific lifestyle factors that may influence your nutrition, such as travel or irregular work hours?',
              answers: []
            },
            
          ]
        },
        {
          name: 'Goals and Motivation',
          questions: [
            {
              name: 'What are your health goals or reasons for seeking nutritional guidance?',
              answers: []
            },
            {
              name: 'Are you looking to manage your weight, improve energy levels, address specific health concerns, or enhance athletic performance?',
              answers: []
            }
          ]
        }
      ]
  }),
}
</script>

