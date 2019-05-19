<template lang="html">
  <div class="wrapperInfoBoxes">
    <div class="infoBox">
      <h1 class="titleText">{{ this.boxTextProp.boxOne.title }}</h1>
      <p class="paragraphText">{{ this.boxTextProp.boxOne.text }}</p>
    </div>
    <div class="infoBox">
      <h1 class="titleText">{{ this.boxTextProp.boxTwo.title }}</h1>
      <p class="paragraphText">{{ this.boxTextProp.boxTwo.text }}</p>
    </div>
    <div class="infoBox small">
      <h1 class="titleText">{{ this.boxTextProp.boxThree.title }}</h1>
      <p class="paragraphText">{{ this.boxTextProp.boxThree.text }}</p>
    </div>
    <div class="infoBox small">
      <h1 class="titleText">{{ this.boxTextProp.boxFour.title }}</h1>
      <p class="paragraphText">{{ this.boxTextProp.boxFour.text }}</p>
    </div>
  </div>
</template>

<script src="./InfoBoxes.js"></script>
<style lang="sass" src="./InfoBoxes.sass"></style>
