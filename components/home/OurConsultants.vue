<template>
    <section id="our-consultants">
        <div class="container">
            <div class="heading">
                <p class="description">Наша команда</p>
                <h2><span>Эксперты</span> консультанты</h2>
                <div class="line">
                    <IconsLineComponent />
                </div>

            </div>
            <swiper :slides-per-view="1" :space-between="0" @swiper="onSwiper" @slideChange="onSlideChange" :breakpoints="{
                '1700': {
                    slidesPerView: 5,
                    spaceBetween: 0
                },
                '1420': {
                    slidesPerView: 4,
                },
                '1100': {
                    slidesPerView: 3,
                },
                '760': {
                    spaceBetween: 0,
                    slidesPerView: 2
                }
            }">
                <swiper-slide v-for="user in users" :key="user">
                    <OurConcultantsSlideComponent :user="user" />
                </swiper-slide>
            </swiper>
        </div>
    </section>
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
    data() {
        return {
            users: []
        }
    },
    async mounted() {
        await fetch('https://profori.pro/api/users', {
            method: 'GET'
        }).then(async (result) => {
            this.users = await result.json()
            console.log(this.users)
        })
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
.pagewrapper.dark {
    section {
        background-color: #00000087;
        color: #fff;

        .heading {
            h2 {
                color: #eee;
            }
        }
    }
}

section {
    overflow: hidden;
    padding: 100px 20px;
    background-color: #fff;
    display: flex;

    .container {
        margin: auto;
    }

    .heading {
        width: fit-content;
        margin: 0 auto 30px;
        text-align: center;

        .description {
            font-size: 20px;
            color: #99DCD5;
            margin-bottom: 10px;
        }

        h2 {
            color: #222222;
            font-size: 36px;

            span {
                color: #FF6610;
            }
        }

        .line {
            display: flex;
            justify-content: flex-end;
            width: 160px;
            margin: auto auto auto 5px;
        }
    }
}

.swiper {
    overflow: hidden;

    .swiper-slide {
        width: fit-content !important;
        margin-right: 15px !important;
        // filter: blur(.6px);
        transition: 300ms;

        &:hover {
            // filter: blur(0)
        }
    }
}

.slider {
    margin-top: 100px;

    .slide {
        width: fit-content !important;
        margin-right: 15px !important;
    }

}

@media screen and (max-width: 1100px) {
    section {
        padding: 50px 0;

        .heading {
            margin-bottom: 40px;
        }
    }
}
</style>