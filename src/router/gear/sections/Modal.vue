<template>
  <section>
    <div
      id="modal"
      class="modal"
      @click="closeModal"
      :style="{ display: isVisible ? 'block' : 'none' }"
    >
      <img class="modal-content" :src="src" />
      <div id="caption">{{ caption }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modal",
  props: {
    src: String,
    caption: String,
    isVisible: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 50% auto;
  padding: 20px;
  border: 1px solid var(--text-pink);
  width: 80%;
  height: 80%;
  border-radius: var(--radius-5);
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 575px) {
  .modal-content {
    margin: 15% auto;
  }
}

@media (min-width: 1200px) {
  .modal-content {
    margin: 6% auto;
  }
}
</style>
