<template>
  <section class="section playlist" aria-label="more about us">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">More About Us</p>

      <h2 class="h2 section-title" data-reveal="bottom">
        <span class="span">Behind</span> the Scenes
      </h2>

      <div data-reveal="left">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/videoseries?si=7shdlK6SsPPpWXwg&amp;list=PLjZJjTdaS1_JSFXtm2kLX9S-ftCWq8PFP"
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
  name: "Playlist",
};
</script>

<style>
.playlist {
  text-align: center;
}
</style>
