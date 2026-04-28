<script setup>
// import googlePlay from googlePlay
import googlePlay from '@/assets/gplay.png'
import applePlay from '@/assets/aplay.png'
import { ref } from 'vue';


const raiseAlert = ref(false)


function showAlert(){
  raiseAlert.value = true
  setTimeout(()=>{
    raiseAlert.value = false
  }, 3000)
}


</script>

<template>
  <div class="button-grouper">
    <div class="button">
      <!-- <p>Google Play</p> -->
      <div class="image-div">
        <img :src="googlePlay" alt="">
      </div>
      <a href="https://play.google.com/store/apps/details?id=com.nuwesurvugspace.myapp&pcampaignid=web_share">
        Google Play
      </a>
    </div>
    <div class="button" @click="showAlert">
      <div class="image-div">
        <img :src="applePlay" alt="">
      </div>
      <p>App Store</p>
    </div>
    <div class="alert" v-if="raiseAlert">
      <p><strong style="color: var(--theme-color);">We are sorry!</strong><br> This application is not yet available on App store.</p>
    </div>
  </div>
</template>

<style scoped>
.button-grouper {
  /* border: 1px solid red; */
  /* width: 400px; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
}

.button {
  width: 8.8rem;
  height: 3rem;
  padding: 0rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  background-color: var(--theme-color);
  /* background-color: var(--button-background-color); */
  /* border: 1px solid green; */
  transition: background-color 0.3s ease;
}

.button:active,
.button:hover {
  background-color: var(--button-background-clicked);
}

.button p,
a {
  font-size: 1.1rem;
  color: aliceblue;
  font-weight: 500;
  text-decoration: none;
}

.image-div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  aspect-ratio: 1/1;
}

img {
  width: 100%;
  height: 100%;
}

.alert{
position: absolute;
top: -7rem;
/* background-color: rgba(255, 255, 255, 0.171); */
background-color: aliceblue;
backdrop-filter: blur(10px);
border-radius: 1rem;
padding: 0.7rem;
}

.alert p{
  /* color: aliceblue; */
  color: var(--main-text-color);
}



/* 📱 Responsive: On mobile, make buttons full-width */
@media (max-width: 800px) {
}
</style>
