<template>
  <div id="ocm-wwu__app">
    <router-view v-on:sectionDone="sectionComplete($event)"></router-view>
    <router-view name="progress"
                 :contact-complete="contactComplete"
                 :project-complete="projectComplete"
                 :services-complete="servicesComplete"
                 :submit-complete="submitComplete"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      contactComplete: false,
      projectComplete: false,
      servicesComplete: false,
      submitComplete: false
    }
  },
  methods: {
    /**
     * Changes one of the complete variables to true
     *
     * @param {Object} event - The event object passed up
     */
    sectionComplete(event)
    {
      if (event.section === 'contact') {
        this.contactComplete = event.finished;
      } else if (event.section === 'project') {
        this.projectComplete = event.finished;
      } else if (event.section === 'services') {
        this.servicesComplete = event.finished;
      } else if (event.section === 'submit') {
        this.submitComplete = event.finished;
      }
    }
  }
};
</script>

<style>

</style>
