<template lang="html">
  <!-- Values for img (src, alt, imgSize)  -->
  <div class="flex-start-stretch card">
    <div class="flex-column-center card__contentWrapper">
      <slot>Card Content</slot>
    </div>
  </div>
</template>

<script src="./Card.js"></script>
<style lang="sass" src="./Card.sass"></style>
