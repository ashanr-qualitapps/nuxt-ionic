<template>
  <div class="ml-64 pt-16 bg-background-default min-h-screen">
    <div class="container mx-auto p-4">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.bg-background-default {
  background-color: #F3F2EF; /* Light grey background */
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
