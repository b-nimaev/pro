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
                                <nuxt-img width="183" height="138" src="/assets/images/realuser.jpg" alt="" />
                            </div>
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser2.jpg" alt="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser3.jpg" alt="" />
                            </div>
                            <div class="user">
                                <nuxt-img width="183" height="138" format="webp" quality="80"
                                    src="/assets/images/realuser4.jpg" alt="" />
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
                    <nuxt-img format="webp" quality="80" src="/assets/images/bgi.png" class="bgi" alt="" />
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
            // const consultantsElement = document.getElementById("our-consultants");
            // if (consultantsElement) {
            //     consultantsElement.scrollIntoView({ behavior: 'smooth' });
            // }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
$ohra-primary: #452921;

.wrapper {
    display: flex;
}

.pagewrapper.dark {
    .buttons {
        button.choose {
            &:hover {
                border-color: #FF6610
            }
        }
    }
}

.slide {
    // padding: 0 50px 0 150px;
    display: flex;

    .container {
        margin: auto;
    }
}

.left-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: auto 0;
}

header {
    border-radius: 5px;
    background-color: #f5fffe;
    padding-bottom: 160px;
}

.header {
    margin-top: 100px;
}


h1 {
    font-size: $h1-size;
    color: $primary;
    line-height: 64px;
    margin-bottom: 20px;
    font-weight: 300;

    span {
        color: $ohra-primary;
        margin-left: 50px;
    }
}

p {
    font-size: 18px;
    color: $primary;
    line-height: 26px;
}

.bgi {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
}

.buttons {
    margin-top: 30px;
    display: flex;

    button {
        margin: 0 0 auto 0;
        padding: 12px 25px;
        display: flex;
        border: 1px solid $ohra-primary;
        border-radius: 30px;
        transition: 400ms;

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

            // border: 2px solid $ohra-primary;

            &:hover {
                // background-color: #FF6610;
                // color: #fff;
                // border-color: #fff;
                padding: 12px 24px;

                svg {
                    right: -5px;

                    path {
                        // fill: #fff;
                    }
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
            // margin-right: 10px;
        }

        svg {
            margin: auto;
        }

        &.choose {
            margin: 0 0 auto 30px;
            padding: 16px 32px;
            transition: 400ms;
            background-color: $ohra-primary;
            border-color: $ohra-primary;
            color: #fff;

            span {
                font-size: 24px;
                margin: 0;
            }
        }
    }
}

.right-side {
    position: relative;
    padding: 30px 0;
    margin-left: auto;

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
}

@media screen and (max-width: 1700px) {
    .right-side {
        .users-grid {
            .row {
                .user {
                    width: 160px;
                    height: 122px;
                }
            }
        }
    }
}

@media screen and (max-width: 1600px) {
    h1 {
        font-size: 48px;
    }
}


@media screen and (max-width: 1500px) {

    h1 {
        font-size: 46px;
        margin-bottom: 20px;
        line-height: 54px;
    }

    p {
        font-size: 18px;

        br {
            display: none
        }
    }

    .right-side {
        img {
            width: 100%;
        }

        .users-grid {
            .row {
                .user {
                    width: 120px;
                    height: 90px;
                }
            }
        }
    }

    .slide {
        padding: 0;
        margin: auto;
        flex-direction: column;

        .left-side {
            position: relative;
            padding: 40px 0;
            left: 0;

            p {
                width: 100%;

                br {
                    // display: inline-block;
                }
            }

            .buttons {
                margin-top: 30px;

                button {
                    &.choose {
                        margin: 0 0 auto 20px;
                        padding: 14px 30px;

                        span {
                            font-size: 20px;
                        }
                    }
                }
            }
        }

        .right-side {
            margin: 0 auto 0 0;
        }
    }
}

@media screen and (max-width: 1300px) {
    .wrapper {
        display: flex;
        flex-direction: column;
    }

    .right-side {
        img {
            margin: auto;
            display: block;
            width: 60%;
            left: 0;
            height: auto;
            top: 0%;
        }

        .bgi {
            display: none;
        }
    }
}

@media screen and (max-width: 760px) {

    .slide {
        .left-side {
            padding: 20px 0;
            margin: 0;

            p {
                width: 100%;
            }

            .buttons {
                flex-direction: column;

                button {
                    &:first-child {
                        margin: 0 auto 20px 0;
                    }

                    &:last-child {
                        margin: 0 auto 0 0;
                    }
                }
            }
        }
    }

    h1 {
        font-size: 40px;
        line-height: 48px;

        br {
            display: none;
        }

        span {
            margin: 0;
        }
    }

    p {
        line-height: 28px;
        font-weight: 300;
    }

    .slide {
        .left-side {
            padding: 0;
            margin-top: 10px;
            margin-bottom: 40px;
        }
    }

    .right-side {
        display: flex;
        width: 100%;
        padding: 0;
        justify-content: center;

        .users-grid {
            .row {
                .user {
                    width: 110px;
                    height: 80px;
                }
            }
        }
    }
}

@media screen and (max-width: 576px) {
    .slide {
        width: 100%;
    }
}
</style>
