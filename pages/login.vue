<template>
    <div>
        <NavbarComponent />
        <main>
            <div class="wrapper">
                <div class="items">
                    <AuthLoginForm v-if="status === 'login'" />
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
    middleware: 'login'
})
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            status: 'login'
        }
    },
    methods: {
        register() {
            this.status = 'register'
        },
        login() {
            this.status = 'login'
        }
    },
    computed: {
        link() {
            return this.mainStore.linkStatusGet
        }
    },
    mounted() {
        if (localStorage.id) {
            this.$router.push('/dashboard')
        }
    }
})
</script>

<style lang="scss" scoped>
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
    background-image: linear-gradient(244.45deg, rgb(63 221 192) 3.03%, rgb(101 195 195 / 87%) 99.9%);
    height: 300px;
    margin: auto;
    border-radius: 8px;
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
        &:hover {
            background-color: #fff;
            color: #000;
        }
        &:active {
            transform: scale(.95);
        }
    }
}</style>