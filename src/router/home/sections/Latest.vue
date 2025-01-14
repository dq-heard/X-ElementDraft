<template>
  <section class="section latest" aria-label="how to join">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">Live and Direct</p>
      <h2 class="h2 section-title" data-reveal="bottom">
        Our <span class="span">Latest</span> Video
      </h2>
      <div data-reveal="left">
        <div class="video-wrapper">
          <div>
            <iframe
              class="latestVideoEmbed"
              v-bind:src="videoSrc"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Latest",
  data() {
    return {
      videoSrc: "",
    };
  },
  mounted() {
    this.loadVideo();
  },
  methods: {
    loadVideo() {
      const reqURL =
        "https://api.rss2json.com/v1/api.json?rss_url=" +
        encodeURIComponent(
          "https://www.youtube.com/feeds/videos.xml?channel_id=UCG9KpfH_p__Dacvsxd00Dzg"
        );
      fetch(reqURL)
        .then((response) => response.json())
        .then((data) => {
          const videoNumber = 0;
          const link = data.items[videoNumber].link;
          const id = link.substr(link.indexOf("=") + 1);
          this.videoSrc =
            "https://youtube.com/embed/" + id + "?controls=0&autoplay=1";
        });
    },
  },
};
</script>

<style>
.latest {
  text-align: center;
}

iframe {
  padding-top: 2rem;
  padding-bottom: 0.5rem;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/
@media (min-width: 992px) {
  iframe {
    width: 720px;
    height: 480px;
  }
}
</style>
