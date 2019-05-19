<template lang="html">
  <div class="">
    <Form @submit.prevent="login">
      <InputFiled name="emailOrUsername" type="email" placeholder="Email" class="inputField--secondary" @keyup="login()" v-model="input.email"/>
      <InputFiled name="password" type="password" placeholder="Password" class="inputField--secondary" @keyup="login()" v-model="input.password"/>
    </Form>
    <div class="flex-space__evenly actionBtns">
      <Btn @click="login" >Login</Btn>
      <Btn @click="showRegisterChild" >Register</Btn>
    </div>
  </div>
</template>

<script src="./Login.js" ></script>
<style lang="sass" src="./Login.sass"></style>
