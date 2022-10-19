<template>
  <div class="conteiner">
    <br />
    <h1>Setup workout form</h1>
    <h3>What is your current level?</h3>
    <div class="radio_buttons_wrapper">
      <div class="radio_buttons">
        <input
          v-model="form.lvl"
          name="Beginner"
          type="radio"
          class="cheker"
          v-bind:value="'1'"
          checked
        />
        <label for="Beginner">Beginner</label><br />
        <input
          v-model="form.lvl"
          name="Intermediate"
          type="radio"
          class="cheker"
          v-bind:value="'2'"
        />
        <label for="Intermediate">Intermediate</label><br />
        <input
          v-model="form.lvl"
          name="Advanced"
          type="radio"
          class="cheker"
          v-bind:value="'3'"
        />
        <label for="Advanced">Advanced</label>
        <br />
        <br />
      </div>
    </div>
    <h3>Where you workout?</h3>
    <div class="radio_buttons_wrapper">
      <div class="radio_buttons">
        <input
          v-model="form.wop"
          name="Home"
          type="radio"
          class="cheker"
          v-bind:value="'1'"
          checked
        />
        <label for="Home">Home</label><br />
        <input
          v-model="form.wop"
          name="Gym"
          type="radio"
          class="cheker"
          v-bind:value="'2'"
        />
        <label for="Gym">Gym</label>
        <br />
      </div>
    </div>
     <h3>What is your goal?</h3>
    <div class="radio_buttons_wrapper">
      <div class="radio_buttons">
        <input
         
         v-model="form.sub"
          name="LoseWeight"
          type="radio"
          class="cheker"
          v-bind:value="'1'"
          
          
        />
        <label >Lose weight</label><br />
        <input
         
           v-model="form.sub"
          name="BuildMuscles"
          type="radio"
          class="cheker"
          v-bind:value="'2'"
          
        />
        <label >Build muscles</label><br />
        <input
          
           v-model="form.sub"
          name="GetShredered"
          type="radio"
          class="cheker"
          v-bind:value="'3'"
         
        />
        <label>Get shredered</label>
        <br />
        <br />
      </div>
    </div>
    
    <div class="submitBtnWrapper">
      <button id="submitBtn" @click="getUserData">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        lvl: "1",
        id: "",
        wop: "1",
        sub:"1"
      },
    };
  },
  computed: {
    ...mapState(["user"," usrRequest"]),
  },
  methods: {
    ...mapActions(["userStore","changeUsrRequest"]),

    async getUserData() {
      this.form.id = this.user.usr_id;
      try {
     
        const res = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/workout-data",
          this.form
        );
        console.log(res);
        this.changeUsrRequest(true)
        this.$router.push("/")
      } catch (error) {
        console.warn(error);
      }
    },
  },
};
</script>

<style scoped>
.radio_buttons {
  display: flex;
  flex-direction: column;
  margin: 3px;
  justify-content: center;
  
  align-items: center;
  float: left;
  vertical-align: middle; 
  
}
.radio_buttons input {
  margin: 2px;
}
.radio_buttons label {
  align-items: baseline;
}
.radio_buttons_wrapper {
  display: flex;
  width: auto;
  justify-content: center;
}
.conteiner {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
}
input{
  height: auto !important;
}
#submitBtn {
  margin: 15px;
  width: 120px;
  justify-content: center;
  align-content: center;
  height: 35px;
  background: url(../images/button_r.gif) repeat-x center;
  background-size: contain;
  color: white;
}
.submitBtnWrapper {
  display: flex !important;
  justify-content: center;
}
h1,
h3 {
  text-align: center;
  margin-top: 30px;
}
</style>