<template>
<div class="box">
<div class="formIner">
    <select v-model="arr.gender" class="Inner">
        <option disabled value="">Please select your gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
    </select>
    <br>
    
        <!-- <h3>Enter your height : </h3> -->
        <input class="Inner" type="int" placeholder="Enter your Height(cm)" v-model.trim="arr.height" required>
    
    
    <br>
    
        <!-- <h3>Enter your weight : </h3> -->
        <input class="Inner" type="int" placeholder="Enter your Weight(kg)" v-model.trim="arr.weight" required>
    
   
    
    <br>

    
        <!-- <h3>Enter your age : </h3> -->
        <input class="Inner" type="int" placeholder="Enter your Age" v-model.trim="arr.age" required="">
    
    
    <br>

    <select v-model="arr.activit" class="Inner">
        <option disabled value="">Please select your activity</option>
        <option value="1">Basal Metabolic Rate (BRM)</option>
        <option value="2">Sedentary - little or no exercise</option>
        <option value="3">Lightly active - exercise/sports (1–3 times/week)</option>
        <option value="4">Moderately active - exercise/sports (3–5 times/week)</option>
        <option value="5">Very active - exercise/sports (6–7 times/week) </option>
        <option value="6">Very heavy exercise (twice per day, extra heavy workouts)</option>
    </select>
    
     <br>
    
    <div class="buttonWrapper" >
    <button href="#result" @click="calculateCalorie">Calculate</button>
    </div>



</div>

<div class="formIner neo" v-if="arr.activit == 1 && this.bmr != 0 ">
        
    <h3>Your BMR is {{this.bmr}} Kcal/day</h3>

</div>


<div class="formIner neo" v-if="arr.activit != 1 && this.result != 0">
    <h2 class='title'>Result:</h2>
    <br>
    <h3>-To mantain your weight you need {{this.result}} Kcal/day</h3>
    <br>
    <h2>-To lose 0.5 kg per week you need: {{this.result - 500}} Kcal/day</h2>
    <br>
    <h2>-To lose 1 kg per week you need: {{this.result - 1000}} Kcal/day</h2>
    <br>
    <h2>-To gain 0.5 kg per week you need:  {{this.result + 500}} Kcal/day</h2>
    <br>
    <h2>-To gain 1 kg per week you need:  {{this.result + 1000}} Kcal/day</h2>
</div>

</div>
   
</template>
<script>

export default {

    methods:{
    calculateBRM(){
        
        if(this.arr.gender == 1){
            this.bmr = 66.4730 + (13.7516 * this.arr.weight) + (5.0033 * this.arr.height)  - (6.7550 * this.arr.age)
            this.bmr = this.bmr.toFixed(0)
        }
        if(this.arr.gender == 2){
            this.bmr = 655.0955 + (9.5634 * this.arr.weight) + (1.8496 * this.arr.height) - (4.6756 * this.arr.age)
            this.bmr = this.bmr.toFixed(0)
        }  
        window.scrollTo({top: document.body.scrollHeight,behavior: "smooth"}) 
    },
    calculateCalorie(){
        this.calculateBRM(this.arr.gender)
        if(this.arr.activit == 2){
            this.result = this.bmr * 1.2
        }else if(this.arr.activit == 3){
            this.result = this.bmr * 1.375
        }else if(this.arr.activit == 4){
            this.result = this.bmr * 1.55
        }else if(this.arr.activit == 5){
            this.result = this.bmr * 1.725
        }else if(this.arr.activit == 6){
            this.result = this.bmr * 1.9
        }
         window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });


    }
    
    
    
    },
    data () {
    return {
        arr:{
            gender:"",
            height:"",
            weight:"",
            age:"",
            activit:"",
        },
        bmr:"",
        result:"",
    }}
    
}
</script>

<style scoped>
.box{
    display: block;
    align-content: center;
    margin: 50px;
    z-index: 1;
}
.formIner{
    display: block;
    font-size:22px ;
    width: 100%;
    justify-content: center;
    align-content: center;
    margin: auto;
}
.formIner.neo {
    background: #363636;
    border: 3px solid #cd9f46;
    border-radius: 12px;  
}

.formIner.neo .title {
    text-align: center;
    font-size: 30px;
}
h2,h3{
    text-align: left;
}
.formIner h2 h3 {
    display: flex;
    padding-left: 30px;
    
}
.formIner select{  
    display: flex;
    width: 220px;
    height: 40px;
    z-index: 1;
    margin: auto;
    text-align: center;
    justify-self: center;
}
.Inner{
    display: inline-flex;
    height: 40px;
    margin-bottom: 15px;
    line-height: 0;
    width: 220px; 
}
 .Inner,input{
    display: flex;
    width: 220px;
    height: 40px;
    z-index: 1;
    margin: auto;
    padding: 0;
    text-align: center;
    justify-self: center;
}
.Inner h3{
    margin: 0 5px 0 5px;
    height: 30px;
    text-align: center;
    line-height: 1.7em;
}
::placeholder{
    text-align: center;
    font-size: larger;
}
button{
    z-index: 1;
    background: url(../images/button_r.gif) repeat-x center;
    background-size: cover;
    color: white;
    font-weight: bold;
    height: 40px;
    align-content: center;
}
select {
    display: flex;
    height: 40px;
    z-index: 1;
    align-content: center;
    font-size: 18px;
    border: 1px solid black;
}
.buttonWrapper{
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 640px) {
    .formIner{
        font-size: 1.5em;
    }
    ::placeholder{
        font-size: 0.7em;
    }
    select{
        font-size: 0.7em;
    }
       option{
         font-size: 0.7em;
    }
}
@media screen and (max-width: 420px) {
    .formIner{
        font-size: 1.1em;
    }
    ::placeholder{
        font-size: 0.7em;
    }
     select{
        font-size: 0.7em;
    }
    option{
         font-size: 0.5em;
    }
}
</style>