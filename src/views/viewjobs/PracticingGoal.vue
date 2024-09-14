<template>
<br>
<section>
  <div class="containerPracticingGoal">
        <div class="box-goal">
            <div class="titlelogin">
              <img src="@img/logo.jpg" style="width: 3.9em; height: 3.5em;">
                <span style="font-size: 1.5em; font-weight: bold; margin-top: 0.8vw">What are your practicing targets?</span>
            </div>
            <form>
                <label class="checkbox-label" ref="checkedloseweight">
                    <input type="checkbox"   v-model="checkedloseweight"  name="target" class="check-option" value="lose_weight">&nbsp;
                    <span>Lose Weight</span>
                </label>
                <label class="checkbox-label" ref="release_stress" >
                    <input type="checkbox"  v-model="release_stress"   name="target" class="check-option" value="release_stress">&nbsp;
                    <span>Release Stress</span>
                </label>
                <label class="checkbox-label" ref="healthy_diet">
                    <input type="checkbox"  name="target" class="check-option" v-model="healthy_diet">&nbsp;
                    <span>Gain healthy diets</span>
                </label>
                <label class="checkbox-label" ref="tracking_health">
                    <input type="checkbox"  name="target" class="check-option" v-model="tracking_health">&nbsp;
                    <span>Tracking Health</span>
                </label>
                <button type="button" class="btnconfirmgoal" @click="userClickConfirmation">Confirm</button>
            </form>
<br>
         <div ref="errorbox" class="alert alert-danger" role="alert" style="display: none;">
         Please select at least one target to continue!
        </div>
        </div>
    </div>
</section>
<div>
    <FooterOfMyPage />
  </div>
</template>
<script>
import FooterOfMyPage from '../../components/FooterOfMyPage.vue'
export default {
  name: 'PracticingGoal',
  components: {
    FooterOfMyPage
  },
  data () {
    return { usergoal: [], checkedloseweight: null, release_stress: null, healthy_diet: null, tracking_health: null }
  },
  updated () {
    this.$refs.errorbox.style.display = 'none'
    if (this.checkedloseweight) {
      if (!this.usergoal.includes('loseweight')) {
        this.usergoal.push('loseweight')
      }
      this.$refs.checkedloseweight.style.backgroundColor = '#fff3b0'
    } else {
      this.usergoal = this.usergoal.filter(item => item !== 'loseweight')
      this.$refs.checkedloseweight.style.backgroundColor = 'white'
    }
    if (this.release_stress) {
      if (!this.usergoal.includes('release_stress')) {
        this.usergoal.push('release_stress')
      }

      this.$refs.release_stress.style.backgroundColor = '#fff3b0'
    } else {
      this.usergoal = this.usergoal.filter(item => item !== 'release_stress')
      this.$refs.release_stress.style.backgroundColor = 'white'
    }
    if (this.healthy_diet) {
      if (!this.usergoal.includes('healthy_diet')) {
        this.usergoal.push('healthy_diet')
      }
      this.$refs.healthy_diet.style.backgroundColor = '#fff3b0'
    } else {
      this.usergoal = this.usergoal.filter(item => item !== 'healthy_diet')
      this.$refs.healthy_diet.style.backgroundColor = 'white'
    }
    if (this.tracking_health) {
      if (!this.usergoal.includes('tracking_health')) {
        this.usergoal.push('tracking_health')
      }
      this.$refs.tracking_health.style.backgroundColor = '#fff3b0'
    } else {
      this.usergoal = this.usergoal.filter(item => item !== 'tracking_health')
      this.$refs.tracking_health.style.backgroundColor = 'white'
    }
  },
  methods: {
    userClickConfirmation () {
      if (this.usergoal.length > 0) {
        console.log(this.usergoal.toString())
        this.setCookieforArray('usergoals', this.usergoal.toString(), 365)
        this.$router.push({ name: 'HomeView' })
      } else {
        this.$refs.errorbox.style.display = 'block'
      }
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
