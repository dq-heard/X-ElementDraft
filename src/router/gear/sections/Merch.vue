<template>
  <section class="section merch" aria-label="team apparel">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">Next Level Apparel</p>

      <h2 class="h2 section-title" data-reveal="bottom">
        <span class="span">Official</span> Uniforms
      </h2>

      <p class="section-text" data-reveal="bottom">
        We offer merchandise that allows you to proudly showcase your dedication
        to the X-Element brand. Show your support with our range of high-quality
        apparel, designed for both comfort and style.<br /><br />
        To purchase an item, visit our Team Discord and leave a message in the
        "Buy Merch" channel.
      </p>

      <ol class="merch-list">
        <li v-for="(item, index) in merchItems" :key="index" class="merch-item">
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
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import {
  pink_hoodie,
  pink_jersey,
  pink_sweats,
  purple_hoodie,
  purple_jersey,
  purple_sweats,
} from "@/assets/images";

export default {
  data() {
    return {
      discordLink: "https://discord.com/invite/WuNtgnB6Hp",
      merchItems: [
        {
          leftImage: pink_hoodie,
          leftAlt: "X-Element Pink Hoodie",
          leftTitle: "Hoodie (Bold)",
          rightImage: purple_hoodie,
          rightAlt: "X-Element Purple Hoodie",
          rightTitle: "Hoodie (Wise)",
          price: "$66.00",
        },
        {
          leftImage: pink_jersey,
          leftAlt: "X-Element Pink Jersey",
          leftTitle: "Jersey (Bold)",
          rightImage: purple_jersey,
          rightAlt: "X-Element Purple Jersey",
          rightTitle: "Jersey (Wise)",
          price: "$56.00",
        },
        {
          leftImage: pink_sweats,
          leftAlt: "X-Element Pink Sweats",
          leftTitle: "Sweats (Bold)",
          rightImage: purple_sweats,
          rightAlt: "X-Element Purple Sweats",
          rightTitle: "Sweats (Wise)",
          price: "$60.00",
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
