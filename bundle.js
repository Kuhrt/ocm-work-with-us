(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'app',
  data: function data() {
    return {
      contactComplete: false,
      projectComplete: false,
      servicesComplete: false,
      submitComplete: false
    };
  },

  methods: {
    sectionComplete: function sectionComplete(event) {
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
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"ocm-wwu__app"}},[_c('router-view',{on:{"sectionDone":function($event){_vm.sectionComplete($event)}}}),_vm._v(" "),_c('router-view',{attrs:{"name":"progress","contact-complete":_vm.contactComplete,"project-complete":_vm.projectComplete,"services-complete":_vm.servicesComplete,"submit-complete":_vm.submitComplete}})],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b843574", __vue__options__)
  } else {
    hotAPI.reload("data-v-4b843574", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":12}],2:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("/* line 129, stdin */\nbutton {\n  cursor: pointer; }")
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'form',
  data: function data() {
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
    '$route': function $route(to, from) {
      if (this.contactName != '' && this.contactName != 'Name' && this.contactEmail != '' && this.contactEmail != 'Email@ttu.edu' && this.department != '' && this.department != 'Department / College') {
        this.$emit('sectionDone', { 'section': 'contact', 'finished': true });
      } else {
        this.$emit('sectionDone', { 'section': 'contact', 'finished': false });
      }

      if (this.projectName != '' && this.projectName != 'Project Name' && this.projectType != '' && this.projectCategory.length > 0) {
        this.$emit('sectionDone', { 'section': 'project', 'finished': true });
      } else {
        this.$emit('sectionDone', { 'section': 'project', 'finished': false });
      }

      if (this.projectServices.length > 0) {
        this.$emit('sectionDone', { 'section': 'services', 'finished': true });
      } else {
        this.$emit('sectionDone', { 'section': 'services', 'finished': false });
      }
    }
  },
  methods: {
    updateValue: function updateValue(value) {
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
        if (this.inList(this.projectCategory, value.value)) {
          this.projectCategory.splice($.inArray(value.value, this.projectCategory), 1);
        } else {
          this.projectCategory.push(value.value);
        }
      } else if (value.data === 'projectServices') {
        if (this.inList(this.projectServices, value.value)) {
          this.projectServices.splice($.inArray(value.value, this.projectServices), 1);
        } else {
          this.projectServices.push(value.value);
        }
      } else if (value.data === 'submit') {
        this.$emit('sectionDone', { 'section': value.data, 'finished': value.value });
      }
    },
    inList: function inList(array, value) {
      var inList = false;
      if ($.inArray(value, array) >= 0) {
        inList = true;
      }

      return inList;
    },
    resetData: function resetData() {
      this.contactName = 'Name', this.contactEmail = 'Email@ttu.edu', this.department = 'Department / College', this.projectName = 'Project Name', this.projectType = '', this.projectCategory = [], this.projectServices = [];

      this.$emit('sectionDone', { 'section': 'submit', 'finished': false });
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ocm-wwu-project__container"},[_c('transition',{attrs:{"name":"fade"}},[_c('router-view',{attrs:{"contact-name":_vm.contactName,"contact-email":_vm.contactEmail,"department":_vm.department,"project-name":_vm.projectName,"project-type":_vm.projectType,"project-category":_vm.projectCategory,"project-services":_vm.projectServices},on:{"updateFormValue":function($event){_vm.updateValue($event)},"resetData":_vm.resetData}})],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62f053fc", __vue__options__)
  } else {
    hotAPI.reload("data-v-62f053fc", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":12,"vueify/lib/insert-css":14}],3:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'process',
  data: function data() {
    return {
      steps: [{
        name: 'What do you need?',
        text: 'From photography to event campaigns we have the resources to help your office at no cost to you.'
      }, {
        name: 'Fill out our form.',
        text: 'Use our interactive form to submit each project you need from us.'
      }, {
        name: 'Lets chat.',
        text: 'After your submission we’ll reach out to you for a meeting or phone call to discuss and plan your project.'
      }, {
        name: 'We get to work.',
        text: 'We are always looking forward with design and marketing trends to make sure your project will stand out in the crowd.'
      }, {
        name: 'Love the Results!',
        text: ''
      }],
      currentText: '',
      stepHeading: ''
    };
  },

  methods: {
    updateStepText: function updateStepText(element, step) {
      if ($(window).width() < 1200) {
        this.currentText = step.text;
        this.stepHeading = step.name;

        $('.ocm-wwu-process-step__number').removeClass('is-active');
        $(element).addClass('is-active');
      }
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ocm-wwu__process"},[_c('p',{staticClass:"ocm-wwu-process__guide"},[_vm._v("Tap numbers to explore our process")]),_c('div',{staticClass:"ocm-wwu-process__info"},[_c('h1',[_vm._v("Our Creative Process")]),_c('transition',{attrs:{"name":"fade"}},[(_vm.stepHeading != '')?_c('h2',[_vm._v(_vm._s(_vm.stepHeading))]):_vm._e()]),_c('transition',{attrs:{"name":"fade"}},[_c('p',[_vm._v(_vm._s(_vm.currentText))])]),_c('div',{staticClass:"project__next--container"},[_c('router-link',{staticClass:"project__next",attrs:{"to":"project/contact/name"}},[_vm._v("Start A Project")])],1)],1),_c('div',{staticClass:"ocm-wwu-process__steps"},_vm._l((_vm.steps),function(step,index){return _c('div',{staticClass:"ocm-wwu-process__step",on:{"click":function($event){_vm.updateStepText($event.target, step)}}},[_c('p',{staticClass:"ocm-wwu-process-step__number"},[_vm._v(_vm._s(index + 1))]),_c('div',{staticClass:"ocm-wwu-process-step__details"},[_c('h2',[_vm._v(_vm._s(step.name))]),_c('p',[_vm._v(_vm._s(step.text))])])])}))])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-6bb85f21"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bb85f21", __vue__options__)
  } else {
    hotAPI.reload("data-v-6bb85f21", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":12}],4:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'progress',
  props: ['contactComplete', 'projectComplete', 'servicesComplete', 'submitComplete'],
  data: function data() {
    return {
      onContact: true,
      onProject: false,
      onServices: false,
      onSubmit: false
    };
  },
  created: function created() {
    this.updatePosition(this.$route);
  },

  watch: {
    '$route': function $route(to, from) {
      this.updatePosition(to);
    }
  },
  methods: {
    updatePosition: function updatePosition(to) {
      if (to.path === '/project/contact/name' || to.path === '/project/contact/email' || to.path === '/project/contact/department') {
        this.onProject = false;
        this.onServices = false;
        this.onSubmit = false;
        this.onContact = true;
      } else if (to.path === '/project/name' || to.path === '/project/type' || to.path === '/project/category') {
        this.onServices = false;
        this.onSubmit = false;
        this.onContact = false;
        this.onProject = true;
      } else if (to.path === '/project/services') {
        this.onSubmit = false;
        this.onContact = false;
        this.onProject = false;
        this.onServices = true;
      } else if (to.path === '/project/submit') {
        this.onContact = false;
        this.onProject = false;
        this.onServices = false;
        this.onSubmit = true;
      }
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:{
                        'ocm-wwu-project__progress': true,
                        'onProject': _vm.onProject,
                        'onServices': _vm.onServices,
                        'onSubmit': _vm.onSubmit
                        }},[_c('router-link',{class:{'ocm-wwu-project-progress__step': true,
                 'is-active': _vm.onContact,
                 'is-complete': _vm.contactComplete
                },attrs:{"to":"/project/contact/name"}},[_c('svg',{staticClass:"project__complete",attrs:{"viewBox":"0 0 11 11","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Complete!")]),_vm._v(" "),_c('g',{attrs:{"id":"Work-With-Us","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"7-ProjectCategory","transform":"translate(-1401.000000, -172.000000)"}},[_c('g',{attrs:{"id":"Group-11-Copy-4","transform":"translate(1401.000000, 172.000000)"}},[_c('circle',{attrs:{"id":"Oval-2","fill":"#0DB268","cx":"5.5","cy":"5.5","r":"5.5"}}),_vm._v(" "),_c('path',{attrs:{"d":"M8.32493318,3.11150329 L4.62315657,6.98698777 L2.69179485,4.96499587 C2.59077076,4.85548959 2.44116933,4.81157193 2.30048997,4.85012265 C2.15981062,4.88867338 2.04994633,5.0036931 2.01312354,5.15097391 C1.97630074,5.29825472 2.01824992,5.45487628 2.12284788,5.56064098 L4.34149965,7.8766642 C4.49862391,8.04111193 4.75332236,8.04111193 4.91044662,7.8766642 L8.89388016,3.70630591 C9.03987029,3.5400113 9.03460631,3.28276689 8.88194748,3.12317052 C8.72928865,2.96357415 8.4835673,2.95842727 8.32493318,3.11150329 Z","id":"Shape","fill":"#FFFFFF","fill-rule":"nonzero"}})])])])]),_vm._v(" "),_c('svg',{staticClass:"ocm-wwu-project-progress__icon ocm-wwu-project-progress__icon--contact",attrs:{"viewBox":"0 0 66 71","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Contact Information")]),_vm._v(" "),_c('g',{attrs:{"id":"Work-With-Us","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"Artboard","fill-rule":"nonzero","fill":"#000000"}},[_c('g',{attrs:{"id":"Group","transform":"translate(1.000000, 2.000000)"}},[_c('path',{attrs:{"d":"M19,44.9779771 L19,49.4005251 C19,50.2838907 19.7271768,51 20.6241949,51 L46.3758051,51 C47.2728232,51 48,50.2838907 48,49.4005251 L48,44.9779771 C47.9820955,38.7450787 42.8461957,33.7016542 36.516942,33.7016791 L36.1108933,33.7016791 C39.9118372,32.4420367 42.2264246,28.6561068 41.5783516,24.7586536 C40.9302786,20.8612005 37.5103987,18 33.5,18 C29.4896013,18 26.0697214,20.8612005 25.4216484,24.7586536 C24.7735754,28.6561068 27.0881628,32.4420367 30.8891067,33.7016791 L30.466816,33.7016791 C24.1439024,33.7104614 19.0178803,38.751316 19,44.9779771 L19,44.9779771 Z M28.558387,26.0561892 C28.558387,24.0895305 29.7613831,22.3165216 31.60642,21.5639139 C33.4514569,20.8113062 35.5751863,21.2273129 36.9873164,22.6179506 C38.3994465,24.0085883 38.8218825,26.0999948 38.0576432,27.9169505 C37.2934039,29.7339062 35.4929931,30.9185928 33.4959395,30.9185928 C30.7708587,30.9141898 28.562858,28.7397947 28.558387,26.0561892 Z M44.7516102,44.9779771 L44.7516102,47.8010502 L22.2483898,47.8010502 L22.2483898,44.9779771 C22.2618054,40.5162221 25.9360866,36.9050138 30.466816,36.9006289 L36.516942,36.9006289 C41.0540104,36.8961986 44.7381759,40.5099796 44.7516102,44.9779771 Z","id":"Shape"}}),_vm._v(" "),_c('rect',{attrs:{"id":"Rectangle-path","x":"6","y":"26","width":"3","height":"14"}}),_vm._v(" "),_c('path',{attrs:{"d":"M61,9.80487805 C61,4.38979343 56.7786848,0 51.5714286,0 L10.7142857,0 C8.11065761,0 6,2.19489671 6,4.90243902 L6,13.8902439 L9.14285714,13.8902439 L9.14285714,4.90243902 C9.14285714,3.99992492 9.84640968,3.26829268 10.7142857,3.26829268 L51.5714286,3.26829268 C55.0429327,3.26829268 57.8571429,6.19482164 57.8571429,9.80487805 L57.8571429,57.195122 C57.8571429,60.8051784 55.0429327,63.7317073 51.5714286,63.7317073 L10.7142857,63.7317073 C9.84640968,63.7317073 9.14285714,63.0000751 9.14285714,62.097561 L9.14285714,53.1097561 L6,53.1097561 L6,62.097561 C6,64.8051033 8.11065761,67 10.7142857,67 L51.5714286,67 C56.7786848,67 61,62.6102066 61,57.195122 L61,9.80487805 Z","id":"Shape"}}),_vm._v(" "),_c('path',{attrs:{"d":"M0,47.5 C0,48.3284271 0.7163444,49 1.6,49 L12.4,49 C13.2836556,49 14,48.3284271 14,47.5 C14,46.6715729 13.2836556,46 12.4,46 L1.6,46 C0.7163444,46 0,46.6715729 0,47.5 Z","id":"Shape"}}),_vm._v(" "),_c('path',{attrs:{"d":"M0,20.5 C0,21.3284271 0.705490697,22 1.57575758,22 L11.4242424,22 C12.2945093,22 13,21.3284271 13,20.5 C13,19.6715729 12.2945093,19 11.4242424,19 L1.57575758,19 C0.705490697,19 0,19.6715729 0,20.5 Z","id":"Shape"}})])])])]),_vm._v(" "),_c('p',[_vm._v("Contact Info")])]),_vm._v(" "),_c('router-link',{class:{'ocm-wwu-project-progress__step': true,
                 'is-active': _vm.onProject,
                 'is-complete': _vm.projectComplete
                },attrs:{"to":"/project/name"}},[_c('svg',{staticClass:"project__complete",attrs:{"viewBox":"0 0 11 11","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Complete!")]),_vm._v(" "),_c('g',{attrs:{"id":"Work-With-Us","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"7-ProjectCategory","transform":"translate(-1401.000000, -172.000000)"}},[_c('g',{attrs:{"id":"Group-11-Copy-4","transform":"translate(1401.000000, 172.000000)"}},[_c('circle',{attrs:{"id":"Oval-2","fill":"#0DB268","cx":"5.5","cy":"5.5","r":"5.5"}}),_vm._v(" "),_c('path',{attrs:{"d":"M8.32493318,3.11150329 L4.62315657,6.98698777 L2.69179485,4.96499587 C2.59077076,4.85548959 2.44116933,4.81157193 2.30048997,4.85012265 C2.15981062,4.88867338 2.04994633,5.0036931 2.01312354,5.15097391 C1.97630074,5.29825472 2.01824992,5.45487628 2.12284788,5.56064098 L4.34149965,7.8766642 C4.49862391,8.04111193 4.75332236,8.04111193 4.91044662,7.8766642 L8.89388016,3.70630591 C9.03987029,3.5400113 9.03460631,3.28276689 8.88194748,3.12317052 C8.72928865,2.96357415 8.4835673,2.95842727 8.32493318,3.11150329 Z","id":"Shape","fill":"#FFFFFF","fill-rule":"nonzero"}})])])])]),_vm._v(" "),_c('svg',{staticClass:"ocm-wwu-project-progress__icon ocm-wwu-project-progress__icon--name",attrs:{"viewBox":"0 0 66 71","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Project Info")]),_vm._v(" "),_c('g',{attrs:{"id":"Work-With-Us","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"Artboard","fill-rule":"nonzero","fill":"#000000"}},[_c('path',{attrs:{"d":"M32.718595,3.5 C22.0669253,3.5 11.7978723,11.5786183 11.7978723,23.0173985 C11.7978723,30.1394628 14.6922931,34.7548408 17.270191,38.31036 C19.8480889,41.8659546 21.8708129,44.274615 21.8708129,48.0573007 L21.8708129,57.1197963 C21.8708129,60.0972038 24.4097363,62.4062522 27.294704,62.4062522 L27.3675391,62.4062522 C27.749381,64.9479801 30.0157926,66.9375 32.71875,66.9375 C35.4217074,66.9375 37.688119,64.9479801 38.0699609,62.4062522 L38.142796,62.4062522 C41.0277637,62.4062522 43.5666871,60.0972038 43.5666871,57.1197963 L43.5666871,48.0573007 C43.5666871,44.274615 45.5894111,41.8659546 48.167309,38.31036 C50.7452069,34.7548408 53.6396277,30.1394628 53.6396277,23.0173985 C53.6393177,11.5786183 43.3702648,3.5 32.718595,3.5 Z M32.718595,8.03124784 C40.9656214,8.03124784 48.9902682,14.2433545 48.9902682,23.0173985 C48.9902682,29.0086144 46.8482187,32.2997352 44.3896463,35.6907701 C42.2934674,38.5818573 39.8024292,41.6166605 39.1110381,45.7916767 L26.326152,45.7916767 C25.6347608,41.6166605 23.1437226,38.5818573 21.0475437,35.6907701 C18.5889714,32.2997352 16.4469218,29.0086144 16.4469218,23.0173985 C16.4469218,14.2433545 24.4715687,8.03124784 32.718595,8.03124784 L32.718595,8.03124784 Z M26.5198624,50.3229246 L38.9173277,50.3229246 L38.9173277,51.8333405 L26.5198624,51.8333405 L26.5198624,50.3229246 Z M26.5198624,56.3645884 L38.9173277,56.3645884 L38.9173277,57.1197963 C38.9173277,57.6134758 38.5281248,57.8750043 38.1424861,57.8750043 L27.294704,57.8750043 C26.9090653,57.8750043 26.5198624,57.6134758 26.5198624,57.1197963 L26.5198624,56.3645884 Z","id":"Shape"}})])])]),_vm._v(" "),_c('p',[_vm._v("Project Info")])]),_vm._v(" "),_c('router-link',{class:{'ocm-wwu-project-progress__step': true,
                 'is-active': _vm.onServices,
                 'is-complete': _vm.servicesComplete
                },attrs:{"to":"/project/services"}},[_c('svg',{staticClass:"project__complete",attrs:{"viewBox":"0 0 11 11","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Complete!")]),_vm._v(" "),_c('g',{attrs:{"id":"Work-With-Us","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"7-ProjectCategory","transform":"translate(-1401.000000, -172.000000)"}},[_c('g',{attrs:{"id":"Group-11-Copy-4","transform":"translate(1401.000000, 172.000000)"}},[_c('circle',{attrs:{"id":"Oval-2","fill":"#0DB268","cx":"5.5","cy":"5.5","r":"5.5"}}),_vm._v(" "),_c('path',{attrs:{"d":"M8.32493318,3.11150329 L4.62315657,6.98698777 L2.69179485,4.96499587 C2.59077076,4.85548959 2.44116933,4.81157193 2.30048997,4.85012265 C2.15981062,4.88867338 2.04994633,5.0036931 2.01312354,5.15097391 C1.97630074,5.29825472 2.01824992,5.45487628 2.12284788,5.56064098 L4.34149965,7.8766642 C4.49862391,8.04111193 4.75332236,8.04111193 4.91044662,7.8766642 L8.89388016,3.70630591 C9.03987029,3.5400113 9.03460631,3.28276689 8.88194748,3.12317052 C8.72928865,2.96357415 8.4835673,2.95842727 8.32493318,3.11150329 Z","id":"Shape","fill":"#FFFFFF","fill-rule":"nonzero"}})])])])]),_vm._v(" "),_c('svg',{staticClass:"ocm-wwu-project-progress__icon ocm-wwu-project-progress__icon--services",attrs:{"viewBox":"0 0 66 71","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Needed Services")]),_vm._v(" "),_c('g',{attrs:{"id":"Work-With-Us","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"Artboard","fill-rule":"nonzero","fill":"#000000"}},[_c('path',{attrs:{"d":"M63.0669377,59.7072488 L56.8905919,46.5586521 L45.8854667,35.5452976 L61.6070741,19.8119341 C63.2915321,18.1262166 63.2915321,15.3166874 61.6070741,13.5185887 L53.8585676,5.76428814 C52.1741097,4.07857062 49.2543826,4.07857062 47.5699246,5.76428814 L31.8483172,21.4976517 L18.2603565,7.89953033 C14.554549,4.19095179 8.60279764,4.19095179 5.00928737,7.89953033 C3.21253224,9.69762902 2.20185747,12.0576335 2.20185747,14.5300192 C2.20185747,17.0024049 3.21253224,19.3624095 4.89699018,21.1605081 L18.5972481,34.8710106 L2.76334345,50.7167553 C1.07888552,52.4024728 1.07888552,55.212002 2.76334345,57.0101007 L10.51185,64.7644013 C11.2979303,65.5510695 12.4209023,66.1129753 13.6561715,66.1129753 C14.8914406,66.1129753 15.9021154,65.6634507 16.8004929,64.7644013 L32.6343976,48.9186566 L43.6395228,59.9320111 L56.7782947,66.1129753 C57.4520779,66.4501188 58.1258611,66.5625 58.7996442,66.5625 C60.0349134,66.5625 61.2701825,66.1129753 62.1685601,65.1015448 C63.6284237,63.6405896 63.9653152,61.5053474 63.0669377,59.7072488 Z M55.7676199,58.8081994 C54.9815396,59.5948676 54.7569452,60.6062981 54.8692424,61.5053474 L46.5592499,57.5720066 L48.4683022,51.5034235 L54.5323508,49.5929436 L58.4627526,57.9091501 C57.5643751,57.6843877 56.5537003,58.0215312 55.7676199,58.8081994 Z M11.1856332,22.7338445 L14.2176574,19.699553 L45.2116835,50.7167553 L43.75182,55.3243832 L11.1856332,22.7338445 Z M52.2864069,46.7834144 L47.5699246,48.2443696 L16.6881958,17.2271673 L19.72022,14.1928757 L52.2864069,46.7834144 Z M38.6984462,19.5871718 L40.2706069,21.1605081 C40.6074985,21.4976517 41.0566873,21.6100328 41.5058761,21.6100328 C41.9550648,21.6100328 42.4042536,21.4976517 42.7411452,21.1605081 C43.4149284,20.4862211 43.4149284,19.4747906 42.7411452,18.8005036 L41.1689845,17.2271673 L44.8747919,13.5185887 L48.4683022,17.1147861 C48.8051938,17.4519296 49.2543826,17.5643108 49.7035714,17.5643108 C50.1527601,17.5643108 50.6019489,17.4519296 50.9388405,17.1147861 C51.6126237,16.4404991 51.6126237,15.4290686 50.9388405,14.7547816 L47.1207359,11.046203 L49.9281658,8.23667383 C50.3773545,7.78714916 51.0511377,7.78714916 51.3880293,8.23667383 L59.1365358,15.9909744 C59.5857246,16.4404991 59.5857246,17.1147861 59.1365358,17.4519296 L43.4149284,33.1852931 L34.2065583,23.9700373 L38.6984462,19.5871718 Z M7.36752849,10.2595349 C9.7257696,7.89953033 13.5438743,7.89953033 15.9021154,10.2595349 L17.3619789,11.72049 L8.82739204,20.2614588 L7.36752849,18.8005036 C6.24455653,17.6766919 5.57077335,16.1033556 5.57077335,14.5300192 C5.57077335,12.9566829 6.24455653,11.3833465 7.36752849,10.2595349 Z M14.4422518,62.2920156 C13.993063,62.7415403 13.3192799,62.7415403 12.9823883,62.2920156 L5.23388177,54.537715 C4.78469298,54.0881904 4.78469298,53.4139033 5.23388177,53.0767598 L8.26590606,50.0424683 L11.8594163,53.6386657 C12.1963079,53.9758092 12.6454967,54.0881904 13.0946855,54.0881904 C13.5438743,54.0881904 13.993063,53.9758092 14.3299546,53.6386657 C15.0037378,52.9643787 15.0037378,51.9529482 14.3299546,51.2786612 L10.7364444,47.6824638 L14.4422518,43.9738852 L16.0144126,45.5472216 C16.3513042,45.8843651 16.8004929,45.9967463 17.2496817,45.9967463 C17.6988705,45.9967463 18.1480593,45.8843651 18.4849509,45.5472216 C19.1587341,44.8729346 19.1587341,43.8615041 18.4849509,43.1872171 L16.9127901,41.6138807 L21.2923808,37.2310152 L30.5007509,46.4462709 L14.4422518,62.2920156 Z","id":"Shape"}})])])]),_vm._v(" "),_c('p',[_vm._v("Add Services")])]),_vm._v(" "),_c('router-link',{class:{'ocm-wwu-project-progress__step': true,
                 'is-active': _vm.onSubmit,
                 'is-complete': _vm.submitComplete
                },attrs:{"to":"/project/submit"}},[_c('svg',{staticClass:"project__complete",attrs:{"viewBox":"0 0 11 11","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Complete!")]),_vm._v(" "),_c('g',{attrs:{"id":"Work-With-Us","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"7-ProjectCategory","transform":"translate(-1401.000000, -172.000000)"}},[_c('g',{attrs:{"id":"Group-11-Copy-4","transform":"translate(1401.000000, 172.000000)"}},[_c('circle',{attrs:{"id":"Oval-2","fill":"#0DB268","cx":"5.5","cy":"5.5","r":"5.5"}}),_vm._v(" "),_c('path',{attrs:{"d":"M8.32493318,3.11150329 L4.62315657,6.98698777 L2.69179485,4.96499587 C2.59077076,4.85548959 2.44116933,4.81157193 2.30048997,4.85012265 C2.15981062,4.88867338 2.04994633,5.0036931 2.01312354,5.15097391 C1.97630074,5.29825472 2.01824992,5.45487628 2.12284788,5.56064098 L4.34149965,7.8766642 C4.49862391,8.04111193 4.75332236,8.04111193 4.91044662,7.8766642 L8.89388016,3.70630591 C9.03987029,3.5400113 9.03460631,3.28276689 8.88194748,3.12317052 C8.72928865,2.96357415 8.4835673,2.95842727 8.32493318,3.11150329 Z","id":"Shape","fill":"#FFFFFF","fill-rule":"nonzero"}})])])])]),_vm._v(" "),_c('svg',{staticClass:"ocm-wwu-project-progress__icon ocm-wwu-project-progress__icon--submit",attrs:{"viewBox":"0 0 66 71","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Project Submit")]),_vm._v(" "),_c('g',{attrs:{"id":"Work-With-Us","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"Artboard","fill-rule":"nonzero","fill":"#7B7B7B"}},[_c('path',{attrs:{"d":"M60,32 L37,32 L37,9 C37,6.8 35.2,5 33,5 C30.8,5 29,6.8 29,9 L29,32 L6,32 C3.8,32 2,33.8 2,36 C2,38.2 3.8,40 6,40 L29,40 L29,63 C29,65.2 30.8,67 33,67 C35.2,67 37,65.2 37,63 L37,40 L60,40 C62.2,40 64,38.2 64,36 C64,33.8 62.2,32 60,32 Z","id":"Shape"}})])])]),_vm._v(" "),_c('p',[_vm._v("Submit")])])],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c2e282a", __vue__options__)
  } else {
    hotAPI.reload("data-v-7c2e282a", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":12}],5:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = require('./Input.vue');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'contact',
  props: ['contactName', 'contactEmail', 'department'],
  data: function data() {
    return {
      loading: false,
      field: null,
      fields: {
        name: {
          text: 'What is your name?',
          type: 'text'
        },
        email: {
          text: 'Hi ' + this.contactName + '! How can we get in touch with you?',
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
    nextStep: function nextStep() {
      var nextStep = '';
      var fieldsKeys = [];

      if (this.field) {
        $.each(this.fields, function (key) {
          fieldsKeys.push(key);
        });

        var stepNumber = $.inArray(this.field.step, fieldsKeys);

        if (stepNumber != fieldsKeys.length - 1) {
          nextStep = '/project/contact/' + fieldsKeys[stepNumber + 1];
        } else {
          nextStep = '/project/name';
        }
      }

      return nextStep;
    }
  },
  created: function created() {
    this.getFormField();
  },

  watch: {
    '$route': 'getFormField',
    contactName: 'updateEmailText'
  },
  methods: {
    getFormField: function getFormField() {
      this.loading = true;

      var url = this.$route.params.field;
      var match = false;

      $.each(this.fields, function (key, value) {
        if (key === url) {
          match = true;
          return false;
        }
      });

      if (match) {
        this.field = this.fields[url];
        this.field['step'] = url;
        this.loading = false;
      } else {
        this.$router.push('/project/contact/name');
      }
    },
    updateFormValue: function updateFormValue(value) {
      this.$emit('updateFormValue', value);
    },
    updateEmailText: function updateEmailText() {
      this.fields.email.text = 'Hi ' + this.contactName + '! How can we get in touch with you?';
    }
  },
  components: {
    'form-input': _Input2.default
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ocm-wwu-project__contact"},[(_vm.loading)?_c('div',{staticClass:"ocm-wwu-project__loader"},[_c('h2',[_vm._v("Loading...")])]):_vm._e(),_c('transition',{attrs:{"name":"fade"}},[(_vm.field)?_c('form-input',{attrs:{"field":_vm.field,"contact-name":_vm.contactName,"contact-email":_vm.contactEmail,"department":_vm.department},on:{"updateFormValue":function($event){_vm.updateFormValue($event)}}}):_vm._e()],1),_c('div',{staticClass:"project__next--container"},[_c('router-link',{staticClass:"project__next",attrs:{"to":_vm.nextStep}},[_vm._v("Continue")])],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e2d4bf5a", __vue__options__)
  } else {
    hotAPI.reload("data-v-e2d4bf5a", __vue__options__)
  }
})()}
},{"./Input.vue":6,"vue":"vue","vue-hot-reload-api":12}],6:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
  data: function data() {
    return {
      inputValue: '',
      lastOtherValue: '',
      otherInputs: ['Other', 'Other', 'Other', 'Other']
    };
  },
  created: function created() {
    if (this.field) {
      this.inputValue = this.getInputValue(this.field.step);
    }
  },

  watch: {
    field: function field(to, from) {
      this.inputValue = this.getInputValue(this.field.step);
    },
    '$route': function $route(to, from) {}
  },
  methods: {
    getInputValue: function getInputValue(step) {
      var value = '';

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
    updateFormValue: function updateFormValue(target) {
      this.$emit('updateFormValue', { 'value': target.value, data: this.field.step });
    },
    isChecked: function isChecked(data, value) {
      var isChecked = false;

      if ($.inArray(value, this[data]) >= 0 && data != 'projectType') {
        isChecked = true;
      } else if (data === 'projectType' && value === this[data]) {
        isChecked = true;
      }

      return isChecked;
    },
    clearInput: function clearInput($event) {
      var placeholders = ['Name', 'Email@ttu.edu', 'Department / College', 'Project Name', 'Other'];
      var value = $($event.target).val();

      if ($.inArray(value, placeholders) >= 0) {
        $($event.target).val('');
      }
    },
    clickContinue: function clickContinue($event) {
      if ($event.key === 'Enter') {
        document.querySelector('.project__next').click();

        if ($('.ocm-wwu-project-form__input input[type="text"]').length) {
          $('.ocm-wwu-project-form__input input[type="text"]').blur();
        } else if ($('.ocm-wwu-project-form__input input[type="email"]')) {
          $('.ocm-wwu-project-form__input input[type="email"]').blur();
        }
      }
    },
    inArray: function inArray(value, array) {
      var inArray = false;
      var test = '';

      if (value === 'Print Design' || value === 'Digital Design') {
        test = 'Design';
      } else {
        test = value;
      }

      if ($.inArray(test, array) >= 0) {
        inArray = true;
      }

      return inArray;
    },
    otherSelected: function otherSelected($event) {
      var element = $($event.currentTarget);

      if ($event.type === 'focus' && element.val() != 'Other') {
        element.parent('.ocm-wwu-project-form-services__option').addClass('selected');
      } else if ($event.type === 'blur' && element.val() != '' && element.val() != 'Other') {
        element.parent('.ocm-wwu-project-form-services__option').addClass('selected');

        this.sendOtherData(element.val());

        this.lastOtherValue = element.val();
      } else {
        element.parent('.ocm-wwu-project-form-services__option').removeClass('selected');

        this.sendOtherData(element.val());
        element.val('Other');
        this.lastOtherValue = 'Other';
      }

      if ($event.type === 'focus') {
        this.clearInput($event);
      }
    },
    sendOtherData: function sendOtherData(value) {
      if (this.lastOtherValue != '' && this.lastOtherValue != 'Other') {
        this.$emit('updateFormValue', { 'value': this.lastOtherValue, data: 'projectServices' });
      }

      if (value != '' && value != 'Other') {
        this.$emit('updateFormValue', { 'value': value, data: 'projectServices' });
      }
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.field.type === 'text')?_c('div',{staticClass:"ocm-wwu-project-form__input"},[_c('p',{staticClass:"ocm-wwu-project__question"},[_vm._v(_vm._s(_vm.field.text))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],staticClass:"ocm-wwu-project__placeholder",attrs:{"type":"text"},domProps:{"value":(_vm.inputValue)},on:{"focus":function($event){_vm.clearInput($event)},"input":[function($event){if($event.target.composing){ return; }_vm.inputValue=$event.target.value},function($event){_vm.updateFormValue($event.target)}],"keyup":function($event){_vm.clickContinue($event)}}})]):(_vm.field.type === 'email')?_c('div',{staticClass:"ocm-wwu-project-form__input"},[_c('p',{staticClass:"ocm-wwu-project__question"},[_vm._v(_vm._s(_vm.field.text))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],staticClass:"ocm-wwu-project__placeholder",attrs:{"type":"email"},domProps:{"value":(_vm.inputValue)},on:{"focus":function($event){_vm.clearInput($event)},"input":[function($event){if($event.target.composing){ return; }_vm.inputValue=$event.target.value},function($event){_vm.updateFormValue($event.target)}],"keyup":function($event){_vm.clickContinue($event)}}})]):(_vm.field.type === 'radio')?_c('div',{staticClass:"ocm-wwu-project-form__input"},[_c('div',{staticClass:"ocm-wwu-project__question--container"},[_c('p',{staticClass:"ocm-wwu-project__question"},[_vm._v(_vm._s(_vm.field.text))])]),_c('div',{staticClass:"ocm-wwu-project__selections"},_vm._l((_vm.field.options),function(option,index){return _c('div',{staticClass:"ocm-wwu-project-form__radio"},[_c('input',{staticClass:"project__type",attrs:{"type":"radio","name":_vm.field.step,"id":(_vm.field.step + index),"v-model":_vm.field.step},domProps:{"value":option,"checked":_vm.isChecked(_vm.field.step, option)},on:{"change":function($event){_vm.updateFormValue($event.target)}}}),_c('label',{class:{project__type: true, selected: _vm.isChecked(_vm.field.step, option)},attrs:{"for":(_vm.field.step + index)}},[_vm._v(_vm._s(option))])])}))]):(_vm.field.type === 'checkbox' && _vm.field.step != 'projectServices')?_c('div',{staticClass:"ocm-wwu-project-form__input"},[_c('div',{staticClass:"ocm-wwu-project__question--container"},[_c('p',{staticClass:"ocm-wwu-project__question"},[_vm._v(_vm._s(_vm.field.text))])]),_c('div',{staticClass:"ocm-wwu-project__selections"},_vm._l((_vm.field.options),function(option,index){return _c('div',{staticClass:"ocm-wwu-project-form__check"},[_c('input',{staticClass:"project__type",attrs:{"type":"checkbox","name":_vm.field.step,"id":(_vm.field.step + index),"v-model":_vm.field.step},domProps:{"value":option,"checked":_vm.isChecked(_vm.field.step, option)},on:{"change":function($event){_vm.updateFormValue($event.target)}}}),_c('label',{class:{project__type: true, selected: _vm.isChecked(_vm.field.step, option)},attrs:{"for":(_vm.field.step + index)}},[_vm._v(_vm._s(option))])])}))]):(_vm.field.type === 'checkbox' && _vm.field.step === 'projectServices')?_c('div',{staticClass:"ocm-wwu-project-form__input"},[_c('div',{staticClass:"ocm-wwu-project__question--container"},[_c('p',{staticClass:"ocm-wwu-project__question"},[_vm._v(_vm._s(_vm.field.text))])]),(this.projectCategory.length > 0)?_c('div',{staticClass:"ocm-wwu-project__selections"},_vm._l((_vm.field.options),function(option,index){return (_vm.inArray(option.title, _vm.projectCategory))?_c('div',{staticClass:"ocm-wwu-project-form__services"},[_c('h3',[_vm._v(_vm._s(option.title))]),_vm._l((option.services),function(service,index){return _c('div',{staticClass:"ocm-wwu-project-form__check"},[_c('input',{staticClass:"project__type",attrs:{"type":"checkbox","name":_vm.field.step,"id":(_vm.field.step + option.title[0] + option.title[1] + index),"v-model":_vm.field.step},domProps:{"value":service,"checked":_vm.isChecked(_vm.field.step, service)},on:{"change":function($event){_vm.updateFormValue($event.target)}}}),_c('label',{class:{project__type: true, selected: _vm.isChecked(_vm.field.step, service)},attrs:{"for":(_vm.field.step + option.title[0] + option.title[1] + index)}},[_vm._v(_vm._s(service))])])})],2):_vm._e()})):_c('div',{staticClass:"ocm-wwu-project__selections"},[_c('h3',[_vm._v("Please choose one or more categories"),_c('router-link',{attrs:{"to":"/project/category"}},[_vm._v(" here")]),_vm._v(" to see what services we can offer.")],1)])]):_vm._e()}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d18cc86", __vue__options__)
  } else {
    hotAPI.reload("data-v-6d18cc86", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":12}],7:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = require('./Input.vue');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'project',
  props: ['projectName', 'projectType', 'projectCategory', 'projectServices'],
  data: function data() {
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
          options: [{
            title: 'Print Design',
            services: ['Banner', 'Brochure', 'Event Program', 'Flyer', 'Guide Book', 'Invitation', 'Postcard', 'Poster', 'Report']
          }, {
            title: 'Digital Design',
            services: ['Email', 'Enewsletter', 'Evite', 'Website', 'Web Banner']
          }, {
            title: 'Photography / Video',
            services: ['Campus', 'Events', 'Headshots', 'Spaces']
          }, {
            title: 'Social Media',
            services: ['Advertising', 'Campaign', 'Consulting']
          }],
          type: 'checkbox'
        }
      }
    };
  },

  computed: {
    nextStep: function nextStep() {
      var nextStep = '';
      var fieldsKeys = [];

      if (this.field) {
        $.each(this.fields, function (key) {
          fieldsKeys.push(key);
        });

        var stepNumber = $.inArray(this.field.step, fieldsKeys);

        if (stepNumber != fieldsKeys.length - 1) {
          var url = fieldsKeys[stepNumber + 1];
          url = url.slice(7).toLowerCase();
          nextStep = '/project/' + url;
        } else {
          nextStep = '/project/submit';
        }
      }

      return nextStep;
    }
  },
  created: function created() {
    this.getFormField();
  },

  watch: {
    '$route': function $route(to, from) {
      this.getFormField();
    }
  },
  methods: {
    getFormField: function getFormField() {
      this.loading = true;

      var url = this.$route.params.field;
      url = 'project' + url.charAt(0).toUpperCase() + url.slice(1).toLowerCase();

      var match = false;

      $.each(this.fields, function (key, value) {
        if (key === url) {
          match = true;
          return false;
        }
      });

      if (match) {
        this.field = this.fields[url];
        this.field['step'] = url;
        this.loading = false;
      }
    },
    updateFormValue: function updateFormValue(value) {
      this.$emit('updateFormValue', value);
    }
  },
  components: {
    'form-input': _Input2.default
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ocm-wwu-project__details"},[(_vm.loading)?_c('div',{staticClass:"ocm-wwu-project__loader"},[_c('h2',[_vm._v("Loading...")])]):_vm._e(),_c('transition',{attrs:{"name":"fade"}},[(_vm.field)?_c('form-input',{attrs:{"field":_vm.field,"project-name":_vm.projectName,"project-type":_vm.projectType,"project-category":_vm.projectCategory,"project-services":_vm.projectServices},on:{"updateFormValue":function($event){_vm.updateFormValue($event)}}}):_vm._e()],1),_c('div',{staticClass:"project__next--container"},[_c('router-link',{staticClass:"project__next",attrs:{"to":_vm.nextStep}},[_vm._v("Continue")])],1)],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5420a2cc", __vue__options__)
  } else {
    hotAPI.reload("data-v-5420a2cc", __vue__options__)
  }
})()}
},{"./Input.vue":6,"vue":"vue","vue-hot-reload-api":12}],8:[function(require,module,exports){
;(function(){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'submit',
  props: ['contactName', 'contactEmail', 'department', 'projectName', 'projectType', 'projectCategory', 'projectServices'],
  data: function data() {
    return {
      loading: false,
      submitted: false,
      formResponse: {
        success: false,
        message: ''
      },
      comments: ''
    };
  },

  computed: {
    infoFilled: function infoFilled() {
      var isFilled = true;

      if (this.contactName === '' || this.contactName === 'Name') {
        isFilled = false;
      }

      if (this.contactEmail === '' || this.contactEmail === 'Email@ttu.edu') {
        isFilled = false;
      }

      if (this.department === '' || this.department === 'Department / College') {
        isFilled = false;
      }

      if (this.projectName === '' || this.projectName === 'Project Name') {
        isFilled = false;
      }

      if (this.projectType === '') {
        isFilled = false;
      }

      if (this.projectCategory.length === 0) {
        isFilled = false;
      }

      if (this.projectServices.length === 0) {
        isFilled = false;
      }

      return isFilled;
    }
  },
  methods: {
    createSentence: function createSentence() {
      var sentence = 'A ';

      if (!this.infoFilled) {
        sentence = 'The full details have not been entered into the form. Please go back and fill in the following information:';

        return sentence;
      }

      if (this.projectCategory.length > 1) {
        $.each(this.projectCategory, function (index, value) {
          if (index === 0) {
            sentence += '<span>';
            sentence += value.toLowerCase();
            sentence += '</span> and ';
          } else {
            sentence += '<span>';
            sentence += value.toLowerCase();
            sentence += '</span> ';
          }
        });
      } else {
        sentence += '<span>';
        sentence += this.projectCategory[0].toLowerCase();
        sentence += '</span> ';
      }

      sentence += 'based project that ';

      if (this.projectType === 'New Project') {
        sentence += 'is a <span>new project</span>';
      } else if (this.projectType === 'Full Redesign') {
        sentence += 'needs a <span>full redesign</span>';
      } else if (this.projectType === 'Edit Existing') {
        sentence += 'needs some <span>edits</span>';
      }

      sentence += ' that needs these services:';

      return sentence;
    },
    submitForm: function submitForm() {
      var submitComponent = this;
      submitComponent.loading = true;

      $.post("/communications/includes/work-with-us/project-form.php", {
        contactName: this.contactName,
        contactEmail: this.contactEmail,
        department: this.department,
        projectName: this.projectName,
        projectType: this.projectType,
        projectCategory: this.projectCategory,
        projectServices: this.projectServices,
        comments: this.comments
      }, function (data) {
        var response = JSON.parse(data);

        submitComponent.loading = false;
        submitComponent.submitted = true;
        submitComponent.$emit('updateFormValue', { 'value': response.success, data: 'submit' });
        submitComponent.formResponse.success = response.success;
        submitComponent.formResponse.message = response.message;
      });
    },
    missingFields: function missingFields() {
      var html = '';
      if (this.contactName === '' || this.contactName === 'Name') {
        html += '<li>Contact Name</li>';
      }
      if (this.contactEmail === '' || this.contactEmail === 'Email@ttu.edu') {
        html += '<li>Contact Email</li>';
      }
      if (this.department === '' || this.department === 'Department / College') {
        html += '<li>Department</li>';
      }
      if (this.projectName === '' || this.projectName === 'Project Name') {
        html += '<li>Project Name</li>';
      }
      if (this.projectType === '') {
        html += '<li>Project Type</li>';
      }
      if (this.projectCategory.length === 0) {
        html += '<li>Project Category</li>';
      }
      if (this.projectServices.length === 0) {
        html += '<li>Project Services</li>';
      }

      return html;
    },
    resetData: function resetData() {
      this.$emit('resetData', 'reset');
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"ocm-wwu-project__submit"},[(_vm.loading)?_c('div',{staticClass:"ocm-wwu-project__loader"},[_c('h2',[_vm._v("Loading...")])]):_vm._e(),(!_vm.loading && !_vm.submitted)?_c('div',{staticClass:"ocm-wwu-project__submitting"},[(_vm.infoFilled)?_c('h1',{staticClass:"ocm-wwu-project-submit__title"},[_vm._v(_vm._s(_vm.projectName))]):_vm._e(),_c('p',{domProps:{"innerHTML":_vm._s(_vm.createSentence())}}),(_vm.infoFilled)?_c('ul',_vm._l((_vm.projectServices),function(service){return _c('li',[_vm._v(_vm._s(service))])})):_c('ul',{domProps:{"innerHTML":_vm._s(_vm.missingFields())}}),(_vm.infoFilled)?_c('div',{staticClass:"ocm-wwu-project-submit__comments"},[_c('label',[_vm._v("Additional Comments")]),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.comments),expression:"comments"}],domProps:{"value":(_vm.comments)},on:{"input":function($event){if($event.target.composing){ return; }_vm.comments=$event.target.value}}})]):_vm._e(),(_vm.infoFilled)?_c('div',{staticClass:"project__next--container"},[_c('button',{staticClass:"project__next project__submit",attrs:{"type":"submit"},on:{"click":_vm.submitForm}},[_vm._v("Submit")])]):_vm._e()]):_vm._e(),(_vm.submitted)?_c('div',{staticClass:"ocm-wwu-project__submitting"},[(_vm.formResponse.success)?_c('h1',[_vm._v("Thanks! We look forward to working with you!")]):_c('h1',[_vm._v("Oops! There was a problem submitting your request")]),_c('p',[_vm._v(_vm._s(_vm.formResponse.message))]),_c('div',{staticClass:"project__next--container"},[_c('router-link',{staticClass:"project__next",attrs:{"to":{ path: '/project/contact/name' }},nativeOn:{"click":function($event){_vm.resetData($event)}}},[_vm._v("Start another project")])],1)]):_vm._e()])}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cda1a496", __vue__options__)
  } else {
    hotAPI.reload("data-v-cda1a496", __vue__options__)
  }
})()}
},{"vue":"vue","vue-hot-reload-api":12}],9:[function(require,module,exports){
'use strict';

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router.js');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-new */
// If the app element exists
if ($('.ocm-wwu__app').length) {
  new Vue({
    el: '.ocm-wwu__app',
    router: _router2.default,
    render: function render(h) {
      return h(_App2.default);
    }
  });
}

},{"./App.vue":1,"./router.js":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Process = require('./components/Process.vue');

var _Process2 = _interopRequireDefault(_Process);

var _Progress = require('./components/Progress.vue');

var _Progress2 = _interopRequireDefault(_Progress);

var _Form = require('./components/Form.vue');

var _Form2 = _interopRequireDefault(_Form);

var _Contact = require('./components/form/Contact.vue');

var _Contact2 = _interopRequireDefault(_Contact);

var _Project = require('./components/form/Project.vue');

var _Project2 = _interopRequireDefault(_Project);

var _Submit = require('./components/form/Submit.vue');

var _Submit2 = _interopRequireDefault(_Submit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default);

var routes = [{ path: '/', component: _Process2.default }, {
  path: '/project',
  redirect: 'project/contact/name',
  components: { default: _Form2.default, progress: _Progress2.default },
  props: { default: true, progress: false },
  children: [{
    path: 'submit',
    component: _Submit2.default
  }, {
    path: 'contact',
    redirect: 'contact/name'
  }, {
    path: '/project/:field',
    component: _Project2.default,
    props: true
  }, {
    path: 'contact/:field',
    component: _Contact2.default,
    props: true
  }]
}];

exports.default = new _vueRouter2.default({
  mode: 'history',
  // base: '/work-with-us/',
  base: '/communications/work-with-us/',
  routes: routes,
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

},{"./components/Form.vue":2,"./components/Process.vue":3,"./components/Progress.vue":4,"./components/form/Contact.vue":5,"./components/form/Project.vue":7,"./components/form/Submit.vue":8,"vue-router":13}],11:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],12:[function(require,module,exports){
var Vue // late bind
var version
var map = (window.__VUE_HOT_MAP__ = Object.create(null))
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) { return }
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
        'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Ctor,
    options: options,
    instances: []
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot(id, options) {
  if (options.functional) {
    var render = options.render
    options.render = function (h, ctx) {
      var instances = map[id].instances
      if (instances.indexOf(ctx.parent) < 0) {
        instances.push(ctx.parent)
      }
      return render(h, ctx)
    }
  } else {
    injectHook(options, initHookName, function() {
      var record = map[id]
      if (!record.Ctor) {
        record.Ctor = this.constructor
      }
      record.instances.push(this)
    })
    injectHook(options, 'beforeDestroy', function() {
      var instances = map[id].instances
      instances.splice(instances.indexOf(this), 1)
    })
  }
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook(options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]
    : [hook]
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      fn(id, arg)
    } catch (e) {
      console.error(e)
      console.warn(
        'Something went wrong during Vue component hot-reload. Full reload required.'
      )
    }
  }
}

function updateOptions (oldOptions, newOptions) {
  for (var key in oldOptions) {
    if (!(key in newOptions)) {
      delete oldOptions[key]
    }
  }
  for (var key$1 in newOptions) {
    oldOptions[key$1] = newOptions[key$1]
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
  if (typeof options === 'function') {
    options = options.options
  }
  if (record.Ctor) {
    record.Ctor.options.render = options.render
    record.Ctor.options.staticRenderFns = options.staticRenderFns
    record.instances.slice().forEach(function (instance) {
      instance.$options.render = options.render
      instance.$options.staticRenderFns = options.staticRenderFns
      // reset static trees
      if (instance._staticTrees) {
        // pre 2.5 staticTrees are cached per-instance
        instance._staticTrees = []
      } else {
        // post 2.5 staticTrees are cached on shared options
        record.Ctor.options._staticTrees = []
      }
      instance.$forceUpdate()
    })
  } else {
    // functional or no instance created yet
    record.options.render = options.render
    record.options.staticRenderFns = options.staticRenderFns

    // handle functional component re-render
    if (record.options.functional) {
      // rerender with full options
      if (Object.keys(options).length > 2) {
        updateOptions(record.options, options)
      } else {
        // template-only rerender.
        // need to inject the style injection code for CSS modules
        // to work properly.
        var injectStyles = record.options._injectStyles
        if (injectStyles) {
          var render = options.render
          record.options.render = function (h, ctx) {
            injectStyles.call(ctx)
            return render(h, ctx)
          }
        }
      }
      record.options._Ctor = null
      record.options._staticTrees = []
      record.instances.slice().forEach(function (instance) {
        instance.$forceUpdate()
      })
    }
  }
})

exports.reload = tryWrap(function (id, options) {
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
    if (record.Ctor) {
      if (version[1] < 2) {
        // preserve pre 2.2 behavior for global mixin handling
        record.Ctor.extendOptions = options
      }
      var newCtor = record.Ctor.super.extend(options)
      record.Ctor.options = newCtor.options
      record.Ctor.cid = newCtor.cid
      record.Ctor.prototype = newCtor.prototype
      if (newCtor.release) {
        // temporary global mixin strategy used in < 2.0.0-alpha.6
        newCtor.release()
      }
    } else {
      updateOptions(record.options, options)
    }
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn(
        'Root or manually mounted instance modified. Full reload required.'
      )
    }
  })
})

},{}],13:[function(require,module,exports){
(function (process){
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
'use strict';

/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

module.exports = VueRouter;

}).call(this,require('_process'))
},{"_process":11}],14:[function(require,module,exports){
var inserted = exports.cache = {}

function noop () {}

exports.insert = function (css) {
  if (inserted[css]) return noop
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return function () {
    document.getElementsByTagName('head')[0].removeChild(elem)
    inserted[css] = false
  }
}

},{}]},{},[9]);
