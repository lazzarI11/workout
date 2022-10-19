<template>
  <div id="wrap">
    <input id="srch" type="text" placeholder="Search" v-model.trim="search" />

    <table class="customers">
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Exercise Page</th>
      </tr>
      <tr v-for="item in exer" v-bind:key="item.ex_id">
        <td>{{ item.ex_id }}</td>
        <td>{{ item.ex_name }}</td>
        <td>
          <router-link :to="'/exid/' + item.ex_id" :aad="true"
            >Exercise page</router-link
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {

   data() {
    return {
      toggle: false,
      toggle2: false,
      users: [],
      exer: [],
      search: "",
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
  methods: {
    async getEx() {
      try {
        const res = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/get-exercises",
          {
           search: this.search 
          }
        );
        this.toggle2 = !this.toggle2;
        console.log(res.data);
        this.exer = res.data.exercises;
        console.log(this.exer);
      } catch (error) {
        console.warn(error);
      }
    },
  },
  watch: {
    search: {
      handler() {
        this.getEx();
      },
    },
  },

  beforeMount() {
    this.getEx();
  },
};
</script>
<style scoped>
/* .wrap{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  } */

html {
  width: 100px !important;
}
.viewWrapper {
  margin-top: 10px;
}

#srch{
  margin-top:-50px;
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
.wrap,input{
  display: flex;
  width: 50% !important;
  height: 30px !important;
  align-self: center;
  justify-self: center;
  margin: auto;
  margin-bottom: 10px;
  font-size: 1.7em !important;
}
.customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 95%;
  margin: auto;
  margin-bottom: 5%;
}

.customers td,
.customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

.customers tr:hover {
  background-color: #ddd;
}

.customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: gray;
  color: white;
}

@media screen and (max-width: 1300px) {

  #srch{

margin-top: -10px;


}

}
@media screen and (max-width: 890px) {

  #srch{

margin-top: 10px;


}

}



@media screen and (max-width: 730px) {

  #srch{

margin-top: 20px;


}

}

@media screen and (max-width: 470px) {

  #srch{

margin-top: 30px;


}

}


@media screen and (max-width: 310px) {

  #srch{

margin-top: 40px;


}

}


</style>