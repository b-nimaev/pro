<template>
    <header>
        <div class="container">
            <div class="inner">
                <h1>Современная платформа для поиска решений </h1>
                <p>Мы ищем профессионалов, готовых помочь людям найти своё призвание. <br> Создаём комфортные условия для работы:</p>
                <ul>
                    <li>- приводим клиентов, нацеленных на результат</li>
                    <li>- удобный личный кабинет, где хранится вся история по каждому клиенту, удобный планнер встреч</li> 
                    <li>- экономим ваше время на маркетинг</li>
                </ul>
                <div class="buttons">
                    <button><span>Подать заявку</span></button>
                    <button class="login"><span>Войти</span></button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
header {
    padding: 200px 0;

    .inner {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 15px;
    }

    ul {
        padding-left: 10px;
        li {
            font-size: 18px;
            line-height: 26px;
        }
    }
}

button {
    padding: 12px 18px;
    border: 1px solid rgba(69, 41, 33, 0.6588235294);
    display: block;
    width: fit-content;
    border-radius: 8px;
    position: relative;
    top: 0;
    left: 0;

    transition: 400ms ease;
    span {
        font-size: 18px
    }

    &:hover {
        top: -1px;
    }
}

.buttons {
    display: flex;
    margin-top: 20px;
    .login {
        margin: auto 0 auto 15px;
        background-color: rgb(69, 41, 33);
        span {
            color: #fff;
        }

        &:hover {
            background-color: transparent;
            span {
                color:  rgb(69, 41, 33);
            }
        }
    }
}

h1 {
    font-size: 36px;
    // line-height: 60px;
    color: $ohra-primary;
    font-weight: 300;
    margin-bottom: 15px;
}

@media screen and (max-width: 1420px) {
    h1 {
        font-size: 36px;
        line-height: 48px;
    }

    header {
        .inner {
            p {
                font-size: 20px;
            }
        }
    }
}

@media screen and (max-width: 1100px) {
    h1 {
        font-size: 32px;
        line-height: 42px;
    }

    header {
        .inner {
            p {
                font-size: 18px;
                line-height: 32px;
            }
        }
    }
}
</style>