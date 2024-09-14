<template>
<HeaderOfMyPage></HeaderOfMyPage>
  <br>
  <div class="contactus-media">
            <h2>Excercise - {{ this.mymaintitle }}</h2>
            <h4>General Information</h4>
            <h5>
            <b>Also Known As:</b> Arm curls, dumbbell curls</h5>
            <h5><b>Targets:</b> Biceps</h5>
            <h5><b>Equipment Needed:</b> Dumbbells</h5>
            <h5><b>Level:</b> Beginner</h5>
            <h4>{{ this.myminititle }}</h4>
              <div>
              <img class="card-img-top" :src="this.myminipath" alt="Card image cap" style="height: 25em; width: 65%; border-radius: 20px;">
            </div>
<br>
            <h4>How to do Bicep Curls</h4>
             <p>Select dumbbells of weight you can lift 10 times with good form, ensuring the last three are very challenging to the point you feel you could not lift another rep. From here, either use this same weight to perform eight reps or lower the weight slightly and perform 10 reps. It helps to "arm" yourself with a set of the best dumbbells.</p>
              <p>1. Begin standing tall with your feet about hip-width apart. Keep your abdominal muscles engaged.</p>
              <p>2. Hold one dumbbell in each hand. Let your arms relax down at the sides of your body with palms facing forward.</p>
              <p>3. Keep your upper arms stable and shoulders relaxed, bend at the elbow and lift the weights so that the dumbbells approach your shoulders. </p>
              <p>4. Exhale while lifting</p>
              <p>5. Lower the weights to the starting position.</p>
              <p>6. Perform the desired reps, staying within 3 to 5 reps of total failure.</p>
            <br>
         <h4>Mistakes in doing this exercise</h4>
         <div>
              <img class="card-img-top" :src="this.mydowrong" alt="Card image cap" style="height: 30em; width: 65%; border-radius: 20px;">
            </div>
         <hr>
         <h4>Correct way to practice this exercise</h4>
         <div>
              <img class="card-img-top" :src="this.mydocorrect" alt="Card image cap" style="height: 30em; width: 65%; border-radius: 20px;">
            </div>
           <br>
        </div>

<FooterOfMyPage></FooterOfMyPage>
</template>
<script>
import HeaderOfMyPage from '../../components/HeaderOfMyPage.vue'
import FooterOfMyPage from '../../components/FooterOfMyPage.vue'
export default {
  name: 'ExcerciseDetails',
  components: {
    HeaderOfMyPage,
    FooterOfMyPage
  },
  data () {
    return {
      mymaintitle: null, myminititle: null, myminipath: null, mydocorrect: null, mydowrong: null
    }
  },
  mounted () {
    this.mymaintitle = this.$route.query.maintitle
    this.myminititle = this.$route.query.minititle
    this.myminipath = this.$route.query.minipath
    this.mydocorrect = this.$route.query.docorrect
    this.mydowrong = this.$route.query.dowrong
  },
  updated () {
  }
}
</script>
<style scoped>
h5{
text-align: left;
padding: 10px;
margin-left:10px;
}
h4{
font-weight:600;
}
p{
padding: 10px;
font-style: normal;
font-weight: lighter;
}
</style>
