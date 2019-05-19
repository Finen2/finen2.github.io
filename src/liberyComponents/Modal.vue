<template lang="html">
  <div class="">
    <!-- <IconButton :id="iconId" class="trigger" :icon="icon" :color="btnColor" @click="displayModal" /> -->
    <div :id="id" class="modalSide">
      <div class="modalSide__content">
        <div :class="headClass">
          <h3>{{ header }}</h3>
          <font-awesome-icon icon="times" class="faIcon" @click="hideModal" />
        </div>
        <div class="modalSide__content__body">
          <slot>fail to load Content</slot>
        </div>
      </div>
      <div  class="modalSide__closeModal"  @click="hideModal"></div>
    </div>

  </div>
</template>

<script lang="js" src="./Modal.js"></script>
<style lang="sass" src="./Modal.sass"></style>
