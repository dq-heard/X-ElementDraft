<template>
  <section class="section identity" aria-label="mission and identity">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">What Is X-Element?</p>

      <h2 class="h2 section-title" data-reveal="bottom">
        Mission and <span class="span">Identity</span>
      </h2>

      <div class="mission" data-reveal="left">
        <article class="mission-desc">
          <p>
            The X-Element logo symbolizes the universal challenge that every one
            of us faces in our lives. The 'X' serves as a metaphor for the core
            issue that each of us must confront: "How do I carve my niche in
            this landscape?" The 'E' represents us as individuals and the power
            we possess as a group by tying our love for gaming into our
            professional aspirations, likening those skills to distinct
            elements. When they unite, they collectively decode this riddle,
            paving the way to a respected and renowned presence in e-Sports.
          </p>

          <p class="p1">
            Constructing a thriving, competitive team is a formidable challenge.
            Therefore, X-Element emphasizes a rigorous selection process,
            diligently searching for recruits distinguished by their exceptional
            skills, unwavering commitment, and sense of teamwork. Each member's
            distinct strengths collectively form the bedrock of what we need to
            succeed.
          </p>

          <p class="p2">
            We also take pride in discovering untapped, overlooked talent and
            are committed to finding these individuals. We understand how people
            may go unseen due to various circumstances and X-Element aims to
            provide them with opportunities to shine. By offering a platform for
            these talents to showcase their skills, X-Element is not only
            striving to strengthen their own team, but also contribute to the
            overall growth and diversity of a new, cutting-edge industry.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Identity",
};
</script>

<style>
.identity {
  padding-top: 16rem;
  text-align: center;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 575px) {
  .p2 {
    display: block;
    padding-top: 1.5rem;
  }
}

@media (min-width: 768px) {
  .p1 {
    display: block;
    padding-top: 1.5rem;
  }
}

@media (min-width: 992px) {
  .identity .container {
    max-width: 940px;
  }
}
</style>
