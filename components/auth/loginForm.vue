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
                <a href="javascript:void(0)">Забыли пароль?</a>
                <input type="submit" value="Войти">
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
            apiUrl: 'http://localhost:1337',
            passwordIncorrect: false,
            emailIncorrect: false,
            errMessage: ''
        }
    },
    methods: {
        async login() {
            try {
                
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
                        this.errMessage = result.message
                    } else if (result._id) {
                        this.errMessage = ''
                        localStorage.setItem('token', result._id)
                        this.mainStore.setSessionID(localStorage.getItem('token'))
                        this.$router.push('/dashboard')
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

h3, button {
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
    background-image: linear-gradient(104deg, #fffbfb, #ffffff);

    &.register {
        margin: auto auto auto 0;
        box-shadow: 20px 4px 15px 0px rgba(243, 243, 243, 0.7098039216);
    }

    form {
        p {
            margin-bottom: 10px;
            text-align: center;
            font-size: 12px;
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

    input[type="submit"] {
        display: block;
        background-color: rgb(63 221 192);
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

</style>