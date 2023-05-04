<template>
    <section id="you_got">
        <div class="container">
            <div class="heading">
                <p class="description">Ваш шанс</p>
                <h2>С нами <span>вы получите</span></h2>
            </div>

            <div class="content">
                <article>
                    <div class="left-side mr-50">
                        <div class="left-side__heading">
                            <h4>Всесторонний анализ <br>личности и способностей</h4>
                            <p class="left-side__description">Откройте для себя свои сильные стороны</p>
                        </div>
                    </div>
                    <div class="right-side">
                        <img src="~/assets/svg/you_got/1.png" alt="you_got_1">
                    </div>
                </article>
                <article>
                    <div class="left-side mr-40">
                        <div class="left-side__heading">
                            <h4>Надёжный выбор подходящей <br>современной профессии</h4>
                            <p class="left-side__description">Доверьте свою профессиональную будущую нашим <br>экспертам</p>
                        </div>
                    </div>
                    <div class="right-side">
                        <img src="~/assets/svg/you_got/2.png" alt="you_got_2">
                    </div>
                </article>
                <article>
                    <div class="left-side mr-50">
                        <div class="left-side__heading">
                            <h4>Реалистичный план действий & <br>Карта карьерного пути</h4>
                            <p class="left-side__description">Достигайте своих целей с нашими консультантами по карьере и
                                <br>профориентологами: получите реалистичный план действий и <br>карту карьерного пути
                            </p>
                        </div>
                    </div>
                    <div class="right-side">
                        <img src="~/assets/svg/you_got/3.png" alt="you_got_3">
                    </div>
                </article>
                <article>
                    <div class="left-side mr-100">
                        <div class="left-side__heading">
                            <h4>Рекомендации по повышению компетенций</h4>
                            <p class="left-side__description">Профессиональные советы по личной конкурентоспособности</p>
                        </div>
                    </div>
                    <div class="right-side">
                        <img src="~/assets/svg/you_got/4.png" alt="you_got_4">
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

#you_got {
    padding: 100px 0;
    background-color: #fff;
}

.heading {
    margin: auto;
    width: fit-content;
    margin-bottom: 80px;

    p.description {
        margin-bottom: 15px;
        font-size: 18px;
        color: #99DCD5;
        opacity: 0.9;
    }

    h2 {
        font-size: $h1-size;
        font-weight: 300;
        color: $ohra-primary;
        span {
            color: $orange;
        }
    }

    .line {
        display: flex;
        justify-content: flex-end;
    }
}

.container {
    display: block;
    margin: auto;
}

article {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

    &:last-child {
        margin-bottom: 0;
    }

    .left-side {
        margin: auto 0;

        &.mr-100 {
            margin-right: 150px;
        }

        &.mr-50 {
            margin-right: 50px;
        }

        &.mr-40 {
            margin-right: 40px;
        }

        .left-side__heading {
            h4 {
                font-size: 24px;
                font-weight: 400;
                line-height: 32px;
                color: $ohra-primary;
            }

            .left-side__description {
                font-size: 18px;
                line-height: 27.5px;
                // font-weight: 500;
                margin-top: 15px;   
                color: $primary;
            }
        }
    }
}

@media screen and (max-width: 1700px) {
    .heading {
        margin-bottom: 60px;

        h2 {
            font-size: 36px
        }

        .line {
            svg {
                width: 200px
            }
        }
    }

    article {
        margin-bottom: 60px;

        .left-side {
            .left-side__heading {
                h4 {
                    // font-size: 28px
                }
            }

            .left-side__heading {
                .left-side__description {
                    // font-size: 18px;
                    margin-top: 15px;
                }

            }
        }
    }

    img {
        width: 80%;
    }
}

@media screen and (max-width: 1100px) {
    #you_got {
        padding: 50px 0;
    }

    article {
        .left-side {
            .left-side__heading {
                h4 {
                    font-size: 24px;
                }
            }
        }
    }
}

@media screen and (max-width: 760px) {
    .heading {
        margin: 0 0 50px;
    }

    article {
        flex-direction: column;

        .left-side {
            .left-side__heading {
                h4 {
                    font-size: 20px;
                }
            }

            .left-side__description {
                font-size: 16px;
                line-height: 24px;

                br {
                    display: none
                }
            }

            &.mr-50,
            &.mr-40 {
                margin-right: 15px;
            }

            &.mr-100 {
                margin-right: 30px;
            }
        }

        .right-side {
            display: flex;
            margin: 30px auto 0 0;

            img {
                margin: auto;
            }
        }
    }

    img {
        width: 75%;
    }
}</style>