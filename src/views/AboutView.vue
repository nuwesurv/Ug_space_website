<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const steps = [
  {
    icon: 'search',
    title: 'Land Sourcing',
    body: 'We actively search for land available for sale across different regions of Uganda.',
  },
  {
    icon: 'verified',
    title: 'Verification',
    body: 'We carry out our own due diligence — verifying each land title and conducting on-ground checks to confirm ownership and occupancy.',
  },
  {
    icon: 'home_work',
    title: 'Preparation',
    body: 'We work closely with sellers to ascertain services, developments, and utilities available on or nearby the land.',
  },
  {
    icon: 'upload',
    title: 'Presentation',
    body: 'All verified plot details are compiled and published on UG Space, where you can access everything in one place.',
  },
  {
    icon: 'directions_car',
    title: 'Site Visit',
    body: 'We link you with the seller and escort you for a guided visit — including an on-site survey and a full UG Space inspection report.',
  },
]
</script>

<template>
  <div>
    <NavBar />

    <!-- Hero -->
    <section class="about-hero">
      <div class="about-hero-inner">
        <span class="section-tag">About UG Space</span>
        <h1>Building Uganda's Most Trusted Land Platform</h1>
        <p>We are making land discovery, verification, and purchasing simple and transparent for every Ugandan.</p>
      </div>
    </section>

    <!-- Who we are -->
    <section class="who-section">
      <div class="who-inner">
        <div class="who-text">
          <span class="label-accent">Who We Are</span>
          <h2>A Digital Platform Built Around Land.</h2>
          <p>
            UG Space is Uganda's dedicated land marketing platform. We connect buyers with verified sellers, provide accurate parcel data, and guide you through every step of your land purchase journey — from browsing to owning.
          </p>
        </div>
        <div class="who-stats">
          <div class="stat-card">
            <span class="stat-number">100K+</span>
            <span class="stat-label">Plots Listed</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">5+</span>
            <span class="stat-label">Regions</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">100%</span>
            <span class="stat-label">Title-Verified</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="process-section">
      <div class="process-inner">
        <div class="process-header">
          <span class="label-accent">Our Process</span>
          <h2>From Source to Sale — We're With You.</h2>
        </div>
        <div class="steps-grid">
          <div class="step-card" v-for="(step, i) in steps" :key="i">
            <div class="step-icon">
              <span class="material-symbols-outlined">{{ step.icon }}</span>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <FooterComponent />
  </div>
</template>

<style scoped>
/* ── Hero ── */
.about-hero {
  padding-top: 4.25rem;
  background: var(--bg-light);
}
.about-hero-inner {
  max-width: 740px;
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

.about-hero-inner h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--text-dark);
  line-height: 1.2;
}
.about-hero-inner p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-mid);
  max-width: 560px;
}

/* ── Who We Are ── */
.who-section {
  padding: 5rem 1.5rem;
  background: #fff;
}
.who-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.label-accent {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green);
}

.who-text {
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.who-text h2 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  color: var(--text-dark);
}
.who-text p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-mid);
}

.who-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.stat-card {
  flex: 1;
  min-width: 140px;
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.07);
}
.stat-number {
  font-family: 'Nunito', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-dark);
}
.stat-label {
  font-size: 0.82rem;
  color: var(--text-light);
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
}

/* ── Process ── */
.process-section {
  padding: 5rem 1.5rem;
  background: var(--bg-light);
}
.process-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.process-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.process-header h2 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  color: var(--text-dark);
}

.steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
.step-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.step-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.07);
}
.step-icon {
  width: 2.6rem;
  height: 2.6rem;
  background: var(--green-light);
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step-icon .material-symbols-outlined {
  font-size: 1.3rem;
  color: var(--green-dark);
}
.step-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  font-family: 'DM Sans', sans-serif;
}
.step-card p {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-mid);
}

@media (min-width: 768px) {
  .who-inner { flex-direction: row; align-items: flex-start; gap: 4rem; }
  .who-text { flex: 1; }
  .who-stats { flex: 0 0 300px; flex-direction: column; }
  .steps-grid { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1100px) {
  .steps-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
