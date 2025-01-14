<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <img
              :src="logo"
              class="footer-logo"
              width="150"
              height="150"
              loading="lazy"
              alt="X-Element logo"
            />
          </router-link>
          <div class="footer-wrapper">
            <p class="footer-text">Follow Our Socials!</p>
            <ul class="social-list">
              <li v-for="(social, index) in socialLinks" :key="index">
                <a :href="social.url" class="social-link">
                  <ion-icon :name="social.icon"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-list">
          <p class="title footer-list-title has-after">Useful Links</p>
          <ul>
            <li v-for="(link, index) in usefulLinks" :key="index">
              <router-link
                v-if="link.isRouterLink"
                :to="link.url"
                class="footer-link"
              >
                {{ link.text }}
              </router-link>
              <a
                v-else
                :href="link.url"
                class="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <p class="title footer-list-title has-after">Contact Us</p>
          <div
            class="contact-item"
            v-for="(contact, index) in contactItems"
            :key="index"
          >
            <span class="span">{{ contact.label }}</span>
            <div v-if="contact.type === 'address'" class="contact-link">
              {{ contact.value }}
            </div>
            <a v-else :href="`mailto:${contact.value}`" class="contact-link">{{
              contact.value
            }}</a>
          </div>
        </div>
        <div class="footer-list">
          <p class="title footer-list-title has-after">Newsletter Signup</p>
          <form action="/" method="get" class="footer-form">
            <input
              type="email"
              name="email_address"
              required
              placeholder="Your Email"
              autocomplete="off"
              class="input-field"
            />
            <button type="submit" class="btn" data-btn>Subscribe Now</button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          © 2023 - {{ currentYear }} X-Element LLC - All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { logo } from "@/assets/images";
import { RouterLink } from "vue-router";

export default {
  components: { RouterLink },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      logo,
      socialLinks: [
        {
          url: "https://www.facebook.com/groups/1176119786245217/?ref=share",
          icon: "logo-facebook",
        },
        { url: "https://www.tiktok.com/@xelementgaming", icon: "logo-tiktok" },
        {
          url: "https://www.instagram.com/x_elementgaming/",
          icon: "logo-instagram",
        },
        {
          url: "https://www.youtube.com/channel/UCG9KpfH_p__Dacvsxd00Dzg",
          icon: "logo-youtube",
        },
      ],
      usefulLinks: [
        {
          text: "Member's Agreement",
          url: "https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/membership_agrement_2.1%20(2)%20(3).pdf",
          isRouterLink: false,
        },
        {
          text: "Non-Discrimination",
          url: "https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/NON-DISCRIMINATION_AGREEMENT-2.1%20(7)%20(2)%20(1).pdf",
          isRouterLink: false,
        },
        {
          text: "Responsibilities",
          url: "https://img1.wsimg.com/blobby/go/9a8b98fd-692e-476b-898e-81f244f26c4b/Parents_Agreement-_X_Element-2.1%20(1)%20(1).pdf",
          isRouterLink: false,
        },
        { text: "Privacy Policy", url: "/legal/privacy", isRouterLink: true },
        {
          text: "Terms and Conditions",
          url: "/legal/terms",
          isRouterLink: true,
        },
      ],
      contactItems: [
        {
          label: "Location:",
          type: "address",
          value: "Junction City, KS 66441",
        },
        {
          label: "Join Us:",
          type: "email",
          value: "officialxelement@gmail.com",
        },
      ],
    };
  },
};
</script>

<style>
.footer-top {
  padding-top: 4rem;
  padding-bottom: 2rem;
}

.footer-top .container {
  display: grid;
  gap: 35px;
}

.footer-brand {
  margin: 0;
}

.footer-wrapper {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.footer-logo {
  display: block;
}

.footer-text {
  margin-block: 20px 25px;
  display: none;
}

.social-list {
  display: flex;
  gap: 10px;
}

.footer .social-link {
  width: 40px;
  height: 40px;
  background-color: var(--bg-purple-alpha-30);
  display: grid;
  place-items: center;
  clip-path: var(--clip-path-8);
  transition: var(--transition-1);
}

.footer .social-link:is(:hover, :focus-visible) {
  background-color: var(--bg-purple);
  transform: translateY(-2px);
}

.footer-list {
  padding-bottom: 3rem;
}

.footer-list-title {
  font-size: var(--fontSize-3);
  font-weight: var(--weight-semibold);
  line-height: 1;
  position: relative;
  padding-block-end: 10px;
  margin-block-end: 20px;
  max-width: max-content;
}

.footer-list-title::after {
  bottom: 0;
  left: 0;
  width: 50%;
  height: 4px;
  background-color: var(--bg-purple);
}

.footer-link {
  padding-block: 5px;
  color: var(--text-white);
  transition: var(--transition-1);
}

.footer-link:is(:hover, :focus-visible) {
  color: var(--text-pink);
}

.contact-item .span {
  color: var(--text-purple);
  font-size: var(--fontSize-7);
  text-transform: uppercase;
  font-weight: var(--weight-semibold);
}

.contact-item:not(:last-child) {
  margin-block-end: 15px;
}

.input-field {
  background-color: var(--bg-darker-purple);
  color: var(--text-white);
  font-size: var(--fontSize-5);
  padding: 18px 12px;
  box-shadow: var(--shadow);
  border: 2px solid var(--border-purple-alpha-30);
  margin-block-end: 15px;
  outline: none;
}

.input-field::placeholder {
  color: var(--text-gainsboro);
}

.footer-bottom {
  clip-path: var(--clip-path-9);
  background-color: var(--bg-darker-purple);
}

.copyright {
  padding: 30px 20px;
}

/*-----------------------------------*\
    #MEDIA QUERIES
\*-----------------------------------*/

@media (max-width: 375px) {
  .footer-brand {
    justify-content: center;
  }
}

@media (min-width: 575px) {
  .footer-top .container {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  .footer-brand {
    display: block;
    justify-content: space-evenly;
    gap: 10%;
  }

  .footer-logo {
    display: block;
    width: 175px;
    height: auto;
    margin-top: -4rem;
  }

  .footer-text {
    display: block;
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  .contact-inputs {
    display: flex;
    gap: 1rem;
  }

  .contact-form {
    padding-left: 0;
    padding-right: 0;
    width: 450px;
    margin: 0 auto;
  }
}

@media (min-width: 768px) {
  .footer-top {
    padding-top: 8rem;
  }
}

@media (min-width: 992px) {
  .footer-top .container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
