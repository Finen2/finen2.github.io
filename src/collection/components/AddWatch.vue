<template lang="html">
  <div class="">
    <Form :key="componentKey" >
      <InputFiled name="brand" type="text" placeholder="Brand" class="inputField--secondary" @keyup="addWatch" v-model="input.brand"/>
      <InputFiled name="family" type="text" placeholder="Family" class="inputField--secondary" @keyup="addWatch" v-model="input.family"/>
      <InputFiled name="name" type="text" placeholder="Name" class="inputField--secondary" @keyup="addWatch" v-model="input.name"/>
      <InputFiled name="movementType" type="text" placeholder="Movement type" class="inputField--secondary" @keyup="addWatch" v-model="input.movementType"/>
      <InputFiled name="caseType" type="number" placeholder="Case Diameter (mm)" class="inputField--secondary" @keyup="addWatch" v-model="input.caseType"/>
      <InputFiled name="comment" type="text" placeholder="Comment" class="inputField--secondary" @keyup="addWatch" v-model="input.comment"/>
      <InputFiled name="files[]" id="files" type="file" accept="image/png, image/jpeg" placeholder="Image" class="inputField--secondary" @keyup="addWatch"/>
      <p>(max size 5MB, image type png or jpg)</p>
    </Form>
    <div class="flex-space__evenly actionBtns">
      <Btn @click="addWatch" >Add Watch</Btn>
    </div>
  </div>
</template>

<script src="./AddWatch.js" ></script>
<style lang="sass" src="./AddWatch.sass"></style>
