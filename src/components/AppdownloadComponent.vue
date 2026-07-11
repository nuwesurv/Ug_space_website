<script setup>
import googlePlay from '@/assets/gplay.png'
import applePlay from '@/assets/aplay.png'
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

    <a
      href="https://apps.apple.com/ug/app/ug-space/id6780949664"
      target="_blank"
      rel="noopener"
      class="store-btn"
    >
      <img :src="applePlay" alt="App Store" class="store-icon" />
      <div class="store-text">
        <span class="store-sub">Download on the</span>
        <span class="store-name">App Store</span>
      </div>
    </a>
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

</style>
