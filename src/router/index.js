import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlanInfo from '../views/PlanInfo.vue'
import store from '../store'
import Admin from '../views/Admin.vue'
import PlanMaker from '../views/PlanMaker.vue'
import NotFound from '../views/NotFound.vue'
import AddExercise from '../views/AddExercise.vue'
import Calorie from '../views/Calorie.vue'
import Myplan from '../views/MyPlan.vue'
import Exercises from '../views/Exercises.vue'
import ExerciseLib from '../views/ExerciseLib.vue'
import axios from 'axios'

import { mapState,mapActions} from "vuex";


const routes = [
  {

    meta: {
      //  requiresLogin: true,
      //  requiresAdmin: true,
    },
    
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: (to,from,next) =>{
        if(store.state.isAdmin == true){
          next("/admin");
        }else{
          next();
        }
    }
  },
  {
    path: '/planinfo',
    name: 'PlanInfo',
    component: PlanInfo,

  },
  {
    path: '/workout',
    name: 'Workout',
    component: () => import('../components/Workout.vue'),
    meta: {
      requiresLogin: true
    },
    beforeEnter: (to,from,next) =>{
      console.log(store.state.usrRequest)
      console.log(store.state.usrPlan)
      if(store.state.usrRequest&&!store.state.usrPlan || !store.state.usrRequest&&store.state.usrPlan){
        next("/planinfo");
      }else{
        next();
      }
  }

  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    
    beforeEnter: (to,from,next) =>{
    if(store.state.isAdmin == false){
        next("/");
    }else{
        next();
    }}
 
  },
  {
    path: '/mkplan/:id',
    name: 'PlanMaker ',
    component: PlanMaker,
    
    beforeEnter: (to,from,next) =>{
    if(store.state.isAdmin  == false){
      next("/");
    }else{
      next();
    }}
  },
  {
    path: '/exid/:id',
    name: 'exercises ',
    component: Exercises,
    
},
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/addExercise',
    name: 'AddExercise',
    component: AddExercise,

    beforeEnter: (to,from,next) =>{
     
      if(store.state.isAdmin  == false){
        next("/");
      }else{
        next();
      }}
    
  },
  {
    path: '/calorie',
    name: 'Calorie',
    component: Calorie,
  },
  {
    path: '/exlib',
    name: 'ExerciseLib',
    component: ExerciseLib,
  },
  {
    path: '/myplan',
    name: 'Myplan',
    component: Myplan,
    meta: {
      requiresLogin: true
    },
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresLogin) {
    // console.log(from);
    if (sessionStorage.getItem("sid")) {
      
     
      const response = await axios.post("http://548y122.e2.mars-hosting.com/workout/workout-check",{sid:sessionStorage.getItem("sid")})
       
      store.dispatch('changeIsloggedin',true);
      store.dispatch('userStore',response.data.user);
      store.dispatch('changeIsAdmin',response.data.user.usr_admin);
      next();
    } else {
      next("/login")
    }
      

  } else {

    next()
   
  }
})

export default router
