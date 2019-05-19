<template>
  <div id="alertBar" class="row-start-center alertBar">
    <font-awesome-icon :icon="setIcon" class="alertBar__icon" />
    <div class="flex-row-start-center alertBar__textArea">
      <slot>Alert</slot>
    </div>
    <span class="alertBar__close ">&times;</span>
  </div>
</template>

<script src="./AlertBar.js"></script>
<style lang="sass" src="./AlertBar.sass"></style>
