<template>
  <section class="section roles" aria-label="we are recruiting">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">Ready to Excel?</p>
      <h2 class="h2 section-title" data-reveal="bottom">
        Know Your <span class="span">Role</span>
      </h2>
      <div class="welcome" data-reveal="right">
        <div class="text-wrapper">
          <p class="role-intro">
            Greetings, new recruit! We're seeking passionate & skilled pros to
            join us in various roles. Below, you will find a list of positions
            we currently have available.<br />
            <span>
              If you're looking for an exciting opportunity to contribute your
              talents and secure your spot on a dynamic team, we encourage you
              to apply.
            </span>
            <span>
              How to Apply: If you're interested in any of these, please send
              your professional resume
              <router-link to="/bios/aaron"><strong>here.</strong></router-link>
            </span>
          </p>
        </div>
        <div class="image-wrapper">
          <img
            class="card-image"
            :src="daryl"
            alt="Man in X-Element shirt pointing at you"
          />
        </div>
      </div>
      <div class="role-names">
        <p class="section-subtitle" data-reveal="left">Available Positions:</p>
        <ol class="role-list">
          <li
            v-for="role in roles"
            :key="role.title"
            class="team-role"
            data-reveal="left"
          >
            <div class="title-section">
              <p class="role-title">{{ role.title }}:</p>
              <button
                class="desc-link has-before"
                @click="toggleAnswers($event)"
              >
                <span class="read-more">Expand</span>
                <span class="read-less">Close</span>
              </button>
            </div>
            <ul class="role-desc">
              <li v-for="desc in role.description" :key="desc">{{ desc }}</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
import { daryl } from "@/assets/images";

export default {
  name: "Roles",
  data() {
    return {
      roles: [
        {
          title: "Discord Mod Manager",
          description: [
            "Responsible for managing and organizing the moderation team.",
            "Ensures a positive and inclusive cultural environment.",
            "Proven history in community management and conflict resolution is preferred.",
          ],
        },
        {
          title: "Social Media Manager",
          description: [
            "Manages our social media presence across various platforms.",
            "Creates engaging content, schedules posts, and interacts with the community.",
            "Proficiency in social media management tools and analytics are a plus.",
          ],
        },
        {
          title: "Recruiting Manager",
          description: [
            "Leads the recruitment process for new team members.",
            "Identifies talent, conducts interviews, and facilitates onboarding.",
            "Strong interpersonal skills and a good understanding of the industry are desired.",
          ],
        },
        {
          title: "Content Creation Manager",
          description: [
            "Oversees content creation efforts for our team.",
            "Coordinates with content creators to develop engaging and high-quality posts.",
            "Expertise in content creation, video editing, and graphic design is valuable.",
          ],
        },
        {
          title: "Head Coaches (Multiple)",
          description: [
            "Provide guidance, leadership, and mentorship to the squad of your respective game.",
            "Develop training regimens, manage player performances, and optimize team synergy.",
            "Coaching experience and knowledge of your chosen game's competitive scene are required.",
          ],
        },
        {
          title: "Assistant Coaches (Multiple)",
          description: [
            "Supplements the Head Coach's training and strategy implementation.",
            "Supports players during matches, competitions, and practice sessions.",
            "Familiarity with gameplay tactics and mechanics of your chosen game are essential.",
          ],
        },
        {
          title: "Team Analysts (Multiple)",
          description: [
            "Monitors squad performances, opponents, and gameplay data/strategies.",
            "Provides feedback with insights and recommendations for improvements.",
            "Strong analytical skills and a deep understanding of your chosen game are necessary.",
          ],
        },
      ],
      daryl,
    };
  },
  methods: {
    toggleAnswers(event) {
      const button = event.target;
      const answer = button.parentNode.nextElementSibling;
      answer.classList.toggle("show-text");
      button.classList.toggle("show-text");

      const answers = this.$el.querySelectorAll(".role-desc");
      answers.forEach((otherAnswer) => {
        if (otherAnswer !== answer) {
          otherAnswer.classList.remove("show-text");
          otherAnswer.previousElementSibling
            .querySelector(".desc-link")
            .classList.remove("show-text");
        }
      });
    },
  },
};
</script>

<style>
/*-----------------------------------*\
  #ROLES
\*-----------------------------------*/

.welcome {
  display: none;
}

.role-names .section-subtitle {
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  text-align: left;
}

.team-role {
  margin-bottom: 2rem;
}

.title-section {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.welcome .text-wrapper {
  padding-bottom: 3rem;
}

.welcome .text-wrapper a {
  display: inline;
  color: var(--text-champagne-pink);
}

.welcome .text-wrapper a:hover {
  color: var(--text-pink);
}

.welcome .image-wrapper .card-image {
  width: 250px;
  border: 4px solid var(--bg-purple-alpha-30);
  background-color: var(--bg-darker-purple);
}

.title-section .desc-link {
  color: var(--text-gainsboro);
  font-size: var(--fontSize-7);
  font-weight: var(--weight-bold);
  text-transform: uppercase;
}

.title-section .desc-link {
  max-width: max-content;
  margin-block-start: 5px;
  padding-inline-start: 30px;
  transition: var(--transition-1);
}

.title-section .desc-link::before {
  top: 50%;
  left: 0;
  transform: translateY(-100%);
  width: 20px;
  height: 4px;
  background-color: var(--bg-purple);
}

.title-section .desc-link:is(:hover, :focus-visible) {
  color: var(--text-pink);
}

.role-desc,
.read-less,
.desc-link.show-text .read-more {
  display: none;
}

.role-desc.show-text,
.desc-link.show-text .read-less {
  display: block;
}

.role-title {
  font-weight: var(--weight-bold);
}

.role-desc li {
  padding-bottom: 0.5rem;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 768px) {
  .roles .container {
    width: 768px;
  }

  .welcome {
    display: flex;
    gap: 1.5rem;
  }

  .welcome .text-wrapper {
    width: 90%;
    padding-top: 0;
  }

  .role-intro span {
    padding-top: 1rem;
  }
}

@media (min-width: 992px) {
  .welcome {
    padding-top: 1rem;
  }
}
</style>
