<template>
<div>
    <HeaderOfMyPage />
  </div>
  <section>
          <!-- Workout Intensity Section -->
        <section class="workout-intensity">
            <!-- <div id="main-video" class="main-video"></div> -->
            <h2>Current workout intensity</h2>
            <div id="main-video"></div>
            <div class="intensity-levels">
                <div class="level" id="beginner">
                    <img src="/images/low_workout.jpeg" alt="Beginner">
                    <p>Beginner</p>
                </div>
                <div class="level" id="intermediate">
                    <img src="/images/advancedworkout.jpg" alt="Intermediate">
                    <p>Intermediate</p>
                </div>
                <div class="level" id="advanced">
                    <img src="/images/moderateworkout.webp" alt="Advanced">
                    <p>Advanced</p>
                </div>
            </div>
        </section>
        <!-- Updated Exercise Types Section -->
<div id="area-exercise-types" class="exercise-types" style="display: none;">
    <h2 id="excercisetype"></h2>
    <div class="exercise-options">
        <div class="exercise-option" @click="exerciseoptionClick" id="bodyweight" data="Bodyweight Exercises">
            <h3 id="bodyexcercise">Bodyweight Exercises</h3>
        </div>
        <div class="exercise-option" id="strength-training" data="Strength Training">
            <h3 id="strengrainning">Strength Training</h3>
        </div>
        <div class="exercise-option" id="cardio" data="Cardio Exercises">
            <h3 id="cardioexcercise">Cardio Exercises</h3>
        </div>
    </div>
</div>
<div id="area-exercise-types1" class="exercise-types" style="display: none;">
    <h2 id="excercisetype1"></h2>
    <div class="exercise-options">
        <div class="exercise-option" id="bodyweight1" data="Core Exercises">
            <h3 id="bodyexcercise">Core Exercises</h3>
        </div>
        <div class="exercise-option" id="strength-training1" data="Plyometric Exercises">
            <h3 id="strengrainning">Plyometric Exercises</h3>
        </div>
        <div class="exercise-option" id="cardio1" data="Mobility and Flexibility Exercises">
            <h3 id="cardioexcercise">Mobility and Flexibility Exercises</h3>
        </div>
    </div>
</div>
<div id="area-exercise-types2" class="exercise-types" style="display: none;">
    <h2 id="excercisetype2"></h2>
    <div class="exercise-options">
        <div class="exercise-option" id="bodyweight2" data="Compound Exercises">
            <h3 id="bodyexcercise">Compound Exercises</h3>
        </div>
        <div class="exercise-option" id="strength-training2" data="More Intensity">
            <h3 id="strengrainning">More Intensity</h3>
        </div>
        <div class="exercise-option" id="cardio2" data="Focus on Progression">
            <h3 id="cardioexcercise">Focus on Progression</h3>
        </div>
    </div>
</div>
<!-- Exercise Options -->
<section class="exercise-type" id="exercise-links">
    <!-- Exercise options will appear here when selected -->
</section>
<!-- Workout Details -->
<section class="workout-details" id="workout-details" @click="updateNumbersWatched">
    <!-- This will be filled with content dynamically -->
</section>
  </section>
<div>
    <FooterOfMyPage />
  </div>
</template>
<script>
import HeaderOfMyPage from '../../components/HeaderOfMyPage.vue'
import FooterOfMyPage from '../../components/FooterOfMyPage.vue'
export default {
  name: 'WorkOutView',
  components: {
    HeaderOfMyPage,
    FooterOfMyPage
  },
  mounted () {
    // add actitve class
    const homeItem = document.getElementById('homepage')
    const workoutItem = document.getElementById('workoutpage')
    const nutritionItem = document.getElementById('nutritionpage')
    const trackerItem = document.getElementById('trackerpage')
    const contactusItem = document.getElementById('contactuspage')
    // add actitve class for selected item
    workoutItem.classList.add('active')
    // remove class actitve for other items
    homeItem.classList.remove('active')
    nutritionItem.classList.remove('actitve')
    trackerItem.classList.remove('actitve')
    contactusItem.classList.remove('actitve')
    // // Define the global YouTube API ready function
    // window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady
    document.querySelectorAll('.level').forEach(level => {
      level.addEventListener('click', function () {
        // Clear previous selections
        document.querySelectorAll('.level').forEach(l => {
          l.classList.remove('selected')
          l.style.backgroundColor = '' // Reset background color
        })
        // clear old content of excercise lists when users changed their choices
        const workoutDetails = document.getElementById('workout-details')
        workoutDetails.innerHTML = '' // Clear previous content
        // Store the selected intensity level
        const selectedIntensity = this.id
        this.classList.add('selected') // Add class to highlight selected
        this.style.backgroundColor = '#fefae0' // Change background color for selected level
        // Set up exercise options based on selected intensity
        const excerciseMode = selectedIntensity.charAt(0).toUpperCase() + selectedIntensity.slice(1)
        if (excerciseMode.toLowerCase() === 'beginner') {
          document.getElementById('area-exercise-types').style.display = 'block'
          // hide other options
          document.getElementById('area-exercise-types1').style.display = 'none'
          document.getElementById('area-exercise-types2').style.display = 'none'
          // show text excercise mode
          const exerciseLinks = document.getElementById('excercisetype')
          exerciseLinks.innerHTML = `<h3 style='color:red;'> ${selectedIntensity.charAt(0).toUpperCase() + selectedIntensity.slice(1)} Level - Please select the below exercise lists</h3>`
        } else if (excerciseMode.toLowerCase() === 'advanced') {
          document.getElementById('area-exercise-types2').style.display = 'block'
          document.getElementById('area-exercise-types').style.display = 'none'
          document.getElementById('area-exercise-types1').style.display = 'none'
          // show mode
          const exerciseLinks = document.getElementById('excercisetype2')
          exerciseLinks.innerHTML = `<h3 style='color:red;'> ${selectedIntensity.charAt(0).toUpperCase() + selectedIntensity.slice(1)} Level - Please select the below exercise lists</h3>`
        } else {
          document.getElementById('area-exercise-types1').style.display = 'block'
          document.getElementById('area-exercise-types2').style.display = 'none'
          document.getElementById('area-exercise-types').style.display = 'none'
          // show mode
          const exerciseLinks = document.getElementById('excercisetype1')
          exerciseLinks.innerHTML = `<h3 style='color:red;'> ${selectedIntensity.charAt(0).toUpperCase() + selectedIntensity.slice(1)} Level - Please select the below exercise lists</h3>`
        }
      })
    })
    // Event listeners for exercise options
    document.querySelectorAll('.exercise-option').forEach(option => {
      option.addEventListener('click', function () {
        // Clear previous selections
        document.querySelectorAll('.exercise-option').forEach(opt => {
          opt.classList.remove('selected')
          opt.style.backgroundColor = '' // Reset background color
        })
        const selectedExercise = this.id
        const titleExcercise = this.getAttribute('data')
        const workoutDetails = document.getElementById('workout-details')
        workoutDetails.innerHTML = '' // Clear previous content
        this.classList.add('selected') // Add class to highlight selected
        this.style.backgroundColor = '#cce5ff' // Change background color for selected option
        if (selectedExercise === 'bodyweight' || selectedExercise === 'bodyweight1' || selectedExercise === 'bodyweight2') {
          workoutDetails.innerHTML =
            `<h4>${titleExcercise}</h4>
              <p>Here are some effective bodyweight exercises you can try at home or outdoors. No equipment needed!</p>
              <table>
                  <tr>
                      <th style='width:50%'>Exercise</th>
                      <th style='width:50%'>Video</th>
                  </tr>
                  <tr>
                      <td><iframe  style='width:100%' height='315'  src='https://www.youtube.com/embed/RocudKlpQeI?si=ak6dNTOgssXtVUhU' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td>Bodyweight squats are a fundamental exercise that targets your quadriceps, hamstrings, glutes, and core. They can improve lower body strength, flexibility, and balance.</td>
                  </tr>
                  <tr>
                      <td><iframe style='width:100%' height='315' src='https://www.youtube.com/embed/30PqX2zvK88?si=wrbJcg4RLzxG3rr1' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td>Push-ups are a classic upper body exercise that targets the chest, shoulders, and triceps, while also engaging the core.</td>
                  </tr>
                  <tr>
                      <td><iframe style='width:100%' height='315'  src='https://www.youtube.com/embed/H1F-UfC8Mb8?si=fSz25VoMoSBHZyc-' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td>The plank is a core-strengthening exercise that targets the abdominal muscles, back, and shoulders.</td>
                  </tr>
              </table>`
        } else if (selectedExercise === 'strength-training' || selectedExercise === 'strength-training1' || selectedExercise === 'strength-training2') {
          workoutDetails.innerHTML =
            `<h4>${titleExcercise}</h4>
              <p>Strength training exercises help build muscle and improve strength. Here are some useful videos of exercises to get started.</p>
              <table>
                  <tr>
                      <th style='width:50%'>Exercise</th>
                      <th style='width:50%'>Video</th>
                  </tr>
                  <tr>
                      <td><iframe style='width:100%' height='315'  src='https://www.youtube.com/embed/tj0o8aH9vJw?si=kUiMf_cTrmFqGYtb' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td> Deadlifts are a compound exercise that targets multiple muscle groups, including the lower back, glutes, hamstrings, and core.
                      </td>
                  </tr>
                  <tr>
                      <td><iframe style='width:100%' height='315'  src='https://www.youtube.com/embed/OJ1Dbv6YriQ?si=rBBhI0hSnqIhSzVU' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td>The bench press is a strength training exercise primarily targeting the chest, shoulders, and triceps.</td>
                  </tr>
                  <tr>
                      <td><iframe style='width:100%' height='315'  src='https://www.youtube.com/embed/GY1JhB9BEkk?si=rhF-ybhLFrzrmlhN' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td> Squats are a fundamental lower body exercise that strengthens the legs, glutes, and core.</td>
                  </tr>
              </table>`
        } else if (selectedExercise === 'cardio' || selectedExercise === 'cardio1' || selectedExercise === 'cardio2') {
          workoutDetails.innerHTML =
            `<h4>${titleExcercise}</h4>
              <p>Cardio exercises are great for heart health and overall fitness. Check out some easy-to-follow routines below.</p>
              <table>
                  <tr>
                      <th style='width:50%'>Exercise</th>
                      <th style='width:50%'>Video</th>
                  </tr>
                  <tr>
                      <td><iframe style='width:100%' height='315'  src='https://www.youtube.com/embed/_fesO5oNcEs?si=noT_j5VV-EjDpHGI' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td>Running is a high-impact cardiovascular exercise that improves heart health, stamina, and leg strength.</td>
                  </tr>
                  <tr>
                      <td><iframe style='width:100%' height='315'  src='https://www.youtube.com/embed/yXHgcYpUVD4?si=FYbZW0GGCnGRIJQC' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td>Cycling is a low-impact cardiovascular exercise that targets the legs and improves overall endurance.</td>
                  </tr>
                  <tr>
                      <td><iframe style='width:100%' height='315'  src='https://www.youtube.com/embed/M0uO8X3_tEA?si=cMmwZd5sr0SGYWCx' title='YouTube video player' frameborder='0' allow='accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></td>
                      <td> Jumping rope is a fun and effective cardio workout that also improves coordination and agility.</td>
                  </tr>
              </table>`
        }
      })
    })
  },
  data () {
    return {
      NumberOfVideoWatched: 0,
      player: null
    }
  },
  methods: {
    updateNumbersWatched (event) {
      if (event.target.tagName === 'td') {
        console.log('Clicked on a button:', event.target)
      } else if (event.target.tagName === 'iframe') {
        console.log('Clicked on a paragraph inside the parent div.')
      } else {
        console.log('Clicked on the parent div.')
      }
      this.NumberOfVideoWatched++
      // set cookie for storage the number of user click
      const currentNumberVideo = this.getCookieforArray('todayvideowatched')
      const newNumbervideo = currentNumberVideo + this.NumberOfVideoWatched
      this.deleteCookie('todayvideowatched')
      this.setCookieforArray('todayvideowatched', newNumbervideo, 365)
      console.log(this.NumberOfVideoWatched)
    },
    setCookieforArray (name, value, days) {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toUTCString()
      }
      document.cookie = name + '=' + (JSON.stringify(value) || '') + expires + '; path=/'
    },
    getCookieforArray (name) {
      const nameEQ = name + '='
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) {
          return JSON.parse(c.substring(nameEQ.length, c.length))
        }
      }
      return null
    },
    deleteCookie (cookieName) {
      // Set the cookie's expiration date to a past date
      document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    }
  }
}
</script>
<style>
</style>
