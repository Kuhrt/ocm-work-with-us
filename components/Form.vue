<template lang="pug">
  section.ocm-wwu-project__container
    transition(name="fade")
      router-view(:contact-name="contactName"
                  :contact-email="contactEmail"
                  :department="department"
                  :project-name="projectName"
                  :project-type="projectType"
                  :project-category="projectCategory"
                  :project-services="projectServices"
                  v-on:updateFormValue="updateValue($event)"
                  v-on:resetData="resetData"
                 )
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
      contactName: 'Name',
      contactEmail: 'Email@ttu.edu',
      department: 'Department / College',
      projectName: 'Project Name',
      projectType: '',
      projectCategory: [],
      projectServices: []
    };
  },
  watch: {
    '$route' (to, from) {
      // Contact Section
      if (this.contactName != '' && this.contactName != 'Name' && this.contactEmail != '' && this.contactEmail != 'Email@ttu.edu' && this.department != '' && this.department != 'Department / College') {
        this.$emit('sectionDone', {'section': 'contact', 'finished': true});
      } else {
        this.$emit('sectionDone', {'section': 'contact', 'finished': false});
      }

      // Project Section
      if (this.projectName != '' && this.projectName != 'Project Name' && this.projectType != '' && this.projectCategory.length > 0) {
        this.$emit('sectionDone', {'section': 'project', 'finished': true});
      } else {
        this.$emit('sectionDone', {'section': 'project', 'finished': false});
      }

      // Services Section
      if (this.projectServices.length > 0) {
        this.$emit('sectionDone', {'section': 'services', 'finished': true});
      } else {
        this.$emit('sectionDone', {'section': 'services', 'finished': false});
      }
    }
  },
  methods: {
    /**
     * Updates one of the data values on this component
     *
     * @param {Object} value - The event object sent up from a child component
     */
    updateValue (value) {
      if (value.data === 'name') {
        this.contactName = value.value;
      } else if (value.data === 'email') {
        this.contactEmail = value.value;
      } else if (value.data === 'department') {
        this.department = value.value;
      } else if (value.data === 'projectName') {
        this.projectName = value.value;
      } else if (value.data === 'projectType') {
        this.projectType = value.value;
      } else if (value.data === 'projectCategory') {
        // If the value is in the array, remove it. If not, add it.
        if (this.inList(this.projectCategory, value.value)) {
          // Removing the item
          this.projectCategory.splice($.inArray(value.value, this.projectCategory), 1);
        } else {
          // Adding the item
          this.projectCategory.push(value.value);
        }
      } else if (value.data === 'projectServices') {
        // If the value is in the array, remove it. If not, add it.
        if (this.inList(this.projectServices, value.value)) {
          // Removing the item
          this.projectServices.splice($.inArray(value.value, this.projectServices), 1);
        } else {
          // Adding the item
          this.projectServices.push(value.value);
        }
      } else if (value.data === 'submit') {
        this.$emit('sectionDone', {'section': value.data, 'finished': value.value});
      }
    },
    /**
     * Checks to see if a value is in an array
     *
     * @param  {String[]} array  - The array to check
     * @param  {String}   value  - The string to match in the array
     * @return {bool}     inList - Whether it matched or not
     */
    inList (array, value) {
      let inList = false;
      if ($.inArray(value, array) >= 0) {
        inList = true;
      }

      return inList;
    },
    /**
     * Resets the data on the object
     */
    resetData () {
      // Resets the form data
      this.contactName = 'Name',
      this.contactEmail = 'Email@ttu.edu',
      this.department = 'Department / College',
      this.projectName = 'Project Name',
      this.projectType = '',
      this.projectCategory = [],
      this.projectServices = []

      // Emits that submit step has not been completed
      this.$emit('sectionDone', {'section': 'submit', 'finished': false});
    }
  }
}
</script>

<style lang="scss">
  button {
    cursor: pointer;
  }
</style>
