<script setup>
import AppdownloadComponent from './AppdownloadComponent.vue'

import image1 from '@/assets/Ug_space1.webp'
import image2 from '@/assets/Ug_space2.webp'
import image3 from '@/assets/Ug_space3.webp'
import image4 from '@/assets/Ug_space4.webp'
import image6 from '@/assets/Ug_space6.webp'
import image7 from '@/assets/Ug_space7.webp'
const images = [image1, image6, image2, image4, image7]

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, EffectCoverflow, Pagination } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'


</script>

<template>
  <div class="page">
    <div class="page-contents">
      <div class="text-wrapper">
        <h1>Take Ug space anywhere</h1>
        <p>Quickly access and share property data no matter where you are. Get the <strong style="color: var(--theme-color);">App</strong> now!</p>
      </div>

      <AppdownloadComponent />

      <div class="imagegrid">
        <Swiper
          :modules="[EffectCoverflow, A11y, Pagination]"
          effect="coverflow"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :slides-offset-before="0"
          :initial-slide="2"
          :slides-offset-after="0"
          :pagination="{ clickable: true }"
          :coverflow-effect="{
            rotate: 45,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }"
          class="parcelCardsWrapper"
        >
          <SwiperSlide
            class="parcelCard"
            v-for="(img, id) in images"
            :key="id"
          >
            <div class="card-img-div">
              <img :src="img" alt="" loading="lazy" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* === Page layout === */
.page {
  padding-top: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdfffb;
}

.page-contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5.5rem;
  width: 100%;
  /* border: 1px solid red; */
}

/* === Text wrapper === */
.text-wrapper {
  text-align: center;
  word-wrap: break-word;
}

.text-wrapper h1 {
  color: var(--theme-color);
}

p {
  margin-top: 1rem;
  color: var(--main-text-color);
}

/* === Swiper Styling === */
.imagegrid {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.parcelCardsWrapper {
  width: 100%;
  padding: 2rem 0;
  overflow: hidden;
}

.parcelCard {
  /* background: white; */
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  border: 0.5px solid rgb(240, 240, 240);
  max-width: 100%;
}

.card-img-div {
  width: 100%;
  display: flex;
    flex-direction: column;
    align-items: end;
}

.card-img-div img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); */
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide-active {
  transform: scale(1.05);
}

:global(.swiper-pagination) {
  margin-top: 1rem;
  position: relative;
}

:global(.swiper-pagination-bullet) {
  width: 0.4rem;
  height: 0.4rem;
  background: #bdbdbd;
  opacity: 1;
}

:global(.swiper-pagination-bullet-active) {
  background: var(--theme-color);
}




/* 📱 Mobile */
@media (max-width: 800px) {
  .page {
    padding-top: 10dvh;
  }

  .page-contents {
    gap: 1.5rem;
    padding: 6dvh 1rem;
  }

  .text-wrapper h1 {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .text-wrapper p {
    font-size: 1.1rem;
  }

  .parcelCard {
    width: clamp(180px, 80vw, 240px);
  }
}

/* === GLOBAL FIX FOR HORIZONTAL SCROLL === */
:global(html),
:global(body) {
  overflow-x: hidden;
}
</style>
