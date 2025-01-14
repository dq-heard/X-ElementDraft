<template>
  <main>
    <Identity></Identity>
    <Elements></Elements>
    <Music></Music>
    <Culture></Culture>
  </main>
</template>

<script>
import { body_bg_1 } from "@/assets/images";
import Identity from "./sections/Identity.vue";
import Elements from "./sections/Elements.vue";
import Music from "./sections/Music.vue";
import Culture from "./sections/Culture.vue";

export default {
  name: "About",
  components: { Identity, Elements, Music, Culture },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${body_bg_1})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
