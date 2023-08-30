<template>
    <div>
        <label :for="inputName" class="text-label">{{ inputName }}</label>
        <div class="input-group">
            <label :for="inputName" class="icon" v-if="inputType !== 'select'">
                <slot />
            </label>
            <label class="icon" v-else for="selectRole">
                <slot />
            </label>
            <select v-if="inputType === 'select'" name="role" id="selectRole" v-model="role">
                <option value="client">Клиент</option>
                <option value="consultant">Консультант</option>
            </select>
            <input type="text" :id="inputName" :placeholder="inputName" v-model="userEmail" v-if="inputName === 'email'"
                @input="emailWatcher">
            <input :type="inputType" :id="inputName" :placeholder="inputName" v-model="userPwd"
                v-if="inputName === 'password'" @input="passwordWatcher">
            <input :type="inputType" :id="inputName" :placeholder="inputName" v-model="confirm"
                v-if="inputName === 'password-confirm'" @input="confirmCheck">
            <input :type="inputType" :id="inputName" :placeholder="inputName" v-model="userName" v-if="inputName === 'name'"
                @input="firstNameWatcher">
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
            confirm: '',
            role: 'client'
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
            let updated: any = this.mainStore.getUser
            // @ts-ignore
            updated.email = this.userEmail
            this.mainStore.setRegistrationData(updated)
        },
        firstNameWatcher() {
            let updated: any = this.mainStore.getUser
            // @ts-ignore
            updated.firstName = this.userName
            this.mainStore.setRegistrationData(updated)
        },
        passwordWatcher() {
            let updated: any = this.mainStore.getUser
            // @ts-ignore
            updated.password = this.userPwd
            this.mainStore.setRegistrationData(updated)
        },
        confirmCheck() {
            let pwd = this.userPwd
            let check = this.confirm === (pwd + '')
            console.log(check)
            console.log(pwd)
            console.log(this.confirm)
        }
    },
    watch: {
        role() {
            console.log(this.role)
            return this.mainStore.setUserRole(this.role)
        }
    }
}
</script>
<style lang="scss" scoped>
.text-label {
    margin-bottom: 10px;
    display: block;
    font-size: 16px;
    color: #999;
}

.input-group {
    // background-color: rgb(245 245 245);
    // border: 1px solid rgb(245 245 245);
    // background-color: #f7f7f7;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #aaa;
    border-radius: 8px;
    // background-image: linear-gradient(104deg, #331c1c, #150d0d);
    width: 255px;
    display: flex;
    margin-bottom: 10px;
    cursor: pointer;
    // border-radius: 5px;
    transition: 400ms;

    input,
    select {
        font-size: 12px;
        padding: 12px 10px;
        padding-left: 0;
        width: 100%;
        // font-weight: 500;
        color: #333;
        cursor: pointer;
        margin: 0;
    }

    .icon {
        margin: auto 0;
        display: flex;
        padding: 10px;

        svg {
            path {
                fill: #333;
            }
        }
    }
}</style>