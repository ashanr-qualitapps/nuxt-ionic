<template>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/countries">Country List</nuxt-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav li {
    display: inline;
    margin-right: 10px;
  }
  </style>
  