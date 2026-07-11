<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import LandingPage from '@/components/LandingPage.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import AppdownloadComponent from '@/components/AppdownloadComponent.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePlotsStore } from '@/stores/plots'
gsap.registerPlugin(ScrollTrigger)

const plots = usePlotsStore()

import image5 from '@/assets/Ug_space5.webp'
import image6 from '@/assets/Ug_space6.webp'
import video1 from '@/assets/Ug_space_filter.mp4'

onMounted(() => {
  plots.fetchPlotCount()
  // Each feature section: media slides in from the outside, text from the other side
  document.querySelectorAll('.feature-inner').forEach((section) => {
    const media = section.querySelector('.feature-media')
    const text  = section.querySelector('.feature-text')
    const isReversed = section.classList.contains('reverse')

    gsap.from(media, {
      x: isReversed ? 16 : -16,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from(text.children, {
      y: 36,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })
  })

  // App section
  gsap.from('.app-inner > *', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.app-section',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
})

onUnmounted(() => ScrollTrigger.getAll().forEach(t => t.kill()))
</script>

<template>
  <NavBar />

  <main>
    <!-- ── Hero ── -->
    <LandingPage />

    <!-- ── Feature 1: Parcel Info ── -->
    <section id="features" class="feature-section">
      <div class="feature-inner reverse">
        <div class="feature-media">
          <img :src="image6" alt="Parcel information lookup" />
        </div>
        <div class="feature-text">
          <span class="section-label">Land Data</span>
          <h2>Every Plot Detail, Instantly.</h2>
          <p>
            Look up land area, boundaries, addresses, and ownership details for over
            <strong>{{ plots.plotCount !== null ? plots.plotCount.toLocaleString() : '100,000+' }} parcels</strong> across Uganda — all in one tap.
          </p>
          <ul class="feature-list">
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              Verified land titles
            </li>
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              Accurate boundary data
            </li>
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              Plot size &amp; area measurements
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── Feature 2: Smart Filter ── -->
    <section class="feature-section alt">
      <div class="feature-inner">
        <div class="feature-media">
          <video :src="video1" loop autoplay muted playsinline></video>
        </div>
        <div class="feature-text">
          <span class="section-label">Smart Search</span>
          <h2>Filter. Compare. Decide.</h2>
          <p>
            Search thousands of verified plots in seconds. Filter by region, price, and
            size — then compare side-by-side to find land that fits your budget.
          </p>
          <ul class="feature-list">
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              Real-time search results
            </li>
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              Price &amp; size filters
            </li>
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              Multiple regions covered
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── Feature 3: Site Visit ── -->
    <section class="feature-section">
      <div class="feature-inner reverse">
        <div class="feature-media">
          <img :src="image5" alt="Site visit booking" />
        </div>
        <div class="feature-text">
          <span class="section-label">Site Visits</span>
          <h2>Book a Visit. We Handle the Rest.</h2>
          <p>
            Schedule a guided site visit in minutes. Our team confirms, organises, and escorts you — so you can focus on making the right decision.
          </p>
          <ul class="feature-list">
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              Same-day booking available
            </li>
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              Guided on-site inspection
            </li>
            <li>
              <span class="material-symbols-outlined icon-green">check_circle</span>
              UG Space inspection report
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── App Download ── -->
    <section class="app-section">
      <div class="app-inner">
        <span class="section-label light">Mobile App</span>
        <h2>Take UG Space Everywhere.</h2>
        <p>Browse land, get alerts on new plots, and book visits — all from your phone.</p>
        <AppdownloadComponent />
      </div>
    </section>
  </main>

  <FooterComponent />
</template>

<style scoped>
main { width: 100%; }

/* ── Feature sections ── */
.feature-section {
  padding: 5rem 1.5rem;
  background: #fff;
}
.feature-section.alt {
  background: var(--bg-light);
}

.feature-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

/* Media */
.feature-media {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 3 / 4;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  flex-shrink: 0;
}
.feature-media:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.13);
}
.feature-media img,
.feature-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Text */
.feature-text {
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-label {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green);
}
.section-label.light {
  color: rgba(255,255,255,0.7);
}

.feature-text h2 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  color: var(--text-dark);
  line-height: 1.2;
}

.feature-text p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-mid);
}

.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 0.5rem;
}
.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-mid);
  font-family: 'DM Sans', sans-serif;
}
.icon-green {
  font-size: 1.1rem;
  color: var(--green);
  flex-shrink: 0;
}

/* ── App section ── */
.app-section {
  background: #0D1F0A;
  padding: 5rem 1.5rem;
}
.app-inner {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}
.app-inner h2 {
  color: #fff;
  font-size: clamp(1.7rem, 4vw, 2.3rem);
}
.app-inner p {
  color: rgba(255,255,255,0.65);
  font-size: 1rem;
  line-height: 1.6;
}
.app-inner :deep(.button-grouper) {
  margin-top: 0.75rem;
}

/* ── Desktop layout ── */
@media (min-width: 800px) {
  .feature-inner {
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }
  .feature-inner.reverse {
    flex-direction: row-reverse;
  }
  .feature-media {
    flex: 0 0 300px;
    max-width: 300px;
  }
  .feature-text {
    flex: 1;
  }
}
</style>
