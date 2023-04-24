<template>
    <section>
        <DashboardSettingsSectionHeadingComponent title="Удалить аккаунт" />
        <form @submit.prevent="deleteAccount">
            <div class="input-group">
                <label for="passwordForDelete">Введите текущий пароль</label>
                <input type="password" name="passwordForDelete" id="passwordForDelete" v-model="password">
            </div>
        </form>
        <p class="errMessage" v-if="errMessage">{{ errMessage }}</p>
        <p class="response" v-if="response">{{ response }}</p>
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
            console.log('delete')
        }
    }
})
</script>