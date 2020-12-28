<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html, body, #app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Nunito, Roboto, Arial, sans-serif;
}
</style>
