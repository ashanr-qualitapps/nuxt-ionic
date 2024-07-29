<template>
  <ion-header>
    <ion-toolbar class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <ion-title class="text-white">MyApp</ion-title>
      <ion-buttons slot="end">
        <ion-menu-button />
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Navigation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item button detail href="/">
          <ion-label>Home</ion-label>
        </ion-item>
        <ion-item button detail href="/countries">
          <ion-label>Countries Component</ion-label>
        </ion-item>
        <ion-item button @click="$emit('openModal')">
          <ion-label>Open Countries Modal</ion-label>
        </ion-item>
        <ion-item button detail href="/countries-table">
          <ion-label>Countries Table</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main-content"></ion-router-outlet>
</template>

<script>
export default {
  name: 'Navbar',
  emits: ['openModal']
}
</script>

<style scoped>
ion-toolbar {
  --background: linear-gradient(to right, #38b2ac, #4299e1, #9f7aea);
}
</style>
