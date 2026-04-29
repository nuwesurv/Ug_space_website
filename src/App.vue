<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const isDeviceAllowed = ref(false)

setInterval(()=>{
  if(Number(window.innerWidth) > 600) {
    isDeviceAllowed.value = true
  } else{
    isDeviceAllowed.value = false
  }
}, 1000)

onMounted(()=>{
  if(Number(window.innerWidth) > 600) {
    isDeviceAllowed.value = true
  }
})
</script>

<template>
  <div class="full-page">

    <RouterView />
    <div class="overlay-div" v-if="isDeviceAllowed">
      <p>Oops !! ...</p>
      <p>Website is restricted to Mobile devices<br> Thank you.</p>
    </div>
  </div>
</template>


<style scoped>
.full-page{
  position: relative;
}
.overlay-div {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 1rem;
  color: var(--theme-color);
}

p{
  color: var(--theme-color);
}
</style>
