<template>
  <section class="section bio">
    <div class="container">
      <div class="bio-wrapper" data-reveal="left">
        <div class="image-wrapper">
          <h2 class="h2 section-title" data-reveal="bottom">BigBigSpoon</h2>

          <img class="staff-img" :src="spoon" alt="Big Big Spoon picture" />
        </div>

        <div class="text-wrapper">
          <p class="bio-desc">
            As a passionate engineer, I embrace the cutting edge of the digital
            world, constantly exploring the vast landscape of tech. My expertise
            spans across AI, hacking, gaming, streaming, programming, and
            running servers, making me a versatile and knowledgeable force in
            the industry.<br />
            <span class="span1"
              >Fueled by unyielding curiosity and an authentic love for
              technology,
              <a href="https://bigbigspoon.com/"
                ><strong>bigbigspoon</strong></a
              >
              is my personal platform to share insights, discoveries, and
              experiences with the tech community. Here, you'll find me
              demystifying complex concepts, discussing breakthroughs, and
              pushing the boundaries of what's possible.<br
            /></span>
            <span class="span2">
              However,
              <a href="https://bigbigspoon.com/"
                ><strong>bigbigspoon</strong></a
              >
              is not just about technology—it's also a celebration of creativity
              and imagination. I believe in the power of technology to intersect
              with virtually all fields, and together, we'll explore how
              technology enriches and transforms every aspect of our
              lives.</span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { spoon, bio_bg_2 } from "@/assets/images";

export default {
  name: "Aaron",
  data() {
    return {
      spoon,
    };
  },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${bio_bg_2})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>

<style>
.bio-desc a {
  display: inline;
}

.bio-desc strong {
  font-weight: var(--weight-semibold);
  color: var(--text-champagne-pink);
}

.bio-desc strong:hover {
  color: var(--text-pink);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 768px) {
  .bio .text-wrapper {
    padding-top: 5rem;
  }
}

@media (min-width: 992px) {
  .bio .text-wrapper {
    padding-top: 9rem;
  }
}

@media (min-width: 1200px) {
  .bio .text-wrapper {
    padding-top: 15rem;
  }
}
</style>
