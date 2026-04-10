<script setup>
import AppdownloadComponent from './AppdownloadComponent.vue'

import app_image1 from '@/assets/app_image1.jpg'
</script>

<template>
  <div class="page">
    <div class="page-grouper">
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
  </div>
</template>

<style scoped>
/* Page 1 begins here */
.page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0rem;
  background-image: linear-gradient(rgba(235, 247, 235, 1), rgba(235, 247, 235, 1));
  /* border: 3px solid red; */
}

.page-grouper {
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  /* border: 2px solid greenyellow; */
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
  width: 60%;
  height: 70dvh;
  object-fit: cover;
  /* border: 2px solid greenyellow; */
}

.image-div img {
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.209);
  /* box-shadow: 0 0 15px rgb(255, 255, 255), 0 0 20px rgba(0, 0, 0, 0.209); */
}

@media (min-width: 800px) {
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
