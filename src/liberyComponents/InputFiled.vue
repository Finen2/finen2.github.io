<template lang="html">
  <input class="inputField" :type="type" :name="name" :placeholder="placeholder" @keyup.13="$emit('keyup')" @input="$emit('input',$event.target.value)" />
</template>

<script src="./InputFiled.js"></script>
<style lang="sass" src="./InputFiled.sass"></style>
