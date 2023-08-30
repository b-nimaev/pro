<template>
    <div class="userdata">
        <div class="top-side">
            <DashboardIndexNameComponent />
            <h6 class="edity">
                <p class="small"><span class="static">@</span><span>{{ user.nickname ? user.nickname : user._id }}</span>
                </p>
            </h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/dashboard.scss';
$dark: #333;
$primary: $dark;
.userdata {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    padding: 15px 0;

    h4 {
        font-size: 20px;
        margin-bottom: 5px;
        color: $primary;
    }

    h6 {
        font-size: 12px;
        color: $primary;
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