<template>
  <div id="content">
    <div class="post">
      <h1 class="title">Welcome to Pro Workout</h1>
      <h3>results guaranteed</h3>
    </div>
    <div id="abt">
      <div class="abImg">
        <img src="../images/runing.jpg" />
      </div>
      <div class="abText">
        <h2>About us</h2>
        <p>
          Pro Workout is a platform designed to help beginners or people who do
          not have a clear plan for their exercise. We have been in business for
          many years, and we have achieved over 100 incredible transformations.
          Our team consists of top coaches who will compile the best possible
          training for you based on your data. All you need to do is fill out a
          short form on the basis of which we will compile your desired
          training. You will receive training in the shortest possible period.
          We wish you all the luck and results you expect.
        </p>
        <button id="btnStart" @click="move()">Get started</button>
      </div>
    </div>
    <div class="exercises">
      <div class="exercise">
        <div class="pic">
          <img src="../images/cardio.jpg" alt="" />
        </div>
        <div class="picDescription">
          <h2>Cardio Fitness</h2>
          <p>Mon,Wed,Fri</p>
          <p>30-60 min</p>
          <p>Home/Gym</p>
          <br />
          <p>
            Cardiovascular fitness is a health-related component of physical
            fitness that is brought about by sustained physical activity.[1] A
            person's ability to deliver oxygen to the working muscles is
            affected by many physiological parameters, including heart rate,
            stroke volume, cardiac output, and maximal oxygen consumption.
            Understanding the relationship between cardiorespiratory fitness and
            other categories of conditioning requires a review of changes that
            occur with increased aerobic, or anaerobic capacity. As
            aerobic/anaerobic capacity increases, general metabolism rises,
            muscle metabolism is enhanced, haemoglobin rises, buffers in the
            bloodstream increase, venous return is improved, stroke volume is
            improved, and the blood bed becomes more able to adapt readily to
            varying demands.
          </p>
        </div>
      </div>
      <div class="exercise">
        <div class="pic">
          <img src="../images/masa.jpg" alt="" />
        </div>
        <div class="picDescription">
          <h2>Muscle building</h2>
          <p>Mon,Tue,Fri,Sat</p>
          <p>1-2 hrs</p>
          <p>Gym</p>
          <br />
          Building muscle requires a positive energy balance, which means that
          you must take in more calories than you burn. You need roughly 2,800
          calories to build a pound of muscle, largely to support protein
          turnover, which can be elevated with training. By following these
          eight tips, you’ll be able to build muscle mass more efficiently and
          quickly.Note, your muscle building strategy doesn't need to be so
          rigid that it leaves no room for fun. In fact, you can still eat meals
          you enjoy, and you don't need to spend hours in the gym, as long as
          when you're training and fueling yourself strategically a majority of
          the time. The goal is to create a muscle building plan that is
          realistic for your goals and needs.
        </div>
      </div>
      <div class="exercise">
        <div class="pic">
          <img src="../images/definition.jpg" alt="" />
        </div>
        <div class="picDescription">
          <h2>Muscle definition</h2>
          <p>Mon,Wed,Fri,Sat</p>
          <p>60 min</p>
          <p>Home/Gym</p>
          <br />
          <p>
            When you’re building a workout routine, make sure you start your
            programming with a power-based push or pull exercise like a heavy
            bench, incline bench press, a weighed wide-grip pullup, or a
            weighted narrow-grip underhand pullup. As you increase the weight,
            decrease your reps to build mass. For your first set, warmup with
            8-10 reps at 50% of your one-rep max—the amount of weight you can
            lift for one proper repetition. For the second set, use 55%-65% of
            your one-rep max for 8-10 reps. For your third set use 65%-75% of
            your one-rep max, increasing that to 70%-80% for your fourth rep for
            6-8 repetitions. Finish off with a fifth set of 3-5 reps using
            80%-90% of your total max. Rest for 2-3 minutes between rounds.
          </p>
        </div>
      </div>
    </div>
    
    <div class="coaches">
      <h1 id="coachH1">Our coaches</h1>
      <div class="coachesDiv">
        <div class="coach">
          <div class="coachImg">
            <img src="../images/ProfilePictureMaker.png" alt="" />
          </div>
          <div class="coachDesc">
            <h2>Bogdan</h2>
            <p>
              Bogdan is a Certified Strength and Condition Specialist (CSCS)
              with the National Strength and Conditioning Association. He has an
              extensive background from training professional and amateur
              athletes to working professionals with nominal experience in
              fitness. Christopher approaches fitness as a life long behavior
              modification where we have continuous improvement. He defines his
              sessions as simple, challenging, and efficient with an emphasis on
              proper form and mobility. His favorite client is anyone with a
              goal and a willingness to work towards it!
            </p>
          </div>
        </div>
        <div class="coach">
          <div class="coachImg"><img src="../images/pagi.png" alt="" /></div>
          <div class="coachDesc">
            <h2>Miodrag</h2>
            <p>
              Miodrag is an undergraduate student at Georgetown University. She
              became a National Academy of Sports Medicine (NASM) Certified
              Personal Trainer in 2019, and is currently working toward a
              specialization in corrective exercise. A lifelong dancer, Ashley
              believes wholeheartedly that movement is a necessary component of
              physical and mental wellness and personal expression. Her passion
              for fitness emerged after witnessing a personal trainer greatly
              improve the quality of life of her grandmother, who began
              exercising at seventy years old
            </p>
          </div>
        </div>
        <div class="coach">
          <div class="coachImg"><img src="../images/lazar.png" alt="" /></div>
          <div class="coachDesc">
            <h2>Lazar</h2>
            <p>
              Lazar holds a BS in Physical Education as well as a MS in Exercise
              Science and Health Promotion. He is a Certified Strength and
              Conditioning Specialist (CSCS). He has a background in health and
              fitness as well as athletic performance training with over 20
              years of certification and experience in the field. His passion
              for fitness began through his love of sports and developed as a
              varsity athlete in basketball. His approach to fitness emphasizes
              age-appropriate programming with a specific focus given to
              cardiovascular and strength training in combination with balance
              training.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(["isLoggedIn", "user", "exc", "sid", "isAdmin"]),
  },

  methods: {
    move() {
      this.$router.push("/workout");
    },
  },
};
</script>
<style scoped>
#content {
  display: flex;
  flex-direction: column;
  padding:0 40px;
}

.post {
  display: flex;
  flex-direction: column;
  
}

.post .title {
  margin: 0;
  font-weight: normal;
}

.post h1.title {
  height: 30px;
  font-size: 2.4em;
  
}


.post .entry {
  padding: 0 10px 30px 15px;
}

.post .meta {
  margin: 0;
  padding: 5px 0px 0px 15px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  color: #cd9f46;
}

.post .meta a {
  color: #cd9f46;
}

.post .links {
  margin: 0;
}

.post .tags {
  margin: 0;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
}

.post .links a,
.post .tags a {
  border: none;
}

#abt {
  margin-top: 20px;
  background-color: #f5f5f5;
  background-size: cover;
  text-align: center;
}

.abText {
  display:flex;
  padding: 3% !important;
  text-align: justify;
  padding: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.abText button{
  display: flex;
  justify-content: center;
}
.abText h2 {
  text-align: justify;
  padding: 4%;
}
.abText p {
  text-align: justify;
  padding: 4%;
  font-size: 1.3em;
}
.abText button{
  align-items: center;
  margin: auto;
}
.abImg {
  min-width: 60%;
  height: auto;
  float: left;
  
}

.abImg img{
  width: 100%;
}

#btnStart {
  background-color: rgb(79, 76, 76);
}

.exercises {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  background-color: #f5f5f5;
  margin-bottom: 30px;
  padding: 1%;
}

.exercise {
  flex-basis: 30% !important;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #857f7f;
}

.pic img {
  width: 100%;
  background-size: auto;
}

.picDescription {
  margin-top: 10px;
  padding: 10px;
  text-align: justify;
}

.picDescription h2 {
  border-bottom: 1px solid #666666;
  padding: 5px;
  color: #666666;
  display: flex;
  flex-direction: column;
}

.picDescription p {
  font-size: 0, 5em;
}

.picDescription button {
  background-color: rgba(51, 51, 51, 0.05);
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.coacheDesc {
  min-height: 500px;
}
.coachDesc {
  padding: 10px;
  text-align: justify;
}

.coaches {
  margin-bottom: 30px;
  background-color: #f5f5f5;
  display: flex;
   flex-direction: column;
  /* justify-content: top; */

}

.coaches h1 {
  font-size: 0, 5em;
}

#coachH1{
  margin: auto;
}

.coachesDiv {
  flex-basis: 30% 30%;
  display: flex;
  padding: 10px;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
}
.coach {
  flex-basis: 30% !important;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  
}

.coach h2 {
  text-align: center;
}

.coach .coachImg img {
  background-color: #f5f5f5;
  border-radius: 50%;
  padding: 5px;
}

@media (max-width: 1174){



}

@media screen and (max-width: 1099px) {
  .menu-button {
    display: block;
  }
  .abText{

  padding: 20px;
  font-size: 1em;
}

}

@media screen and (max-width: 1016px) {
  .menu-button {
    display: block;
  }
  #abt{
display: flex;
flex-direction: column;

  }

}





@media screen and (max-width: 740px) {
  /* .coachesDiv {
    width: 100%;
  } */
  /* .coaches img {
    width: 100%;
  } */
.post{

margin-top: 5%;
margin-bottom: 5%;

}
  #abt{
display: flex;
flex-direction: column;

  }
}

@media screen and (max-width: 640px) {
  /* .coachesDiv {
    width: 90% !important;
  } */
  /* .coaches {
    width: 100% !important;
  } */
  .post{

margin-top: 5%;
margin-bottom: 5%;

}
  .coach {
    min-width: 310px;
  }
  /* .coaches img {
    width: 100%;
  } */
  .exercise {
    width: 30%;
    min-width: 310px;
  }
}

@media screen and (max-width: 420px) {

  .post{

margin-top: 14%;
margin-bottom: 5%;

}
  /* .coachesDiv {
    width: 70vw !important;
  } 
  .coaches img {
    width: 100%;
  }
  .coaches {
    width: 90%;
  }
  .coach {
    width: 30%;
  }*/
}
</style>