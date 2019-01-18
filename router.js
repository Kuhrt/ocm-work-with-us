import Router from 'vue-router';
import Process from './components/Process.vue';
import Progress from './components/Progress.vue';
import Form from './components/Form.vue';
import Contact from './components/form/Contact.vue';
import Project from './components/form/Project.vue';
import Submit from './components/form/Submit.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Process },
  {
    path: '/project',
    redirect: 'project/contact/name',
    components: { default: Form, progress: Progress },
    props: { default: true, progress: false },
    children: [
      {
        path: 'submit',
        component: Submit
      },
      {
        path: 'contact',
        redirect: 'contact/name'
      },
      {
        path: '/project/:field',
        component: Project,
        props: true
      },
      {
        path: 'contact/:field',
        component: Contact,
        props: true
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  // base: '/work-with-us/',
  base: '/communications/work-with-us/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
