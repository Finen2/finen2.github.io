<template lang="html">
  <div class="collectionOut">
    <div class="flex-row-start-center textblock">
      <Card>
        <p>
          Filet mignon ham hock leberkas cow rump alcatra doner, brisket short ribs landjaeger short loin shankle drumstick kielbasa. Kevin short ribs andouille kielbasa, beef shankle pancetta filet mignon shoulder porchetta burgdoggen jowl. Boudin pork belly alcatra bacon, pig bresaola spare ribs salami swine jowl drumstick. Beef ribs sausage kevin, t-bone ground round hamburger andouille leberkas ball tip. Sirloin porchetta salami filet mignon shoulder beef ribs, meatloaf doner ribeye cupim meatball bacon pork belly cow. Flank filet mignon rump venison.
        </p>
      </Card>
    </div>
    <List :key="componentKey" v-bind:propFunction="forceRerender" />
    <Card>
      <p>
        Filet mignon ham hock leberkas cow rump alcatra doner, brisket short ribs landjaeger short loin shankle drumstick kielbasa. Kevin short ribs andouille kielbasa, beef shankle pancetta filet mignon shoulder porchetta burgdoggen jowl. Boudin pork belly alcatra bacon, pig bresaola spare ribs salami swine jowl drumstick. Beef ribs sausage kevin, t-bone ground round hamburger andouille leberkas ball tip. Sirloin porchetta salami filet mignon shoulder beef ribs, meatloaf doner ribeye cupim meatball bacon pork belly cow. Flank filet mignon rump venison.
      </p>
    </Card>

    <Modal id="multiModalLogout" ref="logModal" :header="modalHeader" class="flex-space__between" color="secondary" v-bind:additionalCloseFunction="initalDisplay">
      <Register class="registerForm" id="multiRegister" />
      <Login id="multiLogin" v-bind:showRegister="showRegister" />
    </Modal>
    <IconButton :icon="icon" color="secondary" class="loginButton" @click="showModal" />
  </div>
</template>

<script src="./LogedOut.js"></script>
<style lang="sass" src="./LogedOut.sass"></style>
