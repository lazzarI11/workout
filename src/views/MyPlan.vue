<template>
   <div class="con">
       
       <div class="dan">
           
           <caption v-if="this.message != 'No exercises for today' ">Day 1</caption>

            <table class="customers" v-if="this.message != 'No exercises for today'">
                <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Desc</th>
                </tr>

                <tr v-for="item in es" v-bind:key="item.ex_id">

                   <td>{{item.ex_name}}</td>
                   <td>{{item.ex_repeats}}</td>
                   
                   <td><router-link :to="'/exid/' + item.ex_id">Exercise page</router-link></td>

                </tr>
                
            </table>


            <table class="customers" v-if="this.message == 'No exercises for today' ">
                <tr>
                        <th>REST DAY</th>  
                </tr>
                
                
            </table>

       
       </div>

       <div class="dan">
           
           <caption v-if="this.message2 != 'No exercises for today' ">Day 2</caption>

            <table class="customers" v-if="this.message2 != 'No exercises for today'">
                <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Desc</th>
                </tr>

                <tr v-for="item in es2" v-bind:key="item.ex_id">

                   <td>{{item.ex_name}}</td>
                   <td>{{item.ex_repeats}}</td>
                   
                   <td><router-link :to="'/exid/' + item.ex_id">Exercise page</router-link></td>

                </tr>
                
            </table>


            <table class="customers" v-if="this.message2 == 'No exercises for today' ">
                <tr>
                        <th>REST DAY</th>  
                </tr>
                
                
            </table>
       </div>    
       
       <div class="dan">
           
           <caption v-if="this.message3 != 'No exercises for today' ">Day 3</caption>

            <table class="customers" v-if="this.message3 != 'No exercises for today'">
                <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Desc</th>
                </tr>

                <tr v-for="item in es3" v-bind:key="item.ex_id">

                   <td>{{item.ex_name}}</td>
                   <td>{{item.ex_repeats}}</td>
                   
                   <td><router-link :to="'/exid/' + item.ex_id">Exercise page</router-link></td>

                </tr>
                
            </table>


            <table class="customers" v-if="this.message3 == 'No exercises for today' ">
                <tr>
                        <th>REST DAY</th>  
                </tr>
                
                
            </table>
       </div>

       <div class="dan">
           <caption v-if="this.message4 != 'No exercises for today' ">Day 4</caption>

            <table class="customers" v-if="this.message4 != 'No exercises for today'">
                <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Desc</th>
                </tr>

                <tr v-for="item in es4" v-bind:key="item.ex_id">

                   <td>{{item.ex_name}}</td>
                   <td>{{item.ex_repeats}}</td>
                   
                   <td><router-link :to="'/exid/' + item.ex_id">Exercise page</router-link></td>

                </tr>
                
            </table>


            <table class="customers" v-if="this.message4 == 'No exercises for today' ">
                <tr>
                        <th>REST DAY</th>  
                </tr>
                
                
            </table>
       </div>

       <div class="dan">
           
           <caption v-if="this.message5 != 'No exercises for today' ">Day 5</caption>

            <table class="customers" v-if="this.message5 != 'No exercises for today'">
                <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Desc</th>
                </tr>

                <tr v-for="item in es5" v-bind:key="item.ex_id">

                   <td>{{item.ex_name}}</td>
                   <td>{{item.ex_repeats}}</td>
                   
                   <td><router-link :to="'/exid/' + item.ex_id">Exercise page</router-link></td>

                </tr>
                
            </table>


            <table class="customers" v-if="this.message5 == 'No exercises for today' ">
                <tr>
                        <th>REST DAY</th>  
                </tr>
                
                
            </table>
       </div>

       <div class="dan">

           <caption v-if="this.message6 != 'No exercises for today' ">Day 6</caption>

            <table class="customers" v-if="this.message6 != 'No exercises for today'">
                <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Desc</th>
                </tr>

                <tr v-for="item in es6" v-bind:key="item.ex_id">

                   <td>{{item.ex_name}}</td>
                   <td>{{item.ex_repeats}}</td>
                   
                   <td><router-link :to="'/exid/' + item.ex_id">Exercise page</router-link></td>

                </tr>
                
            </table>


            <table class="customers" v-if="this.message6 == 'No exercises for today' ">
                <tr>
                        <th>REST DAY</th>  
                </tr>
                
                
            </table>
       </div>


   </div>

</template>

<script>
import axios from 'axios';
export default {
    data () {
    return {
        e:[], //exercises
        e2:[], //exercises
        e3:[], //exercises
        e4:[], //exercises
        e5:[], //exercises
        e6:[], //exercises

        es:[], //resenje 1
        es2:[],//resenje dan 2
        es3:[],//resenje dan 3
        es4:[], //resenje4
        es5:[],//resenje dan 5
        es6:[],//resenje dan 6
        
        post:{
            id:"",
            day:"1",
        },

        postDay2:{
            id:"",
            day:"2",
        },

         postDay3:{
            id:"",
            day:"3",
        },

        postDay4:{
            id:"",
            day:"4",
        },

        postDay5:{
            id:"",
            day:"5",
        },

        postDay6:{
            id:"",
            day:"6",
        },



        idz:{
            id_1:"",
            id_2:"",
            id_3:"",
            id_4:"",
        },
        idz2:{
            id_1:"",
            id_2:"",
            id_3:"",
            id_4:"",
        },
        idz3:{
            id_1:"",
            id_2:"",
            id_3:"",
            id_4:"",
        },
        idz4:{
            id_1:"",
            id_2:"",
            id_3:"",
            id_4:"",
        },
        idz5:{
            id_1:"",
            id_2:"",
            id_3:"",
            id_4:"",
        },
        idz6:{
            id_1:"",
            id_2:"",
            id_3:"",
            id_4:"",
        },

        message:"",
        message2:"",
        message3:"",
        message4:"",
        message5:"",
        message6:"",
       
       
    }},
    methods: {

        async GetExercisesDay1(){
            try {
            this.post.id = this.authUser;
            const resenje = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/day', this.post);
            
            this.message = resenje.data.message
            this.e = resenje.data.exer
            
            this.ShowExerciseDay1(this.e)
            } catch (error) {
            console.warn(error);
            }
        },

        async GetExercisesDay2(){
            try {
            this.postDay2.id = this.authUser;
            const resenje = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/day', this.postDay2);
            
            this.message2 = resenje.data.message
            this.e2 = resenje.data.exer

            this.ShowExerciseDay2(this.e2)
            } catch (error) {
            console.warn(error);
            }
        },

        async GetExercisesDay3(){
            try {
            this.postDay3.id = this.authUser;
            const resenje = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/day', this.postDay3);
            
            this.message3 = resenje.data.message
            this.e3 = resenje.data.exer

            this.ShowExerciseDay3(this.e3)
            } catch (error) {
            console.warn(error);
            }
        },

        async GetExercisesDay4(){
            try {
            this.postDay4.id = this.authUser;
            const resenje = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/day', this.postDay4);
            
            this.message4 = resenje.data.message
            this.e4 = resenje.data.exer

            this.ShowExerciseDay4(this.e4)
            } catch (error) {
            console.warn(error);
            }
        },

        async GetExercisesDay5(){
            try {
            this.postDay5.id = this.authUser;
            const resenje = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/day', this.postDay5);
            
            this.message5 = resenje.data.message
            this.e5 = resenje.data.exer

            this.ShowExerciseDay5(this.e5)
            } catch (error) {
            console.warn(error);
            }
        },

        async GetExercisesDay6(){
            try {
            this.postDay6.id = this.authUser;
            const resenje = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/day', this.postDay6);
            
            this.message6 = resenje.data.message
            this.e6 = resenje.data.exer

            this.ShowExerciseDay6(this.e6)
            } catch (error) {
            console.warn(error);
            }
        },

        
        ///GET exercises for days
        
        
        async ShowExerciseDay1(){
            try {
            if(this.e == undefined){
                console.log("empty");
            }
            else if(this.e.length == 3){
                this.idz.id_1 = this.e[0].ex_id;
                this.idz.id_2 = this.e[1].ex_id;
                this.idz.id_3 = this.e[2].ex_id;
            }else if(this.e.length == 4){
                this.idz.id_1 = this.e[0].ex_id;
                this.idz.id_2 = this.e[1].ex_id;
                this.idz.id_3 = this.e[2].ex_id;
                this.idz.id_4 = this.e[3].ex_id;
            }else if(this.e.length == 2){
                this.idz.id_1 = this.e[0].ex_id;
                this.idz.id_2 = this.e[1].ex_id;
            }else if(this.e.length == 1){
                this.idz.id_1 = this.e[0].ex_id;
            }else{
                console.log("Empty Day");
            }


            
            console.log(this.idz)
            const resenje2 = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/exDay', this.idz);
            
            this.es = resenje2.data.exercises
            console.log(this.es)
            } catch (error) {
            console.warn(error);
            }
        },

        async ShowExerciseDay2(){
            try {
            if(this.e2 == undefined){
                console.log("empty");
            }
            else if(this.e2.length == 3){
                this.idz2.id_1 = this.e2[0].ex_id;
                this.idz2.id_2 = this.e2[1].ex_id;
                this.idz2.id_3 = this.e2[2].ex_id;
            }else if(this.e2.length == 4){
                this.idz2.id_1 = this.e2[0].ex_id;
                this.idz2.id_2 = this.e2[1].ex_id;
                this.idz2.id_3 = this.e2[2].ex_id;
                this.idz2.id_4 = this.e2[3].ex_id;
            }else if(this.e2.length == 2){
                this.idz2.id_1 = this.e2[0].ex_id;
                this.idz2.id_2 = this.e2[1].ex_id;
            }else if(this.e2.length == 1){
                this.idz2.id_1 = this.e2[0].ex_id;
            }

            console.log(this.idz2)
            const resenje2 = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/exDay', this.idz2);
            
            this.es2 = resenje2.data.exercises
            console.log(this.es2)
            } catch (error) {
            console.warn(error);
            }
        },

        async ShowExerciseDay3(){
            try {
            if(this.e3 == undefined){
                console.log("empty");
            }
            else if(this.e3.length == 3){
                this.idz3.id_1 = this.e3[0].ex_id;
                this.idz3.id_2 = this.e3[1].ex_id;
                this.idz3.id_3 = this.e3[2].ex_id;
            }else if(this.e3.length == 4){
                this.idz3.id_1 = this.e3[0].ex_id;
                this.idz3.id_2 = this.e3[1].ex_id;
                this.idz3.id_3 = this.e3[2].ex_id;
                this.idz3.id_4 = this.e3[3].ex_id;
            }else if(this.e3.length == 2){
                this.idz3.id_1 = this.e3[0].ex_id;
                this.idz3.id_2 = this.e3[1].ex_id;
            }else if(this.e3.length == 1){
                this.idz3.id_1 = this.e3[0].ex_id;
            }
            console.log(this.idz3)
            const resenje2 = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/exDay', this.idz3);
            
            this.es3 = resenje2.data.exercises
            console.log(this.es3)
            } catch (error) {
            console.warn(error);
            }
        },

        async ShowExerciseDay4(){
            try {
            if(this.e4 == undefined){
                console.log("empty");
            }
            else if(this.e4.length == 3){
                this.idz4.id_1 = this.e4[0].ex_id;
                this.idz4.id_2 = this.e4[1].ex_id;
                this.idz4.id_3 = this.e4[2].ex_id;
            }else if(this.e4.length == 4){
                this.idz4.id_1 = this.e4[0].ex_id;
                this.idz4.id_2 = this.e4[1].ex_id;
                this.idz4.id_3 = this.e4[2].ex_id;
                this.idz4.id_4 = this.e4[3].ex_id;
            }else if(this.e4.length == 2){
                this.idz4.id_1 = this.e4[0].ex_id;
                this.idz4.id_2 = this.e4[1].ex_id;
            }else if(this.e4.length == 1){
                this.idz4.id_1 = this.e4[0].ex_id;
            }else{
                console.log("Empty Day");
            }
            console.log(this.idz4)
            const resenje2 = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/exDay', this.idz4);
            
            this.es4 = resenje2.data.exercises
            console.log(this.es4)
            } catch (error) {
            console.warn(error);
            }
        },

        async ShowExerciseDay5(){
            try {
            
            if(this.e5 == undefined){
                console.log("empty");
            }else if(this.e5.length == 4){
                this.idz5.id_1 = this.e5[0].ex_id;
                this.idz5.id_2 = this.e5[1].ex_id;
                this.idz5.id_3 = this.e5[2].ex_id;
                this.idz5.id_4 = this.e5[3].ex_id;
            }else if(this.e5.length == 3){
                this.idz5.id_1 = this.e5[0].ex_id;
                this.idz5.id_2 = this.e5[1].ex_id;
                this.idz5.id_3 = this.e5[2].ex_id;
            }
            else if(this.e5.length == 2){
                this.idz5.id_1 = this.e5[0].ex_id;
                this.idz5.id_2 = this.e5[1].ex_id;
            }else if(this.e5.length == 1){
                this.idz5.id_1 = this.e5[0].ex_id;
            }
            console.log(this.idz5)
            const resenje2 = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/exDay', this.idz5);
            
            this.es5 = resenje2.data.exercises
            console.log(this.es5)
            } catch (error) {
            console.warn(error);
            }
        },

        async ShowExerciseDay6(){
            try {

            if(this.e6 == undefined){
                console.log("empty");
            }else if(this.e6.length == 3){
                this.idz6.id_1 = this.e6[0].ex_id;
                this.idz6.id_2 = this.e6[1].ex_id;
                this.idz6.id_3 = this.e6[2].ex_id;
            }else if(this.e6.length == 4){
                this.idz6.id_1 = this.e6[0].ex_id;
                this.idz6.id_2 = this.e6[1].ex_id;
                this.idz6.id_3 = this.e6[2].ex_id;
                this.idz6.id_4 = this.e6[3].ex_id;
            }else if(this.e6.length == 2){
                this.idz6.id_1 = this.e6[0].ex_id;
                this.idz6.id_2 = this.e6[1].ex_id;
            }else if(this.e6.length == 1){
                this.idz6.id_1 = this.e6[0].ex_id;
            }
            console.log(this.idz6)
            const resenje2 = await axios.post('http://576e122.e2.mars-hosting.com/api/plan-vezbanja/exDay', this.idz6);
            
            this.es6 = resenje2.data.exercises
            console.log(this.es6)
            } catch (error) {
            console.warn(error);
            }
        },


        async combo(){
            this.GetExercisesDay1(this.post)
            this.GetExercisesDay2(this.postDay2)
            this.GetExercisesDay3(this.postDay3)
            this.GetExercisesDay4(this.postDay4)
            this.GetExercisesDay5(this.postDay5)
            this.GetExercisesDay6(this.postDay6)
        }
        

        
        },

    computed:{
        authUser () {
        return this.$store.state.user.usr_id
        }
   }, 
   beforeMount(){
              
       this.combo()
   }   
}
</script>

<style scoped>
.con{
    display: flex;
    padding:10px ;
    font-size:16px;
    flex-wrap:wrap;
    row-gap: 15px;
    justify-content: space-evenly;
}
.dan{
    display: flex;
   border-collapse:separate;
    border:solid black 1px;
    border-radius:6px;
    flex-direction: column;
    width: 320px;
    height: 230px;
}
.con .dan td{
   height: 42px;
   
}

.customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.customers td, .customers th {
  border: 1px solid #ddd;
  text-align: center;
}

.customers tr:nth-child(even){background-color: #f2f2f2;}

.customers tr:hover {background-color: #ddd;}

.customers th {
  height: 40px;
  text-align: center;
  background-color: gray;
  color: white;
} 


</style>
