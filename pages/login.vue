<template>
    <div class="login-wrapper">
        <NavbarComponent />
        <main>
            <div class="wrapper">
                <div class="items">
                    <AuthLoginForm v-if="status == 'login'" />
                    <div class="right-side" v-if="status === 'login'">
                        <h3>Приветствуем!</h3>
                        <p>Создайте аккаунт и присоединяйтесь <br>к нам, и получите консультацию</p>
                        <button @click="register()">Создать аккаунт</button>
                    </div>
                    <div class="right-side" v-if="status === 'register'" :class="status">
                        <h3>Добро пожаловать!</h3>
                        <p>Создай аккаунт и присоединяйтесь к нам, <br>и получите консультацию</p>
                        <button @click="login()">Войти</button>
                    </div>
                    <AuthRegistrationForm v-if="status === 'register'" />
                </div>
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
.login-wrapper {
    padding: 15px;
    border-radius: 15px;
    background-color: #fff;
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