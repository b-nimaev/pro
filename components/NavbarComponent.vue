<template>
    <nav :class="themeClass">
        <div class="container">
            <NuxtLink to="/">
                <LogotypeComponent :themeClass="themeClass"></LogotypeComponent>
            </NuxtLink>
            <div class="mobile-menu" :class="{ 'show': show }">
                <div class="inner">
                    <div class="container">
                        <div class="row">
                            <NuxtLink to="/">
                                <LogotypeComponent themeClass="very-light" />
                            </NuxtLink>
                        </div>
                        <div class="toggler-closer show">
                            <button @click="close()">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <ul>
                            <li>
                                <span>00</span>
                                <NuxtLink to="/">Главная</NuxtLink>
                            </li>
                            <li>
                                <span>01</span>
                                <NuxtLink to="/tests">Тесты</NuxtLink>
                            </li>
                            <li>
                                <span>02</span>
                                <NuxtLink to="/proforientation">Профориентация</NuxtLink>
                            </li>
                            <li>
                                <span>03</span>
                                <NuxtLink to="/career">Карьера</NuxtLink>
                            </li>
                            <li>
                                <span>04</span>
                                <NuxtLink to="/for-consultants">Консультантам</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <NuxtLink class="my-profori" to="/my-profori">MyProfori</NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/tests">Тесты</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/proforientation">Профориентация</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/career">Карьера</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/for-consultants">Консультантам</NuxtLink>
                    </li>
                </ul>

                <NuxtLink class="navbar-login" to="/login" v-if="!userData._id">
                    <span>Вход</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.03125 2.2832L9.5293 6.76758C9.65781 6.89609 9.65781 7.10391 9.5293 7.23242L5.03125 11.7168C4.90273 11.8453 4.69492 11.8453 4.56641 11.7168L4.37227 11.5227C4.24375 11.3941 4.24375 11.1863 4.37227 11.0578L7.98164 7.46484H0.328125C0.147656 7.46484 0 7.31719 0 7.13672V6.86328C0 6.68281 0.147656 6.53516 0.328125 6.53516H7.98164L4.375 2.94219C4.24648 2.81367 4.24648 2.60586 4.375 2.47734L4.56914 2.2832C4.69492 2.15469 4.90273 2.15469 5.03125 2.2832ZM14 10.9375V3.0625C14 2.33789 13.4121 1.75 12.6875 1.75H9.07812C8.89766 1.75 8.75 1.89766 8.75 2.07812V2.29688C8.75 2.47734 8.89766 2.625 9.07812 2.625H12.6875C12.9281 2.625 13.125 2.82187 13.125 3.0625V10.9375C13.125 11.1781 12.9281 11.375 12.6875 11.375H9.07812C8.89766 11.375 8.75 11.5227 8.75 11.7031V11.9219C8.75 12.1023 8.89766 12.25 9.07812 12.25H12.6875C13.4121 12.25 14 11.6621 14 10.9375Z"
                            fill="white" fill-opacity="0.9" />
                    </svg>
                </NuxtLink>

                <NavbarAuthedUsermenu :themeClass="themeClass" v-if="userData._id" />
            </div>

            <button class="toggler" @click="toShow()">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <NuxtLink to="/dashboard" class="UserAvatar">
                <img v-if="userData.photo" :src="`https://profori.pro/avatars/${userData.photo}`" alt="">
                <IconsAvatarEmtyIcon v-if="!userData.photo" />
            </NuxtLink>
        </div>
    </nav>
</template>
<script>
import { useMainStore } from '~/store';
export default defineComponent({

    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },

    data() {
        return {
            toggled: true,
            show: false
        }
    },

    props: {
        themeClass: {
            type: String,
            default: 'light',
        },
        statusLogged: {
            type: Boolean,
            default: false
        },
        loggedStatus: {
            type: String,
            default: ''
        }
    },
    computed: {
        userData() {
            return this.mainStore.getUser
        }
    },
    methods: {
        toShow() {
            this.show = true
            this.toggled = false
            this.mainStore.setMobileMenu(true)
            document.getElementsByTagName("body")[0].classList.add('mobile-menu-active')
        },
        close() {
            this.show = false
            this.toggled = true
            this.mainStore.setMobileMenu(false)
            document.getElementsByTagName("body")[0].classList.remove('mobile-menu-active')
        }
    },
    beforeMount: async function () {
        document.getElementsByTagName("body")[0].classList.remove('mobile-menu-active')
    },
})
</script>

<style lang="scss" scoped>
.UserAvatar {
    display: none;
    margin: auto 5px auto 30px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    // border: 1px solid #ccc;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    svg {
        height: 100%;
        width: 100%;
    }
}

@import '@/assets/css/main.scss';
$paddings: 10px 20px;

nav {
    padding: 20px 0;
    position: relative;
}

.mobile-menu {
    display: none;
}

nav .container {
    display: flex;

    .right-side {
        display: flex;
        margin-left: auto;

        .my-profori {
            margin: auto 0;
            padding: $paddings;
            background-color: $ohra-primary;
            // color: #000;
            border: 1px solid transparent;
            font-size: 16px;
            border-radius: 30px;
            margin-right: 30px;
            transition: 400ms;
            color: #fff;

            &:hover {
                padding: 9px 19px;
            }
        }

        ul {
            display: flex;
            margin: auto -15px;

            li {
                margin: 0 15px;

                a {
                    color: $ohra-primary;
                    font-size: 18px
                }
            }
        }

        .navbar-login {
            margin: auto 0 auto 30px;
            border-radius: 30px;
            padding: $paddings;
            background-color: $ohra-primary;
            color: #fff;
            border: 1px solid $ohra-primary;
            display: flex;

            span {
                font-size: 16px;
            }

            svg {
                margin: auto 0 auto 5px;

                path {
                    fill: #fff;
                    fill-opacity: 1;
                }
            }
        }
    }
}

nav.dark,
.pagewrapper.dark nav {
    .right-side {
        .my-profori {
            border: 0;
            background-color: #FF6610;
            border-radius: 30px;
            padding: 10px 20px;
            color: #FFFFFFF5;
        }

        ul {
            li {
                a {
                    color: #FFFFFFCC;
                }
            }
        }

        .navbar-login {
            color: #FFFFFFCC;
            border-color: #FFFFFFCC;

            svg {
                path {
                    fill: #FFFFFFCC;
                }
            }
        }
    }
}

.toggler {
    display: flex;
    flex-direction: column;
    margin: auto 0;
    display: none;

    span {
        display: block;
        width: 20px;
        height: 2px;
        border-radius: 5px;
        background: $ohra-primary;
        margin: 2px 0;
    }
}

.toggler-closer {
    position: absolute;
    right: 100px;
    top: 100px;
    z-index: 3;
    display: none;

    button {
        display: flex;
        position: relative;

        span {
            width: 20px;
            height: 3px;
            background: #000;
            position: absolute;
            left: 0;
            top: 8px;
            transform-origin: center;

            &:first-child {
                transform: rotate(45deg);
            }

            &:last-child {
                transform: rotate(-45deg);
            }
        }
    }

    &.show {
        display: flex;
    }
}

@media screen and (max-width: 1420px) {
    .UserAvatar {
        display: flex;
    }
    .right-side {
        display: none;
    }

    .mobile-menu {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        // background-color: #080303e8;
        background-image: linear-gradient(253deg, #393c3deb, #000000ab, #2e2e2ee6);
        z-index: 2;
        width: 100vw;
        height: 0;
        transition: 400ms;
        overflow: hidden;

        &.show {
            height: 100vh;
        }

        .inner {
            display: flex;
            width: 100%;

            .container {
                position: relative;
                margin: 20px auto;
                display: flex;
                flex-direction: column;

                .toggler-closer {
                    top: 20px;
                    right: 25px;

                    button {
                        width: 30px;
                        height: 30px;

                        span {
                            width: 40px;
                            height: 2px;
                            left: -5px;
                            top: 15px;
                            background-color: #fff;
                        }
                    }
                }
            }

            ul {
                margin-top: 50px;

                li {
                    margin-bottom: 20px;
                    display: flex;

                    span {
                        display: block;
                        color: #eee;
                        margin: auto 5px auto 0;
                    }

                    a {
                        font-weight: 200;
                        font-size: 36px;
                        color: #fff;
                    }
                }
            }
        }
    }

    .toggler {
        display: flex;
        margin: auto 0 auto auto;
    }

    nav {
        .container {
            .right-side {
                display: none;
                position: absolute;
                background-color: #fff;
                width: 100vw;
                height: 100vh;
                top: 0;
                right: 0;
                z-index: 2;
                flex-direction: column;
                justify-content: center;

                a.my-profori {
                    margin: 0 auto;
                }

                ul {
                    margin: 30px auto;
                    flex-direction: column;
                }

                .navbar-login {
                    margin: 0 auto;
                }

                &.show {
                    display: flex;
                }
            }
        }
    }
}
</style>