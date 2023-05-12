<template>
    <div>
        <aside>
            <AuthHeadingComponent message="Войти в profori" />
            <AuthSocialsListComponent />
            <form @submit.prevent="login">
                <!-- <p>или используйте email адрес</p> -->
                <AuthInputGroupComponent input-name="email" input-type="email">
                    <IconsEnvelopeIcon />
                </AuthInputGroupComponent>
                <AuthInputGroupComponent input-name="password" input-type="password">
                    <IconsLockIcon />
                </AuthInputGroupComponent>
                <p v-if="errMessage">{{ errMessage }}</p>
                <p v-if="confirm"><a href="javscript:void(0)">Выслать письмо повторно</a></p>
                <a href="javascript:void(0)">Забыли пароль?</a>
                <input type="submit" value="Войти">
                <button @click="create()" class="create">Создать аккаунт</button>
            </form>
        </aside>
    </div>
</template>

<script lang="ts">
import { useMainStore } from '~/store';
export default {
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            apiUrl: 'https://profori.pro/api',
            passwordIncorrect: false,
            emailIncorrect: false,
            confirm: false,
            errMessage: ''
        }
    },
    methods: {
        create () {
            this.mainStore.setLoginStatus('register')
        },
        async login() {
            try {
                this.confirm = false
                this.errMessage = ''
                let userData = this.mainStore.getUser
                console.log(userData)
                if (userData.email !== '' || userData.password !== '') {
                    const response = await fetch(`${this.apiUrl}/users/auth`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    })
                    const result = await response.json()
                    if (result.message) {

                        if (result.message === 'Подтвердите почту') {
                            this.confirm = true
                        }

                        this.errMessage = result.message
                    } else if (result._id) {
                        useCookie('id').value = result._id
                        return this.$router.push('/dashboard')
                        this.mainStore.setUser(result)
                        this.errMessage = ''
                    }
                }

            } catch (err) {

                console.log(err)

            }
        }
    },
    props: {
        props_title: {
            type: String,
            default: 'Войти'
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    position: relative;
    overflow: hidden;

    aside {
        height: 100%;

        &:nth-child(2) {
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            background-image: linear-gradient(244.45deg, rgb(63, 221, 192) 3.03%, rgba(101, 195, 195, 0.87) 99.9%);

            div {
                margin: auto;
            }
        }
    }
}

h3,
button {
    color: #fff;
}

h3 {
    font-size: 24px;
}

p {
    font-size: 16px;
}

aside {

    padding: 50px;
    border-radius: 5px;
    // box-shadow: -13px 10px 15px 0px #f3f3f3b5;
    // background-color: #fcf9f9;
    // background-image: linear-gradient(104deg, #fffbfb, #ffffff);
    background-image: linear-gradient(104deg, #422f2f, #383232);

    &.register {
        margin: auto auto auto 0;
        // box-shadow: 20px 4px 15px 0px rgba(243, 243, 243, 0.7098039216);
    }

    form {
        p {
            margin-bottom: 10px;
            text-align: center;
            font-size: 12px;
            color: #eee;
            width: 210px;
            margin: 5px auto;
        }

        a {
            display: block;
            margin: auto;
            width: fit-content;
            font-size: 14px;
            color: rgb(161 161 161 / 90%);
            display: block;
            position: relative;
            padding-bottom: 5px;
            overflow: hidden;

            &::before {
                position: absolute;
                content: '';
                transition: 400ms;
                bottom: 0;
                left: -100%;
                width: 100%;
                height: 1px;
                background-color: rgb(161 161 161 / 90%);
            }

            &:hover {
                &::before {
                    left: 0;
                }
            }
        }
    }

    input[type="submit"], button {
        display: block;
        background-color: rgb(63 221 192);
        background-image: linear-gradient(244.45deg, rgb(54 40 46) 3.03%, rgb(3 8 8 / 87%) 99.9%);
        padding: 10px 28px;
        color: #fff;
        font-size: 16px;
        margin: 20px auto 0;
        border-radius: 30px;
        transition: 400ms;
        position: relative;
        top: 0;
        transform: scale(1);

        &:hover {
            top: -2px;
        }

        &:acitve {
            transform: scale(.9);
        }
    }
}

.create {
    display: none;
}

@media screen and (max-width: 1100px) {
    .create {
        display: block;
    }
}

</style>