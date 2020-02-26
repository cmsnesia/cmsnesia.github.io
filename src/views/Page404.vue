<template>
  <div class="container content-body">
    <div class="row">
      <div class="col-md-6">
        <h1 style="font-size: 150px">404</h1>
        <h2 style="font-size: 40px">Something Missing...</h2>
        <p style="font-size: 15px">This page is missing or you assembled the link incorrectly.</p>
        <button class="btn btn-primary bt-primary-airbizz" @click="$router.go(-1)">Go Back</button>
      </div>
      <div class="col-md-6" align="center">
        <img src="../assets/img/box.png" height="400" width="400"/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style scoped>
.content-body {
  margin-top: 50px;
  min-height: 100%;
  padding-left: 100px;
  padding-right: 100px; }
.content-body h1 {
  font-size: 144px; }
.content-body p {
  font-size: 18px; }
.content-body a {
  padding-left: 50px;
  padding-right: 50px; }
.content-body h3 {
  font-weight: 100;
  color: #04D0D9; }
.content-body h3 span {
  font-weight: bold; }
.content-body .row:last-child {
  margin-top: 100px;
}

.bt-primary-airbizz {
  margin-top: 10px;
  margin-bottom: 10px; }

.bt-primary-airbizz {
  background-color: #1C9A8A;
  color: #FFFFFF;
  border: none; }

.bt-primary-airbizz:hover {
  background-color: #60C2B5;
  color: #FFFFFF; }

.bt-primary-airbizz:active,
.bt-primary-airbizz:focus,
.bt-primary-airbizz:hover:active,
.bt-primary-airbizz:active:focus {
  background-color: #60C2B5;
  outline: none;
  color: #FFFFFF;
  border-color: #FFFFFF; }

.bt-primary-airbizz:visited {
  background-color: #60C2B5;
  outline: none; }
</style>
