<template>
    <section id="blog">
        <div class="blog-wrapper">
            <div class="heading">
                <p class="description">Блог</p>
                <h2>Наши <span>авторы</span></h2>
                <div class="line">
                    <IconsLineComponent />
                </div>
            </div>
            <div class="container">
                <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
                    :breakpoints="{
                        '1700': {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        '1420': {
                            slidesPerView: 3,
                        },
                        '1100': {
                            slidesPerView: 3,
                        },
                        '640': {
                            slidesPerView: 2
                        }
                    }">
                    <swiper-slide>
                        <BlogSlideComponent />
                    </swiper-slide>
                    <swiper-slide>
                        <BlogSlideComponent />
                    </swiper-slide>
                    <swiper-slide>
                        <BlogSlideComponent />
                    </swiper-slide>
                    <swiper-slide>
                        <BlogSlideComponent />
                    </swiper-slide>
                    <swiper-slide>
                        <BlogSlideComponent />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.pagewrapper.dark {
    #blog {
        background-color: unset;
        background-image: linear-gradient(90deg, #0d0b0f, #0f0909);
    }

    .heading {
        h2 {
            color: #fff;
        }
    }
}

.swiper-slide {
    overflow: hidden;
}

.container {
    display: block;
    overflow-x: hidden;
}

#blog {
    background-color: #fff;
    padding: 100px 0;
    border-radius: 15px;

    .container {
        margin: auto;
    }
}

.heading {
    margin: 0 auto 60px;
    width: fit-content;

    .description {
        font-size: 20px;
        color: #99DCD5;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 36px;
        color: #000000E5;

        span {
            color: #FF6610;
        }
    }

    .line {
        display: flex;
        justify-content: flex-end;
        width: 130px;
        margin: auto 0 auto auto;
    }
}

.slider {
    padding: 15px 0;
    display: flex;

    .slide {
        margin-right: 30px;
    }
}

@media screen and (max-width: 1100px) {
    #blog {
        padding: 50px 0;
    }
}

@media screen and (max-width: 768px) {
    #blog {
        border-radius: 0;

        .container {
            padding: 0 15px;
        }
    }
}
</style>

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