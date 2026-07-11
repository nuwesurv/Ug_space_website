<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const copied = ref(false)
const copyEmail = () => {
  navigator.clipboard.writeText('ugspaceestates@gmail.com')
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}

const channels = [
  {
    icon: 'smartphone',
    title: 'In the App',
    body: 'The fastest way to reach us. Open UG Space, go to Contact, and send us a message directly.',
    action: 'Download the App',
    link: 'https://play.google.com/store/apps/details?id=com.nuwesurvugspace.myapp',
  },
  {
    icon: 'mail',
    title: 'Email Us',
    body: 'For inquiries, partnerships, or support — email us and we\'ll get back to you within one business day.',
    action: 'ugspaceestates@gmail.com',
    link: 'mailto:ugspaceestates@gmail.com',
  },
  {
    icon: 'schedule',
    title: 'Business Hours',
    body: 'Our team is available Monday to Saturday, 8:00 AM – 5:00 PM East Africa Time.',
    action: null,
    link: null,
  },
]

onMounted(() => {
  // Hero entrance
  gsap.from('.contact-hero-inner > *', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out',
    delay: 0.2,
  })

  // Channel cards — scale+fade so grid alignment stays intact
  gsap.from('.channel-card', {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.channels-inner',
      start: 'top 82%',
    },
  })
})

onUnmounted(() => ScrollTrigger.getAll().forEach(t => t.kill()))
</script>

<template>
  <div>
    <NavBar />

    <!-- Hero -->
    <section class="contact-hero">
      <div class="contact-hero-inner">
        <span class="section-tag">Contact Us</span>
        <h1>Let's Talk Land.</h1>
        <p>
          Have a question about a plot, a listing, or a site visit? Reach out — we're here to help.
        </p>
      </div>
    </section>

    <!-- Channels -->
    <section class="channels-section">
      <div class="channels-inner">
        <div class="channel-card" v-for="(ch, i) in channels" :key="i">
          <div class="channel-icon">
            <span class="material-symbols-outlined">{{ ch.icon }}</span>
          </div>
          <h3>{{ ch.title }}</h3>
          <p>{{ ch.body }}</p>
          <a
            v-if="ch.link"
            :href="ch.link"
            target="_blank"
            rel="noopener"
            class="channel-link"
          >{{ ch.action }} →</a>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<style scoped>
/* Hero */
.contact-hero {
  padding-top: 4.25rem;
  background: var(--bg-light);
}
.contact-hero-inner {
  max-width: 640px;
  margin: 0 auto;
  padding: 6rem 1.5rem 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.section-tag {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green-dark);
  background: var(--green-light);
  padding: 0.3rem 0.85rem;
  border-radius: 99px;
}

.contact-hero-inner h1 {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  color: var(--text-dark);
}
.contact-hero-inner p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-mid);
}

/* Channels */
.channels-section {
  padding: 5rem 1.5rem;
  background: #fff;
}
.channels-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

.channel-card {
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 1.25rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.channel-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.07);
}

.channel-icon {
  width: 2.8rem;
  height: 2.8rem;
  background: var(--green-light);
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
}
.channel-icon .material-symbols-outlined {
  font-size: 1.3rem;
  color: var(--green-dark);
}

.channel-card h3 {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark);
}
.channel-card p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-mid);
}

.channel-link {
  display: inline-block;
  margin-top: 0.5rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.channel-link:hover { opacity: 0.75; }

@media (min-width: 700px) {
  .channels-inner { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1000px) {
  .channels-inner { grid-template-columns: repeat(3, 1fr); }
}
</style>
