<template>
  <section class="section music" aria-label="X-Element Music">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">Conquer the World</p>

      <h2 class="h2 section-title" data-reveal="bottom">
        At Maximum <span class="span">Volume</span>
      </h2>

      <div class="songs" data-reveal="left">
        <p class="music-desc">
          Boost your gameplay and tap into your element with two of our official
          anthems. Made for both gamers and dreamers alike, these songs are a
          tribute to everyone who rises above the competition & consistently
          pushes boundaries.<br /><br />Get the W; rep the X.
        </p>

        <div class="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/5g1slgr2kmU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <iframe
            src="https://www.youtube-nocookie.com/embed/O1ewXQH5XUk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Music",
};
</script>

<style>
.music {
  text-align: center;
}

.music-desc {
  padding-bottom: 2rem;
}

.music iframe {
  width: 360px;
  height: 240px;
  padding-bottom: 0.5rem;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (max-width: 375px) {
  iframe {
    width: 275px;
  }
}

@media (min-width: 768px) {
  .music .container {
    max-width: 720px;
  }

  .songs .video-wrapper {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }
}
</style>
