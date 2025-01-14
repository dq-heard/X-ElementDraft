<template>
  <section class="section teams" aria-label="our teams">
    <div class="container">
      <h2 class="h2 section-title" data-reveal="bottom">
        Welcome to <span class="span">X-Element</span>
      </h2>

      <p class="section-text" data-reveal="bottom">
        X-Element is a Professional e-Sports team that's growing daily. What are
        you waiting for?
      </p>

      <ul class="teams-list">
        <li
          v-for="team in teams"
          :key="team.name"
          class="team-card"
          data-reveal="bottom"
        >
          <img class="card-image" :src="team.image" :alt="team.alt" />
          <div class="card-overlay"></div>
          <h3 class="card-heading">
            <a href="/join" class="card-title">{{ team.name }}</a>
          </h3>
        </li>

        <li class="team-card paintball-card" data-reveal="bottom">
          <img
            class="card-image"
            :src="paintball"
            alt="Man in green jacket holding paintball marker"
          />
          <div class="card-overlay"></div>
          <h3 class="card-heading">
            <a href="/join" class="card-title">Paintball</a>
          </h3>
        </li>
      </ul>

      <div class="paintball" data-reveal="left">
        <div class="image-wrapper">
          <img
            class="card-image"
            :src="paintball"
            alt="Man in green jacket holding paintball marker"
          />
          <div class="card-overlay"></div>
          <h3 class="card-heading">
            <a href="/join" class="card-title">Paintball</a>
          </h3>
        </div>

        <div class="text-wrapper">
          <p class="paintball-desc">
            Are you trying to take your passion for gaming to the most extreme
            level? Step into the immersive arena of Paintball battles that go
            far beyond a screen.<br />
            <span class="span1"
              >Equipped with paintball markers and protective gear, our players
              navigate thrilling maps relying on stealth, accuracy, and teamwork
              to triumph over opponents.<br
            /></span>
            <span class="span2"
              >We blend cunning tactics, lightning-fast reflexes, and seamless
              coordination to dominate the competition and emerge as champions
              of the Paintball field.</span
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  apexlegends,
  fortnite,
  overwatch,
  paintball,
  rocketleague,
  valorant,
  warzone,
} from "@/assets/images";

export default {
  name: "Teams",
  data() {
    return {
      teams: [
        { name: "CoD: Warzone", image: warzone, alt: "Call of Duty: Warzone" },
        { name: "Rocket League", image: rocketleague, alt: "Rocket League" },
        { name: "Apex Legends", image: apexlegends, alt: "Apex Legends" },
        { name: "Valorant", image: valorant, alt: "Valorant" },
        { name: "Fortnite", image: fortnite, alt: "Fortnite" },
        { name: "Overwatch", image: overwatch, alt: "Overwatch" },
      ],
      paintball, // Keep the paintball image for the section below if needed
    };
  },
};
</script>

<style>
.teams {
  padding-top: 8rem;
}

.team-card {
  position: relative;
  margin: 10px auto;
  overflow: hidden;
}

.teams-list .team-card {
  max-width: 328px;
}

.team-card:hover .card-image,
.team-card:hover .card-heading,
.paintball .image-wrapper:hover .card-image,
.paintball .image-wrapper:hover .card-heading {
  transform: scale(1.1);
}

.team-card:hover .card-overlay,
.paintball .image-wrapper:hover .card-overlay {
  opacity: 0.5;
}

.team-card .h3 {
  margin-block: 15px 10px;
}

.team-card .card-title,
.paintball .image-wrapper .card-title {
  display: inline;
  background-image: linear-gradient(to left, var(--bg-pink), var(--bg-pink));
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0% 4px;
  transition: var(--transition-2);
}

.team-card .card-title:is(:hover, :focus-visible),
.paintball .image-wrapper .card-title:is(:hover, :focus-visible) {
  background-size: 100% 4px;
}

.card-image {
  width: 100%;
  transition: transform 0.5s ease-in-out;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s ease-in-out;
}

.card-heading {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - (100px / 2));
  font-size: 20px;
  width: 100px;
  text-align: center;
}

.paintball {
  display: none;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 575px) {
  .teams-list {
    display: flex;
    flex-wrap: wrap;
  }

  .team-card {
    width: calc(50% - 20px);
  }
}

@media (min-width: 992px) {
  .teams {
    padding-top: 13rem;
  }

  .team-card {
    width: calc(33.33% - 20px);
    margin: 10px;
  }

  .team-card img {
    height: 470px;
    object-fit: cover;
  }

  .paintball-card {
    display: none;
  }

  .paintball {
    display: flex;
    gap: 1.5rem;
    margin: 2rem auto 0;
    padding: 0 1.3rem;
  }

  .paintball .text-wrapper {
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;
  }

  .paintball .image-wrapper {
    position: relative;
    margin: 0 auto;
    overflow: hidden;
  }

  .paintball-desc .span1 {
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
  }

  .paintball-desc .span2 {
    display: none;
  }
}

@media (min-width: 1200px) {
  .paintball .text-wrapper {
    padding-top: 3.5rem;
  }

  .paintball-desc .span2 {
    display: block;
    padding-top: 0.5rem;
  }
}
</style>
