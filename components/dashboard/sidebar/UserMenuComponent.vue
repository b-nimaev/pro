<template>
    <div>
        <ul>
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

        }
    },
    methods: {
        async logout() {
            this.$router.push("/login")
            this.mainStore.setSessionID('')
        }
    },
    props: {
        themeClass: 'light'
    },
    components: {

    }
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
            width: 190px;
            padding: 10px 20px;
            position: relative;
            top: 0;
            left: 0;
            border-radius: 5px;
            background-color: transparent;
            border: 1px solid transparent;
            transition: 400ms;

            span {}

            .icon {
                margin: auto 5px auto 0;
                display: flex;

                svg {
                    margin: auto;
                }
            }

            &.acitve {
                background-color: #333;

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
        }

    }
}
.pagewrapper.dark ul {
    li {
        a {
            color: #fff;
            .icon {
                svg {
                    path, g {
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
</style>