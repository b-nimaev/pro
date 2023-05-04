<template>
    <div v-on:mouseover="hoveredHandler" v-on:mouseout="unhovered" class="user-controller" :class="themeClass">
        <div class="real-user-controller" @click="goToDashboard()">
            <div class="left-side">
                <div class="UservAatar">
                    <img v-if="user.photo" :src="`https://profori.pro/avatars/${user.photo}`" alt="">
                    <IconsAvatarEmtyIcon v-if="!user.photo" />
                </div>
            </div>
            <div class="right-side" v-if="mobile">
                <h4>{{ user.firstName }}</h4>
                <p>{{ user.position }}</p>
            </div>
        </div>
        <div class="type-fake-user-controller" :class="{ 'hovered': hovered }">
            <div class="inner">
                <div class="list-of-unordered">
                    <ul>
                        <li>
                            <NuxtLink to="/dashboard">Мой профиль</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/dashboard/analytic">Аналитика</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/dashboard/management">Управление</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/dashboard/calendar">Консультации</NuxtLink>
                            <!-- <a href="javascript:void(0)">Консультации</a> -->
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NuxtLink to="/dashboard/my-blog">Мои статьи</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/dashboard/messages">Сообщения</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/dashboard/settings">Настройки</NuxtLink>
                        </li>
                        <li class="logout">
                            <a href="javascript:void(0)" @click="logout()">Выйти</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
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
            hovered: false
        }
    },
    methods: {
        async logout() {
            this.mainStore.setUser({
                colorScheme: {
                    name: 'light',
                    value: 'Светлая'
                },
            })
            useCookie('id').value = ''
            this.$router.push('/login')
        },
        async goToDashboard() {
            this.$router.push('/dashboard')
        },
        hoveredHandler() {
            this.hovered = true
        },
        unhovered() {
            this.hovered = false
        }
    },
    computed: {
        user: function () {
            return this.mainStore.getUser
        }
    },
    props: {
        themeClass: 'light',
        mobile: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style lang="scss" scoped>
.UservAatar {
    width: 40px;
    height: 40px;

    svg {
        width: 100%;
        height: 100%;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
}

.user-controller {
    cursor: pointer;
    // background-color: #333;
    margin: auto 0 auto 60px;
    position: relative;

    .real-user-controller {
        display: flex;
        padding: 15px 0;

        .left-side {
            display: flex;
            margin: auto 15px auto 0;

            .UserAvatar {
                margin: auto 5px auto 0;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                // border: 1px solid #ccc;

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

            svg {
                margin: auto 0;
            }
        }

        .right-side {
            margin: auto 0;

            h4 {
                font-size: 16px;
                color: #000000BF;
            }

            p {
                font-size: 14px;
                color: #000000BF;
            }
        }
    }

    .type-fake-user-controller {
        position: absolute;
        top: 100%;
        border-radius: 5px;
        right: -100%;
        z-index: 2;
        // background-clip: ;
        // background-color: #141414;
        // background-color: #ffffff;
        background-image: linear-gradient(138deg, #302a2a, #282b2bf0, #082625);
        opacity: 0;
        // background-image: linear-gradient(45deg, #3fa16b, rgb(17 185 188 / 96%));
        // height: 239px;
        height: 0;
        transition: 400ms;
        overflow: hidden;
        width: 0;
        // width: 397px;

        &.hovered {
            top: 100%;
            height: 239px;
            width: 397px;
            right: 0;
            opacity: 1;

            .inner {
                top: 0;
                right: 0;
            }
        }

        .inner {
            transition: 400ms;
            position: relative;
            top: 0;
            right: 0;
            padding: 30px;
        }

        .list-of-unordered {
            display: flex;
            // flex-direction: row-reverse;

            ul {
                // margin-right: 15px;
                padding: 0 20px;
                position: relative;

                // border-right: 1px solid #000;
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 100%;
                    height: 70%;
                    width: 1px;
                    top: 15%;
                    // background-color: #0003;
                }

                &:last-child {
                    margin-right: 0;

                    &::after {
                        content: none;
                        display: none;
                    }
                }

                li {
                    a {
                        display: block;
                        padding: 10px;
                        margin: 5px;
                        font-size: 16px;
                        position: relative;
                        overflow: hidden;
                        transition: 400ms ease-in;
                        width: fit-content;
                        color: #eee;
                        border-radius: 5px;

                        // &::after {
                        //     content: '';
                        //     display: block;
                        //     position: absolute;
                        //     bottom: 0;
                        //     left: -120%;
                        //     height: 1px;
                        //     width: 80%;
                        //     background-color: #eee;
                        //     // background-image: linear-gradient(244.45deg, rgb(63, 221, 192) 3.03%, rgba(101, 195, 195, 0.87) 99.9%);
                        //     border-radius: 3px;
                        //     opacity: 1;
                        //     transition: 300ms ease-in;
                        // }

                        &:hover {
                            background-color: #0009;
                            // &::after {
                            //     left: 10%;
                            // }
                        }

                        &:active {
                            background-color: #0007;
                        }

                        &.router-link-active.router-link-exact-active {
                            background-color: #0005;
                            &::after {
                                opacity: 0;
                            }
                        }
                    }
                }
            }
        }
    }

    &.dark {
        .real-user-controller {
            .right-side {

                h4,
                p {
                    color: #eee;
                }
            }
        }

        .type-fake-user-controller {
            background-color: #222;
            // background-image: linear-gradient(45deg, #0d372f, rgb(42 32 78 / 91%));
        }
    }
}

.pagewrapper.light .user-controller .real-user-controller .right-side {

    h4,
    p {
        color: #333
    }
}

.pagewrapper.dark .user-controller .real-user-controller .right-side {

    h4,
    p {
        color: #fff
    }
}</style>