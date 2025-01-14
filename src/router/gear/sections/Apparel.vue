<template>
  <section class="section apparel" aria-label="more team apparel">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">
        Having Trouble Choosing?
      </p>

      <h2 class="h2 section-title" data-reveal="bottom">
        <span class="span">Upgrade</span> Your Wardrobe
      </h2>

      <p class="section-text" data-reveal="bottom">
        Get all three (the Hoodie, Jersey, and Pants altogether) in one package.
      </p>

      <div
        v-for="(item, index) in apparelItems"
        :key="index"
        class="merch-item"
      >
        <div class="merch-card left has-before" data-reveal="left">
          <img
            :src="item.leftImage"
            width="86"
            height="81"
            loading="lazy"
            :alt="item.leftAlt"
            class="merch-img"
          />

          <h3 class="h3 card-title">{{ item.leftTitle }}</h3>

          <div
            class="modal-btn"
            @click="emitOpenModal(item.leftImage, item.leftAlt)"
          >
            Click to Zoom
          </div>
        </div>

        <div class="merch-sale" data-reveal="bottom">
          <div class="price">{{ item.price }}</div>

          <div class="social-wrapper">
            <a :href="discordLink" class="social-link">
              <ion-icon
                name="logo-discord"
                role="img"
                aria-label="team Discord"
              ></ion-icon>
            </a>
          </div>
        </div>

        <div
          v-if="item.rightImage"
          class="merch-card right has-before"
          data-reveal="right"
        >
          <img
            :src="item.rightImage"
            width="86"
            height="81"
            loading="lazy"
            :alt="item.rightAlt"
            class="merch-img"
          />

          <h3 class="h3 card-title">{{ item.rightTitle }}</h3>

          <div
            class="modal-btn"
            @click="emitOpenModal(item.rightImage, item.rightAlt)"
          >
            Click to Zoom
          </div>
        </div>

        <p v-if="item.description" data-reveal="right">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import {
  pink_uniform,
  polo_shirt,
  purple_uniform,
  t_shirt,
} from "@/assets/images";

export default {
  data() {
    return {
      discordLink: "https://discord.com/invite/WuNtgnB6Hp",
      apparelItems: [
        {
          leftImage: pink_uniform,
          leftAlt: "X-Element Full Uniform in Pink",
          leftTitle: "Full Uni (Bold)",
          rightImage: purple_uniform,
          rightAlt: "X-Element Full Uniform in Purple",
          rightTitle: "Full Uni (Wise)",
          price: "$182.00",
        },
        {
          leftImage: polo_shirt,
          leftAlt: "X-Element Polo Shirt",
          leftTitle: "Staff Polo",
          price: "$56.00",
        },
        {
          leftImage: t_shirt,
          leftAlt: "X-Element T-Shirt",
          leftTitle: "T-Shirt",
          price: "$35.00",
          description:
            "*Please be aware that the T-Shirt also has a design on its back.",
        },
      ],
    };
  },
  methods: {
    emitOpenModal(imgSrc, imgAlt) {
      this.$emit("open-modal", imgSrc, imgAlt);
    },
  },
};
</script>
