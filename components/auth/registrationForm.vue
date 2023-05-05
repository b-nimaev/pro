<template>
    <form @submit.prevent="registration">
        <AuthHeadingComponent message="Регистрация" style="margin-bottom: 20px" />
        <!-- <AuthSocialsListComponent /> -->
        <!-- <p>или используйте email адрес</p> -->
        <AuthInputGroupComponent input-name="role" input-type="select">
            <IconsFormUserIcon />
        </AuthInputGroupComponent>
        <AuthInputGroupComponent input-name="name" input-type="text">
            <IconsFormUserIcon />
        </AuthInputGroupComponent>
        <AuthInputGroupComponent input-name="email" input-type="email">
            <IconsEnvelopeIcon />
        </AuthInputGroupComponent>
        <AuthInputGroupComponent input-name="password" input-type="password">
            <IconsLockIcon />
        </AuthInputGroupComponent>
        <input type="submit" value="Зарегистрироваться">
    </form>
</template>

<style lang="scss" scoped>
form {
    padding: 50px;
    border-radius: 5px;
    // background-image: linear-gradient(104deg, #fffbfb, #ffffff);
    background-image: linear-gradient(104deg, #422f2f, #383232);
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

input[type="submit"] {
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
            apiUrl: 'https://profori.pro:1337',
            emailExists: false
        };
    },
    methods: {

        async registration() {

            let userData = this.mainStore.getRegistrationData
            userData.role = this.mainStore.getUserRole
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
                    if (res.code == 110000) {
                        this.emailExists = true
                    } else {
                        this.mainStore.setUser(res)
                        useCookie('id').value = res._id
                        alert('Письмо отправлено к вам на почту, для авторизации подвердите')
                        this.$router.push("/login")
                        // this.$router.push('dashboard')
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },
    },
})

</script>