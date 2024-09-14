<template>
<div class="container">
        <h2>Membership Registration Form</h2>

        <form id="membershipForm" autocomplete="off" >
            <div class="titlelogin">
              <img src="@img/logo.jpg" style="width: 3.9em; height: 3.5em;">
                <span style="font-size: 1.5em; font-weight: bold; margin-top: 0.8vw">Membership Registration</span>
            </div>
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" autocomplete="off" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" autocomplete="off" required>

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" pattern="[0-9]{10}" required>

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required>

            <div class="radio-group">
                <label>Gender:</label>
                <input type="radio" id="male" name="gender" value="male">
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female">
                <label for="female">Female</label>
                <input type="radio" id="other" name="gender" value="other">
                <label for="other">Other</label>
            </div>

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" placeholder="Enter your address" required>

            <label for="membershipType">Membership Type:</label>
            <select id="membershipType" name="membershipType" required>
                <option value="">Select...</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
            </select>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" minlength="6" required>
            <small id="passwordDescription" style="color: red;"></small>

            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required>
            <small id="confirmPasswordDescription" style="color: red;"></small>

            <!-- Show Password Checkbox -->
            <label>
                <input type="checkbox" id="showPassword"> Show Password
            </label>

            <button type="submit">Register</button>

            <!-- Success Message -->
            <div id="successMessage" style="width: 100%; display: none;">
            <p  style="color: green;">Registered Successfully!</p>
            <div @click="goLoginPage">
               <div  style="display:flex; flex-direction: row; width: 100%;"><span class="material-icons">
                arrow_back
                </span><b>Back to Login Form</b></div>
            </div></div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'RegisterForNewAccount',
  mounted () {
    const passwordInput = document.getElementById('password')
    const confirmPasswordInput = document.getElementById('confirmPassword')
    const passwordDescription = document.getElementById('passwordDescription')
    const confirmPasswordDescription = document.getElementById('confirmPasswordDescription')
    const successMessage = document.getElementById('successMessage')
    const showPassword = document.getElementById('showPassword')
    const emalInput = document.getElementById('email')
    emalInput.autocomplete = 'off'
    emalInput.value = ''
    // Password validation conditions
    passwordInput.addEventListener('input', function () {
      const password = passwordInput.value
      let description = ''
      // Condition 1: Password must be at least 6 characters long
      if (password.length < 6) {
        description += 'Your password is too short. '
      }

      // Condition 2: Must contain at least 1 uppercase letter
      if (!/[A-Z]/.test(password)) {
        description += 'Please include at least 1 uppercase letter. '
      }
      // Condition 3: Must contain at least 1 but not more than 2 special characters
      const specialCharacters = password.match(/[^a-zA-Z0-9]/g) // Count special characters
      if (!specialCharacters || specialCharacters.length < 1) {
        description += 'Please include at least 1 special character. '
      } else if (specialCharacters.length > 2) {
        description += 'Do not include more than 2 special characters. '
      }
      // Show password description
      passwordDescription.textContent = description
    })
    // Confirm password validation
    confirmPasswordInput.addEventListener('input', function () {
      const password = passwordInput.value
      const confirmPassword = confirmPasswordInput.value

      if (password !== confirmPassword) {
        confirmPasswordDescription.textContent = 'Password does not match.'
      } else {
        confirmPasswordDescription.textContent = ''
      }
    })
    // Show password toggle functionality
    showPassword.addEventListener('change', function () {
      const passwordType = showPassword.checked ? 'text' : 'password'
      passwordInput.type = passwordType
      confirmPasswordInput.type = passwordType
    })
    // Form submission event
    document.getElementById('membershipForm').addEventListener('submit', function (event) {
      event.preventDefault()
      const password = passwordInput.value
      const confirmPassword = confirmPasswordInput.value
      if (passwordDescription.textContent === '' && confirmPassword === password) {
        // Display success message if no errors and passwords match
        successMessage.style.display = 'block'
      }
    })
  },
  methods: {
    goLoginPage () {
      this.$router.push({ name: 'LoginForm' })
    }
  }
}
</script>
