<template>
 <h2>Welcome</h2>
<div class="login">
  <div class="form">
    <label for="" class="inf">E-mail</label>
    <input :style="validationStyleUsername" type="text" placeholder="Enter e-mail"  v-model.trim="form.email" />
    <label for="" class="inf">Password</label>
    <input :style="validationStylePass" type="password" placeholder="Enter password" v-model.trim="form.password" />
    
    <button @click="userLogin" class="loginBtn">Login</button>

    <button @click="Redirect" class="loginBtn">SignUp</button>


  </div>
</div>
<p>{{info}}</p>

</template>


<script>

import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {

  data() {
    return {
      validationUserName: true,
      validationPass: true,
      user1: null,
      info: "",
      form: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["isLoggedIn", "user", "sid","isAdmin","usrRequest"]),
    validationStyleUsername() {
      if(!this.validationUserName){
        return{        
         background: 'red',
        }
      }
      else{
        return ''
      }
    },
     validationStylePass() {
      if(!this.validationPass){
        return{        
         background: 'red',
        }
      }
      else{
        return '';
      }
    }
  },
  methods: {
    ...mapActions(["changeIsloggedin", "userStore", "excStore", "session","changeIsAdmin","changeUsrRequest","changeUsrPlan"]),
    
    login() {
      this.changeIsloggedin(true);
      this.changeIsAdmin(this.user1.user.usr_admin)
      this.changeUsrRequest(this.user1.user.usr_request)
       this.changeUsrPlan(this.user1.user.usr_have_plan)
    },
    
    logout() {
      this.changeIsloggedin(false);
      this.userStore(null);
      this.sesion(null);
      this.changeIsAdmin(false);
      this.changeUsrRequest(false)
    },
    
    async userLogin() {
      try {
        const res = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/lazar-login",
          this.form
        );
        console.log(res);
        console.log("message: " + res.data.message);
        this.info =res.data.message;
        this.user1 = res.data;
        console.log(res.data);
        this.$toast.show(
                this.info,
                    {
                    position:
                    "bottom-left",
                    duration:1200}
          )

        sessionStorage.setItem("sid",res.data.sid);
        
        if(res.data.message == 'Wrong E-mail!'){
            this.validationUserName = false;
        }
        if(res.data.message == 'WRONG PASSWORD!'){
            this.validationPass = false;
            this.validationUserName = true;
        }
         if(res.data.message == 'MISSING PARAMETER!' && this.form.email == ''){
            this.validationUserName = false;
         }
          if(res.data.message == 'MISSING PARAMETER!' && this.form.password == ''){
            this.validationPass = false;
         }
       
        this.userStore(this.user1.user);
        this.session(res.data.sid);
        
        if(res.data.message == "Successfully logged in!"){
        this.$router.replace({name:"Home"});
        }
        
        console.log("this.user1...", this.user1);
        this.login();

      } catch (error) {
        console.warn(error);
      }
    },
    Redirect(){
        this.$router.replace({name:"register"});
    }
  },
};
</script>

<style scoped>
p {
  text-align: center;
}
.login {
  width: 30%;
  height: 100%;
  border: 1px solid #CCC;
  /* background: url(https://media.giphy.com/media/xVn3ZmKrKIOLS/giphy.gif) center center no-repeat;
  background: url(https://media0.giphy.com/media/XRkoMgzO6NVfy/giphy.gif) center center no-repeat; */
  /* background: url(../images/workout-wallpaper-fitness-wallpaper.jpg) center center no-repeat; */
  background-color: #C8D0A9;
  background-size: cover;
  margin: 2% auto;
  margin-bottom: 120px;
  border-radius: 20px;
  z-index: 1;
}
.login .form {
  /* width: 100%; */
  height: 100%;
  padding: 15px 25px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}
 h2 {
  color: black;
  font-weight: bolder;
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  margin-top: 1px;
  margin-bottom:10px;
  text-shadow: 1px 1px 3px white;
}
.login .form input{
  width: 90%;
  height: 40px;
  margin: 1% 5% 2% 5% !important;
  /* background: rgba(255,255,255,.5);
  border: 1px solid rgba(255,255,255);
  padding: 0 5% 0 5% !important;
 color: black;
   background: black;
  opacity: 80%;
  border-radius: 5px; 
  font-size: 14px;*/
}

.inf{

  font-size: 15px;
}

.loginBtn{
  width: 50%;
  height: 40px;
  margin: 5% 5% 2% 5% !important;
  /* border: 1px solid rgba(255,255,255,.1);*/

  /* border-radius: 5px;
  font-size: 14px; */
      /* background: black;
    color: white; */
    /* border-radius: 7px;
    font-size: 20px;
    font-weight: bold; */
    /* border: 3px solid #cd9f46; */
}
.login .form input:focus {
  /* border: 1px solid rgba(255,255,255,.8); */
  outline: none;
}
::-webkit-input-placeholder {
    color: black;
}
.login .form button {

  font-size: 15px;
  margin-top: 40px;
  font-weight: bold;
  border-radius: 15px;
}
/* .form button:hover{
  background-color: rgba(255,255,255,.9);
} */
input{
  z-index: 10;
}
.view{
  z-index: 0;
}
.emptyFeald{
  font-size: 15px;
  margin-top: 50px;
}
@media screen and (max-width: 740px) {
.login{
    width: 40%;
  }
}
@media screen and (max-width: 640px) {
.login{
    width: 50%;
  }
}
@media screen and (max-width: 420px) {
  .login{
    width: 60%;
  }
}
</style>