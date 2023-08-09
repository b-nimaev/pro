<template>
    <div class="slide">
        <div class="container">
            <div class="wrapper">

                
                <div class="left-side">
                    <h1>Выберите <br><span>лучшую</span> профессию с нами.</h1>
                    <p>Найдите идеальную профессию и достигните успеха в карьере с помощью наших <br> экспертов в
                        профориентации и карьерном консультировании</p>
                    <div class="buttons">
                        <button>
                            <span>Пройти тест</span>
                        </button>

                        <button class="choose" @click="chooseConsultant()">
                            <span>Заказать консультацию</span>
                        </button>
                    </div>
                </div>

                <div class="right-side">
                    <div class="users-grid">
                        <div class="row">
                            <div class="user">
                                <nuxt-img width="183" height="138" src="/assets/images/Frame-107.jpg" alt="" />
                            </div>
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser2.jpg" alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser4.jpg" alt="" />
                            </div>
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser3.jpg" alt="" />
                            </div>
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser5.jpg" alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser6.jpg" alt="" />
                            </div>
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser7.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <!-- <nuxt-img format="webp" quality="80" src="/assets/images/bgi.png" class="bgi" alt="" /> -->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { useMainStore } from '~/store';
export default {
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    methods: {
        chooseConsultant() {
            this.mainStore.setStatusModal(true)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
@import '@/assets/scss/variables';

header {
    border-radius: 5px;
    background-color: #f5fffe;
    // padding-bottom: 160px;

    .wrapper {
        display: flex;
        flex-direction: row;
        padding: 100px 0 160px;
        // justify-content: center;
        .left-side {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            margin: auto;

            h1 {
                margin-bottom: $spacer;

                br {
                    display: none;
                }

                span {
                    color: $ohra-primary;
                    margin-left: 0;
                }

            }

            p {
                font-size: $font-size-base;
                color: $primary;
                line-height: $line-height-base;
            }

            .buttons {
                display: flex;
                flex-direction: column;
                margin-top: $spacer;

                button {
                    margin: 0;
                    padding: 12px 25px;
                    display: flex;
                    border: 1px solid $ohra-primary;
                    border-radius: 30px;
                    transition: 400ms;
                    width: fit-content;

                    svg,
                    path {
                        transition: 400ms;
                        position: relative;
                        right: 0;
                    }

                    &:first-child {
                        span {
                            font-weight: 400;
                            color: $ohra-primary;
                        }

                        &:hover {
                            padding: 12px 24px;

                            svg {
                                right: -5px;
                            }
                        }
                    }

                    &:nth-child(2) {
                        margin-top: 5px;
                        position: relative;
                        top: 5px;

                        &:hover {
                            color: #fff;
                            border-color: #fff;
                            padding: 16px 31px;
                        }
                    }

                    span {
                        margin: auto;
                    }

                    svg {
                        margin: auto;
                    }

                    &.choose {
                        // margin: 0 0 auto 30px;
                        padding: 12px 28px;
                        transition: 400ms;
                        background-color: $ohra-primary;
                        border-color: $ohra-primary;
                        color: #fff;

                        span {
                            font-size: 1.1rem;
                            margin: 0;
                        }
                    }
                }
            }
        }

        .right-side {

            // display: none;
            position: relative;
            padding: 30px 0;
            margin: auto;
            .users-grid {
                z-index: 1;
                position: relative;

                .row {
                    display: flex;
                    justify-content: center;

                    .user {
                        margin: 15px;
                        border-radius: 20px;
                        overflow: hidden;
                        width: 183px;
                        height: 138px;
                        cursor: pointer;


                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            // object-position: 0 -18px;
                        }
                    }
                }
            }

            .bgi {
                position: absolute;
                top: 0;
                right: 0;
                z-index: 0;
            }

        }

    }
}

@media screen and (max-width: 768px) {
    header {
        padding: 0 0;
    }
    header .wrapper {
        padding: 30px 0 60px;
        .left-side {
            p {
                br {
                    display: none
                }
            }
        }
    }
}
</style>
