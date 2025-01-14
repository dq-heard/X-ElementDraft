<template>
  <section class="section recruit" aria-label="how to join">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">Discover New Heights</p>

      <h2 class="h2 section-title" data-reveal="bottom">
        <span class="span">Elevate</span> Your Game
      </h2>

      <div class="join" data-reveal="left">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/OjQ4ag26378?si=VMAT7PDutLlZdWcx"
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
  name: "Recruit",
};
</script>

<style>
.recruit {
  padding-top: 14rem;
  text-align: center;
}

iframe {
  padding-top: 2rem;
  padding-bottom: 0.5rem;
}

.join iframe {
  width: 70%;
  height: auto;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 575px) {
  .join iframe {
    width: 480px;
    height: 360px;
  }
}

@media (min-width: 992px) {
  .join iframe {
    width: 720px;
    height: 480px;
  }
}
</style>
