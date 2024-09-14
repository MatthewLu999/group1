<template>
<HeaderOfMyPage></HeaderOfMyPage>
 <section>
<!-- Carousel Section -->
        <section class="carousel">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/fitness1.jpeg" alt="Healthy Food">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/slideshow2.jpg" alt="Nutrition">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="/images/slideshow1.jpg" alt="Fitness">
                    </div>
                </div>
                <!-- Carousel Controls -->
                <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>

        <!-- Meals Section -->
        <section id="meals" class="food1">
            <h2 id="totalcalories">Total - 2000 Calories for a Day</h2>
            <div class="food-list">
                <div class="food-item" @click="showMenu('breakfast')">
                    <img src="/images/breakfastL.jpg" alt="Breakfast">
                    <p>Breakfast</p>
                </div>
                <div class="food-item" @click="showMenu('lunch')">
                    <img src="/images/lunchL.jpg" alt="Lunch">
                    <p>Lunch</p>
                </div>
                <div class="food-item" @click="showMenu('dinner')">
                    <img src="/images/dinnerL.jpg" alt="Dinner">
                    <p>Dinner</p>
                </div>
            </div>
        </section>

        <!-- Breakfast Section -->
        <section id="breakfast" @click="updateHealthNews" class="meal-section hidden workout-section">
            <h2>Breakfast - Approximately 500-600 Calories</h2>
            <div class="meal-list">
                <a href="https://www.timhortons.ca/?lang=en&gad_source=1&gclid=CjwKCAjwgfm3BhBeEiwAFfxrG8_S8u2rhoEK1naN7CHsxbaq6taBjAYh2DLnYJArcCskKrK8iOD5lRoCW1sQAvD_BwE"></a>
                <!-- Breakfast items dynamically added by JS as cards -->
            </div>
        </section>

        <!-- Lunch Section -->
        <section id="lunch" @click="updateHealthNews" class="meal-section hidden workout-section">
            <h2>Lunch - Approximately 700-800 Calories</h2>
            <div class="meal-list">
                <!-- Lunch items dynamically added by JS as cards -->
            </div>
        </section>

        <!-- Dinner Section -->
        <section id="dinner" @click="updateHealthNews" class="meal-section hidden workout-section">
            <h2>Dinner - Approximately 600-700 Calories</h2>
            <div class="meal-list">
                <!-- Dinner items dynamically added by JS as cards -->
            </div>
        </section>
</section>
<FooterOfMyPage></FooterOfMyPage>
</template>

<script>
import HeaderOfMyPage from '../../components/HeaderOfMyPage.vue'
import FooterOfMyPage from '../../components/FooterOfMyPage.vue'
let totalCalories = 0
export default {
  name: 'NutritionView',
  components: {
    HeaderOfMyPage,
    FooterOfMyPage
  },
  data () {
    return {
      images: ['/images/fitness1.jpeg', '/images/slideshow2.jpg', '/images/slideshow1.jpg'],
      currentIndex: 0,
      totalnewswatched: 0
    }
  },
  mounted () {
    // =========
    // DOM loaded event
    // Show breakfast by default
    // add actitve class
    const homeItem = document.getElementById('homepage')
    const workoutItem = document.getElementById('workoutpage')
    const nutritionItem = document.getElementById('nutritionpage')
    const trackerItem = document.getElementById('trackerpage')
    const contactusItem = document.getElementById('contactuspage')
    // add actitve class for selected item
    nutritionItem.classList.add('active')
    // remove class actitve for other items
    workoutItem.classList.remove('active')
    homeItem.classList.remove('active')
    trackerItem.classList.remove('active')
    contactusItem.classList.remove('active')
    this.showMenu('breakfast')
    // Add breakfast items
    const breakfastItems = [
      { meal: 'breakfast', name: 'Tim Hortons - Bagel & Cream Cheese', calories: 510, image: '/images/tim1.jpg' },
      { meal: 'breakfast', name: 'Tim Hortons - Breakfast Sandwich', calories: 535, image: '/images/timbreakfastsandwich.jpg' },
      { meal: 'breakfast', name: 'Tim Hortons - Hash Browns', calories: 560, image: '/images/hashbrowntim.jpg' }
    ]
    this.addMenuItems('breakfast', breakfastItems, 'breakfast')
    // Add lunch items
    const lunchItems = [
      { meal: 'lunch', name: 'A&W - Teen Burger', calories: 790, image: '/images/teenburger.jpg' },
      { meal: 'lunch', name: 'A&W - Sweet Potato Fries', calories: 710, image: '/images/sweetpatatofries.jpg' },
      { meal: 'lunch', name: 'A&W - Salad', calories: 765, image: '/images/salad.jpg' }
    ]
    this.addMenuItems('lunch', lunchItems, 'lunch')
    // Add dinner items
    const dinnerItems = [
      { meal: 'dinner', name: 'Harvey - Grilled Chicken Sandwich', calories: 670, image: '/images/sandwichL.jpg' },
      { meal: 'dinner', name: 'Harvey - Onion Rings', calories: 620, image: '/images/harvey2.jpg' },
      { meal: 'dinner', name: 'Harvey - Chocolate Milkshake', calories: 600, image: '/images/proteinshake1.jpg' }
    ]
    this.addMenuItems('dinner', dinnerItems, 'dinner')
    // Start the automatic slideshow after the DOM is loaded
    this.startSlideshow()
  },
  methods: {
    updateHealthNews () {
      this.totalnewswatched++
      const currentNumbernews = this.getCookieforArray('todaynewswatched')
      const newNumbervideo = currentNumbernews + this.totalnewswatched
      this.deleteCookie('todaynewswatched')
      this.setCookieforArray('todaynewswatched', newNumbervideo, 365)
    },
    showSlide (index) {
      const carouselItems = document.querySelectorAll('.carousel-item')
      carouselItems.forEach((item, i) => {
        item.classList.remove('active')
        if (i === index) {
          item.classList.add('active')
        }
      })
    },
    nextSlide () {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
      this.showSlide(this.currentIndex)
    },
    prevSlide () {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
      this.showSlide(this.currentIndex)
    },
    startSlideshow () {
      setInterval(() => {
        this.nextSlide()
        // Change the image automatically every 5 seconds
      }, 5000)
    },
    showMenu (menu) {
      document.querySelectorAll('.meal-section').forEach(section => {
        section.classList.add('hidden')
      })
      document.getElementById(menu).classList.remove('hidden')
    },
    addMenuItems (sectionId, items, menuType) {
      const section = document.querySelector(`#${sectionId} .meal-list`)
      section.innerHTML = ''
      // Set the redirect URL based on the menu type
      let redirectUrl = ''
      if (menuType === 'breakfast') {
        redirectUrl = 'https://www.timhortons.ca/?lang=en&gad_source=1&gclid=CjwKCAjwgfm3BhBeEiwAFfxrG8_S8u2rhoEK1naN7CHsxbaq6taBjAYh2DLnYJArcCskKrK8iOD5lRoCW1sQAvD_BwE'
      } else if (menuType === 'lunch') {
        redirectUrl = 'https://web.aw.ca/en/home'
      } else if (menuType === 'dinner') {
        redirectUrl = 'https://www.harveys.ca/en/locations/mb/winnipeg'
      }
      let thenameofmeal = ''
      // Add the menu items to the section
      items.forEach(item => {
        thenameofmeal = item.meal
        const card = document.createElement('div')
        card.addEventListener('click', function (event) {
          event.preventDefault()
          totalCalories = totalCalories + item.calories
          document.getElementById('totalcalories').innerText = 'Total - ' + totalCalories + ' Calories for a Day'
        })
        card.classList.add('card')
        card.innerHTML = `
            <a href='${redirectUrl}' target='_blank'>
                <img src='${item.image}' alt='${item.name}'>
                <div class='card-body'>
                    <h5 class='card-title'>${item.name}</h5>
                  <p class='card-text'>${item.calories} Calories</p>
                </div>
            </a>
        `
        section.appendChild(card)
      })
      // Calculate average calories
      let averageCalories = ''
      if (thenameofmeal === 'breakfast') {
        averageCalories = '500 - 600'
      } else if (thenameofmeal === 'lunch') {
        averageCalories = '600 - 700'
      } else {
        averageCalories = '700 - 800'
      }
      const sectionHeader = document.querySelector(`#${sectionId} h2`)
      sectionHeader.textContent = `${sectionHeader.textContent.split(' - ')[0]} - Approximately ${averageCalories} Calories`
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
