<template>
  <h1>Click on add butoon to add exercise</h1>

    <div>
        <label>Enter exercise name</label>
        <input type="text" placeholder="name" v-model.trim="form.name">
    
        <br>
        
        <select  v-model="form.reps">
            <option disabled value="">Please select numbver of reps</option>
            <option>5x12</option>
            <option>8x10</option>
            <option>10x15</option>
        </select>
        
        <br>
         
        <select  v-model="form.wop">
            <option disabled value="">Please select where can exercise be done</option>
            <option  value="1">Home</option>
            <option  value="2">Gym</option>
            <option  value="3">Both</option>
        </select>
        
        <br>
         <select  v-model="form.lvl">
             <option disabled value="">Please select level of exercise</option>
            <option  value="1">Beginer</option>
            <option  value="2">Advanced</option>
            <option  value="3">Pro</option>
        </select>
        
        <br>
        <select  v-model="form.cat">
            <option disabled value="">Please select category</option>
            <option  value="1">Abs</option>
            <option  value="2">Legs</option>
            <option  value="3">Chest</option>
            <option  value="4">Arms</option>
            <option  value="5">Back</option>
        </select> -->
        
        <br>
        
        <label>Enter description of exercise</label>
        <input type="text" placeholder="desc" v-model.trim="form.desc">
        
        <br>

        <label>Enter step 1 of exercise</label>
        <input type="text" placeholder="step1" v-model.trim="form.step1">
        
        <br>

        <label>Enter step 2 of exercise</label>
        <input type="text" placeholder="step2" v-model.trim="form.step2">
        
        <br>

        <label>Enter step 3 of exercise</label>
        <input type="text" placeholder="step3" v-model.trim="form.step3">
        
        <br>

        <label>Enter step 4 of exercise</label>
        <input type="text" placeholder="step4" v-model.trim="form.step4">
        
        <br>

        <label>Enter link for gif picture 1</label>
        <input type="text" placeholder="slika" v-model.trim="form.slika">
        
        <br>


        <label>Enter link for gif picture 2</label>
        <input type="text" placeholder="slika2" v-model.trim="form.slika2">
        
        <br>


        
        <button @click="addExercise()">Add exercise</button>
        <!-- <p>{{form}}</p> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
     data () {
    return {
      users:[],
      exer:[],
      
      form:{
          name:"",
          reps:"",
          wop:"",
          lvl:"",
          cat:"",
          desc:"",
          step1:null,
          step2:null,
          step3:null,
          step4:null,
          slika:"",
          slika2:"",
      }
    }
  },
    methods:{
       async addExercise(){
        try {
        const res = await axios.post('http://548y122.e2.mars-hosting.com/workout/add-exercise',this.form);
        // this.exer = res.data.exercises;
        
        
         this.$toast.show(
                res.data.message,
                    {
                    position:
                    "bottom-left",
                    duration:1200}
          )
        
        
        } catch (error) {
        console.warn(error);
    }}},
   
}
</script>

<style scoped>
*{
    font-size:20px ;
}
input{
    margin:10px ;
}
select{
    margin:10px ;
}

</style>