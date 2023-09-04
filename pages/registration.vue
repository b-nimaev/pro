<template>
    <div class="registration-page">
        <NavbarComponent />
        <main class="registration">
            <div class="container">
                <form @submit.prevent="registrationUser">
                    <h2>Создание аккаунта</h2>
                    <div class="input-group" :class="{ 'notNull': email }">
                        <label for="email">Электронная почта</label>
                        <input type="email" id="email" v-model="email">
                    </div>

                    <div class="input-group" :class="{ 'notNull': password }">
                        <label for="password">Пароль</label>
                        <input type="password" id="password" v-model="password">
                    </div>

                    <div class="input-group" :class="{ 'notNull': confirmPassword, 'error': ((password !== confirmPassword) && (confirmPassword.length > 0)) }">
                        <label for="password-confirm">Подтвердите пароль</label>
                        <input type="password" id="password-confirm" v-model="confirmPassword">
                    </div>

                    <div class="error-div" v-if="error">
                        <p>{{ error }}</p>
                    </div>

                    <input type="submit" value="Создать аккаунт">
                    <div class="create-account">
                        <NuxtLink to="login">Войти</NuxtLink>
                    </div>
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
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            error: ''
        }
    },
    methods: {
        async registrationUser () {

            this.error = ``

            if (this.password.length > 6) {

                if (this.password === this.confirmPassword) {

                    await fetch('https://profori.pro/api/users/register', {
                        method: 'POST',
                        body: {
                            email: this.email,
                            password: this.password
                        }
                    }).then(async (res) => {
                        console.log(res)
                        // if (res.status === 200) {
                            // this.mainStore.setUser(await res.json())
                            // useCookie('id').value = this.mainStore.getConfirmID
                            // this.$router.push('/dashboard')
                        // }
                    })

                }

            } else {

                this.error = `Длина пароля должна составлять не менее 6 знаков`

            }
        },
        register() {
            this.mainStore.setLoginStatus('register')
        },
        login() {
            this.mainStore.setLoginStatus('login')
        }
    },
    computed: {
        status() {
            return this.mainStore.getLoginStatus
        }
    }
})
</script>

<style lang="scss" scoped>
$green: #8efb8a;
$red: #f01e1e;

.error-div {
    margin-bottom: 30px;
    p {
        color: $red 
    }
}

.create-account {
    display: block;

    a {
        display: block;
        margin-top: 30px;
        width: fit-content
    }
}

.registration {
    padding: 120px 0 30px;
}

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

            &:active,
            &:focus,
            {
            border-color: #42a3ff
        }
    }
}

.notNull input {
    border-color: #42a3ff;
    color: #0d2944;
    // color: #fff;
    // background-color: #42a3ff;
}

.notNull.error input, .error input {
    border-color: #f01e1e;
    color: #f01e1e;
    // color: #fff;
    // background-color: #f01e1e;
}

input[type="submit"],
.create-account a {
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