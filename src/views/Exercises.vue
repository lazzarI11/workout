<template>
  <div>
    <div class="ime">
      <h1>{{ exerciseData[0].ex_name }}</h1>
    </div>

    <br />

    <div class="box">
      <img :src="exerciseData[0].ex_slika" />

      <img :src="exerciseData[0].ex_slika2" />
    </div>

    <br />

    <div class="komentar">
      <span>1</span>
      <!-- <img src=../images/one.png alt="One" > -->
      <p>{{ exerciseData[0].ex_step1 }}</p>
    </div>

    <div class="komentar">
      <!-- <img src=../images/two2.png alt="Two"> -->
      <span>2</span>

      <p>{{ exerciseData[0].ex_step2 }}</p>
    </div>

    <div class="komentar">
      <!-- <img src=../images/three.png alt="three"> -->
      <span>3</span>

      <p>{{ exerciseData[0].ex_step3 }}</p>
    </div>

    <div class="komentar" v-if="exerciseData[0].ex_step4 != null">
      <span>4</span>

      <!-- <img src=../images/three.png alt="three"> -->
      <p>{{ exerciseData[0].ex_step4 }}</p>
    </div>

    <div  class="komentar">
      <span class='desc'>Reps</span>
      <p>{{ exerciseData[0].ex_repeats }}</p>
    </div>

    <div class="adminovi">
      <button @click="goBack2" v-if="isAdmin">Previous</button>
      <button @click="goForward" v-if="isAdmin">Next</button>
    </div>

    <div class="back">
      <button @click="goBack" v-if="!isAdmin">Back</button>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      exerciseData: [{}],
      paramId: null,
      paramId2: null,
      
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapState(["isAdmin",]),
  },
 
  beforeMount() {
    this.getExercisesData(this.id);
  },
  mounted() {},
  methods: {
    async getExercisesData(id) {
      console.log(id);
      try {
        // this.form.id = this.id

        const params = {
          id: id,
        };
        const rez = await axios.post(
          "http://548y122.e2.mars-hosting.com/workout/get-one-ex",
          params
        );
        console.log(rez);
        this.exerciseData = rez.data.Data;
        console.log(this.exerciseData);
      } catch (error) {
        console.log(error);
      }
    },
    goBack() {
      this.$router.go(-1);
    },

    async goForward() {
      if (this.paramId) {
        this.paramId++;
      } else {
        this.paramId = Number(this.$route.params.id) + 1;
      }
      console.log(this.paramId);
      await this.getExercisesData(this.paramId);
    },

    async goBack2() {
      if (this.paramId) {
        this.paramId--;
      } else {
        this.paramId = Number(this.$route.params.id);
      }
      console.log(this.paramId);
      await this.getExercisesData(this.paramId);
    },
  },
};
</script>

<style scoped>
.komentar {
  max-width: 100%;
  display: flex;
  padding-left: 1%;
  padding-top: 1%;
  align-items: center;
}

.komentar > span {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  /* border: 1px solid black; */
  background: #cd9f46;
  color:white

}

.komentar > .desc {
  font-size: 14px;
}
.komentar img {
  width: 5%;
  height: 5%;

}

.komentar p {
  padding-left: 10px;
}

.ime {
  display: flex;
  justify-content: center;
}

.box {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 10px;
}

.box img {
  max-width: 80%;
  border-radius:30px;
}

.adminovi {
  display: flex;
  justify-content: space-evenly;
}

.back {
  display: flex;
  justify-content: center;
  margin-top: 5%;
}
</style>
