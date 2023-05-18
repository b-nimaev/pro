<template>
    <div class="userdata">
        <div class="top-side">
            <DashboardIndexNameComponent />
            <h6 class="edity">
                <p class="small"><span class="static">@</span><span>{{ user._id ? user._id : user.nickname }}</span>
                </p>
                <div class="edit-icon">
                    <edit-icon size="small" />
                </div>
            </h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/css/dashboard.scss';
.userdata {
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 15px 0;

    h4 {
        font-size: 26px;
        margin-bottom: 5px;
        color: $primary-color;
    }

    h6 {
        font-size: 12px;
        color: $primary-color;
    }

    .change {
        margin-left: 15px;
    }
}
p {
    font-size: 16p;
    line-height: 24px;
    &.description {
        font-size: 16px;
        line-height: 22px;
    }
    &.small {
        font-size: 16px;
    }
}

.bottom-side {
    margin-top: 15px;
    color: #eee;
}
</style>

<script lang="ts">
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    computed: {
        user () {
            return this.mainStore.getUser
        }
    },
    methods: {
        edit: function () {

        }
    }
})
</script>