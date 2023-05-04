<template>
    <section>
        <DashboardIndexAvatarCardComponent />
        <DashboardIndexUsernameComponent />
    </section>
</template>

<style lang="scss" scoped>
@import '~/assets/css/dashboard.scss';
</style>

<script lang="ts">
import { useMainStore } from '~/store';
export default defineComponent({
    async setup() {
        const mainStore = useMainStore();
        return { mainStore };
    },
    data() {
        return {
            // counter: this.counter
        };
    },

})
</script>