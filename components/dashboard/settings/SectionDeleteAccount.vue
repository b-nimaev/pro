<template>
    <section>
        <DashboardSettingsSectionHeadingComponent title="Удалить аккаунт" />
        <form @submit.prevent="deleteAccount">
            <div class="input-group">
                <label for="passwordForDelete">Введите текущий пароль</label>
                <input type="password" name="passwordForDelete" id="passwordForDelete" v-model="password">
            </div>
            <button>Удалить аккаунт</button>
        </form>
        <p class="errMessage" v-if="errMessage">{{ errMessage }}</p>
        <p class="response" v-if="response">{{ response }}</p>
    </section>
</template>

<style lang="scss" scoped>
@import '~/assets/css/settings.scss';
button {
    padding: 15px 20px;
    background: #f54b4b;
    color: #fff;
    margin: auto 0 0;
    border-radius: 5px;
    transition: 400ms;
    top: 0;
    transform: scale(1);
    position: relative;
    &:hover {
        top: -3px;
    }
    &:active {
        transform: scale(.97);
    }
}
form {
    display: flex;
}

.errMessage {
    margin-top: 15px;
    font-size: 14px;
    color: red;
}
.response {
    margin-top: 15px;
    font-size: 14px;
    color: #333;
}
</style>

<script lang="ts">
import { useMainStore } from "~/store";
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            password: '',
            errMessage: '',
            response: ''
        }
    },
    methods: {
        deleteAccount: function () {
            console.log(this.password)
        }
    }
})
</script>