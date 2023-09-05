<template>
    <div class="registration-page">
        <NavbarComponent />
        <main class="registration">
            <div class="container">
                <form @submit.prevent="senddata" v-if="status !== 200">
                    <h2>Личные данные</h2>

                    <div class="input-line">
                        <div class="input-group" :class="{ 'notNull': firstName }">
                            <label for="first-name">Имя</label>
                            <input type="text" id="first-name" v-model="firstName" placeholder="" required>
                        </div>

                        <div class="input-group" :class="{ 'notNull': surname }" required>
                            <label for="surname">Фамиля</label>
                            <input type="text" id="surname" v-model="surname">
                        </div>

                        <div class="input-group" :class="{ 'notNull': lastName }">
                            <label for="last-name">Отчество</label>
                            <input type="text" id="last-name" v-model="lastName">
                        </div>
                    </div>

                    <div class="input-line">
                        <div class="input-group" :class="{ 'notNull': old }">
                            <label for="old">Возраст</label>
                            <input type="number" id="old" v-model="old">
                        </div>

                        <div class="input-group" :class="{ 'notNull': experience }">
                            <label for="experience">Опыт работы</label>
                            <input type="number" id="experience" v-model="experience" required>
                        </div>
                    </div>

                    <div class="input-line">
                        <div class="input-group" :class="{ 'notNull': price }" required>
                            <label for="price">Стоимость часа работы</label>
                            <input type="number" id="price" v-model="price">
                        </div>
                    </div>

                    <div class="input-group" :class="{ 'notNull': workFormat }" required>
                        <h3>Формат работы</h3>
                        <div class="checkbox-wrapper">
                            <div class="checkbox">
                                <label for="online">Онлайн</label>
                                <input type="checkbox" id="online" value="online" v-model="workFormat">
                            </div>
                            <div class="checkbox">
                                <label for="offline">Оффлайн</label>
                                <input type="checkbox" id="offline" value="offline" v-model="workFormat">
                            </div>
                        </div>
                    </div>

                    <div class="input-group" :class="{ 'notNull': whatishelp }">
                        <label for="whatishelp">В чём помогаете?</label>
                        <textarea name="whatishelp" id="whatishelp" v-model="whatishelp"></textarea>
                    </div>

                    <div class="input-group" :class="{ 'notNull': result }">
                        <label for="result">Результат вашей работы?</label>
                        <textarea name="result" id="result" v-model="result"></textarea>
                    </div>

                    <div class="input-group" :class="{ 'notNull': whos }">
                        <label for="whos">С кем работаете?</label>
                        <textarea name="whos" id="whos" v-model="whos"></textarea>
                    </div>

                    <div class="input-group" :class="{ 'notNull': aboutMe }">
                        <label for="about-me">О себе</label>
                        <textarea name="about-me" id="about-me" v-model="aboutMe"></textarea>
                    </div>

                    <div class="error-div" v-if="error">
                        <p>{{ error }}</p>
                    </div>

                    <div class="error-div" v-if="roleError">
                        <p>Укажите роль</p>
                    </div>

                    <input type="submit" value="Сохранить">

                </form>
                <form v-else>
                    <div class="success">
                        <h2>Письмо с подтверждением отправлено на указанную почту</h2>
                        <p class="email">{{ email }}</p>
                        <nuxt-img width="79" height="79" format="webp" quality="80" src="/assets/images/check-image.png"
                            alt="check" />
                    </div>
                </form>
            </div>
        </main>
        <FooterComponent />
    </div>
</template>

<script>
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            firstName: '',
            surname: '',
            lastName: '',
            error: '',
            role: '',
            old: 0,
            price: 0,
            workFormat: [],
            whatishelp: '',
            result: '',
            whos: '',
            aboutMe: '',
            experience: 0,
            status: '',
            roleError: false
        }
    },
    methods: {
        async senddata() {

            this.error = ``
            const id = this.mainStore.getUser._id
            const userData = {
                id: id,
                firstName: this.firstName,
                surName: this.surname,
                lastName: this.lastName,
                old: this.old,
                price: this.price,
                workFormat: this.workFormat,
                whatishelp: this.whatishelp,
                result: this.result,
                whos: this.whos,
                aboutMe: this.aboutMe,
                experience: this.experience,
            }

            await fetch('https://profori.pro/api/users/fill-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            }).then(async (res) => {

                console.log(await res.json())

                if (res.status === 200) {

                    await fetch('https://profori.pro/api/' + id).then(async (user) => { this.mainStore.setUser(user); this.$router.push('/dashboard') })
                    // this.$router.push('/')

                }

                // if (res.status === 200) {
                // this.mainStore.setUser(await res.json())
                // useCookie('id').value = this.mainStore.getConfirmID
                // this.$router.push('/dashboard')
                // }
            }).catch(async (error) => {
                console.error(error)
            })
        }
    },
    watch: {
        firstName () {
            // console.log(this.firstName)
        }
    }
})
</script>

<style lang="scss" scoped>
$green: #8efb8a;
$red: #f01e1e;

textarea {
    height: 200px;
}

.success {
    img {
        margin: 0 auto 30px;
        display: block;
    }

    .email {
        font-size: 20px;
        text-align: center;
        margin-bottom: 30px;
        font-weight: 500;
    }
}

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
        margin-bottom: 60px;
        text-align: center;
        color: #444;
    }

    .input-line {
        margin: 0 -15px 45px;
        display: flex;

        .input-group {
            flex: 1;
            margin: 0 15px;
        }
    }

    .input-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 45px;

        .checkbox-wrapper {
            display: flex;
            .checkbox {
                margin: 10px 15px;
                display: flex;
                border-radius: 8px;
                // border: 1px solid #555;
                padding: 15px;
                label {
                    font-size: 20px;
                    margin: auto;
                }
                input {
                    display: flex;
                    margin: auto 0 auto 15px;
                    width: 20px;
                    height: 20px;
                }
            }
        }

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

        label,
        h3 {
            font-size: 22px;
            margin-bottom: 15px;
        }

        input,
        select,
        textarea {
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
            &:focus {
                border-color: #42a3ff
            }
        }
    }

    .notNull input,
    .notNull select,
    .notNull textarea {
        border-color: #42a3ff;
        color: #0d2944;
        // color: #fff;
        // background-color: #42a3ff;
    }

    .notNull.error input,
    .error input,
    .error select,
    .error textarea {
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