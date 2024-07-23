<template>
    <ion-app>
      <AppHeader />
      <ion-content>
        <router-view />
      </ion-content>
      <NavigationBar />
      <AppFooter />
    </ion-app>
  </template>
  
  <script>
  import AppHeader from '@/components/Header.vue';
  import AppFooter from '@/components/Footer.vue';
  import NavigationBar from '@/components/NavigationBar.vue';
  
  export default {
    components: {
      AppHeader,
      AppFooter,
      NavigationBar
    }
  };
  </script>
  
  <style scoped>
  /* Add your layout styles here */
  </style>
  