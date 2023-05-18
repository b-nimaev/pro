<template>
    <div class="header-wrapper">
        <NavbarComponent />
        <header>
     <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: false,
        }"
        :navigation="false"
        :modules="modules"
            :effect="'cube'"
        :grabCursor="true"
        :cubeEffect="{
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 0.94,
        }"
        class="mySwiper"
      >
        <swiper-slide><HomeHeaderSlideComponent /></swiper-slide>
        <swiper-slide><HomeHeaderSlideComponent /></swiper-slide>
        <swiper-slide><HomeHeaderSlideComponent /></swiper-slide>
      </swiper>
        </header>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import "swiper/css/effect-cube";

// import required modules
import { Autoplay, EffectCube, Pagination, Navigation } from 'swiper';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation, EffectCube],
        };
    },
};
</script>


<style lang="scss" scoped>
header {
    padding-top: 40px;
}

.swiper {
    margin: auto;
}

.header-wrapper {
    min-height: 100vh;
    background-image: linear-gradient(77.91deg, rgba(193, 255, 214, 0.2) -13.97%, rgba(61, 79, 243, 0) 25.62%), linear-gradient(104.73deg, rgba(255, 255, 255, 0.35) -13%, rgba(170, 245, 255, 0.196) 21.28%), linear-gradient(254.3deg, rgba(49, 230, 255, 0.01) -15.75%, rgba(255, 255, 255, 0.22) 45.62%);
}

@media screen and (max-width: 992px) {
    .header-wrapper {
        border-radius: 0;
        margin-bottom: 0;
    }
}

@media screen and (max-width: 760px) {
    header {
        padding-bottom: 20px;
    }
}
</style>