<script setup>
import AppdownloadComponent from './AppdownloadComponent.vue'
import { ref, onMounted } from 'vue'
import logo from '@/assets/Ug_space_final_boss2.svg'
import { useRouter } from 'vue-router'

const router = useRouter()


</script>

<template>
  <div class="page-footer">
    <div class="page-footer-grouper">
      <h3>Contact Information</h3>
      <div class="contacts">
        <!-- <p>Location: Kampala, Ntinda opposite Capital Shoppers</p> -->
        <p>Business Hours: 8am to 5pm EAT</p>
        <p>Email: ugspaceestates@gmail.com</p>
        <p @click="router.push('/contactus')" style="color: var(--theme-color); text-decoration: underline; text-underline-offset: 0.3rem;">Or you can reachout in App</p>
      </div>
      <div class="footer-contents">
        <h3>Download the Mobile App</h3>
        <AppdownloadComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page-footer 1 begins here */
.page-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  padding: 6rem 0rem;
  background-image: linear-gradient(to bottom, rgba(30, 36, 41, 1), rgba(1, 79, 54, 1)) !important;
  /* border: 1px solid red; */
}

.page-footer-grouper {
  width: 85%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 1.5rem;
  /* border: 2px solid greenyellow; */
}

.page-footer p,
.page-footer h3,
.page-footer h2 {
  color: aliceblue;
}

.contacts {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  margin-left: 1rem;
  /* border: 2px solid greenyellow; */
}

h3 {
  font-size: 1.2rem;
}

p {
  color: var(--main-text-color);;
  font-size: 1rem;
  font-weight: 500;
  font-family: Roboto, sans-serif;
}

.footer-contents {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 1rem;
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
  font-size: 1rem;
}

/* 📱 Responsive: On mobile, make buttons full-width */
@media (min-width: 800px) {
  .page-footer{
    height: 50dvh;
    padding: 0;
  }
  .page-footer-grouper{
    flex-direction: row;
  }
}
</style>
