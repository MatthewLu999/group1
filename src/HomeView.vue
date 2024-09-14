<template>
<div>
    <HeaderOfMyPage />
  </div>
<br>
  <!-- Main Content -->
    <main class="main-home-container">
        <!-- Carousel Section -->
        <section class="section-carousel">
        <div class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="@img/slideshow3.jpeg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>BUILD PERFECT BODY WITH CLEAN MIND</h3>
                    <p>Founder of Zeus fitness Point</p>
                  </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="@img/slideshow2.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
                    <h3>BUILD PERFECT BODY WITH CLEAN MIND</h3>
                    <p>Founder of Zeus fitness Point</p>
                  </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="@img/slideshow1.jpg" alt="Third slide">
              <div class="carousel-caption d-none d-md-block">
                    <h3>BUILD PERFECT BODY WITH CLEAN MIND</h3>
                    <p>Founder of Zeus fitness Point</p>
                  </div>
            </div>
          </div>
</div>
       </section>
        <!-- Lose Weight Section -->
        <section id="loseweight" class="workout-section" style="display: none;">
            <h2>Lose Weight</h2>
            <p>How To Lose Weight Fast With Exercise</p>
            <div class="exercise-list">
                 <!-- dynamite content -->
              <div v-for="item in excerciselists" :key="item.id">
               <div class="card" style="width: 17em;" @click="this.ViewDeatailInfo(item.id, item.description , item.img, item.correct, item.wrong)">
                <img class="card-img-top" :src="item.img" alt="Card image cap" style="height: 15em;">
                <div class="card-body">
                  <h5 class="card-title"> {{ item.id  }}</h5>
                  <p class="card-text">{{ item.description  }}</p>
                </div>
              </div>
              </div>
              <div class="pagination">
                <button>Previous</button>
                <button>1</button>
                <button>2</button>
                <button>Next</button>
            </div>
            </div>
        </section>

        <!-- Release Stress Section -->
        <section id="release_stress" class="workout-section" style="display: none;">
            <h2>Release Stress</h2>
            <p>Techniques to Reduce Stress and Anxiety</p>
            <div class="exercise-list">
               <!-- dynamite content -->
              <div v-for="item in medication" :key="item.id">
               <div class="card" style="width: 17em;" @click="this.ViewDeatailInfo(item.id, item.description , item.img, item.correct, item.wrong)">
                <img class="card-img-top" :src="item.img" alt="Card image cap" style="height: 15em;">
                <div class="card-body">
                  <h5 class="card-title">{{ item.id  }}</h5>
                  <p class="card-text">{{ item.description  }}</p>
                </div>
              </div>
              </div>
              <div class="pagination">
                <button>Previous</button>
                <button>1</button>
                <button>2</button>
                <button>Next</button>
            </div>
            </div>
        </section>
         <!-- Release Stress Section -->
        <section id="healthy_diet" class="workout-section" style="display: none;">
            <h2>Healthy Diets</h2>
            <p>Healthy Recipes</p>
            <div class="exercise-list">
               <!-- dynamite content -->
              <div v-for="item in medication" :key="item.id">
               <div class="card" style="width: 17em;" @click="this.ViewDeatailInfo(item.id, item.description , item.img, item.correct, item.wrong)">
                <img class="card-img-top" :src="item.img" alt="Card image cap" style="height: 15em;">
                <div class="card-body">
                  <h5 class="card-title">{{ item.id  }}</h5>
                  <p class="card-text">{{ item.description  }}</p>
                </div>
              </div>
              </div>
            <div class="pagination">
                <button>Previous</button>
                <button>1</button>
                <button>2</button>
                <button>Next</button>
            </div>
            </div>
        </section>
         <!-- Release Stress Section -->
        <section id="tracking_health" class="workout-section" style="display: none;">
            <h2>Tracking Health</h2>
            <p>The essential guide to health tracking</p>
            <div class="exercise-list">
               <!-- dynamite content -->
              <div v-for="item in medication" :key="item.id">
               <div class="card" style="width: 17em;" @click="this.ViewDeatailInfo(item.id, item.description , item.img, item.correct, item.wrong)">
                <img class="card-img-top" :src="item.img" alt="Card image cap" style="height: 15em;">
                <div class="card-body">
                  <h5 class="card-title">{{ item.id  }}</h5>
                  <p class="card-text">{{ item.description  }}</p>
                </div>
              </div>
              </div>
              <div class="pagination">
                <button>Previous</button>
                <button>1</button>
                <button>2</button>
                <button>Next</button>
            </div>
            </div>
        </section>

        <!-- Wellness News Section -->
        <section id="wellness-news">
            <h2>Wellness News</h2>
            <div class="news-content">
                <div class="image-container">
                    <img src="/images/news.jpg" alt="Health News">
                </div>
                <div class="text-container">
                    <p>A curated collection of health and wellness content from our team of medical professionals, including expert advice, news articles, health living resources, webinars, and blog posts. Providing you with insights, guidance, and inspiration to empower you on your personal wellness journey.</p>
                </div>
            </div>
        </section>
    </main>
<div>
    <FooterOfMyPage />
  </div>
</template>

<script>
import HeaderOfMyPage from './components/HeaderOfMyPage.vue'
import FooterOfMyPage from './components/FooterOfMyPage.vue'
export default {
  name: 'HomeView',
  data () {
    return {
      usergoals: [],
      excerciselists: [{ id: 'Gym Motivation', description: 'Intense Workout', img: 'images/1.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Treadmill Cardio', description: 'Steady Running', img: 'images/2.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Outdoor Walking', description: 'Daily Steps', img: 'images/3.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Yoga Pose Beginner', description: 'Balance Training', img: 'images/4.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Core Workout', description: 'Sit-Up Effort', img: 'images/5.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Sit-Up Beginner', description: 'Core Strengthening', img: 'images/6.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Mountain Climbers', description: 'Intensity Boost', img: 'images/7.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Stability Workout', description: 'Balance Coordination', img: 'images/8.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' }],
      medication: [{ id: 'Child Pose', description: 'Soothing Stretch', img: 'images/stress/8.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Side Stretch', description: 'Flexibility Enhancer', img: 'images/stress/1.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Seated Forward Bend', description: 'Peaceful Meditation', img: 'images/stress/2.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Zen Pose Relax', description: 'Peaceful Meditation', img: 'images/stress/3.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Bridge Pose In Minutes', description: 'Calmness Inducer', img: 'images/stress/4.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Relaxation Pose', description: 'Muscle Relaxation', img: 'images/stress/5.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Leg Stretch', description: '3 sets 8 reps', img: 'images/stress/6.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' },
        { id: 'Meditative Seating', description: 'Focus Enhancement', img: 'images/stress/7.JPG', correct: 'images/doingrightexcercise.gif', wrong: 'images/excercise_wrong.gif' }]
    }
  },
  components: {
    HeaderOfMyPage,
    FooterOfMyPage
  },
  mounted () {
    const listuserGoal = this.getCookieforArray('usergoals')
    if (listuserGoal) {
      this.usergoals = listuserGoal.split(',')
      console.log(this.usergoals)
      // loop to this array and show news
      this.usergoals.forEach(function (usergoal) {
        document.getElementById(usergoal).style.display = 'block'
      })
    } else {
      console.log(this.usergoals)
      // if an user does not have goals , redict them to login page
      this.$router.push({ name: 'LoginForm' })
    }
  },
  methods: {
    ViewDeatailInfo (mainTitle, Subtitle, path, pathcorrect, pathwrong) {
      this.$router.push({ name: 'ExcerciseDetails', query: { maintitle: mainTitle, minititle: Subtitle, minipath: path, docorrect: pathcorrect, dowrong: pathwrong } })
      // this.$router.push({ path: '/excercisedetails/:id', name: 'ExcerciseDetails', params: { id: 'yesmen' }, query: { maintitle: 'okmen', page: 2 } })
    },
    createTable () {
      if (this.excerciselists.length > 0) {
        console.log('create data for lose weight')
        for (let i = 0; i < this.excerciselists.length; i++) {
          const description = this.excerciselists[i].description
          const picturePath = this.excerciselists[i].img
          const number = 'Workout ' + this.excerciselists[i].id
          // create dynamic table
          const cardObject = this.createCardElement(picturePath, number, description)
          console.log(cardObject)
        }
      } else {
        console.log('Cannot find the data')
      }
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
    },
    getCookie (cname) {
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
    }
  }
}
</script>
