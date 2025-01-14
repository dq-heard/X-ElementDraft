<template>
  <header :class="['header', { active: headerActive }]" data-header>
    <div class="container">
      <router-link to="/" class="logo">
        <img
          src="../assets/images/logo.png"
          width="60"
          height="60"
          alt="X Element Home"
        />
        <p>X-Element</p>
      </router-link>

      <nav :class="['navbar', { active: navActive }]" data-navbar>
        <ul class="navbar-list">
          <li class="navbar-item">
            <router-link
              to="/"
              class="navbar-link"
              data-nav-link
              @click="closeNav"
              >Home</router-link
            >
          </li>
          <li class="navbar-item">
            <router-link
              to="/about"
              class="navbar-link"
              data-nav-link
              @click="closeNav"
              >About</router-link
            >
          </li>
          <li class="navbar-item">
            <router-link
              to="/staff"
              class="navbar-link"
              data-nav-link
              @click="closeNav"
              >Staff</router-link
            >
          </li>
          <li class="navbar-item">
            <router-link
              to="/gear"
              class="navbar-link"
              data-nav-link
              @click="closeNav"
              >Gear</router-link
            >
          </li>
          <li class="navbar-item">
            <router-link
              to="/join"
              class="navbar-link join-link"
              data-nav-link
              @click="closeNav"
              >Join</router-link
            >
          </li>
        </ul>
      </nav>

      <router-link to="/join" class="btn" data-btn>Join Our Team</router-link>

      <button
        :class="['nav-toggle-btn', { active: navActive }]"
        aria-label="toggle menu"
        data-nav-toggler
        @click="toggleNav"
      >
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </button>
    </div>
  </header>
</template>

<script>
import { logo } from "@/assets/images";
import { onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      logo,
      navActive: false,
      headerActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
    },
    closeNav() {
      this.navActive = false;
    },
    checkHeaderActive() {
      this.headerActive = window.scrollY > 100;
    },
  },
  mounted() {
    const handleScroll = () => {
      this.checkHeaderActive();
    };

    window.addEventListener("scroll", handleScroll);

    // Check the header active state on page load
    this.checkHeaderActive();

    // Trigger animation on page load
    setTimeout(() => {
      this.headerActive = true;
    }, 0);

    // Clean up event listener when component is destroyed
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  },
};
</script>

<style>
.header .btn {
  display: none;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg-darker-purple);
  padding: 10px 12px;
  z-index: 4;
}

.header .logo {
  display: flex;
  align-items: center;
  font-weight: var(--weight-bold);
  font-size: var(--fontSize-3);
  text-transform: uppercase;
}

.header .logo p {
  padding-top: 0.75rem;
}

.header.active {
  position: fixed;
  animation: slideUP 1s ease forwards;
}

@keyframes slideUP {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-toggle-btn .line {
  height: 3px;
  width: 10px;
  margin-block: 4px;
  background-color: var(--text-gainsboro);
  border-radius: 8px;
  transition: var(--transition-1);
}

.nav-toggle-btn .line-2 {
  width: 20px;
}

.nav-toggle-btn .line-3 {
  margin-inline-start: auto;
}

.nav-toggle-btn.active .line-2 {
  transform: rotate(-45deg);
}

.nav-toggle-btn.active .line-1 {
  transform: rotate(45deg) translate(4px, 1.5px);
}

.nav-toggle-btn.active .line-3 {
  transform: rotate(45deg) translate(-3px, -1px);
}

.navbar {
  position: absolute;
  top: calc(100% - 1px);
  right: 12px;
  left: 12px;
  background-color: var(--bg-darker-purple);
  padding: 0 15px;
  clip-path: var(--clip-path-1);
  visibility: hidden;
  transition: clip-path 500ms var(--cubic-out),
    visibility 500ms var(--cubic-out);
}

.navbar.active {
  clip-path: var(--clip-path-2);
  visibility: visible;
}

.navbar-link {
  display: block;
  padding: 12px 25px;
  text-transform: uppercase;
  font-size: var(--fontSize-7);
  font-weight: var(--weight-semibold);
  color: var(--text-white);
}

.navbar-link:hover {
  color: var(--text-champagne-pink);
}

.navbar-item {
  border-block-start: 1px solid var(--border-space-cadet);
}

.navbar-item:last-child {
  border-block-end: 1px solid var(--border-space-cadet);
}

@media (min-width: 992px) {
  .nav-toggle-btn {
    display: none;
  }

  .navbar,
  .navbar.active {
    all: unset;
    display: block;
  }

  .navbar-item,
  .navbar-item:last-child {
    border: none;
  }

  .navbar-list {
    display: flex;
  }

  .header .btn {
    display: grid;
    text-align: center;
  }

  .join-link {
    display: none;
  }
}
</style>
