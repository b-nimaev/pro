<template>
    <div>
        <NavbarComponent themeClass="dark" />
        <main>
            <div class="container">
                <div class="card-header">
                    <div class="user-avatar">
                        <nuxt-img quality="80" width="150" height="150" format="webp"
                            :src="`https://profori.pro/avatars/${userData.photo}`" alt="user-avatar" />
                    </div>

                    <div class="user-data">
                        <h3>{{ userData.firstName }} {{ userData.lastName }}</h3>
                        <p>@balzhinimaev 22 лет, Улан-Удэ</p>
                        <p>3 дня в сервисе</p>
                        <p class="last-seen">был 29 минут назад</p>
                        <div class="reviews">
                            <div class="stars">
                                <IconsStarsIcon />
                                <IconsStarsIcon />
                                <IconsStarsIcon />
                                <IconsStarsIcon />
                                <IconsStarsIcon />
                            </div>
                            <div class="count">
                                <span>114 отзывов</span>
                            </div>

                            <div class="latest">
                                <span>21 новых</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="left-side">
                        <button><span>Предложить заказ</span></button>
                        <button><span>Отправить сообщение</span></button>
                    </div>
                    <div class="reviews">
                        <div class="heading">
                            <h4>Отзывы клиентов</h4>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <FooterComponent themeClass="light" />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
$dark: #07020263;

.container {
    display: block;
}

.card-header {
    background-color: $dark;
    width: 100%;
    border-radius: 5px;
    padding: 30px 0;
    margin-top: 50px;
    margin-bottom: 0;
    padding: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;

    .user-avatar {
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 150px;
        height: 150px;

        img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            object-position: center;
        }
    }

    .user-data {
        color: #E0E0E0;
        margin: auto 0 auto 30px;

        h3 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            margin-bottom: 10px;

            &.last-seen {
                margin-bottom: 0;
            }
        }

        .reviews {
            margin: 10px 0;
            display: flex;

            svg {
                margin-right: 6px;

                &:last-child {
                    margin-right: 0;
                }
            }

            .stars {
                margin: auto 10px auto 0;
                display: flex;
            }

            .count {
                margin: auto 0;

                span {
                    color: #FFD600;
                    font-size: 16px;
                    text-shadow: 0 0px 3px #FFD600;
                }
            }

            .latest {
                margin: auto 0 auto 10px;
                color: #67FF4F;
                text-shadow: 0 0px 3px #67FF4F;
            }
        }
    }
}

.card-content {
    padding: 30px;
    display: flex;

    .left-side {
        button {
            background-color: #070707;
            width: 250px;
            display: flex;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 15px;
            transition: 400ms;

            &:hover {
                background-color: #0c0b0b;
            }

            &:active {
                background-color: #080707;
            }

            &:last-child {
                margin-bottom: 0;
            }

            span {
                margin: auto;
                color: #fff;
            }
        }
    }

    .reviews {
        margin-left: 30px;
        border-radius: 5px;
        width: 100%;

        .heading {
            margin: 0 0 auto;
            padding: 30px;
            background-color: $dark;
            border-radius: 5px;

            h4 {
                font-size: 24px;
                border-radius: 5px;
                color: #E0E0E0;
            }
        }
    }
}
</style>

<script>
import { useMainStore } from "~/store"

export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            userData: {}
        }
    },
    async beforeCreate() {
        await fetch('https://profori.pro/api/users/' + this.$route.params._id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (res) => {
            let response = await res.json()
            this.userData = response
        })
    },
    mounted() {
        this.mainStore.setColorScheme({
            name: 'dark',
            value: 'Темная'
        })
    },
})
</script>
