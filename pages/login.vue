<template>
    <div class="login-page">
        <NavbarComponent />
        <main class="registration">
            <div class="container">
                <form @submit.prevent="authuser">
                    <h2>Авторизация</h2>
                    <div class="input-group">
                        <label for="username">Имя пользователя</label>
                        <input type="text" id="username">
                    </div>

                    <div class="input-group">
                        <label for="password">Пароль</label>
                        <input type="password" id="password">
                    </div>

                    <div class="input-group reset-password">
                        <NuxtLink to="reset">
                            <span>Забыли пароль?</span>
                        </NuxtLink>
                    </div>

                    <input type="submit" value="Войти">
                </form>
            </div>
        </main>
        <FooterComponent />
    </div>  
</template>

<script>
import { useMainStore } from '~/store';
definePageMeta({
    middleware: [
        'login'
    ]
})
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    methods: {
        register() {
            this.mainStore.setLoginStatus('register')
        },
        login() {
            this.mainStore.setLoginStatus('login')
        }
    },
    computed: {
        status () {
            return this.mainStore.getLoginStatus
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    margin: 50px auto;
}
.login-page {
    background-color: #fdfdfd;
}

form {
    background-color: #fff;
    padding: 50px;
    border-radius: 8px;

    h2 {
        font-size: 28px;
        margin-bottom: 30px;
        text-align: center;
        color: #444;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        &.reset-password {
            display: flex;
            margin-bottom: 45px;
            a {
                margin: 0 auto 0 0;
                display: block;
                span {
                    position: relative;
                    display: block;
                    padding: 15px 0;
                    margin: -15px 0;
                    overflow: hidden;
                    &:before {
                        content: '';
                        display: block;
                        position: absolute;
                        left: -100%;
                        top: calc(100% - 5px);
                        background-color: #444;
                        width: 100%;
                        height: 1px;

                        transition: 400ms ease;
                    }
                }

                &:hover {
                    span {
                        &::before {
                            left: 0;
                        }
                    }
                }
            }
        }

        label {
            font-size: 18px;
            margin-bottom: 15px;
        }
        input {
            padding: 18px 20px;
            // box-shadow: 0 2px 0px 2px #ededed;

            border: 1px solid #efefef;
            border-radius: 0;
            font-size: 18px;
            color: #222;
            cursor: pointer;
            transition: 400ms ease;
            
            border-radius: 8px;

            &:hover {
                border-color: #42a4ff88;
            }

            &:active, &:focus {
                border-color: #42a3ff
            }
        }
    }

    input[type="submit"] {
        padding: 14px 24px;
        font-size: 18px;
        background-color: #42a3ff;
        color: #fff;
        border: 1px solid transparent;
        border-radius: 8px;
        transition: 400ms ease;

        &:hover {
            background-color: transparent;
            border-color: #42a3ff;
            color: #42a3ff;
        }
    }
}

.wrapper {
    // background-color: #fbfbfb;
    border-radius: 5px;
    padding: 80px 100px;
    margin: 100px auto;
    width: fit-content;

    .items {
        display: flex;
    }
}

.right-side {
    // background-image: linear-gradient(244.45deg, rgba(0, 0, 0, 0.8) 3.03%, rgba(0, 0, 0, 0.8) 99.9%);
    // background-image: linear-gradient(244.45deg, rgb(63 221 192) 3.03%, rgb(101 195 195 / 87%) 99.9%);
    background-image: linear-gradient(244.45deg, rgb(54 40 46) 3.03%, rgb(3 8 8 / 87%) 99.9%);
    height: 300px;
    margin: auto;
    // border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    padding: 0 30px;
    text-align: center;
    margin-right: auto;
    margin-left: 0;

    &.register {
        margin: auto 0;
        padding: 0 15px;
    }

    h3 {
        font-size: 24px;
    }

    p {
        margin: 30px 0;
    }

    button {
        margin: 0 auto;
        padding: 10px 28px;
        border-radius: 30px;
        font-size: 16px;
        transition: 400ms;
        transform: scale(1);
        border: 1px solid #fff;
        background-image: linear-gradient(244.45deg, rgb(54 40 46) 3.03%, rgb(3 8 8 / 87%) 99.9%);
        &:hover {
            background-color: #fff;
            color: #eee;
        }

        &:active {
            transform: scale(.95);
        }
    }
}

@media screen and (max-width: 1100px) {
    .wrapper {
        margin: 0 auto;
        padding: 50px 0 20px; 
    }
    .items {
        .right-side {
            display: none;
        }
    }
}

</style>