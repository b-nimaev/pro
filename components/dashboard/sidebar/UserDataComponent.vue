<template>
    <div class="user-data">
        <DashboardSidebarUserDataAvatarComponent />
        <h4>{{ user.firstName }} {{ user.lastName }}</h4>
        <p v-if="user.position" class="position">{{ user.position }}</p>
    </div>
</template>

<style lang="scss" scoped>
.user-data {
    margin-bottom: 30px;
    text-align: center;

    h4 {
        font-weight: 600;
        font-size: 20px;
        color: #333333;
        font-family: 'Nunito', sans-serif;
        max-width: 200px;
        word-break: break-word;
    }

    P {
        font-size: 16px;
        color: #3333336E;
    }
}
.pagewrapper.dark {
    .user-data {
        h4 {
            color: #f0f0f0
        }
        p {
            color: #eee;
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
    computed: {
        user: function () {
            return this.mainStore.getUser
        }
    },
})
</script>