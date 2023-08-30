<template>
    <section>
        <DashboardIndexAvatarCardComponent :user="user" />
        <DashboardIndexUsernameComponent />
    </section>
</template>

<style lang="scss" scoped>
// @import '~/assets/css/dashboard.scss';
section {
    display: flex;
}
</style>

<script lang="ts">
import { useMainStore } from "~/store";

export default defineComponent({
    name: 'index',
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    computed: {
        user: function () {
            return this.mainStore.getUser
        }
    }
})
</script>