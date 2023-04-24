<template>
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
    padding-bottom: 80px;
}

.pagewrapper.dark {
    header {
        background-color: #00000047;
        color: #fff;
        background-image: linear-gradient(45deg, black, transparent);

        .buttons {
            button.choose {
                &:hover {
                    border-color: #FF6610;
                }

                &:nth-child(2) {
                    &:hover {
                        border-color: #FF6610;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 760px) {
    header {
        padding-bottom: 20px;
    }
}</style>