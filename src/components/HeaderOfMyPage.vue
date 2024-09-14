<template>
<nav>
  <!-- navigation -->
  <section>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      style="background-color: #0f7cbf"
    >
      <img class="imgmainlogo" src="images/logo.jpg" style="width: 3.9em; height: 3.5em; border-radius: 10px;" />&nbsp;
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="material-icons">
          fitness_center
          </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <li id="homepage" class="nav-item active">
            <router-link class="nav-link" :to="{ name: 'HomeView' }"  style="font-weight: 700; color: white">Home</router-link>
          </li>
          <li id="workoutpage" class="nav-item">
            <router-link  class="nav-link" :to="{ name: 'WorkOutView' }" style="font-weight: 700; color: white">Work Out</router-link>
          </li>
          <li id="nutritionpage" class="nav-item dropdown">
            <a id="navbarDropdownMenuLink"
              class="nav-link dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style="font-weight: 700; color: white; cursor: pointer;">Nutritions</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               <router-link class="dropdown-item" :to="{ name: 'NutritionView' }">Healthy Meals</router-link>
            </div>
          </li>
          <li id="trackerpage" class="nav-item">
            <router-link  class="nav-link" :to="{ name: 'TrackerView' }" style="font-weight: 700; color: white">Tracker</router-link>
          </li>
          <li id="contactuspage" class="nav-item">
               <router-link  class="nav-link" style="font-weight: 700; color: white;" :to="{ name: 'ContactUsView' }">Contact Us</router-link>
          </li>
        </ul>
        <span
          class="navbar-text"
          style="font-weight: 700; color: white; margin-top: 5px"
        >
        <router-link class="dropdown-item" :to="{ name: 'LoginForm' }"><img ref="ImgUserPhoto" :src="CurrentUserPhoto" style="width: 3em; height:3em;"></router-link>
        </span>
        <span
          id="welcometxt"
          class="navbar-text"
          style="font-weight: 700; color: white; font-style: italic; margin-left: 0px; padding: 0px;"
        >
          Welcome, {{ CurrentUserName  }}
        </span>
        <span
          class="navbar-text"
          id="btnlogout"
          @click="UserLogout"
          style="
            font-weight: 700;
            color: white;
            margin-top: 5px;
            cursor: pointer;
          "
          >&nbsp; <span class="material-icons"> logout </span>&nbsp;
        </span>
      </div>
    </nav>
    <!-- Bootstrap CSS -->
  </section>
</nav>
<br>
<br>
<br>
</template>
<script>
export default {
  name: 'HeaderOfMyPage',
  mounted () {
    this.$refs.ImgUserPhoto.src = '../../images/3dloginbg.png'
    const fullname = this.getCookieforArray('username1')
    if (fullname) {
      this.CurrentUserName = fullname
    } else {
      // if an user does not login , redict them to login page
      this.$router.push({ name: 'LoginForm' })
    }
    // check exist picture for user
    const usrpicture = this.getCookieforArray('userpicture1')
    this.CurrentUserPhoto = ''
    if (usrpicture) {
      this.CurrentUserPhoto = usrpicture
      this.$refs.ImgUserPhoto.src = usrpicture
    }
  },
  data () {
    return { CurrentUserName: 'guest', CurrentUserPhoto: '' }
  },
  methods: {
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
    },
    UserLogout () {
      this.deleteCookie('username1')
      this.deleteCookie('userpicture1')
      this.$router.push({ name: 'LoginForm' })
    }
  }
}
</script>
