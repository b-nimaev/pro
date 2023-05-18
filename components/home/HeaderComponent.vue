<template>
    <div class="header-wrapper">
        <NavbarComponent />
        <header>
            <swiper :slides-per-view="1" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide>
                    <HomeHeaderSlideComponent></HomeHeaderSlideComponent>
                </swiper-slide>
                <swiper-slide>
                    <HomeHeaderSlideComponent></HomeHeaderSlideComponent>
                </swiper-slide>
                <swiper-slide>
                    <HomeHeaderSlideComponent></HomeHeaderSlideComponent>
                </swiper-slide>
            </swiper>
        </header>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
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