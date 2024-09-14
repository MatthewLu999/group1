import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../HomeView.vue'
import ContactUsView from '../views/viewjobs/ContactUsView.vue'
import WorkOutView from '../views/viewjobs/WorkOutView.vue'
import NutritionView from '../views/viewjobs/NutritionView.vue'
import TrackerView from '../views/viewjobs/TrackerView.vue'
import NotFound from '../views/viewjobs/NotFound.vue'
import LoginForm from '../LoginForm.vue'
import PracticingGoal from '../views/viewjobs/PracticingGoal.vue'
import RegisterForNewAccount from '../views/viewjobs/RegisterForNewAccount.vue'
import ExcerciseDetails from '../views/viewjobs/ExcerciseDetails.vue'
import App from '@/App.vue'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/excercisedetails',
    name: 'ExcerciseDetails',
    component: ExcerciseDetails
  },
  {
    path: '/practicinggoal',
    name: 'PracticingGoal',
    component: PracticingGoal
  },
  {
    path: '/registerfornewaccount',
    name: 'RegisterForNewAccount',
    component: RegisterForNewAccount
  },
  {
    path: '/viewjobs/workoutview',
    name: 'WorkOutView',
    component: WorkOutView
  },
  {
    path: '/viewjobs/nutritionview',
    name: 'NutritionView',
    component: NutritionView
  },
  {
    path: '/viewjobs/trackerview',
    name: 'TrackerView',
    component: TrackerView
  },
  {
    path: '/viewjobs/contactusview',
    name: 'ContactUsView',
    component: ContactUsView
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/viewjobs/loginform',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/viewjobs/app',
    name: 'App',
    component: App,
    props: true
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
