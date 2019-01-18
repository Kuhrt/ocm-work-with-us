<template lang="pug">
  section.ocm-wwu-project__details
    div.ocm-wwu-project__loader(v-if="loading")
      h2 Loading...
    transition(name="fade")
      form-input(v-if="field"
                 :field="field"
                 :project-name="projectName"
                 :project-type="projectType"
                 :project-category="projectCategory"
                 :project-services="projectServices"
                 v-on:updateFormValue="updateFormValue($event)"
                )
    div.project__next--container
      router-link(:to="nextStep" class="project__next") Continue
</template>

<script>
import FormInput from './Input.vue';
export default {
  name: 'project',
  props: ['projectName', 'projectType', 'projectCategory', 'projectServices'],
  data () {
    return {
      loading: false,
      field: null,
      fields: {
        projectName: {
          text: 'Give your project a name.',
          type: 'text'
        },
        projectType: {
          text: 'What kind of project is this?',
          options: ['New Project', 'Full Redesign', 'Edit Existing'],
          type: 'radio'
        },
        projectCategory: {
          text: 'Select which categories you will need.',
          options: ['Design', 'Photography / Video', 'Social Media'],
          type: 'checkbox'
        },
        projectServices: {
          text: 'Add your project services.',
          options: [
            {
              title: 'Print Design',
              services: ['Banner', 'Brochure', 'Event Program', 'Flyer', 'Guide Book', 'Invitation', 'Postcard', 'Poster', 'Report']
            },
            {
              title: 'Digital Design',
              services: ['Email', 'Enewsletter', 'Evite', 'Website', 'Web Banner']
            },
            {
              title: 'Photography / Video',
              services: ['Campus', 'Events', 'Headshots', 'Spaces']
            },
            {
              title: 'Social Media',
              services: ['Advertising', 'Campaign', 'Consulting']
            }
          ],
          type: 'checkbox'
        }
      }
    }
  },
  computed: {
    nextStep: function () {
      let nextStep = '';
      let fieldsKeys = [];

      // Only run if there's something in the field data variable
      if (this.field) {

        // Adding all the keys in fields to an array
        $.each(this.fields, key => {
          fieldsKeys.push(key);
        });

        // Getting which step we're on
        const stepNumber = $.inArray(this.field.step, fieldsKeys);
        // Setting nextStep to the url of the next step
        if (stepNumber != fieldsKeys.length - 1) {
          let url = fieldsKeys[stepNumber + 1];
          url = url.slice(7).toLowerCase();
          nextStep = `/project/${url}`;
        } else {
          nextStep = `/project/submit`;
        }
      }

      return nextStep;
    }
  },
  created () {
    // Gets the correct form field to display
    this.getFormField();
  },
  watch: {
    '$route' (to, from) {
      this.getFormField();
    }
  },
  methods: {
    /**
     * Gets the correct form field
     */
    getFormField () {
      // Turning the loader on
      this.loading = true;

      // Create URL string to match field types
      let url = this.$route.params.field;
      url = 'project' + url.charAt(0).toUpperCase() + url.slice(1).toLowerCase();

      let match = false;

      // Looping through each key in the fields data variable and making sure the url matches one
      $.each(this.fields, (key, value) => {
        // If one matches, set match to true and break the loop
        if (key === url) {
          match = true;
          return false;
        }
      });

      // Set the field data variable to the url if there's a match or redirect to the first step, name
      if (match) {
        this.field = this.fields[url];
        this.field['step'] = url;
        this.loading = false;
      }
    },
    updateFormValue (value) {
      this.$emit('updateFormValue', value);
    }
  },
  components: {
    'form-input': FormInput
  }
}
</script>

<style lang="scss">
</style>
