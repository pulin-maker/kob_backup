<template>
  <nav>
    <div>bot_name: {{ bot_name }}</div>
    <div>bot_rating: {{ bot_rating }}</div>
  </nav>
  <router-view/>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';

export default {
  name: "APP",
  setup() {
    const bot_name = ref("");
    const bot_rating = ref("");
    $.ajax({
      url: "http://localhost:3001/pk/getbotinfo/",
      type: "get",
      success(resp) {
        bot_name.value = resp.name;
        bot_rating.value = resp.rating;
      }
    })
    return {
      bot_name,
      bot_rating
    }
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
