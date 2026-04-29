<script setup>
import NavBar from '@/components/NavBar.vue'
import LandingPage from '@/components/LandingPage.vue';
import FooterComponent from '@/components/FooterComponent.vue'

import image5 from '@/assets/Ug_space5.webp'
import image6 from '@/assets/Ug_space6.webp'
import video1 from '@/assets/Ug_space_filter.mp4'
</script>

<template>
  <NavBar />

  <body>
    <!-- Section 1 of the Landing page -->
    <LandingPage />

    <!-- Section 2 of the Landing page -->
    <div class="page2">
      <div class="page-grouper">
        <div class="image-div">
          <img :src="image6" alt="" />
        </div>
        <div class="page-contents">
          <h1>Look Up Parcel Info at a click</h1>
          <p>
            Quickly reference Land Area, addresses, property boundaries, and more for 100K+ UG parcels.
          </p>
          <!-- <AppdownloadComponent /> -->
        </div>
      </div>
    </div>

    <!-- Section 3 of the Landing page -->
    <div class="page">
      <div class="page-grouper">
        <!-- <div class="image-div">
          <img :src="image8" alt="" />
        </div> -->
        <div class="image-div">
          <video :src="video1" loop controls playsinline autoplay></video>
        </div>
        <div class="page-contents">
          <h1>Find the Right Land</h1>
          <p>
            <!-- Quickly identify affordable land using our fast realtime filter search for 100K+ plots of Land. -->
            Search thousands of verified plots in seconds. Compare prices, filter by your needs, and confidently choose
            land that <strong style="color: var(--theme-color);">fits your budget</strong>
          </p>
          <!-- <AppdownloadComponent /> -->
        </div>
      </div>
    </div>

    <!-- Section 4 of the Landing page -->
    <div class="page2">
      <div class="page-grouper">
        <div class="image-div">
          <img :src="image5" alt="" />
        </div>
        <div class="page-contents">
          <h1>Book Smarter. Visit Faster.</h1>
          <p>
            Book a site visit in minutes and let our team handle the rest. We organize, confirm, and guide you every
            step of the way so you can focus on making the <strong style="color: var(--theme-color);">right land
              purchase decision</strong>.
          </p>
          <!-- <AppdownloadComponent /> -->
        </div>
      </div>
    </div>


  </body>
  <FooterComponent />
</template>

<style scoped>
body {
  width: 100%;
}


.page,
.page2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0rem;
  background-color: #fdfffb;
}

.page2 {
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
  height: 100dvh;
}

.page-contents {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 1.5rem;
  /* border: 2px solid greenyellow; */
}

h1 {
  line-height: 1.2;
  color: var(--theme-color);
}

p {
  font-size: 1.1rem;
  line-height: 1.5;
  color: var(--main-text-color);
}

.image-div {
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  width: 85%;
  /* height: 70%; */
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

video {
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.168);
}

@media (min-width: 800px) {
  .page,
  .page2 {
    height: 80dvh;
  }

  .page-grouper {
    display: flex;
    flex-direction: row;
    height: 80dvh;
    width: 60%;
    gap: 2rem;
  }

  .image-div {
    width: 40%;
    aspect-ratio: 1/2;
  }

  .page-contents {
    width: 40%;
    /* border: 1px solid red; */
  }

  h1{
    font-size: 1.6rem;
  }

  p{
    font-size: 1rem;
  }

}
</style>
