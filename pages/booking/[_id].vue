<template>
    {{ id }}
</template>

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
