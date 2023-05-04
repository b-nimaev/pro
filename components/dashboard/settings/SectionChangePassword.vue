<template>
    <section>
        <DashboardSettingsSectionHeadingComponent title="Безопасность" />
        <form @submit.prevent="changePassword">
            <div class="input-group">
                <label for="password">Текущий пароль</label>
                <input type="password" name="password" id="password" v-model="passwordChangeData.password" @input="currentPasswordWatcher">
            </div>
            <div class="input-group">
                <label for="newPassword">Новый пароль</label>
                <input type="password" name="newPassword" id="newPassword" v-model="passwordChangeData.newPassword" @input="newPasswordWatcher">
            </div>
            <div class="input-group">
                <label for="confirmNewPassword">Подтвердите пароль</label>
                <input type="password" name="confirmNewPassword" id="confirmNewPassword"
                    v-model="passwordChangeData.confirmNewPassword" @input="confirmNewPassword">
            </div>
        </form>
        <p class="errMessage" v-if="passwordChangeData.errMessage">{{ passwordChangeData.errMessage }}</p>
        <p class="response" v-if="passwordChangeData.response">{{ passwordChangeData.response }}</p>
    </section>
</template>

<style lang="scss" scoped>
@import '~/assets/css/settings.scss';
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
input {
    &.err {
        box-shadow: 1px 4px 0px rgb(255 13 13 / 56%);
    }
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
            passwordChangeData: {
                password: '',
                newPassword: '',
                confirmNewPassword: '',
                errMessage: '',
                response: ''
            }
        }
    },
    methods: {
        changePassword: function () {
            if (this.mainStore.getUserdata.userPassword !== this.passwordChangeData.password) {
                this.passwordChangeData.errMessage = 'Текущий пароль введен неверно'
            }

            if (this.passwordChangeData.newPassword !== this.passwordChangeData.confirmNewPassword) {
                this.passwordChangeData.errMessage = 'Введеные новые пароли не совпадают'
            }

            if (this.passwordChangeData.password === this.passwordChangeData.newPassword) {
                this.passwordChangeData.errMessage = 'Новый пароль совпадает со старым'
            }

            if (this.passwordChangeData.password !== this.passwordChangeData.newPassword && (this.passwordChangeData.password !== this.passwordChangeData.confirmNewPassword) && (this.passwordChangeData.newPassword === this.passwordChangeData.confirmNewPassword)) {
                this.passwordChangeData.errMessage = ''
                
            }
        },

        // текущий пароль
        currentPasswordWatcher: function (e: any) {
            let value = e.target.value
            console.log(value)
        },

        // новый пароль
        newPasswordWatcher: function (e: any) {
            let value = e.target.value
            console.log(value)
        },

        confirmNewPassword: function (e: any) {
            let value = e.target.value
            console.log(value)
        }
    },
})
</script>