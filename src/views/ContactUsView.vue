<script setup>
import NavBar from '@/components/NavBar.vue'
import LandingPage from '@/components/LandingPage.vue';
import FooterComponent from '@/components/FooterComponent.vue'

import image1 from '@/assets/Ug_space1.jpg'
import image2 from '@/assets/Ug_space2.jpg'
import image3 from '@/assets/Ug_space3.jpg'
import image4 from '@/assets/Ug_space4.jpg'
import image5 from '@/assets/Ug_space5.jpg'
import image6 from '@/assets/Ug_space6.jpg'
import image7 from '@/assets/Ug_space7.jpg'
import image8 from '@/assets/Ug_space8.jpg'
import video1 from '@/assets/Ug_space_filter.mp4'
</script>

<template>
  <NavBar />

  <body>
    <!-- Section 4 of the Landing page -->
    <div class="page2">
      <div class="page-grouper">
        <div class="image-div">
          <img :src="image5" alt="" />
        </div>
          <h2>Reach out in App.</h2>
      </div>
    </div>


    <FooterComponent />
  </body>
</template>

<style scoped>
body {
  width: 100%;
  /* padding-top: 4rem; */
}


.page2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0rem;
  padding-top: 8rem;
  background-image: linear-gradient(rgba(235, 247, 235, 1), rgba(235, 247, 235, 1));
}

.page-grouper {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  /* border: 2px solid blue; */
  height: 60dvh;
}


h2 {
  color: var(--theme-color);
}

.image-div {
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 85%; */
  height: 100%;
  /* border: 2px solid rgb(255, 71, 47); */
}

.image-div img {
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.168);
  /* box-shadow: 0 0 15px rgb(255, 255, 255), 0 0 20px rgba(0, 0, 0, 0.209); */
}




</style>
