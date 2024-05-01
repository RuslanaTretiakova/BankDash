<template>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :navigation="true"
    :loop="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="quick-transfer-swiper">
      <img class="quick-transfer-swiper__img" src="/swiper/Livia.jpg" alt="Avatar" />
      <div>
        <h5 class="quick-transfer-swiper__name">Livia Bator</h5>
        <p class="quick-transfer-swiper__position">CEO</p>
      </div>
    </swiper-slide>
    <swiper-slide class="quick-transfer-swiper">
      <img
        class="quick-transfer-swiper__img quick-transfer-swiper__img--bottom"
        src="/swiper/Randy.jpg"
        alt="Avatar"
      />
      <div>
        <p class="quick-transfer-swiper__name">Randy Press</p>
        <p class="quick-transfer-swiper__position">Director</p>
      </div>
    </swiper-slide>
    <swiper-slide class="quick-transfer-swiper">
      <img class="quick-transfer-swiper__img" src="/swiper/Workman.jpg" alt="Avatar" />
      <div>
        <p class="quick-transfer-swiper__name">Workman</p>
        <p class="quick-transfer-swiper__position">Designer</p>
      </div>
    </swiper-slide>
    <swiper-slide class="quick-transfer-swiper">
      <img class="quick-transfer-swiper__img" src="/swiper/Livia.jpg" alt="Avatar" />
      <div>
        <h5 class="quick-transfer-swiper__name">Livia Bator</h5>
        <p class="quick-transfer-swiper__position">CEO</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss">
.mySwiper {
  max-width: 70%;
}

.quick-transfer-swiper {
  width: 100%;
  height: 100%;
  max-width: 445px;

  &__slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  &__img {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
    object-fit: cover;
    border-radius: 100%;
    aspect-ratio: 1 / 1;

    &--bottom {
      object-position: top;
    }
  }

  &__name,
  &__position {
    margin: 0px;
    font-size: 0.75rem;
  }

  &__position {
    color: var(--help-color-3);
  }
}
</style>
