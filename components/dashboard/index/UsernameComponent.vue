<template>
    <div class="username">
        <div class="left-side">
            <DashboardIndexNameComponent />
            <h6 class="edity">
                <p><span class="static">https://profori.pro/</span><span>{{ user._id ? user._id : user.nickname }}</span>
                </p>
                <div class="edit-icon">
                    <edit-icon size="small" />
                </div>
            </h6>
        </div>
        <!-- <a class="change" href="javascript:void(0)">Редактировать</a> -->
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/dashboard.scss';
.username {
    margin: auto 0;
    display: flex;
    padding: 0;

    h4 {
        font-size: 20px;
        margin-bottom: 5px;
    }

    h6 {
        font-size: 12px;
        color: #c3c3c3
    }

    .change {
        margin-left: 15px;
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