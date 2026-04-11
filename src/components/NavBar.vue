<script setup>
import { ref, onMounted } from 'vue'
import logo from '@/assets/Ug_space_final_boss2.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuOn = ref(false)
const fontLoaded = ref(false)

onMounted(() => {
  document.fonts.load('1em "Material Symbols Outlined"').then(() => {
    fontLoaded.value = true
  })
})

// navigation helper
const goTo = (path) => {
  menuOn.value = false
  router.push(path)
}
</script>

<template>
  <div class="navbar">
    <!-- LOGO -->
    <div class="logo-div" @click="goTo('/')">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
      <h2>Ug space</h2>
    </div>

    <!-- DESKTOP MENU -->
    <div class="menu-card1">
      <div class="menu-grouper1">
        <div class="text-div1" @click="goTo('/')">Home</div>
        <div class="text-div1">Services</div>
        <div class="text-div1">About us</div>
        <div class="text-div1">Contact us</div>
      </div>
    </div>

    <!-- HAMBURGER -->
    <div class="menu-icon" v-if="fontLoaded" @click="menuOn = !menuOn">
      <transition name="fade-scale" mode="out-in">
        <span v-if="!menuOn" class="material-symbols-outlined">menu</span>
        <span v-else class="material-symbols-outlined">close</span>
      </transition>
    </div>
  </div>

  <!-- MOBILE MENU -->
  <div class="menu-card" :class="{ active: menuOn }">
    <div class="menu-grouper">
      <div class="text-div" @click="goTo('/')">Home</div>
      <div class="text-div">Services</div>
      <div class="text-div" @click="goTo('/about')">About us</div>
      <div class="text-div">Contact us</div>
    </div>
  </div>
</template>

<style scoped>
/* NAVBAR */
.navbar {
  position: fixed;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 20;
  background-color: white;
}

/* LOGO */
.logo-div {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 0.5rem;
  cursor: pointer;
  height: 100%;
}

.logo-div h2 {
  font-size: 1.3rem;
  color: rgb(35, 124, 7);
}

.logo {
  height: 60%;
  aspect-ratio: 1/1;
}

.logo img {
  width: 100%;
  height: 100%;
}

/* HAMBURGER */
.menu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  cursor: pointer;
}

span {
  font-size: 1.8rem;
  color: var(--theme-color);
}

/* MOBILE MENU */
.menu-card {
  position: fixed;
  top: -100dvh;
  width: 100%;
  height: 100dvh;
  padding: 5.5rem 0.8rem;
  background-color: #fdfffb;
  z-index: 10;
  transition: all 0.3s ease;
}

.menu-card.active {
  top: 0;
}

.text-div {
  height: 2.8rem;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid var(--faint-text-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
}

.text-div:active {
  background-color: #ecffda;
}

/* DESKTOP MENU (hidden by default) */
.menu-card1 {
  display: none;
}

/* ========================= */
/* DESKTOP STYLES */
/* ========================= */
@media (min-width: 800px) {

  /* show desktop nav */
  .menu-card1 {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  .menu-grouper1 {
    display: flex;
    gap: 2rem;
    margin-right: 1.5rem;
  }

  .text-div1 {
    cursor: pointer;
    position: relative;
    font-size: 1rem;
  }

  /* nice hover underline */
  .text-div1::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--theme-color);
    transition: 0.3s;
  }

  .text-div1:hover::after {
    width: 100%;
  }

  /* hide mobile elements */
  .menu-icon {
    display: none;
  }

  .menu-card {
    display: none;
  }
}

/* ANIMATION */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>