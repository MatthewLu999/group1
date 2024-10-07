<template>
  <section>
  <div class="cardLogin">
  <div class="card-body">
      <div class="card-column-left-panel">
        <div class="titlelogin">
        <img src="@img/logo.jpg" style="width: 3.9em; height: 3.5em;">
        <span style="font-size: 1.5em; font-weight: bold; margin-top: 0.8vw"
          >Welcome to Fit-Life</span>
        </div>
        <div>
            <br>
              <div data-mdb-input-init class="form-outline mb-4">
                <button
                  type="button"
                  id="btnLoginGoogle"
                  @click="loginwithGoogle"
                  class="form-control form-control-lg" style="font-size: 0.9em; padding: 6px;  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);">
                  <span><img src="@img/googleloginicon.png" style="width: 30px; height: 30px;"></span>Login with Google</button>
              </div>
          </div>
          <div>
              <div data-mdb-input-init class="form-outline mb-4">
                <button
                  type="button"
                  id="btnLoginFaceBook"
                  class="form-control form-control-lg" style="font-size: 0.9em; padding: 2px;  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);">
                  <span><img src="@img/FBicon.png" style="width: 45px; height: 45px;"></span>Login with Facebook</button>
              </div>
        </div>
         <div class="divider">Or Login with Our Account</div>
         <br>
        <div data-mdb-input-init class="form-outline mb-4" style="text-align: left;">
          <label class="form-label" for="validationCustomUsername">Email address</label>
          <input
            type="email"
            id="useremail"
            class="form-control form-control-lg"
            placeholder="example@gmail.com"
          />
          <div class="invalid-feedback">
              Username is empty or wrong email formart!.
            </div>
        </div>
        <div data-mdb-input-init class="form-outline mb-4" style="text-align: left;">
          <label class="form-label" for="validationCustomUsername"
            >Password</label>
          <input
            type="password"
            id="userpassword"
            placeholder="*******"
            class="form-control form-control-lg"
          />
          <div class="invalid-feedback">
              Password is empty or incorrect!
            </div>
        </div>
        <div class="pt-1 mb-4">
          <button
            data-mdb-button-init
            data-mdb-ripple-init
            class="btn btn-lg btn-block"
            id="btnlogin"
            style="background-color: #0099FF; color: white; font-size: 1.2em;"
            type="button" @click="login"
          >
            Login
          </button>
        </div>
        <!-- end of login form  -->
         <a class="small text-muted" href="#!">Forgot password?</a>
        <p class="mb-5 pb-lg-2" style="color: #393f81" @click="registerAccount">
          If don't have an account? <b>Let's register here</b>
          <!-- <a href="#!" style="color: #393f81" @click="registerAccount">Register here</a> -->
        </p>
        <a href="#!" class="small text-muted">Terms of use.</a>
        <a href="#!" class="small text-muted">Privacy policy</a>
        <!-- end of card body area -->
    </div>
   <!-- right panel -->
    <div>
       <img src="@img/logologin.jpg"
                    alt="login form"
                    class="img-fluid iconlogin"/>
    </div>
  </div>
</div>
 </section>
</template>
<script>
import { googleSdkLoaded } from 'vue3-google-login'
import axios from 'axios'
const ClientID = '352276418953-n2ev7mcmjsc094j897m89igeg26gfbvl.apps.googleusercontent.com'
const ClientSecret = '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'
const RedireUrlPost = 'https://www.matthewluchicken.com/viewjobs/loginform'
const RedirectUrlCallBack = 'https://www.matthewluchicken.com'
export default {
  name: 'LoginForm',
  data () {
    return { userDetails: null, data: null, username: '', password: '', accounttype: 'local', picture: '' }
  },
  methods: {
    async CheckExistUser () {
      try {
        const body = {
          name: this.name,
          username: this.username,
          password: this.password,
          accounttype: this.accounttype,
          picture: this.picture
        }
        const response = await axios.post('http://localhost:3000/CheckUser', body)
        const resultOfConnection = await response.data
        if (resultOfConnection !== 'error') {
          console.log(resultOfConnection)
        } else {
          console.log('Cannot connect')
        }
      } catch (error) {
        console.error('There was an error!', error)
      }
    },
    // register
    registerAccount () {
      this.$router.push({ name: 'RegisterForNewAccount' })
    },
    // login with google account
    loginwithGoogle () {
      googleSdkLoaded(google => {
        google.accounts.oauth2
          .initCodeClient({
            client_id: ClientID,
            scope: 'email profile openid',
            redirect_uri: RedireUrlPost,
            callback: response => {
              if (response.code) {
                console.log('\n login success nek!')
                this.sendCodeToBackend(response.code)
                console.log(response.code)
              }
            }
          })
          .requestCode()
      })
    },
    async sendCodeToBackend (code) {
      try {
        const response = await axios.post(
          'https://oauth2.googleapis.com/token',
          {
            code,
            client_id: ClientID,
            client_secret: ClientSecret,
            redirect_uri: RedirectUrlCallBack,
            grant_type: 'authorization_code'
          }
        )

        const accessToken = response.data.access_token
        console.log('\n access token nek:')
        console.log(accessToken)
        // Fetch user details using the access token
        const userResponse = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )

        if (userResponse && userResponse.data) {
          // Set the userDetails data property to the userResponse object
          this.userDetails = userResponse.data
          this.name = this.userDetails.name
          this.username = this.userDetails.email
          this.password = ''
          this.accounttype = 'google'
          this.picture = this.userDetails.picture
          // update to global variable
          // add this user to database
          this.CheckExistUser()
          this.deleteCookie('username1')
          this.setCookieforArray('username1', this.name, 365)
          this.deleteCookie('userpicture1')
          this.setCookieforArray('userpicture1', this.picture, 365)
          setTimeout(() => {
            this.$router.push({ name: 'PracticingGoal' })
          }, 500)
        } else {
          // Handle the case where userResponse or userResponse.data is undefined
          console.error('Failed to fetch user details.')
        }
      } catch (error) {
        console.error('Token exchange failed:', error.response.data)
      }
    },
    // login with local account
    login () {
      const username = document.getElementById('useremail')
      const userpassword = document.getElementById('userpassword')
      username.classList.remove('is-invalid')
      userpassword.classList.remove('is-invalid')
      if (username.value.length > 0 && userpassword.value.length > 0) {
        var checkresult = this.check_email(username.value)
        if (checkresult) {
          username.classList.add('is-valid')
          userpassword.classList.add('is-valid')
          if ((username.value === 'matthew@gmail.com' || username.value === 'ajay@gmail.com') && userpassword.value === 'admin') {
            this.name = 'Admin'
            this.deleteCookie('userpicture1')
            this.deleteCookie('username1')
            this.setCookieforArray('username1', this.name, 365)
            this.setCookieforArray('userpicture1', '../../images/3dloginbg.png', 365)
            this.$router.push({ name: 'PracticingGoal' })
          } else {
            username.classList.add('is-invalid')
            userpassword.classList.add('is-invalid')
          }
        } else {
          username.classList.add('is-invalid')
        }
      } else {
        username.classList.add('is-invalid')
        userpassword.classList.add('is-invalid')
      }
    },
    check_email (useremail) {
      return useremail.includes('@')
    },
    setCookieforArray (name, value, days) {
      var expires = ''
      if (days) {
        var date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toUTCString()
      }
      document.cookie = name + '=' + (JSON.stringify(value) || '') + expires + '; path=/'
    },
    getCookieforArray (name) {
      var nameEQ = name + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
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
 @import "@css/login.css";
</style>
