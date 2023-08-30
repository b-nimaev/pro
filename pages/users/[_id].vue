<template>
    <div class="single-user">
        <div class="single-user-content">
            <NavbarComponent :is-dashboard="true" :fluid-container="true" />
            <main>
                <div class="container-fluid">
                    <div class="row">
                        <div class="right-side">
                            <div class="card-header">
                                <div class="user-avatar" :class="{ 'hasnt-photo': !userData.photo }">
                                    <nuxt-img v-if="userData.photo" quality="80" width="128" height="128" format="webp"
                                        :src="`https://profori.pro/avatars/${userData.photo}`" alt="user-avatar" />
                                    <nuxt-img v-else quality="80" width="128" height="128" format="webp"
                                        :src="`https://profori.pro/avatars/avatar-6436a9f703f00b8300b7a84a.png`"
                                        alt="user-avatar" />
                                </div>
                                <div class="user-data">
                                    <h4>{{ userData.firstName }} {{ userData.lastName }}</h4>
                                    <p>@{{ userData.nickname }}</p>
                                    <!-- <p>3 дня в сервисе</p> -->
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
                    </div>
                </div>
            </main>
            <hr />
            <FooterComponent themeClass="light" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
$dark: #07020263;

.single-user {
    margin: 15px;
    // padding: 15px;
    // background: #aaa;
}

hr {
    border-color: #eee
}

.single-user-content {
    padding: 15px;
    background-image: linear-gradient(45deg, #ffffffc9, #fdfdfd);
    // background-color: #ececec;
    border-radius: 8px;
}

.container-fluid {
    padding: 0;

    .row {
        display: flex;
    }
}

.card-header {
    background-color: #fff;
    width: 100%;
    border-radius: 5px;
    padding: 30px 0;
    padding: 30px;
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

        &.hasnt-photo {
            box-shadow: none;
        }
    }

    .user-data {
        color: #444;
        margin: auto 0 auto 30px;

        h4 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        p {
            font-size: 16px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 300;
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
                    color: #d9c146;
                    font-size: 16px;
                    font-size: 18px;
                    // text-shadow: 0 0px 3px #FFD600;
                }
            }

            .latest {
                margin: auto 0 auto 10px;
                color: #2abac1;
                font-size: 18px;
                // text-shadow: 0 0px 3px #67FF4F;
            }
        }
    }
}

.right-side {
    background-color: #fff;
    padding: 30px;
    width: 100%;
    border-radius: 8px;

}

.card-content {
    padding: 30px;
    display: flex;

    .left-side {
        button {
            width: 220px;
            display: flex;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 15px;
            transition: 400ms;
            // border: 1px solid #2ce5bf;
            background-color: #08a284;

            &:hover {
                background-color: #30cbab;
                // border: 1px solid #30cbab;
            }

            &:active {
                background-color: #258f7a;
                // border: 1px solid #40e5c3;
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
            padding: 0 30px;
            // background-color: #eee;
            border-radius: 5px;

            h4 {
                font-size: 24px;
                border-radius: 5px;
                color: #444;
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
        // this.mainStore.setColorScheme({
        // name: 'dark',
        // value: 'Темная'
        // })
    },
})
</script>
