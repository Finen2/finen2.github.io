<template lang="html">
    <button type="button" name="button" :class="btnClass" @click="$emit('click')" @mouseover="$emit('mouseover')" @mouseout="$emit('mouseout')">
      <slot>Button</slot>
    </button>
</template>

<script src="./Btn.js"></script>
<style lang="sass" src="./Btn.sass"></style>
