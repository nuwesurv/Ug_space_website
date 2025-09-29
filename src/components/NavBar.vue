<script setup>
import { ref, onMounted } from 'vue'
import logo from '@/assets/Ug_space_final_boss2.svg'

const menuOn = ref(false)

const fontLoaded = ref(false)
onMounted(() => {
  // Teleza fallback fonts icons.
  document.fonts.load('1em "Material Symbols Outlined"').then(() => {
    fontLoaded.value = true
  })
})
</script>

<template>
  <div class="navbar">
    <div class="logo-div">
      <div class="logo">
        <img :src="logo" alt="not found" />
      </div>
      <h2>Ug space</h2>
    </div>
    <div class="navbar-grouper">
      <p>Home</p>
      <p>Services</p>
      <p>About us</p>
      <p>Contact us</p>
    </div>
    <div class="menu-icon" v-if="fontLoaded" @click="menuOn = !menuOn">
      <transition name="fade-scale" mode="out-in">
        <span v-if="!menuOn" class="material-symbols-outlined"> menu </span>
        <span v-else class="material-symbols-outlined"> close </span>
      </transition>
    </div>
  </div>
  <transition name="fade-scale" mode="out-in">
    <div class="menu-card" v-if="menuOn">
      <div class="menu-grouper">
        <div class="text-div">
          <p>Home</p>
        </div>
        <div class="text-div">
          <p>Services</p>
        </div>
        <div class="text-div">
          <p>About us</p>
        </div>
        <div class="text-div">
          <p>Contact us</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 10dvh;
  display: flex;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.031);
  padding: 0.5rem 2rem;
  z-index: 20;
  background-color: white;
  /* border: 1px solid red; */
}

.logo-div {
  display: flex;
  align-items: center;
  flex: 1;
}

.logo-div h2 {
  font-size: 2rem;
  color: rgb(35, 124, 7);
}

.logo {
  height: 90%;
  aspect-ratio: 1/1;
  object-fit: contain;
  /* border: 1px solid red; */
}

.logo img {
  width: 100%;
  height: 100%;
}

.navbar-grouper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
}

.navbar p {
  font-size: 1.3rem;
  font-family: Roboto, sans-serif;
}

.menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  font-size: 1.6rem;
  color: var(--main-text-color);
}

/* ✨ Transition styles */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.25s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(10deg);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0);
}

/* 📱 Responsive: On mobile, make buttons full-width */
@media (max-width: 768px) {
  .navbar {
    padding: 0.5rem 0.7rem;
    /* border: 1px solid red; */
  }

  .menu-card {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    padding-top: 12dvh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    /* border: 1px solid rgb(51, 255, 0); */
    z-index: 9;
    background-color: #fdfffb;
    overflow: hidden;
  }
  
  .menu-grouper{
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    /* border: 1px solid rgb(32, 138, 6); */
  }
.text-div{
  height: 5dvh;
  border-bottom: 0.1px solid var(--faint-text-color);
  margin-bottom: 0.5rem;
}

  .text-div p{
    font-size: 1.1rem;
  }

  .logo-div h2 {
    font-size: 1.4rem;
  }

  .logo {
    height: 65%;
    /* border: 1px solid red; */
  }

  .navbar-grouper {
    display: none;
  }
}

@media (min-width: 769px) {

  .menu-icon,
  .menu-card {
    display: none;
  }
}
</style>
