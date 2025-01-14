<template>
  <section class="section elements" aria-label="choose your element">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">Preparing for Takeoff</p>

      <h2 class="h2 section-title" data-reveal="bottom">
        Embrace Your <span class="span">Nature</span>
      </h2>

      <div class="natures" data-reveal="left">
        <div class="top-half">
          <div class="text-wrapper">
            <p class="section-subtitle">Our Squads:</p>

            <p class="team-nature fire" data-reveal="left">
              Our competitive players are represented by the element of
              <span>Fire.</span>
              These are the members who have earned the right to be on our team
              through forging their talents in the heat of online play.
            </p>

            <p class="team-nature wind" data-reveal="left">
              Content creators and our other non-competitive streamers are
              represented by the element of <span>Wind.</span> They announce our
              team's presence to the world and spread word of our achievements
              within the e-Sports landscape.
            </p>

            <p class="team-nature earth" data-reveal="left">
              <span>Earth</span> as an element represents our moderators, both
              on Discord and elsewhere. They help solidify our culture and
              ensure everyone has a positive experience while interacting with
              our channels.
            </p>
          </div>

          <div class="image-wrapper">
            <img
              class="card-image"
              :src="astronauts"
              alt="Man in green jacket holding paintball marker"
            />
          </div>
        </div>

        <div class="bottom-half">
          <p class="team-nature water" data-reveal="left">
            The element of <span>Water</span> represents our friends and allies
            who see the vision and want to be a part of the community. Life
            can't be sustained without it and we make sure to appreciate our
            supporters.
          </p>

          <p class="team-nature spirit" data-reveal="left">
            At the core of our team is the <span>Spirit</span>, which represents
            our leadership and support staff. This includes our CEO, co-CEO, and
            other background members who help our players succeed or work behind
            the scenes for the brand.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { astronauts } from "@/assets/images";

export default {
  name: "Elements",
  data() {
    return {
      astronauts,
    };
  },
};
</script>

<style>
.natures .section-subtitle {
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  text-align: left;
}

.team-nature {
  margin-bottom: 2rem;
}

.team-nature.spirit {
  margin-bottom: 0;
}

.team-nature span {
  display: inline;
  color: var(--text-champagne-pink);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
}

.natures .image-wrapper {
  display: none;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 768px) {
  .natures {
    max-width: 700px;
    margin: 0 auto;
  }

  .natures .top-half {
    display: flex;
    gap: 1.5rem;
  }

  .natures .text-wrapper {
    width: 100%;
  }

  .natures .image-wrapper {
    display: block;
    width: 95%;
    padding-top: 4rem;
  }
}
</style>
