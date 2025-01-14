<template>
  <section class="section connect" id="contact">
    <div class="container">
      <p class="section-subtitle" data-reveal="bottom">What Are We Up To?</p>

      <h2 class="h2 section-title" data-reveal="bottom">
        <span class="span">Connect</span> With Us
      </h2>

      <form class="contact-form" method="POST">
        <div class="contact-inputs">
          <div class="contact-content">
            <label for="" class="contact-label">Name:</label>
            <input type="text" class="contact-input" name="name" required />
          </div>

          <div class="contact-content">
            <label for="" class="contact-label">E-mail:</label>
            <input type="email" class="contact-input" name="email" required />
          </div>
        </div>

        <div class="contact-content">
          <label for="" class="contact-label">Message:</label>
          <textarea
            class="contact-input"
            name="message"
            cols="0"
            rows="7"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn button-flex">Send Message</button>

        <input type="hidden" name="_subject" value="Contact Form Submitted" />
        <input type="hidden" name="_honeypot" value="" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Connect",
};
</script>

<style>
.connect {
  text-align: center;
}

.contact-inputs {
  gap: 0;
}

.contact-inputs .contact-content {
  clip-path: var(--clip-path-3);
}

.contact-content {
  background-color: var(--bg-purple-alpha-30);
  padding: 0.75rem 1rem 0.25rem;
  margin-bottom: 1rem;
}

.contact-content textarea {
  resize: none;
}

.contact-input {
  width: 100%;
  background-color: transparent;
  color: var(--text-white);
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (max-width: 375px) {
  .contact-form {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (min-width: 575px) {
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
</style>
