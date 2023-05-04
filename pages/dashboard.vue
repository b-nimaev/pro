<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <DashboardSidebarComponent />
            <main>
                <NuxtPage />
            </main>
        </div>
        <FooterComponent />
    </div>
</template>

<script lang="ts">
import { useMainStore } from "~/store"
definePageMeta({
    middleware: [
        'dashboard'
    ]
})
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

main {
    width: 100%;
    padding: 30px;
    border-radius: 5px;
    border-radius: 8px;
    margin-right: 0;
    height: -moz-fit-content;
    height: fit-content;
    position: sticky;
    font-family: 'Nunito', sans-serif;
    // top: 20px;
    background-image: linear-gradient(138deg, #302a2a, rgba(40, 43, 43, 0.9411764706), #082625);
    height: auto;
}
</style>