<script setup>
import NavBar from '@/components/NavBar.vue'
import LandingPage from '@/components/LandingPage.vue';
import FooterComponent from '@/components/FooterComponent.vue'

// Import all images from the folder
const modules = import.meta.glob('@/assets/partners/*', {
  eager: true,
  import: 'default'
})

// Convert to array
const imagesInPartners = Object.values(modules)

</script>

<template>

  <body>
    <NavBar />
    <!-- Section 4 of the Landing page -->
    <div class="page2">
      <h2 class="heading">Our Partners</h2>
      <div class="page-grouper">
        <!-- <div class="card" > -->
        <div class="image-div" v-for="(image, index) in imagesInPartners" :key="index">
          <img :src="image" alt="partner image" />
          <!-- </div> -->
          <p class="name"></p>
        </div>
      </div>
    </div>


    <FooterComponent />
  </body>
</template>

<style scoped>
body {
  width: 100%;
  /* padding-top: 4rem; */
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}


.page2 {
  /* min-height: 100dvh; */
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 5rem 0rem;
  padding-top: 7.5rem;
  background-image: linear-gradient(rgba(235, 247, 235, 1), rgba(235, 247, 235, 1));
}

.page-grouper {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  /* border: 2px solid blue; */
  /* height: 60dvh; */
}


.card {
  height: 4rem;
  border: 1px solid red;
}

.heading {
  color: var(--theme-color);
  border-bottom: 0.5px solid var(--theme-color);
  width: 90%;
  text-align: center;
}


.image-div {
  /* width: 100%; */
  width: 4.5rem;
  height: 4.5rem;
}

img {
  border-radius: 1rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.168);
}
</style>
