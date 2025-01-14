<template>
  <section class="section orientation" aria-label="agreements before joining">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">
        Promoting Inclusive Values
      </p>

      <h2 class="h2 section-title" data-reveal="bottom">
        Creating a <span class="span">Culture</span>
      </h2>

      <div class="intro" data-reveal="left">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/2b78suXyqZM?si=WjI5Cp5246ntJmkF"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div class="video-desc">
          <p>
            Gamers! Are you ready to rise to the top and achieve e-Sports glory?
            X-Element is your ticket to greatness. Join our ranks and unlock
            your true power. Don't wait any longer. The time is now!
          </p>

          <a href="https://discord.gg/NrUEecXR3d" class="btn" data-btn
            >Are You Ready?</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Orientation",
};
</script>

<style>
iframe {
  padding-top: 2rem;
  padding-bottom: 0.5rem;
}

.orientation {
  text-align: center;
}

.video-desc .btn {
  margin: 2rem auto 0;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 768px) {
  .intro {
    display: flex;
    justify-content: space-around;
  }

  .intro p {
    max-width: 400px;
    padding-top: 3rem;
  }
}

@media (min-width: 992px) {
  .intro iframe {
    width: 480px;
    height: 360px;
  }

  .intro p {
    padding-top: 10rem;
  }
}
</style>
