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
    },
    data() {
        return {

        }
    },
    methods: {
        async logout() {
            this.$router.push("/login")
        }
    },
    props: {
        themeClass: 'light'
    },
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

    &.dark {
        background-image: linear-gradient(138deg, #302a2a, #282b2bf0, #082625);
    }
}

.pagewrapper.dark aside {
    background-color: #0000002b;
    box-shadow: 0 2px 3px #00000052;
}
</style>