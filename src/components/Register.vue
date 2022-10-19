<template>

<h2>Welcome</h2>
  <div class="login">
    <div class="form">
      
        <input type="text" placeholder="Full name"  v-model.trim="name" />
        <input type="text" placeholder="Email" v-model.trim="email" />
        <input type="password" placeholder="Password" v-model.trim="password" />
         <input type="password" placeholder="Confirm password" v-model.trim="confPassword" />
                         <label for="file">Profile pic</label>
                          <input type="file"  @change="getFile" id="file" >
                          
        <button @click="userRegister">Register</button>


  </div>
  </div>

  <p>{{info}}</p>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: "",
      
        name:"",
        password:"",
        email:"",
        confPassword:"",
        file:"",
        message:""
    };
  },

  methods: {

     getFile (event) {
            this.file = event.target.files[0];
        },



    async userRegister() {

    
      if (
        this.name == "" ||
        this.password == "" ||
        this.email == "" 
        
      ) {
        this.message = "Missing parameters!";
          this.$toast.show(
                this.message,
                    {
                    position:
                    "bottom-left",
                    duration:1200}
          )
        return;
      }
       if (
        this.password != this.confPassword
      ) {
        this.message = "Invalid password!";
         this.$toast.show(
                this.message,
                    {
                    position:
                    "bottom-left",
                    duration:1200}
          )
        return;
      }
       if (
        this.file ==""
      ) {
        this.message = "Profile picture missing";
          this.$toast.show(
                this.message,
                    {
                    position:
                    "bottom-left",
                    duration:1200}
          )
        return;
      }

      try {

            const formData=new FormData();
                   
                    formData.append('name',this.name)
                    formData.append('email',this.email)
                    formData.append('password',this.password)
                    formData.append('file',this.file)



        const res = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/lazar-register",
          formData
        );
        
        console.log(res);
       this.$toast.show(
                res.data.message,
                    {
                    position:
                    "bottom-left",
                    duration:1200}
          )
        this.message = res.data.message;

        if(res.data.message == "SUCESS"){
            this.$router.replace({name:"login"});
        }
      
      }catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>

<style scoped>

/* input[type="file"]{
  display:-moz-box;
} */

/* label{
  color:white;
  height:60px;
  width:200px;
  background-color: #2c2c2b;
  /* position:absolute; */
  /* margin:auto;
  top:0;
  bottom:0;
  left:0;
  right:0;
  font-size: 20px;
  display:flex;
  justify-content: center;
  align-items: center;

}  */
#file{

  border: none;
}
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