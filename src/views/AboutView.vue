<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
  <div class="about-page">
    <NavBar />
    <div class="page-grouper">

      <!-- HERO -->
      <section class="hero">
        <h1>About UG Space</h1>
        <p>
          We are building a smarter, more transparent way to access secure land across Uganda.
        </p>
      </section>

      <!-- WHO WE ARE -->
      <section class="section">
        <h2>Who We Are</h2>
        <p>
          UG Space is a digital land platform focused on helping people find secure land and transact 
          with confidence. We connect buyers and sellers across Uganda through the Ug space platform.
        </p>
      </section>

      <!-- WHAT WE DO -->
      <section class="section alt">
        <h2>What We Do</h2>
        <div class="grid">
          <div class="card">
            <h3>Land Sourcing</h3>
            <p>
              We actively search for land available for sale across different regions of Uganda.
            </p>
          </div>

          <div class="card">
            <h3>Verification</h3>
            <p>
              We do our own due deligence to verify the validity of each Land title and on-ground checks to confirm ownership and occupancy.
            </p>
          </div>

          <div class="card">
            <h3>Preparation</h3>
            <p>
              We work closely with our trusted land sellers to acertain services, developments and utilites available on or nearby the land.
            </p>
          </div>

          <div class="card">
            <h3>Presentation</h3>
            <p>
              All verified plot details are compiled and uploaded onto the Ug space platform where you can access this information.
            </p>
          </div>

          <div class="card">
            <h3>Site visit</h3>
            <p>
              We link you to land seller and escort you for sitevisit. We carryout an <strong style="color: var(--theme-color);">"at time of purchase"</strong> due deligence including but not limited to Land surveying and offer you a comprehensive Ug space purchase report.
            </p>
          </div>


        </div>
      </section>

      <!-- VISION
      <section class="section">
        <h2>Our Vision</h2>
        <p>
          To become the leading digital space for land and property transactions in Uganda,
          making access to land simple, secure, and accessible for everyone.
        </p>
      </section> -->
    </div>
    <FooterComponent/>
  </div>
</template>

<style scoped>
/* HERO */
.hero {
  text-align: center;
  padding: 5rem 1rem;
  padding-top: 10rem;
  background-image: linear-gradient(rgba(235, 247, 235, 1), rgba(235, 247, 235, 1));
  /* background:  #fdfffb; */
  /* border: 1px solid red; */
}

.hero h1 {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
  color: var(--theme-color);
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
  color: var(--theme-color);
}

.section p {
  line-height: 1.6;
}

.alt {
  /* background: #fafafa; */
  background-image: linear-gradient(rgba(235, 247, 235, 1), rgba(235, 247, 235, 1));
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.card h3 {
  margin-bottom: 0.5rem;
  color: var(--theme-color);
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