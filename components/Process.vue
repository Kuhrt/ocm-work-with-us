<template lang="pug">
  section.ocm-wwu__process
    p.ocm-wwu-process__guide Tap numbers to explore our process
    div.ocm-wwu-process__info
      h1 Our Creative Process
      transition(name="fade")
        h2(v-if="stepHeading != ''") {{ stepHeading }}
      transition(name="fade")
        p {{ currentText }}
      div.project__next--container
        router-link(class="project__next" to="project/contact/name") Start A Project
    div.ocm-wwu-process__steps
      div(class="ocm-wwu-process__step" v-for="(step, index) in steps" @click="updateStepText($event.target, step)")
        p.ocm-wwu-process-step__number {{ index + 1 }}
        div.ocm-wwu-process-step__details
          h2 {{ step.name }}
          p {{ step.text }}
</template>

<script>
export default {
  name: 'process',
  data () {
    return {
      steps: [
        {
          name: 'What do you need?',
          text: 'From photography to event campaigns we have the resources to help your office at no cost to you.'
        },
        {
          name: 'Fill out our form.',
          text: 'Use our interactive form to submit each project you need from us.'
        },
        {
          name: 'Lets chat.',
          text: 'After your submission we’ll reach out to you for a meeting or phone call to discuss and plan your project.'
        },
        {
          name: 'We get to work.',
          text: 'We are always looking forward with design and marketing trends to make sure your project will stand out in the crowd.'
        },
        {
          name: 'Love the Results!',
          text: ''
        }
      ],
      currentText: '',
      stepHeading: ''
    };
  },
  methods: {
    /**
     * Updates the text for the step the user clicked on
     *
     * @param {Object} element - The element that was clicked
     * @param {Object} step    - The step object
     */
    updateStepText(element, step) {
      if ($(window).width() < 1200) {
        this.currentText = step.text;
        this.stepHeading = step.name;

        // Adding active class to numbers
        $('.ocm-wwu-process-step__number').removeClass('is-active');
        $(element).addClass('is-active');
      }
    }
  }
};
</script>

<style scoped lang="scss">

</style>
