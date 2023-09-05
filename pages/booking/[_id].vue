<template>
    <div class="page-booking">
        <NavbarComponent />
        <main>
            <section class="booking-header">
                <div class="container">
                    <h3>Запись к консультанту</h3>
                </div>
            </section>
        </main>
        <FooterComponent />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
h3 {
    font-size: 28px
}
main {
    padding: 0;
    margin-top: 0;
    background: #eee;
}
</style>

<script>
import { useMainStore } from "~/store"

export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            userData: {}
        }
    },
    async beforeCreate() {
        // await fetch('https://profori.pro/api/users/' + this.$route.params.id, {
            // method: 'GET',
            // headers: {
                // 'Content-Type': 'application/json'
            // }
        // }).then(async (res) => {
            // let response = await res.json()
            // this.userData = response
        // })
    },
    mounted() {
        // this.mainStore.setColorScheme({
        // name: 'dark',
        // value: 'Темная'
        // })
    },
})
</script>
