<script setup>
import AppdownloadComponent from './AppdownloadComponent.vue'

import app_image1 from '@/assets/app_image2.jpg'
</script>

<template>
  <div class="page">
    <div class="image-div">
      <img :src="app_image1" alt="" />
    </div>
    <div class="page-contents">
      <h1>Look Up Parcel Data at a click</h1>
      <p>
        Quickly reference Land Area, addresses, property lines, and more for over 100K UG parcels.
      </p>
      <AppdownloadComponent />
    </div>
  </div>
</template>

<style scoped>
/* Page 1 begins here */
.page {
  /* height: 100dvh; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 10dvh 5rem;
  background-image: linear-gradient(rgba(235, 247, 235, 1), rgba(235, 247, 235, 1));
  /* border: 3px solid red; */
}

.page-contents {
  flex: 1;
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 2rem;
  /* border: 2px solid greenyellow; */
}

h1 {
  font-size: 3.5rem;
  font-family: Montserrat, sans-serif;
}
.page-contents p {
  font-size: 1.5rem;
  font-family: Roboto, sans-serif;
}
.image-div {
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
  width: 50%;
  height: 70dvh;
  object-fit: cover;
  /* border: 2px solid greenyellow; */
}

.image-div img {
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.209);
  /* box-shadow: 0 0 15px rgb(255, 255, 255), 0 0 20px rgba(0, 0, 0, 0.209); */
}

@media (max-width: 767px){
  .page {
    padding-top: 10dvh;
    gap: 1rem;
    /* border: 1px solid red; */
  }
  
  .page-contents {
    gap: 1.5rem;
    padding: 4dvh 1rem;
    /* border: 1px solid red; */
  }

  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .page-contents p {
    font-size: 1.1rem;
  }

  .image-div {
    /* max-width: 320px; */
    height: 50dvh;
  }
}
</style>
