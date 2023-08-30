<template>
    <form @submit.prevent="registration">
        <AuthHeadingComponent message="Регистрация" style="margin-bottom: 20px" />
        <!-- <div class="input-group" id="role">
            <label for="role" class="icon">
                <IconsFormUserIcon />
            </label>

            <div class="input-wrapper">
                <div class="selected">
                    <span v-if="role === 'client'">Клиент</span>
                    <span v-else>Консультант</span>
                </div>
                <div class="select-dropdown" :class="{ 'active': roleActive }">
                    <ul>
                        <li @click="chooseClient">Клиент</li>
                        <li @click="chooseConsultant">Консультант</li>
                    </ul>
                </div>
            </div>
        </div> -->

        <AuthInputGroupComponent input-name="name" input-type="text">
            <IconsFormUserIcon />
        </AuthInputGroupComponent>
        <AuthInputGroupComponent input-name="email" input-type="email">
            <IconsEnvelopeIcon />
        </AuthInputGroupComponent>
        <AuthInputGroupComponent input-name="password" input-type="password">
            <IconsLockIcon />
        </AuthInputGroupComponent>
        <AuthInputGroupComponent input-name="password-confirm" input-type="password">
            <IconsLockIcon />
        </AuthInputGroupComponent>
        <input type="submit" value="Создать аккаунт">
        <button class="login" @click="login()">Войти</button>
    </form>
</template>

<style lang="scss" scoped>
$dark-color: #eee;
$light-color: #111;
$border-radius: 5px;
$input-bg-image: linear-gradient(45deg, black, transparent);

.input-wrapper {
    display: flex;
    width: 100%;
    cursor: pointer;
    transition: 400ms;
    color: #c6cdd5;
    margin: auto 0;
    position: relative;

    .selected {
        font-size: 14px;
        margin-left: 3px;
    }
}

.select-dropdown {
    display: block;
    position: absolute;
    top: calc(100% + 15px);
    left: -30px;
    width: calc(100% + 40px);
    background: #1d1111;
    border-radius: 5px;
    overflow: hidden;
    height: 0;
    transition: 300ms;

    &.active {
        height: 68px;
    }

    ul {
        display: flex !important;
        flex-direction: column;

        li {
            padding: 10px 15px;
            background: transparent;
            transition: 400ms;
            font-size: 12px;

            &:hover {
                background: #141111;
            }
        }
    }
}

.input-group {
    // background-color: rgb(245 245 245);
    // border: 1px solid rgb(245 245 245);
    background-image: linear-gradient(104deg, #331c1c, #150d0d);
    width: 255px;
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: 400ms;

    input,
    select {
        font-size: 12px;
        padding: 0;
        padding-left: 0;
        width: 100%;
        color: #fff;
        cursor: pointer;
        margin: 0;
    }

    .icon {
        margin: auto 0;
        display: flex;
        padding: 0;

        svg {
            path {
                fill: #fff;
            }
        }
    }

    ul {
        display: none
    }
}

form {
    padding: 50px;
    border-radius: 5px;
    background: #fff;
    // background-image: linear-gradient(104deg, #fffbfb, #ffffff);
    // background-image: linear-gradient(104deg, #422f2f, #383232);
    box-shadow: 0 0 5px 3px #f6f6f626;

    p {
        margin-bottom: 10px;
        text-align: center;
        font-size: 12px;
    }

    a {
        display: block;
        margin: auto;
        width: fit-content;
        font-size: 12px;
        color: #000000E5;
        text-decoration: underline;
    }
}

.input-group {
    padding: 10px;
    background-color: #0000000F;
    width: 255px;
    display: flex;
    margin-bottom: 10px;

    input {
        font-size: 12px;
        width: 100%;
        color: #00000094;
        margin: auto 0;
    }

    .icon {
        margin: auto 5px auto 0;
    }
}

input[type="submit"],
button {
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
</style>

<script lang="ts">
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            apiUrl: 'https://profori.pro/api',
            emailExists: false,
            roleActive: false,
            role: 'client'
        };
    },
    methods: {
        login() {
            this.mainStore.setLoginStatus('login')
        },
        async registration() {

            let userData = this.mainStore.getRegistrationData
            userData.role = this.role
            userData.ref = this.mainStore.getReferral
            console.log(userData)
            try {
                const response = await fetch(`${this.apiUrl}/users/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });
                await response.json().then(async (res) => {

                    console.log(res)

                    if (res.code == 110000) {
                        this.emailExists = true
                    } else {
                        // alert('Письмо отправлено к вам на почту, для авторизации подвердите')
                        if (res._id) {
                            useCookie('id').value = res._id
                            this.mainStore.setUser(res)
                            this.$router.push("/dashboard")
                        }
                        // this.$router.push('dashboard')
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },
        async chooseClient() {
            console.log('client')
            this.role = 'client'
        },
        async chooseConsultant() {
            console.log('consultant')
            this.role = 'consultant'
        }
    },
    mounted() {
        document.getElementById("role")?.addEventListener('click', () => {
            if (this.roleActive) {
                this.roleActive = false
            } else {
                this.roleActive = true
            }
        })
    }
})

</script>