<template>
    <div class="collapsed">
        <ul v-if="!settings">
            <li>
                <NuxtLink to="/dashboard">
                    <div class="icon">
                        <IconsUserIcon />
                    </div>
                    <span>Мой профиль</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink clic to="/dashboard/analytic">
                    <div class="icon">
                        <IconsAnalyticIcon />
                    </div>
                    <span>Аналитика</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/dashboard/management">
                    <div class="icon">
                        <IconsManagementIcon />
                    </div>
                    <span>Управление</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/dashboard/calendar">
                    <div class="icon">
                        <IconsCalendarIcon />
                    </div>
                    <span>Консультации</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/dashboard/finances">
                    <div class="icon">
                        <IconsFinanceIcon />
                    </div>
                    <span>Финансы</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/dashboard/settings">
                    <div class="icon">
                        <IconsCogsIcon />
                    </div>
                    <span>Настройки</span>
                </NuxtLink>
            </li>
            <!-- <DashboardSidebarListItemComponent Icon="IconsFinanceIcon" /> -->
            <li>
                <a @click="logout" href="javascript:void(0)">Выйти</a>
            </li>
        </ul>
        <ul v-if="settings">
            <li>
                <NuxtLink clic to="/dashboard/settings">
                    <div class="icon">
                        <IconsAnalyticIcon />
                    </div>
                    <span>Личные данные</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/dashboard/settings/experience">
                    <div class="icon">
                        <IconsManagementIcon />
                    </div>
                    <span>Опыт работы</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/dashboard/settings/safety">
                    <div class="icon">
                        <IconsFinanceIcon />
                    </div>
                    <span>Безопасность</span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/dashboard/settings/delete-account">
                    <div class="icon">
                        <IconsCogsIcon />
                    </div>
                    <span>Удаление аккаунта</span>
                </NuxtLink>
            </li>
            <!-- <DashboardSidebarListItemComponent Icon="IconsFinanceIcon" /> -->
            <li>
                <a @click="back" href="javascript:void(0)">Назад</a>
            </li>
        </ul>
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
            // settings: false
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
            this.mainStore.setRegistrationData({
                name: '',
                email: '',
                role: '',
                password: '',
                rel: ''
            })
            useCookie('id').value = ''
            return this.$router.push("/login")
        },
        async back() {
            this.$router.push('/dashboard')
            this.mainStore.setDashboardSettings(false)
        }
    },
    computed: {
        settings() {
            console.log(this.mainStore.getIsDashboardSettings)
            return this.mainStore.getIsDashboardSettings
        }
    },
    props: {
        themeClass: 'light'
    },
})
</script>

<style lang="scss" scoped>
ul {
    li {

        a {
            display: flex;
            font-family: 'Nunito', sans-serif;
            margin: 0 0 10px;
            font-size: 16px;
            color: #333333;
            font-weight: 600;
            width: 220px;
            padding: 10px 20px;

            position: relative;
            top: 0;
            left: 0;
            border-radius: 5px;
            background-color: transparent;
            border: 1px solid transparent;
            transition: 400ms;

            .icon {
                margin: auto 5px auto 0;
                display: flex;

                svg {
                    margin: auto;
                    fill: #000000cc;
                }
            }

            &.acitve {
                background-color: #111;

                svg {

                    g,
                    path {
                        fill: #fff;
                    }
                }

                a {
                    color: #fff;
                }
            }

            &:hover {
                background-color: #fafafa;
                left: 5px;
            }

            &.router-link-active.router-link-exact-active {
                left: 5px;
                background-color: #000000cc;
                .icon {
                    svg {
                        fill: #fff;
                    }
                }
            }
        }

    }
}

ul {
    li {
        a {
            color: #000000cc;

            .icon {
                svg {

                    path,
                    g {
                        fill: #fff;
                    }
                }
            }

            &:hover {
                // background-color: #0000003b;
            }
        }
    }
}

div {
    ul {
        li {
            a {
                width: auto;
                span {
                    display: none;
                }

                .icon {
                    margin: 0 auto;
                    svg {
                        width: 24px;
                        height: 24px;
                    }
                }

                &.router-link-active.router-link-exact-active {
                    left: 0;
                }
            }
        }
    }
}

.pagewrapper.dark ul {
    li {
        a {
            color: #fff;

            .icon {
                svg {

                    path,
                    g {
                        fill: #fff;
                    }
                }
            }

            &:hover {
                background-color: #0000003b;
            }
        }
    }
}

@media screen and (max-width: 992px) {
    div {
        ul {
            display: flex;
        }
    }
}
</style>