<template>
<HeaderOfMyPage></HeaderOfMyPage>
<br>
<section class="container-root">
 <div class="container-tracker">
<h3>Today - Fitness goals - {{ this.totalAchieved }}% Completed</h3>
<!-- progressbar -->
<div class="progress">
  <div class="progress-bar bg-success" role="progressbar" :width="totalAchieved" aria-valuenow="{{ this.totalAchieved }}" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div>
<div class="mini-title">Total video watched: {{ totalwatchedvideos }} / {{  this.availabevideo }} videos</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" :width="percentageWatchedvideos" aria-valuenow="{{  this.percentageWatchedvideos }}" aria-valuemin="0" aria-valuemax="100">&nbsp;{{ this.percentageWatchedvideos }} %</div>
</div>
</div>
<!-- video watched -->
<div>
<div class="mini-title">Total Medical News Reviewed: {{ this.totalreadingnews }} / {{ this.availablenews }} News</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" :width="percentageReadingnews" aria-valuenow="{{ this.percentageReadingnews  }}" aria-valuemin="0" aria-valuemax="100">&nbsp;{{ this.percentageReadingnews }} %</div>
</div>
</div>
<br>
<h4>Health data - 1,430 Calories burned</h4>
<!-- draw pie chart -->
<div class="piechart-area">
<canvas id="myPieChart"></canvas>
</div>
<br>
<h4>Health data - 5,430 step</h4>
<div class="barchart-area">
  <canvas id="myChart"></canvas>
</div>
</div>
</section>
<FooterOfMyPage></FooterOfMyPage>
</template>
<script>
import HeaderOfMyPage from '../../components/HeaderOfMyPage.vue'
import FooterOfMyPage from '../../components/FooterOfMyPage.vue'
import Chart from 'chart.js/auto'
export default {
  name: 'TrackerView',
  components: {
    HeaderOfMyPage,
    FooterOfMyPage
  },
  data () {
    return { availablenews: 200, availabevideo: 300, percentageWatchedvideos: 0, percentageReadingnews: 0, totalwatchedvideos: 0, totalreadingnews: 0, totalAchieved: 0 }
  },
  mounted () {
    // add actitve class
    const homeItem = document.getElementById('homepage')
    const workoutItem = document.getElementById('workoutpage')
    const nutritionItem = document.getElementById('nutritionpage')
    const trackerItem = document.getElementById('trackerpage')
    const contactusItem = document.getElementById('contactuspage')
    // add actitve class for selected item
    trackerItem.classList.add('active')
    // remove class actitve for other items
    workoutItem.classList.remove('active')
    nutritionItem.classList.remove('active')
    homeItem.classList.remove('active')
    contactusItem.classList.remove('active')
    const totalnews = this.getCookieforArray('todaynewswatched')
    if (totalnews) {
      this.totalreadingnews = totalnews
      this.percentageReadingnews = Math.round((totalnews / this.availablenews) * 100)
    }
    // get data about watching video
    const totalvideo = this.getCookieforArray('todayvideowatched')
    if (totalvideo) {
      this.totalwatchedvideos = totalvideo
      this.percentageWatchedvideos = Math.round((totalvideo / this.availabevideo) * 100)
    }
    // total achieved
    const totalAchievements = Math.round(this.percentageReadingnews + this.percentageWatchedvideos)
    if (totalAchievements === 200) {
      this.totalAchieved = 100
    } else {
      this.totalAchieved = totalAchievements / 2
    }
    // Config and draw pie chart
    const canvaspiechart = document.getElementById('myPieChart')
    const myPieChart = new Chart(canvaspiechart, {
      type: 'pie',
      data: {
        labels: ['Walking', 'Cycling', 'Others'],
        datasets: [{
          label: '# of Calories',
          data: [200, 300, 930],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
    console.log(myPieChart)
    // config and draw bar chart
    const canvasbarchart = document.getElementById('myChart')
    const mybarChart = new Chart(canvasbarchart, {
      type: 'bar',
      data: {
        labels: ['Hiking', 'Walking to School', 'Others Activites'],
        datasets: [{
          label: '# of Steps',
          data: [1810, 1200, 2420],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
    console.log(mybarChart)
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
    }
  }
}
</script>
<style>
.container-root{
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width:100%;
}
.container-tracker{
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: left;
  align-self: center;
  width:80%;
  padding: 20px;
  background-color: #fff;
 border: solid 1px gray;
border-radius: 20px;

}
.container-tracker h3{
 color:rgb(0, 17, 255);
}
.mini-row-container{
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.mini-title{
padding-top: 1vw;
}
.progress{
height: 1.5vw;
border-radius: 20px;
}
.piechart-area{
display: flex;
flex-direction: row;
 justify-content: space-around;
align-self: center;
width: 30%;
}
.barchart-area{
display: flex;
flex-direction: row;
 justify-content: space-around;
align-self: center;
width: 50%;
}
</style>
