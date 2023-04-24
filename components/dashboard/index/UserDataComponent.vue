<template>
    <div>
        <DashboardIndexAvatarCardComponent />
        <DashboardIndexUsernameComponent /> 
    </div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    width: fit-content;
    padding: 20px;
    border-radius: 8px;
    background-color: #fffafa;
    font-family: 'Nunito', sans-serif;

}
</style>

<!-- <script lang="ts">
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    }
})
</script> -->