<template>
    <div class="slide">
        <div class="thumbnail">
            <nuxt-img format="webp" quality="80" src="/assets/svg/thumb.jpg" alt="thumb" />
        </div>
        <div class="content">
            <div class="post-title">
                <h4>Топ-5 самых высоких зарплат в Москве за февраль 2023 года</h4>
            </div>
            <div class="post-meta">
                <div class="time"><span>12 февраля, 2023</span></div>
                <button>Подробнее</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.slide {
    position: relative;
    top: 0;
    transition: 400ms ease;
    box-shadow: 3px 0px 18px -9px #BBA5A55C;
    border-radius: 8px;

    .thumbnail {
        margin-bottom: 8px;

        img {
            border-radius: 8px;
        }
    }

    .content {
        padding: 15px 16px 32px;

        .post-title {
            margin-bottom: 15px;

            h4 {
                font-size: 20px;
                color: #000000E5;
                line-height: 26px;
            }
        }

        .post-meta {
            display: flex;
            justify-content: space-between;

            .time {
                margin: auto 0;

                span {
                    font-size: 18px;
                    color: #00000080;
                }
            }

            button {
                padding: 8px 15px;
                border-radius: 5px;
                border: 1px solid #000000CC;
                color: #000000CC;
                transition: 400ms ease;
            }
        }
    }

    &:hover {
        top: -5px;
        cursor: pointer;

        .content {
            .post-meta {
                button {
                    background-color: #000000CC;
                    color: #fff;
                }
            }
        }
    }
}</style>