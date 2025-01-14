<template>
  <main>
    <Merch @open-modal="openModal"></Merch>
    <Apparel @open-modal="openModal"></Apparel>
    <Modal
      :src="modalImageSrc"
      :caption="modalCaption"
      :isVisible="isModalVisible"
      @close="closeModal"
    ></Modal>
  </main>
</template>

<script>
import { body_bg_3 } from "@/assets/images";
import Apparel from "./sections/Apparel.vue";
import Merch from "./sections/Merch.vue";
import Modal from "./sections/Modal.vue";

export default {
  name: "Gear",
  components: { Apparel, Merch, Modal },
  data() {
    return {
      modalImageSrc: "",
      modalCaption: "",
      isModalVisible: false,
    };
  },
  mounted() {
    document.getElementById(
      "app"
    ).style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${body_bg_3})`;
  },
  methods: {
    openModal(imgSrc, imgAlt) {
      this.modalImageSrc = imgSrc;
      this.modalCaption = imgAlt || "";
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
.merch {
  padding-top: 16rem;
  padding-bottom: 0;
}

.merch-item:not(.single) {
  margin-block-end: 90px;
}

.merch-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.merch-card::before {
  top: 50%;
  background-image: var(--gradient-1);
  transform: translateY(-50%);
  width: 90%;
  height: 80px;
  z-index: -1;
  opacity: 0.3;
  border-radius: var(--radius-5);
}

.merch-card.left::before {
  right: 0;
  clip-path: var(--clip-path-4);
}

.merch-card.right::before {
  left: 0;
  clip-path: var(--clip-path-6);
}

.merch-card .card-title {
  text-transform: uppercase;
}

.merch-card.left .card-title {
  margin-inline-end: 50px;
  text-align: right;
}

.merch-card.right .card-title {
  margin-inline-start: 50px;
  text-align: left;
}

.merch-card .modal-btn {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-image: var(--gradient-1);
  width: max-content;
  padding: 6px 20px;
  font-size: var(--fontSize-7);
  font-weight: var(--weight-semiBold);
  text-transform: uppercase;
  border-radius: var(--radius-3);
  cursor: pointer;
}

.merch-card.left .modal-btn {
  clip-path: var(--clip-path-5);
}

.merch-card.right .modal-btn {
  clip-path: var(--clip-path-7);
}

.merch-card .merch-img {
  width: 30%;
  border-radius: var(--radius-5);
}

.merch-card.right .merch-img {
  order: 1;
}

.merch-sale {
  margin-block: 50px 30px;
}

.merch-sale :is(.price) {
  text-align: center;
}

.merch-sale .price {
  color: var(--text-white);
  font-size: var(--fontSize-1);
  font-weight: var(--weight-bold);
  line-height: 1;
  margin-block: 5px;
}

.merch-item .social-wrapper {
  justify-content: center;
}

.merch-item .social-link {
  color: var(--text-white);
  font-size: 3.5rem;
  transition: var(--transition-1);
}

.merch-item .social-link:is(:hover, :focus-visible) {
  color: var(--text-purple);
}

.apparel {
  padding-top: 0;
  padding-bottom: 3rem;
}

/*-----------------------------------*\
  #MEDIA QUERIES
\*-----------------------------------*/

@media (max-width: 320px) {
  .merch-card .modal-btn {
    bottom: -35px;
  }
}

@media (min-width: 575px) {
  .merch-card .modal-btn {
    bottom: -10px;
  }

  .merch-card.left .modal-btn {
    left: auto;
    right: -3%;
  }

  .merch-card.right .modal-btn {
    left: 25%;
  }
}

@media (min-width: 768px) {
  .merch-card::before {
    height: 110px;
  }

  .merch-card .modal-btn {
    padding-block: 12px;
    bottom: -10px;
  }

  .merch-sale .price {
    font-size: var(--fontSize-2);
  }

  .merch-card .card-title {
    --fontSize-3: 2.8rem;
  }

  .merch-card.left .modal-btn {
    right: -1%;
  }

  .merch-card.right .modal-btn {
    left: 20%;
  }
}

@media (min-width: 992px) {
  .merch-item {
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
    align-items: center;
  }

  .merch-item.single {
    margin-block-end: 90px;
  }

  .merch-card .modal-btn {
    left: 50%;
    bottom: -40px;
    transform: translateX(-50%);
  }

  .merch-card.right .modal-btn {
    left: 40%;
  }

  .apparel {
    padding-bottom: 0;
  }
}

@media (min-width: 1200px) {
  .merch .merch-item {
    gap: 1.5rem;
  }

  .merch-card {
    width: 475px;
  }

  .merch-card .merch-img {
    max-height: 180px;
  }

  .merch-card .modal-btn {
    bottom: -20px;
  }

  .merch .merch-card .modal-btn {
    bottom: -30px;
  }

  .merch-card.right .modal-btn {
    left: 35%;
  }

  .apparel .merch-item:first-of-type {
    gap: 1rem;
  }
}
</style>
