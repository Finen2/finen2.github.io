<template lang="html">
  <div class="collectionIn">
    <List :key="componentKey" v-bind:propFunction="forceRerender" v-bind:logedIn="true"/>
    <Modal id="multiModalLogin" ref="logModal" :header="modalHeader" color="secondary" v-bind:additionalCloseFunction="forceRerender">
      <AddWatch v-bind:propFunction="closeModal"/>
      <div class="flex-row-center logoutBtnContainer">
        <Btn class="logoutBtn" @click="logut">Logout</Btn>
      </div>
    </Modal>
    <IconButton :icon="icon" color="secondary" class="userButton" @click="showModal" />
  </div>
</template>

<script src="./LogedIn.js"></script>
<style lang="sass" src="./LogedIn.sass"></style>
