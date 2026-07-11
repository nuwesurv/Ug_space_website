<script setup>
import AppdownloadComponent from './AppdownloadComponent.vue'
import logo from '@/assets/Ug_space_final_boss2.svg'
import { useRouter } from 'vue-router'

const router = useRouter()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <!-- Brand column -->
      <div class="footer-brand">
        <div class="footer-logo" @click="router.push('/')">
          <img :src="logo" alt="UG Space" />
          <span>UG Space</span>
        </div>
        <p class="footer-tagline">
          Uganda's trusted platform for discovering, verifying, and purchasing land.
        </p>
        <AppdownloadComponent />
      </div>

      <!-- Nav columns -->
      <div class="footer-links-group">
        <div class="footer-col">
          <h4>Platform</h4>
          <ul>
            <li @click="router.push('/')">Home</li>
            <li @click="router.push('/about')">About Us</li>
            <li @click="router.push('/contactus')">Contact</li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <span class="material-symbols-outlined fc-icon">mail</span>
              ugspaceestates@gmail.com
            </li>
            <li>
              <span class="material-symbols-outlined fc-icon">schedule</span>
              Mon – Sat, 8am – 5pm EAT
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ year }} UG Space. All rights reserved.</p>
      <p class="footer-legal">Land marketing platform for Uganda</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0D1F0A;
  padding: 4rem 1.5rem 1.5rem;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* Brand */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 360px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.footer-logo img {
  height: 2rem;
  width: 2rem;
  object-fit: contain;
}
.footer-logo span {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: #fff;
}

.footer-tagline {
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.5);
  font-family: 'DM Sans', sans-serif;
}

/* Links */
.footer-links-group {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 160px;
}
.footer-col h4 {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}
.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.footer-col li {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.15s ease;
}
.footer-col li:hover {
  color: #fff;
}

.fc-icon {
  font-size: 0.95rem;
  color: var(--green);
  flex-shrink: 0;
}

/* Bottom bar */
.footer-bottom {
  max-width: 1100px;
  margin: 2.5rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.footer-bottom p {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.3);
}
.footer-legal {
  font-size: 0.75rem;
}

@media (min-width: 800px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
