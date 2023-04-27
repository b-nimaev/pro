<template>
    <div>
        <NavbarComponent :loggedStatus="loggedStatus" />
        <!-- <DashboardHeaderComponent /> -->
        <div class="container">
            <DashboardSidebarComponent />
            <NuxtPage />
        </div>
        <FooterComponent />
    </div>
</template>

<script lang="ts">
// definePageMeta({
//     middleware: 'auth'
// })
import { useMainStore } from "~/store"
export default defineComponent({
    async setup() {
        const mainStore = useMainStore()
        const { data: user } = await useFetch('http://localhost:1337/users/' + mainStore.getSessionID)

        return { mainStore, user }
    },
    computed: {
        loggedStatus: function () {
            return this.mainStore.getSessionID
        }
    },
    beforeCreate() {
        const id = useCookie("id")
        if (!id) {
            this.$router.push("/login")
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    margin: 50px auto;
}
</style>