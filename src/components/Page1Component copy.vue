<script setup>
import AppdownloadComponent from './AppdownloadComponent.vue'
import app_image1 from '@/assets/app_image1.jpg'
</script>

<template>
  <div class="page">
    <div class="page-contents">
      <h1>Take Ug space anywhere</h1>
      <p>Quickly access and share property data no matter where you roam. Get the app now!</p>
      <AppdownloadComponent />
      <div class="image-div">
        <img :src="app_image1" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page 1 begins here */
.page {
  /* height: 100dvh; */
  /* border: 1px solid red; */
  padding-top: 12dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdfffb;
}

.page-contents {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding: 10dvh 0;
  /* border: 2px solid greenyellow; */
  /* margin-top: 10dvh; */
  /* height: 120dvh; */
}

h1 {
  font-size: 6rem;
  font-family: Montserrat, sans-serif;
}

.page-contents p {
  font-size: 1.5rem;
  font-family: Roboto, sans-serif;
}

.image-div {
  /* flex: 1; */
  height: 70dvh;
  object-fit: cover;

  /* border: 2px solid greenyellow; */
}

.image-div img {
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.209);
}


/*  Mobile (480px - 767px) */
@media (max-width: 767px) {
  .page {
    padding-top: 10dvh;
  }

  .page-contents {
    gap: 1.5rem;
    padding: 6dvh 1rem;
  }

  h1 {
    font-size: 2rem;
    letter-spacing: 0.02rem;
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
