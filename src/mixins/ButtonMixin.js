// buttonMixin.js
export default {
  methods: {
    buttonHoverRipple(event) {
      event.currentTarget.style.setProperty("--top", `${event.offsetY}px`);
      event.currentTarget.style.setProperty("--left", `${event.offsetX}px`);
    },
  },
  mounted() {
    const buttons = document.querySelectorAll("[data-btn]");
    buttons.forEach((button) => {
      button.addEventListener("mousemove", this.buttonHoverRipple);
    });
  },
  beforeDestroy() {
    const buttons = document.querySelectorAll("[data-btn]");
    buttons.forEach((button) => {
      button.removeEventListener("mousemove", this.buttonHoverRipple);
    });
  },
};
