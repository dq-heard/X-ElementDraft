<template>
  <main>
    <Team></Team>
    <Playlist></Playlist>
  </main>
</template>

<script>
import { body_bg_2 } from "@/assets/images";
import Team from "./sections/Team.vue";
import Playlist from "./sections/Playlist.vue";

export default {
  name: "Staff",
  components: { Team, Playlist },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${body_bg_2})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
