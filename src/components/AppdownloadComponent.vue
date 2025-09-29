<script setup></script>

<template>
  <div class="button-grouper">
    <div class="button">
      <p>Google Play</p>
    </div>
    <div class="button">
      <p>Apple Play</p>
    </div>
  </div>
</template>

<style scoped>
.button-grouper {
  /* border: 1px solid red; */
  /* width: 400px; */
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.button {
  width: 200px;
  height: 5dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2.2rem;
  background-color: var(--theme-color);
  /* background-color: var(--button-background-color); */
  /* border: 1px solid green; */
  transition: background-color 0.3s ease;
}

.button:active,
.button:hover {
  background-color: var(--button-background-clicked);
}

.button p {
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
}

/* 📱 Responsive: On mobile, make buttons full-width */
@media (max-width: 768px) {
  .button-grouper {
    width: 100%;
    gap: 0.8rem;
  }

  .button {
    width: 130px;
    height: 45px;
    padding: 1.2rem 0;
  }

  .button p {
    font-size: 1rem;
  }
}
</style>
