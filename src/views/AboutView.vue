<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<template>
  <div class="about-page">
    <NavBar/>
    <div class="page-grouper">

        <!-- HERO -->
        <section class="hero">
      <h1>About UG Space</h1>
      <p>
        We are building a smarter, more transparent way to access land and property across Uganda.
    </p>
</section>

    <!-- WHO WE ARE -->
    <section class="section">
      <h2>Who We Are</h2>
      <p>
        UG Space is a digital land platform focused on helping people find, verify, and transact
        property with confidence. We connect buyers, sellers, and agents across Uganda through
        a simple and reliable experience.
      </p>
    </section>

    <!-- WHAT WE DO -->
    <section class="section alt">
      <h2>What We Do</h2>
      <div class="grid">
        <div class="card">
          <h3>Land Discovery</h3>
          <p>
            Browse available land and properties across different regions with clear information
            and visuals.
          </p>
        </div>

        <div class="card">
          <h3>Verification</h3>
          <p>
            We aim to reduce fraud by providing structured data and tools that support due diligence.
          </p>
        </div>

        <div class="card">
          <h3>Agency Network</h3>
          <p>
            Work with trusted agents and expand access to land opportunities across Uganda.
          </p>
        </div>

        <div class="card">
          <h3>Digital Experience</h3>
          <p>
            A modern platform that simplifies how land is explored, evaluated, and acquired.
          </p>
        </div>
      </div>
    </section>

    <!-- VISION -->
    <section class="section">
      <h2>Our Vision</h2>
      <p>
        To become the leading digital space for land and property transactions in Uganda,
        making access to land simple, secure, and accessible for everyone.
      </p>
    </section>

    <!-- MISSION -->
    <section class="section alt">
      <h2>Our Mission</h2>
      <p>
        To empower individuals and businesses with accurate property information,
        trusted connections, and tools that make land transactions seamless.
      </p>
    </section>

    <!-- CTA -->
    <section class="cta">
        <h2>Work With Us</h2>
        <p>
        Whether you are buying, selling, or exploring opportunities, UG Space is here to help you move forward.
      </p>
      <button>Get Started</button>
    </section>

  </div>
    </div>
</template>

<style scoped>
.about-page {
  /* padding-top: 5rem; */
  /* font-family: sans-serif; */
  color: #222;
}

.page-grouper{
    padding-top: 5rem;
}

/* HERO */
.hero {
  text-align: center;
  padding: 3rem 1rem;
  background: #f5fff0;
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
  color: var(--theme-color2);
}

.hero p {
  max-width: 600px;
  margin: auto;
  font-size: 1.1rem;
}

/* SECTIONS */
.section {
  padding: 2.5rem 1rem;
  max-width: 900px;
  margin: auto;
}

.section h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: var(--theme-color2);
}

.section p {
  line-height: 1.6;
}

.alt {
  background: #fafafa;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.card {
  padding: 1.2rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.card h3 {
  margin-bottom: 0.5rem;
}

/* CTA */
.cta {
  text-align: center;
  padding: 3rem 1rem;
  background: #ecffda;
}

.cta h2 {
  margin-bottom: 0.5rem;
}

.cta button {
  margin-top: 1rem;
  padding: 0.7rem 1.5rem;
  border: none;
  background: var(--theme-color);
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

/* DESKTOP */
@media (min-width: 800px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero h1 {
    font-size: 2.8rem;
  }
}
</style>