<template>
    <div>
        <NavbarComponent />
        <HomeHeaderComponent />
        <HomeAdvantagesComponent></HomeAdvantagesComponent>
        <HomeYouGotComponent></HomeYouGotComponent>
        <HomeReviewsComponent></HomeReviewsComponent>
        <HomeOurConsultants />
        <HomeBlogComponent></HomeBlogComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>
<script>
import { useMainStore } from "~/store"
definePageMeta({
    middleware: [
        'named-test'
    ]
})
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {

        }
    },
    async beforeCreate() {
        console.log(this.mainStore.getConfirmID)
        if (this.mainStore.getConfirmID.length > 0) {
            // console.log(this.mainStore.getConfirmID)
            await fetch('https://profori.pro:1337/users/confirm/' + this.mainStore.getConfirmID, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(async (res) => {
                
                if (res.status === 200) {
                    await fetch('https://profori.pro:1337/users/' + this.mainStore.getConfirmID, {
                        method: 'GET'
                    }).then(async (res) => {
                        if (res.status === 200) {
                            this.mainStore.setUser(await res.json())
                            useCookie('id').value = this.mainStore.getConfirmID
                            this.$router.push('/dashboard')
                        }
                    })
                    // this.mainStore.setUser()
                }

                // this.mainStore.setUser(await res.json())
            }).catch(err => {
                console.log(err)
            })
        }
    }
})
</script>

<style lang="scss">
@import '@/assets/css/main.scss';
</style>