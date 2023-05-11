<template>
    <div class="slide">
        <div class="user-avatar">
            <nuxt-img quality="80" width="48" height="48" format="webp" :src="`/assets/avatars/avatar-643d00709d2ef099f168ea6b-1681725742556.jpeg`" alt="user-avatar" />
        </div>
        <div class="user-data">
            <div class="user-name">
                <h4>Новикова Мария</h4>
                <div class="status">Pro</div>
            </div>
            <div class="user-meta">
                <div class="user-nickname"><span>@marianovikova</span></div>
                <div class="user-exp"><span>5 лет на сервисе</span></div>
            </div>
            <div class="user-position">
                <p>Профориентолог</p>
            </div>
        </div>
        <button>Перейти</button>
    </div>
</template>

<script lang="ts">
import { useMainStore } from "~/store"

export default defineComponent({
    setup () {
        const mainStore = useMainStore()
        return { mainStore }
    },
    props: {
        photo: {
            type: String
        }
    }
})
</script>

<style lang="scss" scoped>
.pagewrapper.dark {
    .slide {
        background-color: #1a19193b;
        box-shadow: -1px 1px 20px 0px rgb(0 0 0 / 21%);

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
    width: fit-content;
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

    .user-avatar {
        margin-bottom: 15px;
    }

    .user-data {
        display: flex;
        flex-direction: column;

        .user-name {
            display: flex;

            h4 {
                font-size: 20px;
                color: #0A0E10E5;
                margin-right: 10px
            }

            .status {
                padding: 1px 8px;
                border-radius: 3px;
                background-color: #FF6610;
                color: #fff;
                margin: auto 0;
            }
        }

        .user-meta {
            margin: 0 auto 15px;
            display: flex;
            font-size: 12px;

            .user-nickname {
                margin-right: 10px;

                span {
                    color: #1d0f0fb5
                }
            }

            .user-exp {
                span {
                    color: #1d0f0fb5;
                }
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