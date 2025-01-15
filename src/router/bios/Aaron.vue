<template>
  <section class="section bio">
    <div class="container">
      <div class="bio-wrapper" data-reveal="left">
        <div class="image-wrapper">
          <h2 class="h2 section-title" data-reveal="bottom">King Aaron</h2>

          <img class="staff-img" :src="aaron" alt="King Aaron picture" />
        </div>

        <div class="text-wrapper">
          <p class="bio-desc">
            Starting with Call of Duty WWII as the first game I played seriously
            online to moving to Fortnite and having the epiphany to start an
            e-Sports team, X-Element is truly a display of the impact
            competitive gaming has had on my life.<br />
            <span class="span1"
              >With establishing an LLC and assembling a core team to get
              started, the realization came that running a professional
              operation is a full-time job. This led to me joining Full Sail
              University to pursue a Business Game & e-Sports Degree, which
              helps me to better support our members.<br
            /></span>
            <span class="span2">
              My goal is to steer X-Element towards a more strategic approach in
              the e-Sports scene. Utilizing my creativity, vision, leadership,
              and guidance, I aim to lead the X-Element staff at all levels to
              achieve their fullest potential.</span
            >
          </p>

          <p class="role-interest">
            If you're interested in joining the team, add
            <a href="https://www.youtube.com/watch?v=EFPygyDnqtw"
              ><strong>@xkingaaron</strong></a
            >
            on Discord and send your resume. Please be sure to include the game
            and position you're applying for within your message. We also
            encourage you to highlight your relevant skills, experience, and
            passion for gaming when applying.<br />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { aaron, bio_bg_1 } from "@/assets/images";

export default {
  name: "Aaron",
  data() {
    return {
      aaron,
    };
  },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${bio_bg_1})`;
  },
  beforeDestroy() {
    document.getElementById("app").style.backgroundImage = "";
  },
};
</script>

<style>
.bio {
  padding-top: 9rem;
  text-align: center;
  min-height: 85vh;
}

.staff-img {
  margin: 0 auto 2rem;
}

.bio span,
.role-interest {
  padding-top: 2rem;
}

.span1,
.span2 {
  display: none;
}

.role-interest a,
.bio-desc strong {
  display: inline;
  font-weight: var(--weight-semibold);
  color: var(--text-champagne-pink);
}

.role-interest a:hover {
  color: var(--text-pink);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 575px) {
  .span1 {
    display: block;
  }
}

@media (min-width: 768px) {
  .bio {
    padding-top: 13rem;
    text-align: center;
    min-height: 90vh;
  }

  .bio-wrapper {
    display: flex;
    gap: 2rem;
  }

  .bio .image-wrapper {
    padding-top: 3rem;
  }

  .bio .text-wrapper {
    padding-top: 1rem;
  }
}

@media (min-width: 992px) {
  .bio {
    padding-top: 14rem;
    text-align: left;
  }

  .bio .image-wrapper {
    padding-top: 0;
  }

  .bio .text-wrapper {
    padding-top: 7rem;
  }

  .bio .span2 {
    display: block;
  }

  .bio .staff-img {
    width: 425px;
  }
}

@media (min-width: 1200px) {
  .bio .text-wrapper {
    padding-top: 13rem;
  }
}
</style>
