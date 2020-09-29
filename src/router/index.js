import Vue from 'vue'
import VueRouter from 'vue-router'
import Loan from '../views/Loan.vue'
import Students from '../views/Students.vue'
import Chromebooks from '../views/Chromebooks.vue'
import Return from '../views/Return.vue'
import Confirmation from '../views/Confirmation.vue'
import TaiohiDevices from '../views/TaiohiDevices.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Loan',
    component: Loan
  },
  {
    path: '/return',
    name: 'Return',
    component: Return
  },
  {
    path: '/Students',
    name: 'Students',
    component: Students
  },

  {
    path: '/Chromebooks',
    name: 'Chromebooks',
    component: Chromebooks
  },

  {
    path: '/Confirmation',
    name: 'Confirmation',
    component: Confirmation
  },

  {
    path: '/TaiohiDevices',
    name: 'TaiohiDevices',
    component: TaiohiDevices
  },
]

const router = new VueRouter({
  routes
})

export default router
