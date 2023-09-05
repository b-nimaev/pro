<template>
    <div class="slide" v-if="user">
        <div class="user-avatar">
            <nuxt-img v-if="user.photo" quality="80" width="128" height="128" format="webp" :src="`https://profori.pro/avatars/${user.photo}`"
                alt="user-avatar" />
            <nuxt-img v-else quality="80" width="128" height="128" format="webp" :src="`https://profori.pro/avatars/avatar-6436a9f703f00b8300b7a84a.png`"
                alt="user-avatar" />
        </div>
        <div class="user-data">
            <div class="user-name">
                <h4>{{ user.firstName }}</h4>
                <div class="status">Pro</div>
            </div>
            <div class="user-meta">
                <div class="user-nickname" v-if="user.nickname"><span>@{{ user.nickname }}</span></div>
                <div class="user-exp" v-if="user.experience2"><span>Опыт {{ user.experience2 }} лет</span></div>
                <div class="user-exp" v-if="!user.experience2"><span>Опыт не указан</span></div>
                <div class="price" v-if="user.price"><span>{{ user.price }} ₽ в час</span></div>
            </div>
            <div class="user-position">
                <p v-if="user.role === 'career' || 'consultant'">Карьерный консультант</p>
                <p v-if="user.role === 'profori'">Профориентолог</p>
            </div>
        </div>
        <button @click="goToUser(user._id)">Перейти</button>
    </div>
</template>

<script lang="ts">
import { useMainStore } from "~/store"

export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    props: {
        user: {
            type: Object
        }
    },
    data () {
        return {
            hours: 0,
            days: 0,
            name: 'часов'
        }
    },
    methods: {
        goToUser (id: string) {
            this.$store.setGoTo(id)
            this.$router.push(`/users/${id}`)
        }
    },
    mounted () {

        if (this.user) {

            const createdAt: any = new Date(this.user.createdAt)
            const now: any = new Date()

            const timed = now - createdAt
            const seconds = Math.floor(timed / 1000);
            const minutes = Math.floor(seconds / 60);

            this.hours = Math.floor(minutes / 60);
            this.days = Math.floor(this.hours / 24);
            
            if (this.hours === 1) {
                this.name = "час";
            } else if (this.hours >= 2 && this.hours <= 4) {
                this.name = "часа";
            } else {
                this.name = "часов";
            }

        }
    }
})
</script>

<style lang="scss" scoped>
.pagewrapper.dark {
    .slide {
        background-color: #1a19193b;
        box-shadow: -1px 1px 20px 0px rgb(0 0 0 / 21%);
        // width: 300px;
        .user-data {
            .user-name {
                h4 {
                    color: #eee;
                }
            }

            .user-meta {
                .user-nickname {
                    span {
                        color: #bbb;
                    }
                }

                .user-exp {
                    span {
                        color: #bbb;
                    }
                }


            }
        }

        button {
            background-color: rgb(6 6 6 / 63%);
            color: #989898;

        }

        &:hover {
            button {
                border-color: transparent;
            }
        }

    }
}

.slide {
    padding: 30px;
    text-align: center;
    display: inline-block;
    width: fit-content;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    top: 0;
    margin: 15px 0;
    // width: fit-content;
    cursor: pointer;
    width: fit-content !important;
    margin-right: 15px;
    transition: 400ms ease-in;
    box-shadow: -1px 1px 6px 0px #ebebeb78;

    &:hover {
        top: -5px;
        box-shadow: 0px -3px 0px #99DCD5;

        button {
            background-color: #0A0E10;
            color: #fff;
            border-color: #fff;
        }
    }
    &:active {
        top: 1px;
    }
    .user-avatar {
        margin-bottom: 15px;
        border-radius: 5px;
        overflow: hidden;

        img {
            object-position: center;
            width: 128px;
            height: 128px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }
    }

    .user-data {
        display: flex;
        flex-direction: column;

        .user-name {
            display: flex;
            margin: 0 auto 5px;
            h4 {
                font-size: 14px;
                color: #0A0E10E5;
                margin-right: 10px;
                max-width: 180px;
                overflow: hidden;
                white-space: nowrap;
            }

            .status {
                padding: 1px 5px;
                border-radius: 3px;
                background-color: #FF6610;
                color: #fff;
                margin: auto 0;
                font-size: 8px;
            }
        }

        .user-meta {
            margin: 0 auto 15px;
            display: flex;
            font-size: 12px;
            flex-wrap: wrap;
            justify-content: center;
            .user-nickname {
                margin-right: 10px;
                margin-left: auto;

                span {
                    color: #1d0f0fb5
                }
            }

            .user-exp {
                display: block;
                margin-right: auto;
                margin-left: 0;
                span {
                    color: #1d0f0fb5;
                }
            }

            .price {
                width: 100%;
                display: block;
                // width: 100%;
                margin: auto 15px;
                font-size: 14px
            }
        }

        .user-position {
            p {
                font-size: 16px;
            }
        }
    }

    button {
        margin-top: 15px;
        padding: 8px 40px;
        color: #0A0E10;
        border: 1px solid #0A0E10;
        background-color: #fff;
        border-radius: 50px;
        transition: 400ms ease;
    }
}

@media screen and (max-width: 760px) {
    .slide {
        margin: auto;
        width: 100%;

        .user-data {
            .user-name {
                margin: auto;
            }
        }
    }
}
</style>