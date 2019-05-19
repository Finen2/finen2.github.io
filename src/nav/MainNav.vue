<template lang="html">
  <div class="nav" id="nav">
    <router-link to="/" class="navItem">
      <h2 class="navText">
        Home
      </h2>
    </router-link>
    <!-- <router-link to="/about" class="navItem">
      <h2 class="navText">
        About
      </h2>
    </router-link> -->
    <h2 class="navItem" @click="checkStatus">Collection</h2>
    <!-- <router-link to="/watches" class="navItem">
      <h2 class="navText">
        Watches
      </h2>
    </router-link> -->
  </div>
</template>

<script src="./MainNav.js"></script>
<style lang="sass" src="./MainNav.sass"></style>
