<template>
    <div>
        <div class="input-group">
            <label :for="inputName" class="icon" v-if="inputType !== 'select'">
                <slot />
            </label>
            <label class="icon" v-else for="selectRole"><slot /></label>
            <select v-if="inputType === 'select'" name="role" id="selectRole" v-model="role">
                <option value="consultant">Консультант</option>                
                <option value="client">Клиент</option>                
            </select>
            <input type="text" :id="inputName" :placeholder="inputName" v-model="userEmail" v-if="inputName === 'email'"
                @input="emailWatcher">
            <input :type="inputType" :id="inputName" :placeholder="inputName" v-model="userPwd"
                v-if="inputName === 'password'" @input="passwordWatcher">
            <input :type="inputType" :id="inputName" :placeholder="inputName" v-model="userName"
                v-if="inputName === 'name'" @input="firstNameWatcher">
        </div>
    </div>
</template>
<script lang="ts">
import { useMainStore } from '~/store';
export default {
    setup() {
        const mainStore = useMainStore()
        let { name, email, password } = mainStore.getRegistrationData
        return { mainStore, name, email, password }
    },
    data() {
        return {
            userName: this.name,
            userEmail: this.email,
            userPwd: this.password,
            emailExists: false,
            inputValue: '',
            role: 'consultant'
        }
    },
    props: {
        inputName: {
            type: String,
            default: 'email',
            required: true
        },
        inputType: {
            type: String,
            default: 'text',
            required: true
        }
    },
    methods: {
        emailWatcher() {
            let updated = this.mainStore.getUser
            // @ts-ignore
            updated.email = this.userEmail
            this.mainStore.setRegistrationData(updated)
        },
        firstNameWatcher() {
            let updated = this.mainStore.getUser
            // @ts-ignore
            updated.firstName = this.userName
            this.mainStore.setRegistrationData(updated)
        },
        passwordWatcher() {
            let updated = this.mainStore.getUser
            // @ts-ignore
            updated.password = this.userPwd
            this.mainStore.setRegistrationData(updated)
        }
    },
    watch: {
        role () {
            console.log(this.role)
            return this.mainStore.setUserRole(this.role)
        }
    }
}
</script>
<style lang="scss" scoped>
.input-group {
    background-color: rgb(245 245 245);
    border: 1px solid rgb(245 245 245);
    width: 255px;
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: 400ms;

    input, select {
        font-size: 12px;
        padding: 12px 10px;
        padding-left: 0;
        width: 100%;
        color: #00000094;
        cursor: pointer;
        margin: 0;
    }

    .icon {
        margin: auto 0;
        display: flex;
        padding: 10px;
    }
}</style>