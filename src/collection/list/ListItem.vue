<template lang="html">
  <div class="flex-default wrappListItem">
    <div class="flex-default item" v-for="watch in watchList" v-bind:key="watch.id">
      <div class="flex-column-space__between item__list">
        <img :src="watch.img.i" alt="image of watch" class="image">
        <h3 class="watchTitle">{{ watch.data.name || '-' }}</h3>
        <IconButton type="button" class="expandButton" name="button" @click="showInfo(watch.id)" :icon="icon" color="invisible" />
      </div>
      <div class="flex-column-no-space__between item__info" :id="watch.id">
        <ul class="flex-start-column list">
          <li><h3>{{ watch.data.name || '-' }}</h3></li>
          <br>
          <li class="list__headText">Brand</li>
          <li>{{ watch.data.brand || '-' }}</li>
          <br>
          <li class="list__headText">Family</li>
          <li>{{ watch.data.family || '-' }}</li>
          <br>
          <li class="list__headText">Movment Type</li>
          <li>{{ watch.data.movmentType || '-' }}</li>
          <br>
          <li class="list__headText">Case Diameter</li>
          <li>{{ watch.data.caseDiameter + 'mm' || '-' }}</li>
        </ul>
        <p class="comentary">
          {{ watch.data.comment || '' }}
        </p>
        <!--<IconButton type="button" name="button" @click="eraseWatch(watch.id)" icon="trash-alt" color="invisible" />-->
      </div>
    </div>
  </div>
</template>

<script src="./ListItem.js"></script>
<style lang="sass" src="./ListItem.sass"></style>
