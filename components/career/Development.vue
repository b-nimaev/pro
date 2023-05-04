<template>
    <section>
        <div class="container">
            <div class="heading">
                <p class="description">Что в себя включает</p>
                <h2>Развитие <span>карьеры</span></h2>
            </div>
            <div class="content">
                <article>
                    <div class="icon">
                        <img src="~/assets/images/data-analys.png" alt="data-analys">
                    </div>
                    <h4>Определение карьерных целей</h4>
                    <p>план действий для достижения успеха <br>в выбранной области.</p>
                </article>
                <article>
                    <div class="icon">
                        <img src="~/assets/images/plan.png" alt="plan">
                    </div>
                    <h4>Планирование карьеры</h4>
                    <p>для достижения ваших <br>целей и амбиций.</p>
                </article>
                <article>
                    <div class="icon">
                        <img src="~/assets/images/only-work.png" alt="only work">
                    </div>
                    <h4>Развитие компетенций</h4>
                    <p>необходимые для успешной <br>карьеры.</p>
                </article>
                <article>
                    <div class="icon">
                        <img src="~/assets/images/workflow.png" alt="workflow">
                    </div>
                    <h4>Стратегии продвижения</h4>
                    <p>в профессиональной <br>деятельности.</p>
                </article>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
section {
    padding: 40px 0 100px
}
.content {
    display: flex;
    justify-content: space-around;
}

.container {
    display: block;
}

.heading {
    margin: auto;
    width: fit-content;
    margin-bottom: 90px;

    .description {
        font-size: 18px;
        color: #99DCD5;
        margin-bottom: 15px;
    }

    h2 {
        font-size: 42px;
        color: #444;

        span {
            color: $ohra-primary;
        }
    }

    .line {
        display: flex;
        justify-content: flex-end;
    }
}

.content {
    article {
        transition: 400ms;
        position: relative;
        cursor: pointer;
        user-select: none;
        top: 0;
        &:nth-child(even) {
            margin-top: 50px;
        }
        .icon {
            display: flex;
            filter: grayscale(1);
            transition: 400ms;
            margin-bottom: 20px;
        }

        img {
            margin: 0 auto;
        }

        h4 {
            font-size: 20px;
            color: #444;
            font-weight: 500;
            margin-bottom: 15px;
            text-align: center;
        }

        p {
            font-size: 16px;
            color: #666;
            line-height: 27px;
            text-align: center;
        }
        &:hover {
            top: -5px;
            .icon {
                filter: grayscale(0);
            }
        }
    }
}
</style>