<template>
    <div class="dashboard-content">
        <DashboardSettingsSectionHeadingComponent title="Реферальные ссылки" />
        <ul>
            <li v-for="link of links" :key="link.value">
                <div class="headertop">
                    <div class="icons">
                        <a @click="removeLink" :data-id="link._id" href="javascript:void(0)">
                            <svg :data-id="link._id" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path :data-id="link._id"
                                    d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z" />
                            </svg>
                        </a>
                        <a @click="copy" href="javascript:void(0)" :data-id="link._id">
                            <svg :data-id="link._id" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path :data-id="link._id"
                                    d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z" />
                            </svg>
                        </a>
                    </div>
                    <span @click="copy" :data-id="link._id" class="muted">https://profori.pro/</span><span @click="copy"
                        :data-id="link._id">{{ link._id }}</span>
                </div>
                <div class="statistic" v-if="link.users.length">
                    <ul>
                        <li>Присоединилось: {{ link.users.length }}</li>
                        <!-- <li v-for="linkItem of link.users" :key="linkItem">{{ linkItem }}</li> -->
                    </ul>
                </div>
            </li>
        </ul>
        <button @click="create_referal_link">Создать ссылку</button>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/dashboard.scss';
@import '@/assets/css/main.scss';

.headertop {
    display: flex;
}

.statistic {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    margin-top: 10px;
    ul {
        width: 100%;
        margin-bottom: 0;
        display: flex;
        flex-wrap: wrap;
        li {
            margin-right: 10px;
            margin-bottom: 10px;
            color: #eee;
            &:last-child {
                margin-right: 0;
            }
        }
    }
}

.icons {
    display: flex;
    margin: auto 5px auto 0;

    a {
        display: flex;
        margin: auto;

        svg {
            user-select: none;
            width: 16px;
            margin: auto 0;
            transition: 400ms;

            &:first-child {
                margin-right: 10px;
            }

            path {
                transition: 400ms;
                fill: #eee
            }
        }

        &:hover {
            svg path {
                fill: #fff;
            }
        }
    }
}

h4 {
    font-size: 26px;
    color: #eee;
    margin-bottom: 30px;
}

button {
    padding: 10px 20px;
    background-color: $ohra-primary;
    color: #fff;
    border-radius: 30px;
    font-size: 20px;
}

ul {
    margin-bottom: 30px;
    width: 100%;
    li {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;


        span {
            font-size: 16px;
            color: #eee;
            cursor: pointer;

            &.muted {
                color: #877373;
            }
        }
    }
}
</style>

<script lang="ts">

async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Текст скопирован в буфер обмена:', text);
        } catch (err) {
            console.error('Не удалось скопировать текст в буфер обмена:', err);
        }
    } else {
        console.error('API буфера обмена не поддерживается в вашем браузере');
    }
}

// Используйте эту функцию для копирования текста в буфер обмена:

import { useMainStore } from "~/store"

export default defineComponent({

    setup() {

        const mainStore = useMainStore()
        return { mainStore }

    },
    computed: {
        links() {
            return this.mainStore.getUser.ref_links
        }
    },
    methods: {
        async create_referal_link() {
            let user = this.mainStore.getUser
            user.ref_links.push({
                value: 'asdf',
                users: []
            })
            await fetch('https://profori.pro/api/users/' + user._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(async (response) => {
                this.mainStore.setUser(await response.json())
            }).catch(error => {
                console.error(error)
            })
        },
        async removeLink(e: any) {
            let id = e.target.getAttribute('data-id')
            console.log(id)
            let user = this.mainStore.getUser
            let ref_links = user.ref_links
            for (let i = 0; i < ref_links.length; i++) {
                if (id === ref_links[i]._id) {
                    console.log(ref_links[i])
                    user.ref_links.splice(i, 1)
                }
            }
            await fetch('https://profori.pro/api/users/' + user._id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then(async (response) => {
                this.mainStore.setUser(await response.json())
            }).catch(error => {
                console.error(error)
            })
        },
        async copy(e: any) {
            let id = e.target.getAttribute('data-id')
            let user = this.mainStore.getUser
            let ref_links = user.ref_links
            for (let i = 0; i < ref_links.length; i++) {
                if (id === ref_links[i]._id) {
                    copyTextToClipboard(`https://profori.pro?ref=${user._id}_${ref_links[i]._id}`);
                }
            }
        }
    },
    mounted() {
        // io.emit({
        // _id: refCreator?._id,
        // handle: 'refs_updated'
        // })
        const eventName = `${this.mainStore.getUser._id}_refs_updated`;

        this.$socket.on(eventName, async () => {
            // Ваш код обработки события
            await fetch('https://profori.pro/api/users/' + this.mainStore.getUser._id, {
                method: 'GET',
            }).then(async (res) => {
                let userdata = await res.json()
                if (userdata._id) {
                    this.mainStore.setUser(userdata)
                    console.log('кто-то зарегистрировался по ссылке')
                }
            })
        });
    },
    beforeUnmount() {
        const eventName = `${this.mainStore.getUser._id}_refs_updated`;
        this.$socket.off(eventName);
    }
})
</script>
