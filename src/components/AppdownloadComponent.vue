<script setup>
import googlePlay from '@/assets/gplay.png'
import applePlay from '@/assets/aplay.png'
import { ref } from 'vue'

const showAlert = ref(false)

const triggerAlert = () => {
  showAlert.value = true
  setTimeout(() => { showAlert.value = false }, 3000)
}
</script>

<template>
  <div class="download-group">
    <a
      href="https://play.google.com/store/apps/details?id=com.nuwesurvugspace.myapp&pcampaignid=web_share"
      target="_blank"
      rel="noopener"
      class="store-btn"
    >
      <img :src="googlePlay" alt="Google Play" class="store-icon" />
      <div class="store-text">
        <span class="store-sub">Get it on</span>
        <span class="store-name">Google Play</span>
      </div>
    </a>

    <button class="store-btn" @click="triggerAlert">
      <img :src="applePlay" alt="App Store" class="store-icon" />
      <div class="store-text">
        <span class="store-sub">Download on the</span>
        <span class="store-name">App Store</span>
      </div>
    </button>

    <transition name="pop">
      <div class="alert-toast" v-if="showAlert">
        <span class="material-symbols-outlined alert-icon">info</span>
        <p>Not yet on the App Store — try Google Play!</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.download-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  position: relative;
  align-items: center;
}

.store-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem 1.1rem;
  background: var(--green);
  border: none;
  border-radius: 0.7rem;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}
.store-btn:hover {
  background: var(--green-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(68, 195, 46, 0.28);
}
.store-btn:active {
  transform: translateY(0);
  box-shadow: none;
}

.store-icon {
  width: 1.4rem;
  height: 1.4rem;
  object-fit: contain;
  flex-shrink: 0;
}

.store-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.1;
}
.store-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.62rem;
  color: rgba(255,255,255,0.75);
  font-weight: 400;
}
.store-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.92rem;
  color: #fff;
  font-weight: 700;
}

/* Alert toast */
.alert-toast {
  position: absolute;
  top: calc(-100% - 1.75rem);
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 0.65rem 1rem;
  box-shadow: 0 6px 24px rgba(0,0,0,0.1);
  white-space: nowrap;
}
.alert-icon {
  font-size: 1rem;
  color: var(--green);
  flex-shrink: 0;
}
.alert-toast p {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--text-mid);
}

/* Pop animation */
.pop-enter-active { animation: pop-in 0.25s ease; }
.pop-leave-active { animation: pop-in 0.2s ease reverse; }
@keyframes pop-in {
  from { opacity: 0; transform: scale(0.9) translateY(6px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
