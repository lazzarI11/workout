<template>
  <div id="header">
    <div id="menu">
      <ul>
        <li v-if="isAdmin == false"><router-link to="/">Home</router-link></li>

        <!-- <li v-if="!isAdmin">
          <router-link to="/about">About</router-link>
        </li> -->

        <li v-if="!isAdmin"><router-link to="/myplan">My Plan</router-link></li>

        <li v-if="!isAdmin">
          <router-link to="/workout">Workout Settings</router-link>
        </li>

        <li v-if="isAdmin == true">
          <router-link to="/admin">Admin</router-link>
        </li>
        <li v-if="!isAdmin">
          <router-link to="/exlib">Exercise Library</router-link>
        </li>

        <li v-if="!isAdmin">
          <router-link to="/calorie">Calorie Calculator</router-link>
        </li>
        <!-- <li v-if="!isAdmin">
          <router-link to="/workout">Food</router-link>
        </li> -->

        <li v-if="this.isLoggedIn == true">
          <router-link to="/login" @click="logout">Logout</router-link>
        </li>
        <li v-if="this.isLoggedIn == false">
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      hamburgerToggle: false,
    };
  },
  computed: {
    ...mapState(["isLoggedIn", "user", "exc", "sid", "isAdmin"]),
  },
  methods: {
    ...mapActions([
      "changeIsloggedin",
      "userStore",
      "excStore",
      "session",
      "changeIsAdmin",
    ]),
    async logout() {
      try {
        console.log(this.sid);

        const par = { sid: sessionStorage.getItem("sid") };
        console.log(sessionStorage.getItem("sid"));
        const res = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/lazar-logout",
          par
        );

        console.log.res;
        this.$toast.show(res.data.message, {
          position: "bottom-left",
          duration: 1200,
        });

        console.log(res);

        this.changeIsloggedin(false);
        this.changeIsAdmin(false);
        this.userStore("");
        this.excStore("");
        this.session(null);

        sessionStorage.removeItem("sid");

        this.$router.push("/");
      } catch (error) {
        console.warn(error);
      }
    },
    menu_options() {
      this.hamburgerToggle = this.hamburgerToggle ? false : true;
    },
  },
};
</script>

<style scoped>
.user {
  position: absolute;
  float: right;
  margin: 30px;
  color: white;
  font-size: 20px;
}
#header {
  width: 100%;
  margin: 0;
}
#menu {
  margin-top:50px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 75px;
 
  padding: 0 !important;
  background: #2c2c2b;
  background-position-x: center;
  background-size: 100% 80px;
  text-align: justify !important;
  z-index: 0;
}
#menu ul {
     display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;

  /* margin: 0 5% 0 5%; */
  padding: 0;
  list-style: none;
  line-height: normal;
  text-align: center !important;
  justify-content: space-around;
  align-content: center;
}
#menu li {
 flex-grow: 1;
  justify-content: center;
  width: 17vw;
  /* height: 100%; */
  text-align: center;
  align-content: center;
}
#menu li a {
  justify-content: center;
  position: relative;
transition: all 0.5s ease-out;
}
#menu a {
  display: inline-block;
  position: relative;
  width: 90%;
  height: 75px !important;
  margin-right: 1px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  color: #ffffff;
  padding-top: 35px;
  text-align: center !important;
  justify-content: center;
}
#menu a:hover {
  background: #181611;
  background-size: 100% 100%;
  align-content: center !important;

  color: #cd9f46;
}
#logo {
  height: auto;
  min-height: 250px;
  margin: 0 auto;
  text-align: right;
  background: url(../images/header.png) no-repeat left top;
  background-size: cover;
}
#logo h1 {
  padding-right: 20px;
  color: #ffffff;
  padding-top: 250px;
  font-size: 24px;
}
#logo h2 {
  font-style: italic;
  font-size: 10px;
  padding-right: 20px;
}
#logo a {
  color: #ffffff;
}
.dropdown:hover .dropdown-content {
  display: inline-block !important;
  position: absolute;
  padding-top: 2px !important;
  z-index: 1;
}
.dropdown {
  position: relative;
  display: block;
}
.dropdown-content {
  display: none;
  width: 100px;
  height: 30px;
  left: -65px;
  top: -5px;
  padding-top: 2px !important;
}
.dropdown-content li a {
  display: block;
  background-color: black;
  height: auto !important;
  font-size: 1em !important;
  text-align: center;
  color: white;
  z-index: 1;
  background-size: contain !important;
  border: 3px solid #cd9f46;
  border-radius: 10px 10px;
  margin-top: 0 !important;
}
#menu .dropdown-content {
  display: none;
  width: 90%;
  margin-top: 0 !important;
  left: 0;
  top: 75px !important;
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
  z-index: 3;
}
.menu-button-wraper {
  width: auto;
  height: 131px;
}
.menu-button {
  display: block !important;
  float: right;
  width: 45px;
  height: 40px;
  font-size: 2em !important;
  text-align: center !important;
  margin: auto;
  margin-right: 6%;
  margin-top: 1.1em;
  font-weight: bold;
  text-align: center;
  padding: 0;
  align-content: center;
  border-radius: 10px 10px;
  border: 3px solid #cd9f46;
}
.menu-button:hover {
  background-color: #cd9f46;
  border-color: white;
  color: white !important;
}
.menu-wraper {
  position: relative;
  width: 100% !important;
  float: right;
  z-index: 1;
  margin: 10px 6%;
  height: auto !important;
  text-align: right;
  align-content: flex-end;
}
.menu-wraper:hover {
  display: inline-block;
}
.menu-wraper:hover .dropdown-content {
  float: left;
  position: absolute;
  float: left;
  width: 70px;
}
.menu-wraper:hover .dropdown-content li a {
  float: left;
  width: 90%;
}
.menu-wraper:hover .dropdown-content li {
  position: relative;
}
.menu-text-wraper {
  display: inline-block;
  text-align: left;
  height: 100% !important;
  border-radius: 10px 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 3px solid #cd9f46 !important;
}
.menu-text-wraper li:hover {
  color: #ffffff;
  background: url(../images/button_r.gif) repeat-x center;
  background-size: 100% 100%;
}
.menu-wraper li {
  text-decoration: none !important;
  list-style: none !important;
  margin-left: -20px;
}
.menu-wraper li a {
  text-decoration: none !important;
  list-style: none !important;
}

@media screen and (max-width: 1099px) {
  .menu-button {
    display: block;
  }
  #menu a {
    font-size: 80% !important;
  }
}

@media screen and (max-width: 740px) {
  .menu-button {
    display: block;
  }

  #menu a {
    font-size: 50% !important;
  }
}

@media screen and (max-width: 640px) {
  .menu-button {
    display: block;
  }

  #menu a {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 420px) {
  .menu-button {
    display: block;
  }
  #menu a {
    font-size: 0.8em;
  }
  #menu ul a {
    width: 90%;
  }
}
</style>