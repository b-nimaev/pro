<template>
    <div>
        <h1>Confirm</h1>
    </div>
</template>

<script lang="ts">
import { useMainStore } from "~/store"

export default defineComponent({
    setup() {
        const mainStore = useMainStore();
        return { mainStore }
    },
    async beforeCreate() {
        console.log(this.mainStore.getConfirmID)
        if (this.mainStore.getConfirmID.length == 0) {
            // return navigateTo('/')
        } else {
            console.log(this.$route.path)
            await fetch('https://profori.pro/api/users/confirm/' + this.mainStore.getConfirmID, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(async (res) => {
                console.log(res)
                // this.mainStore.setUser(await res.json())
            }).catch(err => {
                console.log(err)
            })
        }
    }
})
</script>