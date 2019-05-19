<template lang="html">
  <button type="button" name="button" :class="iconBtnClass" @click="$emit('click')" @mouseover="$emit('mouseover')" @mouseout="$emit('mouseout')">
    <font-awesome-icon :icon="icon" class="iconButton_icon" />
  </button>
</template>

<script src="./IconButton.js"></script>
<style lang="sass" src="./IconButton.sass"></style>
