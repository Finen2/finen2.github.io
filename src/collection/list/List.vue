<template lang="html">
  <div class="flex-default wrapperList">
    <ListItem v-bind:propFunction="propFromPropFunction" v-bind:logedIn="logedIn" :watchList=watchList  />
  </div>
</template>

<script src="./List.js"></script>
<style lang="sass" src="./List.sass"></style>
