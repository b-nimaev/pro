<template>
    <h4 class="edity">
        <span>{{ user.firstName }} {{ user.lastName }}</span>
        <!-- <div class="edit-icon" @click="edit">
            <edit-icon size="normal" />
        </div> -->
    </h4>
</template>

<style lang="scss" scoped>
@import '~/assets/css/dashboard.scss';
form.for-edit {
    display: flex;
    position: absolute;
    height: 55px;
    width: 487px
}
.input-group {
    display: flex;
    flex-direction: column;
    margin-right: 15px;

    &:last-child {
        margin-right: 0;
    }

    label {
        font-size: 12px;
        margin-bottom: 5px;
    }

    input {
        padding: 10px;
        background: #555;
        border-radius: 5px;
        font-size: 14px;
        color: #fff;

        &[type="submit"] {
            font-size: 14px;
            margin-top: auto;
        }
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
            name: '',
            secondName: ''
        }
    },
    computed: {
        user: function () {
            return this.mainStore.getUser
        }
    },
    methods: {
        edit: function () {

        }
    }
})
</script>