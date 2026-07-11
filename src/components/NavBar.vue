<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/Ug_space_final_boss2.svg'
import { useRouter, useRoute } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()
const route = useRoute()
const menuOn = ref(false)
const scrolled = ref(false)
const fontLoaded = ref(false)

const handleScroll = () => { scrolled.value = window.scrollY > 20 }
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.fonts.load('1em "Material Symbols Outlined"').then(() => { fontLoaded.value = true })

  gsap.from('.navbar', {
    y: -60,
    opacity: 0,
    duration: 0.7,
    ease: 'power3.out',
  })
  gsap.from('.logo-div', {
    x: -10,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    ease: 'power2.out',
  })
  gsap.from('.nav-links li, .nav-cta', {
    y: -12,
    opacity: 0,
    duration: 0.5,
    delay: 0.4,
    stagger: 0.08,
    ease: 'power2.out',
  })
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const goTo = (path) => {
  menuOn.value = false
  router.push(path)
}
const isActive = (path) => route.path === path
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="nav-inner">
      <!-- Logo -->
      <div class="logo-div" @click="goTo('/')">
        <img :src="logo" alt="UG Space logo" class="logo-img" />
        <span class="logo-name">UG Space</span>
      </div>

      <!-- Desktop links -->
      <ul class="nav-links">
        <li @click="goTo('/')" :class="{ active: isActive('/') }">Home</li>
        <li @click="goTo('/about')" :class="{ active: isActive('/about') }">About</li>
        <li @click="goTo('/contactus')" :class="{ active: isActive('/contactus') }">Contact</li>
      </ul>

      <!-- CTA -->
      <a
        href="https://play.google.com/store/apps/details?id=com.nuwesurvugspace.myapp"
        target="_blank"
        rel="noopener"
        class="nav-cta btn-primary"
      >
        <span v-if="fontLoaded" class="material-symbols-outlined" style="font-size:1rem">download</span>
        Get the App
      </a>

      <!-- Hamburger -->
      <button class="hamburger" @click="menuOn = !menuOn" aria-label="Toggle menu">
        <transition name="fade-scale" mode="out-in">
          <span v-if="fontLoaded && !menuOn" key="open" class="material-symbols-outlined">menu</span>
          <span v-else-if="fontLoaded && menuOn" key="close" class="material-symbols-outlined">close</span>
        </transition>
      </button>
    </div>
  </nav>

  <!-- Mobile drawer -->
  <div class="mobile-menu" :class="{ open: menuOn }">
    <ul>
      <li @click="goTo('/')">Home</li>
      <li @click="goTo('/about')">About</li>
      <li @click="goTo('/contactus')">Contact</li>
    </ul>
    <a
      href="https://play.google.com/store/apps/details?id=com.nuwesurvugspace.myapp"
      target="_blank"
      rel="noopener"
      class="btn-primary mobile-cta"
    >Get the App</a>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.navbar.scrolled {
  border-color: var(--border);
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 4.25rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Logo */
.logo-div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  flex-shrink: 0;
}
.logo-img {
  height: 2rem;
  width: 2rem;
  object-fit: contain;
}
.logo-name {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text-dark);
  letter-spacing: -0.01em;
}

/* Desktop nav links */
.nav-links {
  display: none;
  list-style: none;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}
.nav-links li {
  padding: 0.4rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-mid);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: color 0.18s ease, background 0.18s ease;
  position: relative;
}
.nav-links li:hover {
  color: var(--text-dark);
  background: var(--bg-light);
}
.nav-links li.active {
  color: var(--text-dark);
  font-weight: 600;
}
.nav-links li.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 2px;
  background: var(--green);
  border-radius: 99px;
}

/* Nav CTA */
.nav-cta {
  display: none;
  padding: 0.55rem 1.2rem;
  font-size: 0.88rem;
  flex-shrink: 0;
}

/* Hamburger */
.hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: 0.4rem;
  transition: background 0.15s ease;
}
.hamburger:hover {
  background: var(--bg-light);
}
.hamburger .material-symbols-outlined {
  font-size: 1.6rem;
  color: var(--text-dark);
}

/* Mobile menu */
.mobile-menu {
  position: fixed;
  top: 4.25rem;
  left: 0;
  width: 100%;
  height: calc(100dvh - 4.25rem);
  background: #fff;
  z-index: 99;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(-110%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.25s ease;
  pointer-events: none;
}
.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}
.mobile-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.mobile-menu li {
  padding: 1rem 0.75rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-dark);
  cursor: pointer;
  border-bottom: 1px solid var(--border-light);
  border-radius: 0.4rem;
  transition: background 0.15s ease;
}
.mobile-menu li:hover {
  background: var(--bg-light);
}
.mobile-cta {
  margin-top: 1.5rem;
  justify-content: center;
}

/* Animations */
.fade-scale-enter-active,
.fade-scale-leave-active { transition: all 0.18s ease; }
.fade-scale-enter-from,
.fade-scale-leave-to { opacity: 0; transform: scale(0.8); }

@media (min-width: 768px) {
  .nav-links { display: flex; }
  .nav-cta { display: inline-flex; }
  .hamburger { display: none; }
  .mobile-menu { display: none; }
}
</style>
