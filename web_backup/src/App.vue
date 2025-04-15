<template>
  <NavBarView></NavBarView>
  <router-view/>
</template>

<script>
import NavBarView from "@/components/NavBarView.vue"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"

export default {
  name: "APP",
  components: {
    NavBarView
  }
}

</script>

<style>
body {
  background-image: url("./assets/image/logo.jpg");
  background-size: cover;
  color: orange;
}
</style>
