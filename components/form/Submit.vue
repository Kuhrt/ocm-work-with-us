<template lang="pug">
  section.ocm-wwu-project__submit
    div.ocm-wwu-project__loader(v-if="loading")
      h2 Loading...
    div.ocm-wwu-project__submitting(v-if="!loading && !submitted")
      h1.ocm-wwu-project-submit__title(v-if="infoFilled") {{ projectName }}
      p(v-html="createSentence()")
      ul(v-if="infoFilled")
        li(v-for="service in projectServices") {{ service }}
      ul(v-else v-html="missingFields()")
      div.ocm-wwu-project-submit__comments(v-if="infoFilled")
        label Additional Comments
        textarea(v-model="comments")
      div.project__next--container(v-if="infoFilled")
        button(type="submit" @click="submitForm" class="project__next project__submit") Submit
    div.ocm-wwu-project__submitting(v-if="submitted")
      h1(v-if="formResponse.success") Thanks! We look forward to working with you!
      h1(v-else) Oops! There was a problem submitting your request
      p {{ formResponse.message }}
      div.project__next--container
        router-link(:to="{ path: '/project/contact/name' }" class="project__next" v-on:click.native="resetData") Start another project
</template>

<script>
export default {
  name: 'submit',
  props: ['contactName', 'contactEmail', 'department', 'projectName', 'projectType', 'projectCategory', 'projectServices'],
  data () {
    return {
      loading: false,
      submitted: false,
      formResponse: {
        success: false,
        message: ''
      },
      comments: ''
    }
  },
  computed: {
    infoFilled: function () {
      let isFilled = true;

      // Contact name
      if (this.contactName === '' || this.contactName === 'Name') {
        isFilled = false;
      }
      // Email
      if (this.contactEmail === '' || this.contactEmail === 'Email@ttu.edu') {
        isFilled = false;
      }
      // Department
      if (this.department === '' || this.department === 'Department / College') {
        isFilled = false;
      }
      // Project Name
      if (this.projectName === '' || this.projectName === 'Project Name') {
        isFilled = false;
      }
      // Project Type
      if (this.projectType === '') {
        isFilled = false;
      }
      // Project Category
      if (this.projectCategory.length === 0) {
        isFilled = false;
      }
      // Project Services
      if (this.projectServices.length === 0) {
        isFilled = false;
      }

      return isFilled;
    }
  },
  methods: {
    /**
     * Builds the sentence to confirm the details of the project
     *
     * @return {String} sentence
     */
    createSentence () {
      let sentence = 'A ';

      // If there has been no details entered
      if (!this.infoFilled) {
        sentence = `The full details have not been entered into the form. Please go back and fill in the following information:`;

        return sentence;
      }

      // Building the category section
      if (this.projectCategory.length > 1) {
        $.each(this.projectCategory, function(index, value) {
          if (index === 0) {
            sentence += `<span>`;
            sentence += value.toLowerCase();
            sentence += `</span> and `;
          } else {
            sentence += `<span>`;
            sentence += value.toLowerCase();
            sentence += `</span> `;
          }
        });
      } else {
        sentence += `<span>`;
        sentence += this.projectCategory[0].toLowerCase();
        sentence += `</span> `;
      }

      sentence += `based project that `;

      // Building the type section
      if (this.projectType === 'New Project') {
        sentence += `is a <span>new project</span>`;
      } else if (this.projectType === 'Full Redesign') {
        sentence += `needs a <span>full redesign</span>`;
      } else if (this.projectType === 'Edit Existing') {
        sentence += `needs some <span>edits</span>`;
      }

      sentence += ` that needs these services:`;

      return sentence;
    },
    /**
     * Submits the form at the end of the process
     *
     */
    submitForm () {
      const submitComponent = this;
      submitComponent.loading = true;
      // Using jQuery's post function to submit the form with /includes/project-form.php handling everything
      $.post("/communications/includes/work-with-us/project-form.php", {
              contactName    : this.contactName,
              contactEmail   : this.contactEmail,
              department     : this.department,
              projectName    : this.projectName,
              projectType    : this.projectType,
              projectCategory: this.projectCategory,
              projectServices: this.projectServices,
              comments       : this.comments
            }, function(data) {
              const response = JSON.parse(data);

              submitComponent.loading = false;
              submitComponent.submitted = true;
              submitComponent.$emit(`updateFormValue`, {'value': response.success, data: 'submit'});
              submitComponent.formResponse.success = response.success;
              submitComponent.formResponse.message = response.message;
            });
    },
    /**
     * Checks which fields are missing and returns an array with them
     *
     * @return {String} html - The list html for the missing fields
     */
    missingFields () {

      // Building the HTML
      let html = ``;
      if (this.contactName === '' || this.contactName === 'Name') {
        html += `<li>Contact Name</li>`;
      }
      if (this.contactEmail === '' || this.contactEmail === 'Email@ttu.edu') {
        html += `<li>Contact Email</li>`;
      }
      if (this.department === '' || this.department === 'Department / College') {
        html += `<li>Department</li>`;
      }
      if (this.projectName === '' || this.projectName === 'Project Name') {
        html += `<li>Project Name</li>`;
      }
      if (this.projectType === '') {
        html += `<li>Project Type</li>`;
      }
      if (this.projectCategory.length === 0) {
        html += `<li>Project Category</li>`;
      }
      if (this.projectServices.length === 0) {
        html += `<li>Project Services</li>`;
      }

      return html;
    },
    /**
     * Resets the data in the Vue instance
     */
    resetData() {
      this.$emit('resetData', 'reset');
    }
  }
}
</script>

<style lang="scss">
</style>
