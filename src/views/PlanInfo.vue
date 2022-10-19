<template>
  <div class="wrapper">
    <!-- <div class="info">

                 <h1>HI {{this.user.usr_name}} </h1>   
                <h2>You selected {{usrWop}} exercises </h2>
                 <h2>And your current workout level is {{usrLvl}} </h2>
                 <h2> {{message}}</h2>

</div> -->

    <div class="profile">
      <!-- <img src="https://www.bootdey.com/img/Content/avatar/avatar7.png" alt="profile" id="pic"> -->
      <img
        :src="
          'http://548y122.e2.mars-hosting.com/images/lazarimages/' +
          this.user.usr_id
        "
        alt="profile"
        id="pic"
      />

      <p>{{ this.user.usr_name }}</p>

      <p>Workout status:</p>

      <p>{{ message }}</p>

      <button @click="move()">Checkout</button>
    </div>

    <div class="usrInfo">
      <div class="field">
        <p>Full name:{{ this.user.usr_name }}</p>
      </div>

      <div class="field">
        <p>E-mail: {{ this.user.usr_email }}</p>
      </div>

      <div class="field">
        <p>Workout Place: {{ usrWop }}</p>
      </div>

      <div class="field">
        <p>Workout level: {{ usrLvl }}</p>
      </div>

      <div class="field">
        <p>Workout goal: {{ goal }}</p>
      </div>

      <button @click="metoda()">Edit workout</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      usrLvl: "",
      usrWop: "",
      message: "",
      goal: "",
    };
  },
  mounted() {
    this.getUserData();
  },

  computed: {
    ...mapState(["isLoggedIn", "user", "sid", "isAdmin", "usrRequest"]),
  },
  methods: {
    ...mapActions(["userStore", "changeUsrRequest"]),

    move() {
      this.$router.push("/myplan");
    },

    async getUserData() {
      const params = {
       id: this.user.usr_id,
      };
      try {
        const res = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/workout-info",
          params
        );
        console.log(res);
        this.usrLvl = res.data.data.lvl_name;
        this.usrWop = res.data.data.wop_name;
        this.goal = res.data.data.subcat_name;
        this.message = res.data.message;
      } catch (eror) {
        console.log(eror);
      }
    },

    async editWorkout() {
      const params = {
        id: this.user.usr_id,
      };
      try {
        const res = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/edit-workout-data",
          params
        );
      } catch (eror) {
        console.log(eror);
      }
    },

    metoda() {
      if (
        window.confirm("Your previous workout will be deleted,are you sure?")
      ) {
        this.editWorkout();
        this.changeUsrRequest(false);
        this.$router.push("/workout");
      } else {
        console.log("ok");
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  margin: auto;
  padding-bottom: 20px;
}
.wrapper button{
  width: 30vw;
  align-self: center;
}
p {
  font-size: 1.3em;
}

.field p {
  font-size: 1.5em;
  color: rgb(112, 110, 110);
}

.info {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.profile img {
  width: 56%;
  height: 50%;

}
#pic {
  border: 3px solid grey;
  border-radius: 100%;
}

.profile {
  width: 35%;
  height: 470px;
  border: 5px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  margin-top: 0;
}
.profile p {
  text-align: center;
  word-wrap: break-word;
}
.usrInfo {
  width: 50%;
  height: 470px;
  border: 5px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3%;
  margin-left: 5px;
}
.field {
  border-bottom: 1px solid rgb(212, 206, 206);
  width: 100%;
}



</style>