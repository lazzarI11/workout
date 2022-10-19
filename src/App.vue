<template >
  <div id="main">

        <Header/>
		<div class="view">
  			<router-view />
  
		</div>
        <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from "axios";
import { mapState, mapActions } from "vuex";


export default {


  components: {
     Header,Footer
  },
  methods:{
    ...mapActions(["changeIsloggedin", "userStore", "excStore", "session","changeIsAdmin","changeUsrRequest","changeUsrPlan"]),

    async checkSession(){
          try {
              const response = await axios.post("http://548y122.e2.mars-hosting.com/workout/workout-check",{sid:sessionStorage.getItem("sid")})
           
             
              this.changeIsAdmin(response.data.user.usr_admin)
              this.changeIsloggedin(true)
              this.userStore(response.data.user)
              this.changeUsrRequest(response.data.user.usr_request)
              this.changeUsrPlan(response.data.user.user_have_plan)
          } catch (error) {
            console.warn(error);
          }
    },


  },
  created(){
   
     this.checkSession();

  },

  mounted(){
 
    this.checkSession();
  }

  
};
</script>

<style>
html {
  background-color: #f3eded;
  margin: 0;
  padding: 0;
  scroll-behavior: auto !important;
}

#app {
  background: #f3eded;
  display: flex;
}

* {
  margin: 0;
  padding: 0;
   box-sizing: border-box;
}

::-webkit-scrollbar {
  height: 17px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 7px;
}
::-webkit-scrollbar-thumb {
  background: #cd9f46;
  border-radius: 7px;
  background: #2c2c2b;
  border: 2px solid #f3eded;
}
::-webkit-scrollbar-thumb:hover {
  background: #362604;
}

body,
th,
td,
input,
textarea {
  font-family:Bembo;
  font-size: 14px;
  color: #666666;
}

h1,
h2,
h3 {
  color: #666666;
  
}

h1 {
  font-size: 3em;
}

h2 {
  
  font-size: 1.7em;
  font-weight: bold;
  color:#666666
}

h3{
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  color: #666666
}
/* 
p,
ul,
ol {
  margin-top: 1.5em;
  line-height: 1.8em;
  font-size: 1.1em;
} */
 /*
ul,
ol {
  margin-left: 3em;
} */

a {
  text-decoration: underline;
  color: #cd9f46;
}

a:hover {
  border: none;
  text-decoration: none;
}

h1 a,
h2 a,
h3 a {
  border: none;
  text-decoration: none;
  color: #cd9f46;
}

h1 a:hover,
h2 a:hover,
h3 a:hover {
  background: none;
  color: #cd9f46;
}

hr {
  display: none;
}

button{
    background: url(/images/button_r.gif) repeat-x center;
    background-color: #2c2c2b;
    background-size: cover;
    color: white;
    border-radius: 7px;
    width: 160px;
    height: 50px !important;
    font-size: 14px !important;
    font-weight: bold;
    border: 3px solid #cd9f46;
    padding-top: 5px;
    padding-bottom: 5px;
    transition: 0.7s;
}
button:hover{
 
  color: #cd9f46 !important;
  cursor: pointer;
}
input{
    height: 50px !important;
    border-radius: 7px;
    font-size: 14px !important;
    font-weight: bold;
    color: black;
    border: 3px solid #cd9f46;
    padding: 5px;
    text-align: center;
}
input:hover{
   border: 3px solid #cd9f46;
}
::-webkit-input-placeholder {
    color: #666666 !important;
}
select{
    height: 40px !important;
    border-radius: 7px;
    font-size: 14px !important;
    font-weight: bold;
    color: black;
    border: 3px solid #cd9f46 !important;
    padding: 5px;
    text-align: center;
}
#main {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  border-left: 1% solid #000000;
  border-right: 1% solid #000000;
  width: 100%;
}
.view {
  /* width: 100% !important;
  margin: auto; */
  background: #ffffff url(images/page_back.gif) repeat-x top;
  border-top: none;
  margin-top: 78px;
  padding-top: 7%;
  display: flex;
  flex-direction: column;
}
#menu{
  z-index: 0;
}

</style>
