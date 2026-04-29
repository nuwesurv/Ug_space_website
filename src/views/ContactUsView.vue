<script setup>
import NavBar from '@/components/NavBar.vue'
import LandingPage from '@/components/LandingPage.vue';
import FooterComponent from '@/components/FooterComponent.vue'

import image5 from '@/assets/Ug_space5.webp'
</script>

<template>
  <NavBar />

  <body>
    <!-- Section 4 of the Landing page -->
    <div class="page2">
      <div class="fake-navbar"></div>
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
  height: 90dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  background-image: linear-gradient(rgba(235, 247, 235, 1), rgba(235, 247, 235, 1));
}

.fake-navbar{
  height: 5rem;
}

.page-grouper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  /* border: 2px solid blue; */
  /* height: 60dvh; */
  height: 90%;
}


h2 {
  color: var(--theme-color);
}

.image-div {
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 85%; */
  height: 80%;
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
