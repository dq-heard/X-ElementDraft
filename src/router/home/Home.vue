<template>
  <main>
    <Teams></Teams>
    <Roles></Roles>
    <Latest></Latest>
    <CTA></CTA>
  </main>
</template>

<script>
import { body_bg_0 } from "@/assets/images";

import Teams from "./sections/Teams.vue";
import Roles from "./sections/Roles.vue";
import Latest from "./sections/Latest.vue";
import CTA from "./sections/CTA.vue";

export default {
  name: "Home",
  components: { Teams, Roles, Latest, CTA },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${body_bg_0})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>
