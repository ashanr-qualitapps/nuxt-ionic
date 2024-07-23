<template>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button>
        <router-link to="/" class="router-link">
          <ion-icon name="home"></ion-icon>
          <ion-label>Home</ion-label>
        </router-link>
      </ion-tab-button>
      <ion-tab-button>
        <router-link to="/countries" class="router-link">
          <ion-icon name="list"></ion-icon>
          <ion-label>Countries</ion-label>
        </router-link>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
.router-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
</style>
