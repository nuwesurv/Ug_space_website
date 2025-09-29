<script setup>
import NavBar from '@/components/NavBar.vue'
import Page1Component from '@/components/Page1Component.vue'
import Page2Component from '@/components/Page2Component.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <NavBar />
  <body>
    <Page1Component />
    <Page2Component />
    <FooterComponent />
  </body>
</template>

<style scoped>
body {
  width: 100%;
}
</style>
