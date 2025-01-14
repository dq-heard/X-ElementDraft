<template>
  <section class="cta" aria-label="Join us today" data-reveal="bottom">
    <div class="banner has-before">
      <div class="container">
        <p class="section-subtitle">X Marks the Spot</p>
        <h1 class="h1 title cta-title">Leave Your Mark Today!</h1>
        <a href="/join" class="btn" data-btn="">Join Our Team</a>
        <div class="cta-banner">
          <img :src="cta" width="850" height="414" class="w-100" />
          <img :src="cta_bg" class="cta-banner-bg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useHead } from "@vueuse/head";
import cta from "@/assets/images/cta-banner.png";
import cta_bg from "@/assets/images/cta-banner-bg.png";

export default {
  name: "CTA",
  setup() {
    useHead({
      link: [
        { rel: "preload", as: "image", href: cta },
        { rel: "preload", as: "image", href: cta_bg },
      ],
    });
    return { cta, cta_bg };
  },
};
</script>

<style>
.cta {
  text-align: center;
}

.cta .section-subtitle {
  letter-spacing: 5px;
}

.cta-title {
  margin-block: 20px 25px;
}

.cta .btn {
  margin-inline: auto;
}

.banner::before {
  background-image: var(--gradient-2);
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  z-index: 1;
}

.cta-banner {
  position: relative;
  margin-block-start: 50px;
}

.cta-banner-bg {
  display: none;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 768px) {
  .cta .section-subtitle {
    letter-spacing: 10px;
  }

  .cta-banner-bg {
    display: block;
    width: 100%;
    height: 55rem;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: bottom;
    z-index: -1;
  }
}

@media (min-width: 992px) {
  .banner::before {
    width: 90%;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  .cta-banner-bg {
    height: 65rem;
  }
}

@media (min-width: 1200px) {
  .banner::before {
    width: 65%;
  }

  .cta-banner-bg {
    transform: scale(1.1);
  }

  .cta-banner .w-100 {
    max-width: max-content;
    margin-inline: auto;
  }
}
</style>
