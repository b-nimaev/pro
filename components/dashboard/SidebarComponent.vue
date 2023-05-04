<template>
    <aside>
        <DashboardSidebarUserDataComponent />
        <DashboardSidebarUserMenuComponent />
    </aside>
</template>

<script>
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    }
})
</script>

<style lang="scss" scoped>
aside {
    padding: 30px;
    border-radius: 5px;
    // background-color: #fffafa;
    // background-image: linear-gradient(138deg, #302a2a, #282b2bf0, #082625);
    border-radius: 8px;
    margin-right: 30px;
    height: fit-content;
    position: sticky;
    top: 20px;
    background-image: linear-gradient(138deg, #302a2a, #282b2bf0, #082625);
    
    &.dark {
        background-image: linear-gradient(138deg, #302a2a, #282b2bf0, #082625);
    }
}
@media screen and (max-width: 1420px) {
    aside {
        padding: 30px 20px;
    }
    ul {
        li {
            a {
                margin: 0 0 6px;
                font-size: 14px;
                padding: 10px;
                width: 178px;
            }
        }
    }
}
</style>