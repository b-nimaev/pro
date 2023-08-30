<template>
    <section id="reviews">
        <div class="container">
            <div class="wrapper">
                <div class="left-side">
                    <div class="columns">
                        <div class="column">
                            <article class="mt-30">
                                <div class="user-avatar">
                                    <nuxt-img format="webp" quality="80" src="/assets/images/user-avatar-for-review.png"
                                        alt="user-avatar" />
                                </div>
                                <div class="user-review">
                                    <p>Я получила незаменимую помощь в определении своей карьерной стратегии благодаря
                                        карьерным
                                        консультантам. Рекомендую!</p>

                                </div>
                                <ReviewsUserRatingComponent :rating=5 />
                                <div class="user-data">
                                    <div class="username"><span>Анна Николаевна</span></div>
                                    <div class="userpos"><span>Ui/Ux Designer</span></div>
                                </div>
                            </article>
                        </div>
                        <div class="column">
                            <article>
                                <div class="reviews-stat"><span>4.9/5</span></div>
                                <ReviewsUserRatingComponent :rating=5 />
                                <div class="article-descr">
                                    <p>Средний рейтинг отзыва 2000+ клиентов </p>
                                </div>
                            </article>
                            <article>
                                <div class="user-avatar">
                                    <nuxt-img format="webp" quality="80" src="/assets/svg/user-avatar-2.png"
                                        alt="user-avatar" />
                                </div>
                                <div class="user-review">
                                    <p>Я получил незаменимую помощь в определении своей карьерной</p>
                                </div>
                                <ReviewsUserRatingComponent :rating=5 />
                                <div class="user-data">
                                    <div class="username"><span>Николай Александрович</span></div>
                                    <div class="userpos"><span>Java Developer</span></div>
                                </div>
                            </article>
                        </div>
                        <div class="column mobile">
                            <article class="mt-30">
                                <div class="user-avatar">
                                    <nuxt-img format="webp" quality="80" src="/assets/images/user-avatar-for-review.png"
                                        alt="user-avatar" />
                                </div>
                                <div class="user-review">
                                    <p>Я получила незаменимую помощь в определении своей карьерной стратегии благодаря
                                        карьерным
                                        консультантам. Рекомендую!</p>

                                </div>
                                <ReviewsUserRatingComponent :rating=5 />
                                <div class="user-data">
                                    <div class="username"><span>Анна Николаевна</span></div>
                                    <div class="userpos"><span>Ui/Ux Designer</span></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="heading">
                        <p class="description">Отзывы</p>
                        <h2><i><span>Ода</span></i> о наших клиентах</h2>
                        <!-- <div class="line">
                            <IconsLineComponent />
                        </div> -->
                    </div>
                    <div class="content">
                        <p>
                            <i>Наши клиенты — наши отзывчивые партнеры.</i> <br><i>С их отзывами мы растем и
                                совершенствуемся. <br>Вместе мы определяем карьерные стратегии, <br>достигаем успехов и
                                раскрываем потенциал.</i>
                        </p>
                    </div>
                    <button v-if="!isReviewSingle" @click="allReviews"><span>Посмотреть все отзывы</span></button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default defineComponent({
    methods: {
        allReviews() {
            return this.$router.push('/reviews')
        }
    },
    props: {
        isReviewSingle: false
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.pagewrapper.dark {
    #reviews {
        background-color: #0d091026;
        color: #fff;

        .heading {
            h2 {
                color: #fff;
            }
        }

        .content {
            p {
                color: #fff;
            }
        }

        button {
            background-color: rgb(255, 122, 47);

            &:hover {
                color: #fff;
                background-color: rgb(255 141 76)
            }
        }

        article {
            user-select: none;
            background-color: #1a181f;
            color: #eee;

            .reviews-stat span,
            .user-review p,
            .user-data .username span,
            .user-data .userpos span,
            .article-descr p {
                color: #eee;
            }
        }
    }
}

#reviews {
    padding: 100px 20px;
    border-radius: 20px;
    min-height: calc(100vh - 40px);
    display: flex;
    margin: 0 30px;

    .container {
        margin: auto;
    }
}

.wrapper {
    display: flex;
    margin: auto;
    justify-content: center;
}

.right-side {
    margin: auto 0;

    .heading {
        margin-bottom: 30px;
        width: fit-content;

        .line {
            display: flex;
            justify-content: flex-end;
            margin-right: 5px;
        }

        p.description {
            margin-bottom: 10px;
            color: #99DCD5;
            font-size: 18px;
        }

        h2 {
            font-size: 40px;
            color: #444;
            font-weight: 300;

            span {
                color: #FF6610;
            }
        }
    }

    .content {
        p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            margin-top: 15px;
            color: #444;
        }
    }

    button {
        margin-top: 44px;
        padding: 12px 30px;
        color: #FFFFFF;
        font-size: 24px;
        background-color: #10b981;
        border-radius: 8px;
        transition: 400ms;

        &:hover {
            background-color: #0fc98b;
            color: #fff;
        }
    }
}

.left-side {
    margin-right: 60px;

    .columns {
        display: flex;

        .column {
            display: flex;
            flex-direction: column;
            margin-right: 20px;

            &.mobile {
                display: none;
            }

            &:last-child {
                margin-right: 0;
            }
        }
    }
}

.mt-30 {
    margin-top: 30px;
}

article {
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    top: 0;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 7px 16px -11px rgba(68, 68, 68, 0.25);
    transition: 400ms;

    &:hover {
        box-shadow: 0px -3px 0px #99DCD5;
        top: -5px;
    }

    &:active {
        top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }

    .reviews-stat {
        margin: 0 auto 15px;

        span {
            font-weight: 700;
            color: #000;
            font-size: 18px;
        }
    }

    .article-descr {
        margin: 0 auto;

        p {
            text-align: center;
            font-size: 18px;
            color: #00000080;
            line-height: 120%;
        }
    }

    .user-avatar {
        margin: auto auto 15px;
    }

    .user-review {
        width: 263px;
        margin: 0 auto 15px;

        p {
            width: 100%;
            text-align: center;
            font-size: 16px;
            font-weight: light;
            line-height: 19.2px;
            color: rgb(0 0 0 / 50%);
        }
    }

    .user-data {
        margin: 0 auto;
        text-align: center;

        .username {
            span {
                font-weight: 700;
                color: #222;
                font-size: 18px;
            }
        }

        .userpos {
            span {
                font-size: 14px;
                font-weight: 600;
                color: rgba(0, 0, 0, 0.7);
            }
        }
    }

}

@media screen and (max-width: 1700px) {
    .right-side {

        .content {
            width: 100%;
        }
    }
}

@media screen and (max-width: 1200px) {
    .wrapper {
        flex-wrap: wrap;
        flex-direction: column;
    }

    .columns {
        flex-direction: column;
    }

    .container {
        flex-direction: column;

        .left-side {
            margin: 30px 0 0;
            order: 2;

            .columns {
                flex-wrap: wrap;
            }

            .column {
                &.mobile {
                    display: flex;
                }
            }
        }

        .right-side {
            margin: 0;
            order: 1;
        }
    }

    article {
        width: 300px;
        margin: 15px auto;
    }
}

@media screen and (max-width: 1100px) {
    #reviews {
        padding: 50px 0;
    }

    .right-side {
        button {
            padding: 16px 32px;
            font-size: 20px;
        }
    }
}

@media screen and (max-width: 760px) {
    article {
        .user-review {
            width: 100%;
        }
    }

    .left-side {
        margin-right: 0;
    }

    .right-side {
        .heading {
            h2 {
                font-size: 34px;
                font-weight: 300
            }
        }

        .content {
            p {
                color: #6a6a6a;
                font-size: 16px;
                line-height: 24px;
                font-weight: 400;
            }
        }
    }
}

@media screen and (max-width: 576px) {
    .left-side {
        .columns {
            flex-direction: column;

            .column {
                margin-right: 0;

                &:first-child {
                    margin-bottom: 20px;
                }
            }
        }
    }

    .right-side {
        .heading {
            .line {
                display: none;
            }
        }
    }
}</style>