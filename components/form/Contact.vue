<template lang="pug">
  section.ocm-wwu-project__contact
    div.ocm-wwu-project__loader(v-if="loading")
      h2 Loading...
    transition(name="fade")
      form-input(v-if="field"
                 :field="field"
                 :contact-name="contactName"
                 :contact-email="contactEmail"
                 :department="department"
                 v-on:updateFormValue="updateFormValue($event)"
                )
    div.project__next--container
      router-link(:to="nextStep" class="project__next") Continue
</template>

<script>
import FormInput from './Input.vue';
export default {
  name: 'contact',
  props: ['contactName', 'contactEmail', 'department'],
  data () {
    return {
      loading: false,
      field: null,
      fields: {
        name: {
          text: 'What is your name?',
          type: 'text'
        },
        email: {
          text: `Hi ${this.contactName}! How can we get in touch with you?`,
          type: 'email'
        },
        department: {
          text: 'Great! What department is this for?',
          type: 'text'
        }
      }
    };
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
          nextStep = `/project/contact/${fieldsKeys[stepNumber + 1]}`;
        } else {
          nextStep = `/project/name`;
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
    '$route': 'getFormField',
    contactName: 'updateEmailText'
  },
  methods: {
    /**
     * Gets the correct form field
     */
    getFormField () {
      // Turning the loader on
      this.loading = true;

      const url = this.$route.params.field;
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
      } else {
        this.$router.push('/project/contact/name');
      }
    },
    updateFormValue (value) {
      this.$emit('updateFormValue', value);
    },
    updateEmailText() {
      this.fields.email.text = `Hi ${this.contactName}! How can we get in touch with you?`;
    }
  },
  components: {
    'form-input': FormInput
  }
}
</script>

<style lang="scss">
</style>
