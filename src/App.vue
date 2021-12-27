<template>
  <div id="app">
    <MainLayout/>
  </div>
</template>

<script>
import MainLayout from './components/MainLayout.vue'
export default {
  components: {
    MainLayout
  }
}
</script>
<style>
@font-face {
  font-family: "Arsenica";
  src: local("Arsenica"),
    url("./assets/styles/fonts/Arsenica-Alt-Regular-trial.ttf");
}
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
