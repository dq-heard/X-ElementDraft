<template>
  <section class="section bio">
    <div class="container">
      <div class="bio-wrapper" data-reveal="left">
        <div class="image-wrapper">
          <h2 class="h2 section-title" data-reveal="bottom">Future</h2>

          <img class="staff-img" :src="future" alt="Futures logo" />
        </div>

        <div class="text-wrapper">
          <p class="bio-desc">
            I am an exceptional professional with a diverse range of skills and
            roles, including website creation, Fortnite coaching, Social Media
            Managing, Team Recruiting, and X-Element's COO. At the young age of
            14, I have proven myself as a dynamic leader capable of excelling in
            multiple areas. I firmly believe that age should never hinder one's
            abilities, and my determination, skill set, and passion have enabled
            me to succeed in an array of roles.<br />
            <span class="span1"
              >If you have any questions or would like to get in touch, feel
              free to contact me on Discord at <strong>@xfuture5252</strong>. I
              look forward to connecting with you and addressing any inquiries
              or discussions you may have.<br
            /></span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { future, bio_bg_3 } from "@/assets/images";

export default {
  name: "Future",
  data() {
    return {
      future,
    };
  },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${bio_bg_3})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>

<style scoped>
.bio-desc strong:hover {
  color: var(--text-champagne-pink);
}
/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 575px) {
  .bio .span1 {
    display: block;
  }
}

@media (min-width: 768px) {
  .bio .image-wrapper {
    padding-top: 7rem;
  }

  .bio .text-wrapper {
    padding-top: 5rem;
  }
}

@media (min-width: 992px) {
  .bio .image-wrapper {
    padding-top: 0;
  }

  .bio .staff-img {
    width: 450px;
  }

  .bio .text-wrapper {
    padding-top: 7rem;
  }
}

@media (min-width: 1200px) {
  .bio .text-wrapper {
    padding-top: 11rem;
  }
}
</style>
