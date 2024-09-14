<template>
<HeaderOfMyPage></HeaderOfMyPage>
  <br>
  <div class="contactus-media">
            <h2>Contact Info</h2>
            <p>We are online in many social media platforms</p>
            <div class="map-list">
               <!-- dynamite content -->
               <div class="card">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5486622777617!2d-97.14745528468275!3d49.89513667939685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea715f03b7bd6f%3A0x69aaf5777ac32108!2sThe%20University%20of%20Winnipeg!5e0!3m2!1sen!2sca!4v1601066379340!5m2!1sen!2sca"
                width="100%" height="35vw" class="googlemap" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <div class="card-body">
                 <div class="listsocialicons">
                    <div>
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="/images/facebook.jpg" alt="Facebook" />
                    </a>
                </div>
                <div>
                    <a href="https://www.twitter.com" target="_blank">
                        <img src="/images/twister.jpg" alt="Twitter" style="height: 6vw;" />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com" target="_blank">
                        <img src="/images/instagram.jpg" alt="Instagram"  style=" width: 13vw;"/>
                    </a>
                </div>
             </div>
                </div>
              </div>
            </div>
<div>
            <!-- Contact Us Form Section -->
        <div class="contact-form-section">
            <h2>Contact Us</h2>
            <form id="contact-form">
                <div class="input-container">
                    <input type="text" id="name" name="name" placeholder="Type Your Name" required>
                </div>
                <div class="input-container">
                    <input type="email" id="email" name="email" placeholder="Type Your Email" required>
                </div>
                <div class="input-container">
                    <textarea id="message" name="message" rows="4" placeholder="Type Your Message" required></textarea>
                </div>
                <input type="submit" value="Send Message">
            </form>
            <p id="error-message"></p> <!-- Error message display -->
        </div>
            </div>
        </div>
<FooterOfMyPage></FooterOfMyPage>
</template>
<script>
import HeaderOfMyPage from '../../components/HeaderOfMyPage.vue'
import FooterOfMyPage from '../../components/FooterOfMyPage.vue'
import emailjs from 'emailjs-com'
// Initialize EmailJS with your public key
emailjs.init('Bb83Pe0kzeooArDOS')
export default {
  name: 'ContactUsView',
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
    contactusItem.classList.add('active')
    // remove class actitve for other items
    workoutItem.classList.remove('active')
    nutritionItem.classList.remove('active')
    trackerItem.classList.remove('active')
    homeItem.classList.remove('active')
    // ================ CONTACT FORM ==================
    const form = document.getElementById('contact-form')
    const errorMessage = document.getElementById('error-message')
    // Initialize EmailJS with your public key
    form.addEventListener('submit', function (e) {
      e.preventDefault() // Prevent the form from submitting
      // Get form field values
      const name = document.getElementById('name').value.trim()
      const email = document.getElementById('email').value.trim()
      const message = document.getElementById('message').value.trim()
      // Clear previous error message
      errorMessage.textContent = ''
      // Check if fields are empty
      if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'All fields are required.'
        errorMessage.style.color = 'red'
        return
      }
      // Validate email format
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.'
        errorMessage.style.color = 'red'
      }
      // Send email using EmailJS
      emailjs.send('service_1hvmtwq', 'template_x88z3zl', {
        to_name: 'Admin', // The recipient's name
        from_name: name, // User's name
        from_email: email, // User's email
        message: message
      }).then(function (response) {
        alert('Email sent successfully!')
        form.reset() // Reset the form after successful submission
        console.log('SUCCESS!', response.status, response.text)
      }, function (errormsg) {
        console.log('FAILED...', errormsg)
        errorMessage.textContent = 'Failed to send email. Please try again later.'
        errorMessage.style.color = 'red'
      })
    })
  }
}
</script>
<style scoped>
.contact-info {
    flex: 1;
    padding-left: 20px;
}
.info-section {
    display: flex;
    justify-content: space-around;
    background-color: #bbd9f7;
    padding: 20px;
}
.info-section div {
    text-align: center;
}

.hours h4, .contact-details h4 {
    margin: 10px 0;
    color: #007bff;
}
.contact-toggle {
    cursor: pointer;
    margin: 20px 0;
    text-align: center;
}

.contact-form {
    background-color: #f9f9f9; /* Light background for the form */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: none; /* Hidden by default */
}
.contact-form-section {
    max-width: 600px;
    margin: 50px auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.contact-form-section h2 {
    text-align: center;
    color: #007bff;
    font-size: 24px;
    margin-bottom: 20px;
}

.input-container {
    position: relative;
    margin-bottom: 20px;
}

.input-container i {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #007bff;
}

.input-container input,
.input-container textarea {
    width: 100%;
    padding: 12px 15px 12px 40px;
    font-size: 16px;
    border: 2px solid #868383;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
}

.input-container input:focus,
.input-container textarea:focus {
    border-color: #007bff;
}

input::placeholder,
textarea::placeholder {
    color: #aaa;
}

input[type="submit"] {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}

#error-message {
    text-align: center;
    color: red;
    font-size: 14px;
}

/* Media Query for responsiveness */
@media (max-width: 768px) {
    .contact-form-section {
        padding: 20px;
    }
    input[type="submit"] {
        font-size: 16px;
    }
}
</style>
