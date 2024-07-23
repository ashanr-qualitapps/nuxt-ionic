<!-- src/components/NavigationBar.vue -->
<template>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-icon name="home"></ion-icon>
        <ion-label>Home</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="countries">
        <ion-icon name="list"></ion-icon>
        <ion-label>Countries</ion-label>
      </ion-tab-button>
      <!-- Add more tabs as needed -->
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
/* Add your navigation bar styles here */
</style>
