<template>
  <section class="section team" aria-label="meet the staff">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">Feel the Spirit</p>

      <h2 class="h2 section-title" data-reveal="bottom">
        Meet Our <span class="span">Core</span>
      </h2>

      <swiper
        :loop="true"
        :cssMode="true"
        :grabCursor="true"
        :navigation="true"
        :pagination="true"
        :modules="modules"
        class="staff-slider"
      >
        <swiper-slide
          class="slide"
          v-for="(member, index) in teamMembers"
          :key="index"
        >
          <div class="content">
            <img class="staff-img" :src="member.image" :alt="member.alt" />
            <div class="staff-data">
              <h3>{{ member.name }}</h3>
              <span>{{ member.position }}</span>
              <router-link v-if="member.link" :to="member.link" class="btn"
                >Find Out More</router-link
              >
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <h3 data-reveal="left">The Spirit Squad:</h3>
      <ol id="spirit">
        <li>
          <p>General Community Manager:</p>
          <ul>
            <li>TexGamer</li>
          </ul>
        </li>

        <li>
          <p>Team Video Editor:</p>
          <ul>
            <li>Creamah</li>
          </ul>
        </li>

        <li>
          <p>Team Data Analysis:</p>
          <ul>
            <li>Jerm6760</li>
          </ul>
        </li>

        <li>
          <p>Team Content Manager:</p>
          <ul>
            <li>Bulldog</li>
          </ul>
        </li>

        <li>
          <p>Social Media Team:</p>
          <ul>
            <li>Yuki da Ninja,</li>
            <li>Danny Slasher,</li>
            <li>&</li>
            <li>Fearlessly Ky</li>
          </ul>
        </li>

        <li>
          <p>Web Development Team:</p>
          <ul>
            <li>Future</li>
            <li>&</li>
            <li>DeQueue</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import { aaron, future, sherika, spoon } from "@/assets/images";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export default {
  name: "Team",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  data() {
    return {
      teamMembers: [
        {
          image: aaron,
          alt: "King Aaron picture",
          name: "King Aaron",
          position: "Chief Executive Officer",
          link: "/bios/aaron",
        },
        {
          image: spoon,
          alt: "BigBigSpoon picture",
          name: "BigBigSpoon",
          position: "Chief Marketing Officer",
          link: "/bios/spoon",
        },
        {
          image: future,
          alt: "Future's logo",
          name: "Future",
          position: "Chief Operating Officer",
          link: "/bios/future",
        },
        {
          image: sherika,
          alt: "Sherika's picture",
          name: "Sherika S.",
          position: "Head of HR",
        },
      ],
    };
  },
};
</script>

<style>
.team {
  padding-top: 14rem;
  overflow-x: hidden;
}

.slide {
  min-height: 70vh;
  background-size: cover !important;
  background-position: center !important;
  padding: 2rem 9% 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide h3,
.slide .btn {
  margin-top: 1rem;
}

.staff-img {
  width: 200px;
  border: 4px solid var(--bg-purple-alpha-30);
  background-color: var(--bg-darker-purple);
}

.staff h3 {
  padding-top: 3rem;
}

.swiper-button-next,
.swiper-button-prev {
  color: var(--bg-purple) !important;
}

.swiper-pagination-bullet {
  background: var(--text-white);
}

.swiper-pagination-bullet-active {
  background: var(--bg-pink);
}

#spirit {
  margin: 0;
  padding: 0;
  display: inline-block;
  white-space: nowrap;
  animation: floatText 35s infinite linear;
  padding-left: 105%; /*Initial offset*/
  padding-right: 5%;
}

#spirit li {
  display: inline-flex;
  margin: 0 10px;
  align-items: center;
}

#spirit p {
  margin: 8px;
}

#spirit ul li {
  margin: 0 2px;
}

#spirit::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}

#spirit:hover {
  animation-play-state: paused;
}

@keyframes floatText {
  to {
    transform: translateX(-100%);
  }
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 992px) {
  #spirit {
    padding-left: 115%;
    padding-right: 20%;
  }
}
</style>
