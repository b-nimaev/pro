<template>
    <div class="page-booking">
        <NavbarComponent />
        <main>
            <section class="booking-header">
                <div class="container">
                    <div class="header-row">
                        <div class="user-avatar" :class="{ 'hasnt-photo': !userData.photo }">
                            <nuxt-img v-if="userData.photo" quality="80" width="128" height="128" format="webp"
                                :src="`https://profori.pro/avatars/${userData.photo}`" alt="user-avatar" />
                            <nuxt-img v-else quality="80" width="128" height="128" format="webp"
                                :src="`https://profori.pro/avatars/avatar-6436a9f703f00b8300b7a84a.png`"
                                alt="user-avatar" />
                        </div>
                        <h3>Запись к {{ 'consultant' === userData.role ? 'консультанту' : 'профориентологу' }}</h3>
                    </div>
                </div>
                <div class="container d-flex">
                    <div class="session-date-wrapper">
                        <div class="session-date">
                            <h4>Когда хотите провести {{ active_format }} сессию?</h4>
                            <div class="buttons-row">
                                <button class="active"><nuxt-img width="24" height="24" format="webp" quality="80"
                                        src="/assets/images/person-with-laptop-emoji.png" alt="" />
                                    <span>Онлайн</span></button>
                                <button><nuxt-img width="24" height="24" format="webp" quality="80"
                                        src="/assets/images/person-emoji.png" alt="" /> <span>Лично</span></button>
                            </div>
                            <p class="price">{{ userData.price }} ₽, 50 минут</p>

                            <div class="calendar">
                                <div class="controller">
                                    <button><svg class=" cursor-pointer flex-shrink-0 mr-4" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.28796 12L14.298 18.01L15.712 16.596L11.112 11.996L15.712 7.39599L14.298 5.98999L8.28796 12Z"
                                                fill="#323648"></path>
                                        </svg></button>
                                        <p class="month"><i>{{ month }}, {{ year }}</i></p>
                                    <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            class=" cursor-pointer flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.713 12L9.70196 5.98999L8.28796 7.40399L12.888 12.004L8.28796 16.597L9.70196 18.011L15.713 12Z"
                                                fill="#323648"></path>
                                        </svg></button>
                                </div>
                                <div class="calendar-inner">
                                    <div class="days">
                                        <ul>
                                            <li v-for="day in days" :key="day">
                                                {{ day }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="session-date__session-info">
                            <h4>Информация о сессии</h4>
                            <div class="content">
                                <div class="status-block">
                                    <p>Онлайн</p>
                                    <nuxt-img width="24" height="24" format="webp" quality="80"
                                        src="/assets/images/person-with-laptop-emoji.png" alt="" />
                                    <span>•</span>
                                    <span>только вы</span>
                                </div>
                                <div class="date-block">
                                    <span>7 сентября, <i>{{ day }}</i>, 02:00</span>
                                </div>
                                <div class="session-block">
                                    <span>Длительность 50 минут</span>
                                </div>
                                <hr />
                                <div class="price-block">
                                    <nuxt-img width="24" height="24" format="webp" quality="80"
                                        src="/assets/images/credit-card-emoji.png" alt="" /><span>Стоимость {{ userData.price }} ₽</span>
                                </div>
                                <button class="sendOrder">Отправить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <FooterComponent />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

.calendar-inner {
    .days {
        margin: 30px 0 15px;
        ul {
            display: flex;
            width: 100%;
            li {
                display: flex;
                flex: 1;
                justify-content: center;
                color: #999
            }
        }
    }
}

.sendOrder {
    padding: 12px 20px;
    background-color: #29b981;
    color: #fff;
    border-radius: 8px;
    margin-top: 15px;
    transition: 400ms ease;

    &:hover {
        background-color: #3fdda1;
    }

    &:active {
        background-color: #3cd69b;
    }
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border: 0;
    border-top: 1px solid;
    margin: 0;
    clear: both;
    color: inherit;
    border-color: #f3f3f3;
    width: 100%;
}

.calendar {
    margin-top: 30px;

    .controller {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}

.d-flex {
    display: flex;
}

.price {
    color: #999;
    font-size: 14px;
}

.session-date-wrapper {

    margin: auto;
    display: flex;

    .session-date {

        box-shadow: 1px 10px 13px 4px #b5b5b526;
        padding: 24px 32px;
        width: fit-content;
        border-radius: 8px;

        h4 {
            font-size: 24px;
        }

    }

    .session-date__session-info {
        margin-left: 30px;
        padding: 15px;

        display: flex;
        flex-direction: column;

        h4 {
            font-size: 20px;
        }

        .content {
            margin-top: 15px;

            hr {
                margin: 15px 0;
            }

            .status-block {
                margin-bottom: 10px;
                display: flex;

                p {
                    display: block;
                    margin: auto 4px auto 0;
                }

                span {
                    display: block;
                    margin: auto 7.5px;

                    &:last-child {
                        margin: auto 0;
                    }
                }
            }

            .date-block {
                margin-bottom: 10px;
            }

            .price-block {
                display: flex;

                img {
                    margin: auto 10px auto 0;
                    display: block;
                }

                span {
                    display: block;
                    margin: auto 0;
                }
            }
        }
    }
}

.buttons-row {
    display: flex;
    width: 100%;
    background: #fafafa;
    border-radius: 8px;
    overflow: hidden;
    margin: 15px 0;

    button {
        display: flex;
        flex: 1;
        justify-content: center;
        padding: 12px 90px;

        &.active {
            background-color: #d4f1e6;
            border-radius: 8px;

            span {
                color: #29b981;
            }
        }

        span {
            font-size: 16px;
            margin: auto 0;
            color: #999;
        }

        img {
            margin: auto 5px auto 0;
        }
    }
}

h3 {
    font-size: 28px
}

main {
    padding: 30px 0 60px;
    margin-top: 0;
    // background: #f7f2f2;
}

.header-row {
    padding: 30px 0;
    display: flex;
    margin-bottom: 20px;
    justify-content: center;

    img {
        border-radius: 50%;
        height: 92px;
        width: 92px;
    }

    h3 {
        margin: auto 0 auto 30px;
        font-size: 26px;
    }
}
</style>

<script>
import { useMainStore } from "~/store"

export default defineComponent({
    setup() {
        const mainStore = useMainStore()

        const days = [
            'пн',
            'вт',
            'ср',
            'чт',
            'пт',
            'сб',
            'вс'
        ]

        const months = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'

        ]

        let year = ''

        let day = ''
        let month = ''

        let daysInMonth = 0

        return { day, days, month, months, year, daysInMonth, mainStore }
    },
    data() {
        return {
            userData: {},
            active_format: ''
        }
    },
    async beforeCreate() {

        console.log(this.days)
        
        const date = new Date()
        
        let day = this.days[date.getDay() - 1]
        this.day = day

        console.log(day)

        let month = this.months[date.getMonth()]
        this.month = month
        console.log(month)

        let year = date.getFullYear()
        this.year = year

        this.daysInMonth = await getDaysInMonth(date.getFullYear(), date.getMonth())

        console.log()

        await fetch('https://profori.pro/api/users/' + this.$route.params._id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (res) => {
            let response = await res.json()
            if (response) {
                if (response._id) {
                    this.userData = response
                } else {
                    this.$router.push('/')
                }
            } else {
                this.$router.push('/')
            }
        })
    },
    mounted() {
        // this.mainStore.setColorScheme({
        // name: 'dark',
        // value: 'Темная'
        // })
    },
})

async function getDaysInMonth(year, month) {
    // Месяцы в JavaScript нумеруются с 0 (январь) по 11 (декабрь),
    // поэтому нужно вычесть 1 из номера месяца.
    const date = new Date(year, month - 1, 1);
    console.log(date)
    // Переходить к следующему месяцу и вычитать 1 день,
    // чтобы получить последний день текущего месяца.
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    // Вернуть количество дней в месяце.
    return date.getDate();
}
</script>
