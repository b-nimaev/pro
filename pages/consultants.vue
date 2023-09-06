<template>
    <div>
        <NavbarComponent />

        <main>
            <HomeChooseConsultantComponent :isConsultants="true" />
            <section id="suggest">
                <div class="container">
                    <div class="heading">
                        <h4><span>Эксперты</span> которые могут вам понравиться</h4>
                        <!-- <div class="line">
                    <IconsLineComponent />
                </div> -->
                    </div>
                    <swiper :slides-per-view="1" :space-between="0" :breakpoints="{
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
            <section id="all-consultants">
                <div class="container">
                    <div class="heading">
                        <h4><span>Наши </span>эксперты консультанты</h4>
                        <!-- <div class="line">
                    <IconsLineComponent />
                </div> -->
                    </div>
                    <swiper :slides-per-view="1" :space-between="0" :breakpoints="{
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
        </main>
        <FooterComponent />
    </div>
</template>

<script lang="ts">
import { useMainStore } from "~/store"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }

    },
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            users: <any>[]
        }
    },
    async beforeCreate() {
        await fetch('https://profori.pro/api/users', {
            method: 'GET'
        }).then(async (result) => {

            this.users = await result.json()
            let active_users: any = []

            for (let i = 0; i < this.users.length; i++) {

                if (this.users[i].firstName) {

                    active_users.push(this.users[i])

                }

            }


            this.users = active_users
            console.log(this.users)

            // this.users.forEach(async (user) => {
            // if (user.firstName) {
            // 
            // }
            // })
            // console.log(this.users)
        })
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
#all-consultants {
    padding: 100px 0;
}
main {
    padding: 100px 0;
}

#suggest {
    padding: 50px 0;
    background-color: #fafafaa3;
}

.post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

h4 {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 30px;
}

article {
    // width: 300px
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

@media screen and (max-width: 768px) {
    main {
        padding-bottom: 0;
    }
}
</style>