<script setup>
import { onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import gsap from 'gsap'

import image1 from '@/assets/Ug_space1.webp'
import image2 from '@/assets/Ug_space2.webp'
import image4 from '@/assets/Ug_space4.webp'
import image6 from '@/assets/Ug_space6.webp'
import image7 from '@/assets/Ug_space7.webp'
const images = [image1, image6, image2, image4, image7]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.hero-text .badge',      { y: 24, opacity: 0, duration: 0.6 })
    .from('.hero-heading',           { y: 40, opacity: 0, duration: 0.7 }, '-=0.3')
    .from('.hero-sub',               { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero-actions .btn-primary, .hero-actions .btn-outline',
                                     { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, '-=0.3')
    .from('.hero-trust .trust-item, .hero-trust .trust-divider',
                                     { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.2')
    .from('.hero-carousel',          { x: 14, opacity: 0, duration: 0.9, ease: 'power2.out' }, '-=0.7')
})
</script>

<template>
  <section class="hero">
    <div class="hero-inner">
      <!-- Text column -->
      <div class="hero-text">
        <span class="badge">
          <span class="dot"></span>
          Uganda's Land Marketing Platform
        </span>

        <h1 class="hero-heading">
          Find Verified Land.<br />
          <span class="heading-accent">Own It with Confidence.</span>
        </h1>

        <p class="hero-sub">
          Browse thousands of verified plots across Uganda — filtered by location, size, and budget. No guesswork, no middlemen.
        </p>

        <div class="hero-actions">
          <a
            href="https://play.google.com/store/apps/details?id=com.nuwesurvugspace.myapp"
            target="_blank"
            rel="noopener"
            class="btn-primary"
          >Explore Plots</a>
          <a href="#features" class="btn-outline">How it works</a>
        </div>

        <div class="hero-trust">
          <div class="trust-item">
            <strong>100K+</strong>
            <span>Plots listed</span>
          </div>
          <div class="trust-divider"></div>
          <div class="trust-item">
            <strong>Verified</strong>
            <span>Land titles</span>
          </div>
          <div class="trust-divider"></div>
          <div class="trust-item">
            <strong>5 Regions</strong>
            <span>Covered</span>
          </div>
        </div>
      </div>

      <!-- Carousel column -->
      <div class="hero-carousel">
        <Swiper
          :modules="[EffectCoverflow, A11y, Pagination, Autoplay]"
          effect="coverflow"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :autoplay="{ delay: 3200, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :coverflow-effect="{ rotate: 40, stretch: 0, depth: 90, modifier: 1, slideShadows: true }"
          class="swiper-wrap"
        >
          <SwiperSlide class="slide" v-for="(img, i) in images" :key="i">
            <img :src="img" alt="Land plot" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 4.25rem; /* navbar height */
  min-height: 100dvh;
  background: #fff;
  display: flex;
  align-items: center;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.85rem;
  background: var(--green-light);
  color: var(--green-dark);
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: 99px;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 0.02em;
  margin-bottom: 0.5rem;
}
.dot {
  width: 6px;
  height: 6px;
  background: var(--green);
  border-radius: 50%;
  flex-shrink: 0;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

/* Heading */
.hero-heading {
  font-family: 'Nunito', sans-serif;
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.15;
  margin-top: 0.75rem;
}
.heading-accent {
  color: var(--text-dark);
  position: relative;
  display: inline-block;
}
.heading-accent::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 3px;
  background: var(--green);
  border-radius: 99px;
}

/* Sub */
.hero-sub {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-mid);
  max-width: 520px;
  margin-top: 1rem;
}

/* Actions */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

/* Trust bar */
.hero-trust {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
.trust-item {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.trust-item strong {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark);
}
.trust-item span {
  font-size: 0.78rem;
  color: var(--text-light);
  font-family: 'DM Sans', sans-serif;
}
.trust-divider {
  width: 1px;
  height: 2rem;
  background: var(--border);
}

/* Carousel */
.hero-carousel {
  width: 100%;
  max-width: 480px;
}
.swiper-wrap {
  width: 100%;
  padding: 1.5rem 0 2.5rem;
}
.slide {
  width: clamp(200px, 70vw, 260px);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}
.slide img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  border-radius: 1rem;
}

:global(.swiper-pagination-bullet) {
  width: 6px; height: 6px;
  background: var(--border);
  opacity: 1;
}
:global(.swiper-pagination-bullet-active) {
  background: var(--green);
  width: 18px;
  border-radius: 99px;
  transition: width 0.3s ease;
}

@media (min-width: 900px) {
  .hero-inner {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    padding: 5rem 2rem 4rem;
  }
  .hero-text {
    flex: 1;
  }
  .hero-carousel {
    flex: 0 0 420px;
  }
}
</style>
