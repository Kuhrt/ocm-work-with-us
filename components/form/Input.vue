<template lang="pug">
  div(class="ocm-wwu-project-form__input" v-if="field.type === 'text'")
    p.ocm-wwu-project__question {{ field.text }}
    input(type="text" class="ocm-wwu-project__placeholder" v-model="inputValue" @focus="clearInput($event)" v-on:input="updateFormValue($event.target)" v-on:keyup="clickContinue($event)")
  div(class="ocm-wwu-project-form__input" v-else-if="field.type === 'email'")
    p.ocm-wwu-project__question {{ field.text }}
    input(type="email" class="ocm-wwu-project__placeholder" v-model="inputValue" @focus="clearInput($event)" v-on:input="updateFormValue($event.target)" v-on:keyup="clickContinue($event)")
  div(class="ocm-wwu-project-form__input" v-else-if="field.type === 'radio'")
    div.ocm-wwu-project__question--container
      p.ocm-wwu-project__question {{ field.text }}
    div.ocm-wwu-project__selections
      div(v-for="(option, index) in field.options" class="ocm-wwu-project-form__radio")
        input(type="radio"
              :name="field.step"
              :id="(field.step + index)"
              class="project__type"
              :value="option"
              :v-model="field.step"
              :checked="isChecked(field.step, option)"
              v-on:change="updateFormValue($event.target)"
             )
        label(:for="(field.step + index)"
              v-bind:class="{project__type: true, selected: isChecked(field.step, option)}"
             ) {{ option }}
  div(class="ocm-wwu-project-form__input" v-else-if="field.type === 'checkbox' && field.step != 'projectServices'")
    div.ocm-wwu-project__question--container
      p.ocm-wwu-project__question {{ field.text }}
    div.ocm-wwu-project__selections
      div(v-for="(option, index) in field.options" class="ocm-wwu-project-form__check")
        input(type="checkbox"
              :name="field.step"
              :id="(field.step + index)"
              class="project__type"
              :value="option"
              :v-model="field.step"
              :checked="isChecked(field.step, option)"
              v-on:change="updateFormValue($event.target)"
             )
        label(:for="(field.step + index)"
              v-bind:class="{project__type: true, selected: isChecked(field.step, option)}"
             ) {{ option }}
  div(class="ocm-wwu-project-form__input" v-else-if="field.type === 'checkbox' && field.step === 'projectServices'")
    div.ocm-wwu-project__question--container
      p.ocm-wwu-project__question {{ field.text }}
    div.ocm-wwu-project__selections(v-if="this.projectCategory.length > 0")
      div(
          v-for="(option, index) in field.options"
          v-if="inArray(option.title, projectCategory)"
          class="ocm-wwu-project-form__services"
         )
        h3 {{ option.title }}
        div(v-for="(service, index) in option.services" class="ocm-wwu-project-form__check")
          input(type="checkbox"
                :name="field.step"
                :id="(field.step + option.title[0] + option.title[1] + index)"
                class="project__type"
                :value="service"
                :v-model="field.step"
                :checked="isChecked(field.step, service)"
                v-on:change="updateFormValue($event.target)"
               )
          label(:for="(field.step + option.title[0] + option.title[1] + index)"
                v-bind:class="{project__type: true, selected: isChecked(field.step, service)}"
               ) {{ service }}
    div.ocm-wwu-project__selections(v-else)
      h3 Please choose one or more categories
       router-link(to="/project/category")  here
       |  to see what services we can offer.
</template>

<script>
export default {
  name: 'form-input',
  props: {
    field: {
      type: Object,
      required: true
    },
    contactName: {
      type: String
    },
    contactEmail: {
      type: String
    },
    department: {
      type: String
    },
    projectName: {
      type: String
    },
    projectType: {
      type: String
    },
    projectCategory: {
      type: Array
    },
    projectServices: {
      type: Array
    }
  },
  data () {
    return {
      inputValue: '',
      lastOtherValue: '',
      otherInputs: [
        'Other',
        'Other',
        'Other',
        'Other'
      ]
    }
  },
  created () {
    if (this.field) {
      this.inputValue = this.getInputValue(this.field.step);
    }
  },
  watch: {
    field (to, from) {
      this.inputValue = this.getInputValue(this.field.step);
    },
    '$route' (to, from) {

    }
  },
  methods: {
    /**
     * Gets the right value to put in an input field
     *
     * @param  {string} step  - The step the form is on
     * @return {string} value - The matched data sent down from Form.vue
     */
    getInputValue (step) {
      let value = '';

      if (step === 'name') {
        value = this.contactName;
      } else if (step === 'email') {
        value = this.contactEmail;
      } else if (step === 'department') {
        value = this.department;
      } else if (step === 'projectName') {
        value = this.projectName;
      }

      return value;
    },
    /**
     * Emits the event that a form value has been updated
     *
     * @param {Object} target - An object that has the new value and step the form is on
     */
    updateFormValue (target) {
      this.$emit(`updateFormValue`, {'value': target.value, data: this.field.step});
    },
    /**
     * Checks or unchecks a box if it needs to be
     *
     * @param  {String} data      - The property to look through
     * @param  {String} value     - The value of the input to match
     * @return {Bool}   isChecked - Whether or not the box should be checked
     */
    isChecked(data, value) {
      let isChecked = false;

      if ($.inArray(value, this[data]) >= 0 && data != 'projectType') {
        isChecked = true;
      } else if (data === 'projectType' && value === this[data]) {
        isChecked = true;
      }

      return isChecked;
    },
    /**
     * Deletes all the text in an input if it's still the placeholder text
     *
     * @param {Object} $event - The Vue event sent from focusing an input
     */
    clearInput($event) {
      const placeholders = ['Name', 'Email@ttu.edu', 'Department / College', 'Project Name', 'Other'];
      const value = $($event.target).val();

      // If the value of the input is one of the placeholders, clear it
      if ($.inArray(value, placeholders) >= 0) {
        // Clearing the input
        $($event.target).val('');
      }
    },
    /**
     * Clicks the continue button
     *
     * @param {Object} $event - The Vue event sent from hitting enter
     */
    clickContinue($event) {
      if($event.key === 'Enter') {
        // Clicking the button
        document.querySelector('.project__next').click();
        // Deselecting the input
        if ($('.ocm-wwu-project-form__input input[type="text"]').length) {
          $('.ocm-wwu-project-form__input input[type="text"]').blur();
        } else if ($('.ocm-wwu-project-form__input input[type="email"]')) {
          $('.ocm-wwu-project-form__input input[type="email"]').blur();
        }
      }
    },
    /**
     * Checks if an value is in an array
     *
     * @param  {String|Int} value   - The value to check
     * @param  {Array}      array   - The array to look in
     * @return {Bool}       inArray - If it's in the array
     */
    inArray(value, array) {
      let inArray = false;
      let test = '';

      if (value === 'Print Design' || value === 'Digital Design') {
        test = 'Design';
      } else {
        test = value
      }

      if ($.inArray(test, array) >= 0) {
        inArray = true;
      }

      return inArray;
    },
    /**
     * Adds the selected class to the 'Other' input
     *
     * @param {Object} $event - The event object
     */
    otherSelected($event) {
      const element = $($event.currentTarget);

      if ($event.type === 'focus' && element.val() != 'Other') {
        element.parent('.ocm-wwu-project-form-services__option').addClass('selected');
      } else if ($event.type === 'blur' && element.val() != '' && element.val() != 'Other') {
        element.parent('.ocm-wwu-project-form-services__option').addClass('selected');

        // Sending data to main form object
        this.sendOtherData(element.val());

        // Setting this as the last value that was in the other block
        this.lastOtherValue = element.val();
      } else {
        element.parent('.ocm-wwu-project-form-services__option').removeClass('selected');

        this.sendOtherData(element.val());
        element.val('Other');
        this.lastOtherValue = 'Other';
      }

      if ($event.type === 'focus') {
        // Clears the input if it's still the default value
        this.clearInput($event);
      }
    },
    sendOtherData(value) {
      // Removing the last inputted other if there was one
      if (this.lastOtherValue != '' && this.lastOtherValue != 'Other') {
        this.$emit(`updateFormValue`, {'value': this.lastOtherValue, data: 'projectServices'});
      }

      if (value != '' && value != 'Other') {
        // Updating the list with the new value
        this.$emit(`updateFormValue`, {'value': value, data: 'projectServices'});
      }
    }
  }
}
</script>

<style lang="scss">
</style>
