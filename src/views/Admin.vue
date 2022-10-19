<template>
<div class="viewWrapper">
  <div class="btnWrapper">
    <button @click="getBlogs">Zahtevi</button>
  </div>
  
  <table v-show="toggle" class="customers">
    <tr>
      <th>Index</th>
      <th>Email</th>
      <th>Request</th>
    </tr>
    <tr v-for="item in users" v-bind:key="item.usr_id">
      <td>{{ item.usr_id }}</td>
      <td>{{ item.usr_email }}</td>
      <td>
        <router-link :to="'/mkplan/' + item.usr_id">Make plan</router-link>
      </td>
    </tr>
  </table>
  
  <div class="btnWrapper">
    <button @click="getEx">Lista Vezbi</button>
  </div>
  
  <table v-show="toggle2" class="customers">
    <tr>
      <th>Index</th>
      <th>Name</th>
      <th>Exercise Page</th>
    </tr>
    <tr v-for="item in exer" v-bind:key="item.ex_id">
      <td>{{ item.ex_id }}</td>
      <td>{{ item.ex_name }}</td>
      <td>
        <router-link :to="'/exid/' + item.ex_id">Exercises page</router-link>
      </td>
    </tr>
  </table>
  <br />
  <div class="btnWrapper">
    <button @click="RedirectToaddExer">Add exercise</button>
  </div>
  <br />
  </div>

</template>
<script>
import axios from "axios";

export default {
  methods: {
    async getBlogs() {
      try {
        const res = await axios.get(
          "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-requests"
        );
        this.toggle = !this.toggle
        this.users = res.data.findUser;
        console.log(this.users);
      } catch (error) {
        console.warn(error);
      }
    },
    async getEx() {
      try {
        const res = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/get-exercises", { 
           search: this.search}
        );
     
        this.toggle2 = !this.toggle2
        this.exer = res.data.exercises;
        console.log(this.exer);
      } catch (error) {
        console.warn(error);
      }
    },
    async RedirectToaddExer() {
      this.$router.replace({ name: "AddExercise" });
    },
  },
  data() {
    return {
      toggle:false,
      toggle2:false,
      users: [],
      exer: [],
      search:"",
      form: {
        name: "",
        reps: "",
        wop: "",
        lvl: "",
        cat: "",
        desc: "",
      },
    };
  },
};
</script>
<style scoped>
html{
  width: 100px !important;
}
.viewWrapper{
  margin-top: 10px;
}
.btnWrapper button {
  height: 30px;
  background: url(../images/button_r.gif) repeat-x center;
  background-size: contain;
  color: white;
  justify-content: center;
  width: 30%;
}
.btnWrapper {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

 .customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin: auto;
}

.customers td, .customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.customers tr:nth-child(even){background-color: #f2f2f2;}

.customers tr:hover {background-color: #ddd;}

.customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: gray;
  color: white;
} 
</style>