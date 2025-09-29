<script setup>
import AppdownloadComponent from './AppdownloadComponent.vue'

import app_image1 from '@/assets/app_image2.jpg'
</script>

<template>
  <div class="page">
    <div class="contacts">
      <h3>Contact Information</h3>
      <p>Location: Kampala, Ntinda opposite Capital Shoppers</p>
      <p>Business Hours: 8AM to 5PM EAT</p>
      <p>Email: ugspace@gmail.com</p>
    </div>
    <div class="footer-contents">
      <h3>Download the Mobile App</h3>
      <AppdownloadComponent />
      <div class="footer-links">
        <p>Services</p>
        <p>About us</p>
        <p>Contact us</p>
      </div>
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
  background-image: linear-gradient(to bottom, rgba(30, 36, 41, 1), rgba(1, 79, 54, 1)) !important;
  /* border: 3px solid red; */
}

.page p,
.page h3,
.page h2 {
  color: white;
}

.contacts {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;
  /* flex: 1; */
  width: 50%;
  height: 70dvh;
  object-fit: cover;
  /* border: 2px solid greenyellow; */
}

h3 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.4rem;
  font-weight: 500;
  font-family: Roboto, sans-serif;
}

.footer-contents {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 2rem;
  /* border: 2px solid greenyellow; */
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-links p {
  font-size: 1.3rem;
}

/* 📱 Responsive: On mobile, make buttons full-width */
@media (max-width: 768px) {
  .page {
    padding: 10dvh 1.2rem;
    /* border: 3px solid red; */
    /* gap: 2rem; */
    gap: 3rem;
  }
  
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 1.5rem;
    /* flex: 1; */
    width: 100%;
    padding: 5dvh 0;
    height: fit-content;
    /* border: 1px solid red; */
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
    font-family: Roboto, sans-serif;
  }

  .footer-links p {
    font-size: 1rem;
  }
}
</style>
