<template>
  <div class="bg-background-dark fixed top-16 left-0 h-full w-64 shadow-lg">
    <ul class="text-text-default">
      <li><a href="/profile" class="block py-4 px-6 hover:bg-background-light">Profile</a></li>
      <li><a href="/network" class="block py-4 px-6 hover:bg-background-light">My Network</a></li>
      <li><a href="/jobs" class="block py-4 px-6 hover:bg-background-light">Jobs</a></li>
      <li><a href="/messaging" class="block py-4 px-6 hover:bg-background-light">Messaging</a></li>
      <li><a href="/notifications" class="block py-4 px-6 hover:bg-background-light">Notifications</a></li>
    </ul>
  </div>
</template>

<style scoped>
.bg-background-dark {
  background-color: #FFFFFF; /* White background for sidebar */
}

.text-text-default {
  color: #1D1D1D; /* Dark text color */
}

.hover\:bg-background-light:hover {
  background-color: #F3F2EF; /* Light grey hover background */
}
</style>
