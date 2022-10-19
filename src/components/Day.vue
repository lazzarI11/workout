<template>
  <!-- <Dialog :show="showDialog"
          :cancel="cancel"
          :confirm="$emit('deleteEx',{day:this.day})"
          title="Delete a day?"
          description="Are you sure you want to delete this day?" /> -->

  <div class="outerselect">
    <div v-if="!isAdded" class="exercises">
      <div class="exCatSelect">
        <h2>Day {{ day }}</h2>

        <div class="exercise">
          <span>Rest Day</span>
          <input
            type="checkbox"
            :value="true"
            v-model="isRestDay"
            @change="
              restDaySelected();
              $emit('emitSelectedEx', { day: this.day, arr: exerc });
              $emit('dayAdded', true);
            "
          />
          <br />
        </div>
        <br />
        <select
          v-model="catValue"
          id="selectCat"
          @change="$emit('emitCategory', catValue)"
        >
          <option value="">Category</option>
          <option value="3">Chest</option>
          <option value="1">Abs</option>
          <option value="2">Legs</option>
          <option value="4">Arms</option>
        </select>
      </div>

      <div class="exercise" v-for="exercise in exercises" :key="exercise.ex_id">
        {{ exercise.ex_name }}
        <input type="checkbox" :value="exercise" v-model="exerc" />
      </div>
    </div>

    <div class="selected">
      <h4>Selected:</h4>

      <div v-for="e in exerc" :key="e.ex_id">
        {{ e.ex_name }}
      </div>

      <button
        v-if="!isAdded"
        @click="
          $emit('emitSelectedEx', { day: this.day, arr: exerc });
          $emit('dayAdded', true);
          added();
        "
      >
        Add day
      </button>
      <button
        v-if="isAdded"
        @click="
          $emit('editEx', { day: this.day });
          $emit('dayAdded', false);
          this.isAdded = false;
        "
      >
        Edit
      </button>
      <button
        v-if="isAdded"
        @click="
          $emit('deleteEx', { day: this.day });
          $emit('dayAdded', false);
          this.isAdded = false;
          emptyExerc();
        "
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import Dialog from "./Dialog";
export default {
  components: { Dialog },

  props: {
    day: Number,
    exercises: Array,
    id: String,
  },
  emits: ["emitCategory", "emitSelectedEx", "deleteEx", "editEx", "dayAdded"],

  data() {
    return {
      catValue: "",
      exerc: [],
      isAdded: false,
      showDialog: false,
      id: this.id,
      day: this.day,
      isRestDay: false,
    };
  },

  computed: {
    exSelected() {
      return this.exerc.length;
    },
  },

  watch: {
    exSelected(selectedEx) {
      if (selectedEx > 4) {
        alert("You can select maximum 4 exercises per day!");
        this.exerc.pop();
      }
    },
  },

  methods: {
    restDaySelected() {
      if (this.isRestDay) {
        this.exerc = [{ ex_id: 32, ex_name: "REST DAY" }];
        this.isAdded = true;
        this.isRestDay = false;
        console.log(this.exerc);
      }
    },

    added() {
      if (this.exerc.length === 0) {
        alert("You must select exercise!");
      } else {
        this.isAdded = true;
      }
    },
    emptyExerc() {
      this.exerc = [];
    },

    cancel() {
      console.log("cancel");
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
input[type="checkbox" i] {
  margin: 10px 5px 1px 5px;
  padding: 12px 0px 12px 0px;
}
.outerselect {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.days {
  display: flex;
}
.exercises {
  /* max-height: 500px; */
  width: 200px;
  border: 3px solid #cd9f46;
  display: flex;
  flex-direction: column;
}
.exCatSelect {
  margin: 10px;
}
.exCatSelect h2{
  text-align: center;
}
.exCatSelect select{
  display: block;
  position: relative;
  margin: auto;
  margin-bottom: 0px;
}

.exercise {
  min-height: 30px;
  padding: 5px;
  display: inline;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cd9f46;
}

.selected {
  max-height: 500px;
  width: 200px;
  display: flex;
  flex-direction: column;
}

button {
  
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  border-radius: 7px;
  width: 100px;
  height: 30px;
  font-size: 15px;
  font-weight: bold;
  border: 3px solid #cd9f46;
}
</style>