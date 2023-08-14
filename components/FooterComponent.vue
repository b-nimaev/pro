<template>
    <footer :class="{ 'dashboard': isDashbaord}">
        <div :class="{ 'container': !fluidContainer, 'container-fluid': fluidContainer}">
            <div class="footer-inner">
                <div class="logotype">
                    <NuxtLink to="/">
                        <LogotypeComponent :themeClass="themeClass"></LogotypeComponent>
                    </NuxtLink>
                </div>
                <div class="right-side">
                    <div class="row">
                        <div class="row__left-side">
                            <p><a href="mailto:support@profori.com">support@profori.com</a></p>
                            <p>
                                <a class="telegramLink" href="javascript:void(0)">
                                    <IconsTelegramFooterIcon />
                                    <span>Поддержка в телеграм-бот</span>
                                </a>
                            </p>
                            <p>Мы предоставляем услуги профессионального консультирования! <br>Остались вопросы, оставьте
                                свои данные и мы обязательно с Вами свяжемся!</p>
                        </div>
                        <div class="row__right-side">
                            <ul>
                                <li>
                                    <NuxtLink to="/for-consultants">Консультантам</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/tests">Тесты</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/about">О нас</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/consultants">Каталог консультантов</NuxtLink>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <NuxtLink to="/contacts">Контакты</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/cooperation">Сотрудничество</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/blog">Блог</NuxtLink>
                                </li>
                                <li v-if="logged == ''">
                                    <NuxtLink to="/login">Войти</NuxtLink>
                                </li>
                                <li v-if="logged !== ''">
                                    <a @click="logout" href="javascript:void(0)">Выйти</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row__left-side">
                            <button @click="contactModal">Заказать консультацию</button>
                        </div>
                        <div class="privacy_links">
                            <ul>
                                <li>
                                    <NuxtLink to="/privacy">Политика конфиденциальности и Правила</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/processing">Обработка персональных данных</NuxtLink>
                                </li>
                                <!-- <li> -->
                                <!-- <NuxtLink to="/terms">Пользовательское соглашение</NuxtLink> -->
                                <!-- </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>© 2023 Profori.pro. Все права защищены.</p>
            </div>
        </div>
    </footer>
    <ModalComponent />
</template>

<script lang="ts">
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    props: {
        themeClass: {
            required: false,
            default: 'light',
            type: String
        },
        fluidContainer: {
            required: false,
            default: false,
            type: Boolean
        },
        isDashbaord: {
            required: false,
            default: false,
            type: Boolean
        }
    },
    methods: {
        contactModal() {
            this.mainStore.setStatusModal(true)
        },
        logout() {
            this.$router.push('login')
            return this.mainStore.setSessionID('')
        }
    },
    computed: {
        logged() {
            return this.mainStore.getSessionID
        }
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.telegramLink {
    padding-bottom: 5px;
    // margin-bottom: 40px;
    display: flex;
    width: fit-content;
    position: relative;
    transition: 400ms;
    overflow: hidden;

    svg {
        width: 30px;
        height: auto;
        margin: auto 0;
    }

    &:before {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: -100%;
        transition: 400ms;
        background-color: #000;
    }

    &:hover {
        &::before {
            left: 0;
        }
    }
}

footer {
    padding: 50px 0 0;
    background-color: #fff;
    border-radius: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    // border-top: 1px solid #eee;
    .container {
        margin: auto auto 0;
    }
    &.dashboard {
        border-radius: 8px;
        margin-top: 15px;
        padding: 30px 30px 0;
    }
    .footer-bottom {
        padding: 30px 0 30px;
        border-top: 1px solid #eee;
        margin-top: 40px;
        // background-color: #000000e8;

        // background-image: linear-gradient(138deg, #302a2a, rgba(40, 43, 43, 0.9411764706), #082625);
        p {
            font-size: 20px;
            // color: #eee;
        }
    }

    .footer-inner {
        display: flex;
        width: 100%;
    }

    .logotype {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .right-side {
        margin-left: 30px;
        display: block;
        flex: 1;

        .row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;

            &:last-child {
                margin-bottom: 0;
            }

            .row__left-side {
                button {
                    padding: 15px 30px;
                    color: #fff;
                    background-color: #000000e8;
                    border: 1px solid #000000e8;
                    border-radius: 30px;
                    font-size: 20px;
                    transition: 400ms ease;
                    position: relative;
                    top: 0;
                    transition: 400ms;

                    &:hover {
                        color: #000000e8;
                        background-color: #fff;
                    }
                }

                p {
                    font-size: 18px;
                    margin-bottom: 15px;
                    line-height: 32px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            .row__right-side {
                display: flex;

                ul {
                    margin-right: 40px;

                    li {
                        margin-bottom: 15px;

                        a {
                            font-size: 18px;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            .privacy_links {
                display: flex;

                ul {
                    margin: auto 0;
                    display: flex;
                    flex-direction: row;

                    li {
                        margin-right: 30px;

                        a {
                            font-size: 18px;
                        }

                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
}

.pagewrapper.dark {
    .telegramLink {
        &::before {
            background-color: #fff;
        }

        svg {
            path {
                fill: #fff;
            }
        }
    }

    footer {
        color: #fff;

        .footer-bottom {
            background-color: #030203;
        }

        .right-side {
            .row__left-side {
                button {
                    background-color: transparent;
                    // background-color:rgb(255 102 16);
                    border: 1px solid #fff;
                    color: #fff;

                    &:hover {
                        color: #eee;
                        top: -3px;
                        // background-color: #000000e8;
                        // background-color: rgb(255 122 47);
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1700px) {
    footer {
        .right-side {
            .row {
                .row__left-side {
                    p {
                        font-size: 18px;
                    }

                    button {
                        margin: 0 0 auto;
                    }
                }

                .privacy_links {
                    flex: 1;
                    margin-left: 40px;

                    ul {
                        flex-wrap: wrap;
                        margin: 0 0 -15px;

                        li {
                            margin-right: 40px;
                            margin-bottom: 15px;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1420px) {
    footer {
        padding-top: 20px;

        .logotype {
            margin-bottom: 30px;
        }

        .footer-inner {
            flex-direction: column
        }

        .right-side {
            margin-left: 0;

            .row {
                &:first-child {
                    margin-bottom: 40px;
                    flex-direction: column;

                    .row__left-side {
                        margin-bottom: 40px;
                    }

                    .row__right-side {
                        ul {
                            margin-right: 40px;

                            li {
                                margin-bottom: 15px;

                                a {
                                    font-size: 18px;
                                }
                            }
                        }
                    }
                }

                &:last-child {
                    flex-direction: column;

                    .row__left-side {
                        order: 2
                    }

                    .privacy_links {
                        order: 1;
                        margin: 0 0 40px;

                        ul {
                            flex-wrap: wrap;

                            li {
                                margin-right: 40px;
                                margin-bottom: 20px;

                                a {
                                    font-size: 18px;
                                }
                            }
                        }
                    }
                }

                .row__left-side {
                    p {
                        line-height: 32px;
                    }

                    button {
                        padding: 16px 28px;
                        font-size: 20px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1100px) {
    footer {
        .right-side {
            .row {}
        }
    }
}

@media screen and (max-width: 768px) {
    footer {
        margin-top: 0;
        border-radius: 0;
    }
}
</style>