<template lang="html">
  <div class="">
    <Form @submit.prevent="register" >
      <InputFiled name="email" type="text" placeholder="Email" class="inputField--secondary" @keyup="register()" v-model="input.email" />
      <InputFiled name="firstName" type="text" placeholder="First Name" class="inputField--secondary" @keyup="register()" v-model="input.firstName" />
      <InputFiled name="lastName" type="text" placeholder="Last Name" class="inputField--secondary" @keyup="register()" v-model="input.lastName" />
      <InputFiled name="password" type="password" placeholder="Password" class="inputField--secondary" @keyup="register()" v-model="input.password" />
      <InputFiled name="passwordRepete" type="password" placeholder="Confirm password" class="inputField--secondary" @keyup="register()" v-model="input.conPassword" />
    </Form>
    <div class="flex-space__evenly actionBtns">
      <Btn @click="register">Create User</Btn>
    </div>
  </div>
</template>

<script src="./Register.js"></script>
<style lang="sass" src="./Register.sass"></style>
