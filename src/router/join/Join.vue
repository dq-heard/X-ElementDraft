<template>
  <main>
    <Recruit></Recruit>
    <Orientation></Orientation>
    <Connect></Connect>
  </main>
</template>

<script>
import { body_bg_4 } from "@/assets/images";
import Recruit from "./sections/Recruit.vue";
import Orientation from "./sections/Orientation.vue";
import Connect from "./sections/Connect.vue";

export default {
  name: "Join",
  components: { Recruit, Orientation, Connect },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${body_bg_4})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
