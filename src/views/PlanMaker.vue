<template>
  <div>
    <div class="wrp">
      <div class="desc">
        <h1>Workout plan for user:</h1>
        <h2>User form:</h2>
        <h2>User workout place:</h2>
      </div>
      <div class="daysWrapper">
        <div class="days">
          <Day
            @emitCategory="getFilteredExercises"
            @emitSelectedEx="addDay"
            @deleteEx="deleteExercises"
            @editEx="editExercises"
            @dayAdded="day1Add"
            :id="this.id"
            :exercises="exercises"
            :day="1"
          />
          <Day
            @emitCategory="getFilteredExercises2"
            @emitSelectedEx="addDay"
            @deleteEx="deleteExercises"
            @editEx="editExercises"
            @dayAdded="day2Add"
            :id="this.id"
            :exercises="exercises2"
            :day="2"
          />
          <Day
            @emitCategory="getFilteredExercises3"
            @emitSelectedEx="addDay"
            @deleteEx="deleteExercises"
            @editEx="editExercises"
            @dayAdded="day3Add"
            :id="this.id"
            :exercises="exercises3"
            :day="3"
          />
          <Day
            @emitCategory="getFilteredExercises4"
            @emitSelectedEx="addDay"
            @deleteEx="deleteExercises"
            @editEx="editExercises"
            @dayAdded="day4Add"
            :id="this.id"
            :exercises="exercises4"
            :day="4"
          />
          <Day
            @emitCategory="getFilteredExercises5"
            @emitSelectedEx="addDay"
            @deleteEx="deleteExercises"
            @editEx="editExercises"
            @dayAdded="day5Add"
            :id="this.id"
            :exercises="exercises5"
            :day="5"
          />
          <Day
            @emitCategory="getFilteredExercises5"
            @emitSelectedEx="addDay"
            @deleteEx="deleteExercises"
            @editEx="editExercises"
            @dayAdded="day6Add"
            :id="this.id"
            :exercises="exercises6"
            :day="6"
          />
        </div>
      </div>
      {{ message }}
    </div>
    <div class="wrapBtnMakePlan">
      <button class="btnMakePlan" @click="makePlan()" id='daysWrapperMove'>Make plan</button>
    </div>
  </div>
</template>

<script>
import Day from "@/components/Day.vue";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  beforeRouteLeave(to, from, next) {
    if (this.answer) {
      next();
    } else {
      this.answer = window.confirm(
        "Do you really want to leave? you have unsaved changes!"
      );
      if (this.answer) {
        next();
      } else {
        next(false);
      }
    }
  },

  components: {
    Day,
  },
  data() {
    return {
      exercises: [],
      exercises2: [],
      exercises3: [],
      exercises4: [],
      exercises5: [],
      exercises6: [],

      Day1Added: false,
      Day2Added: false,
      Day3Added: false,
      Day4Added: false,
      Day5Added: false,
      Day6Added: false,

      answer: false,
      exToAdd: [],

      catValue: "",

      message: "",
    };
  },

  mounted() {
    this.getExercises();
  },
  computed: {
    ...mapState(["isLoggedIn", "user", "sid", "isAdmin"]),
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    // GET ALL EXERCISES//

    async getExercises() {
      const usrId = {
        usrId: this.id,
      };
      try {
        const res = await axios.post(
          "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-get-ex",
          usrId
        );
        this.exercises = res.data.exercises;
        this.exercises2 = res.data.exercises;
        this.exercises3 = res.data.exercises;
        this.exercises4 = res.data.exercises;
        this.exercises5 = res.data.exercises;
        this.exercises6 = res.data.exercises;
      } catch (eror) {
        console.log(eror);
      }
    },

    ///// END GET ALL/////

    /////  GET FILTERED 1 /////

    async getFilteredExercises(evt) {
      this.catValue = evt;
      const params = {
        usrId: this.id,
        catId: this.catValue,
      };
      try {
        const res = await axios.post(
          "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-get-ex",
          params
        );

        this.exercises = res.data.exercisesFiltered;
      } catch (eror) {
        console.log(eror);
      }
    },
    ///// END FILTERED1 /////

    /////  GET FILTERED 2 /////
    async getFilteredExercises2(evt) {
      this.catValue = evt;
      const params = {
        usrId: this.id,
        catId: this.catValue,
      };
      try {
        const res = await axios.post(
          "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-get-ex",
          params
        );
        this.exercises2 = res.data.exercisesFiltered;
      } catch (eror) {
        console.log(eror);
      }
    },
    ///// END FILTERED2 /////

    /////  GET FILTERED 3 /////
    async getFilteredExercises3(evt) {
      this.catValue = evt;
      const params = {
        usrId: this.id,
        catId: this.catValue,
      };
      try {
        const res = await axios.post(
          "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-get-ex",
          params
        );
        this.exercises3 = res.data.exercisesFiltered;
      } catch (eror) {
        console.log(eror);
      }
    },
    ///// END FILTERED3 /////

    /////  GET FILTERED 4 /////
    async getFilteredExercises4(evt) {
      this.catValue = evt;
      const params = {
        usrId: this.id,
        catId: this.catValue,
      };
      try {
        const res = await axios.post(
          "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-get-ex",
          params
        );
        this.exercises4 = res.data.exercisesFiltered;
      } catch (eror) {
        console.log(eror);
      }
    },
    ///// END FILTERED4 /////
    /////  GET FILTERED 5 ///// ...mapState(["isLoggedIn", "user", "sid","isAdmin"]),
    async getFilteredExercises5(evt) {
      this.catValue = evt;
      const params = {
        usrId: this.id,
        catId: this.catValue,
      };
      try {
        const res = await axios.post(
          "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-get-ex",
          params
        );
        this.exercises5 = res.data.exercisesFiltered;
      } catch (eror) {
        console.log(eror);
      }
    },
    ///// END FILTERED5 /////
    /////  GET FILTERED 6 /////
    async getFilteredExercises6(evt) {
      this.catValue = evt;
      const params = {
        usrId: this.id,
        catId: this.catValue,
      };
      try {
        const res = await axios.post(
          "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-get-ex",
          params
        );
        this.exercises6 = res.data.exercisesFiltered;
      } catch (eror) {
        console.log(eror);
      }
    },
    ///// END FILTERED6 /////
    //DODAVANJE DANA U NIZ//
    addDay(evt) {
      this.exToAdd.push({ day: evt.day, arr: evt.arr });
      console.log(this.exToAdd);
      if (evt.arr.length === 0) {
        this.message = "";
      } else {
        this.$toast.show("Day " + evt.day + " added!", {
          position: "top-left",
          duration: 1200,
        });
      }

      //   this.message = "Day " + evt.day + " added!";
      // }
    },
    day1Add(evt) {
      this.Day1Added = evt;
      console.log(evt);
      console.log(this.Day1Added);
    },
    day2Add(evt) {
      this.Day2Added = evt;
      console.log(this.Day2Added);
    },
    day3Add(evt) {
      this.Day3Added = evt;
    },
    day4Add(evt) {
      this.Day4Added = evt;
    },
    day5Add(evt) {
      this.Day5Added = evt;
    },
    day6Add(evt) {
      this.Day6Added = evt;
    },
    //IZMENA DANA U NIZU//
    editExercises(evt) {
      console.log(evt);
      for (const e in this.exToAdd) {
        console.log(e);
        if (this.exToAdd[e].day === evt.day) {
          this.exToAdd.splice(e, 1);
        }
      }
      console.log(this.exToAdd);
    },
    //BRISANJE DANA U NIZU//
    deleteExercises(evt) {
      console.log(evt);
      for (const e in this.exToAdd) {
        console.log(e);

        if (this.exToAdd[e].day === evt.day) {
          this.exToAdd.splice(e, 1);
        }
      }

      this.$toast.show("Day " + evt.day + " deleted!", {
        position: "top-left",
        duration: 1200,
      });
      // this.message = "Day " + evt.day + " deleted!";
      // console.log(this.exToAdd);
    },
    //DODAVANJE VEZBI U BAZU //

    async addExercises() {
      for (const ex in this.exToAdd) {
        for (const a in this.exToAdd[ex].arr) {
          const params = {
            usrId: this.id,
            exId: this.exToAdd[ex].arr[a].ex_id,
            dayId: this.exToAdd[ex].day,
          };
          try {
            console.log("step3");
            const res = await axios.post(
              "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/add-plan",
              params
            );
          } catch (eror) {
            console.log(eror);
          }
        }
      }
    },
    //PRAVLJENJE PLANA//

    async makePlan() {
      if (
        !this.Day1Added ||
        !this.Day2Added ||
        !this.Day3Added ||
        !this.Day4Added ||
        !this.Day5Added ||
        !this.Day6Added
      ) {
        console.log(this.Day1Added);
        console.log(this.Day2Added);
        console.log(this.Day3Added);
        console.log(this.Day4Added);
        console.log(this.Day5Added);
        console.log(this.Day6Added);
        alert("you must add all days");
      } else {
        this.addExercises();

        const params = {
          usrId: this.id,
          usrRequest: false,
        };
        try {
          const res = await axios.put(
            "http://576e122.e2.mars-hosting.com/api/plan-vezbanja/workout-planMake",
            params
          );

          this.message = res.data.message;
        } catch (error) {
          console.log(eror);
        }

        this.$toast.show(this.message, {
          position: "top-left",
          duration: 1200,
        });
        this.answer = true;
        //  this.$router.push("/admin");
      }
    },
  },
};
</script>

<style scoped>

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 7px;
}
::-webkit-scrollbar-thumb {
 
  border-radius: 7px;
 
}
::-webkit-scrollbar-thumb:hover {
  background: #362604;
}

.wrp {
  display: flex;
  flex-direction: column;
}

.desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3%;
}
.daysWrapper {
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 10px;
  /* width: 235px; */
  width: 90vw;
  scroll-behavior: smooth;
}
.daysWrapperMove{
  margin-left: 470px;
}
.days {
  display: inline-flex;
  justify-content: space-between;
  max-width: 100%;
  padding: 15px;
  overflow-x: auto;
}
.btnMakePlan {
  /* background: black;
    color: white; */
  /* border-radius: 7px; */
  width: 160px;
  height: 50px;
  /* font-size: 20px;
    font-weight: bold; */
  /* border: 3px solid #cd9f46; */
}

.wrapBtnMakePlan {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>