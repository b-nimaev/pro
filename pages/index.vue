<template>
    <div>
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

export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {

        }
    },
    computed: {
        loggedStatus: function () {
            return this.mainStore.getSessionID
        }
    }
})
</script>

<style lang="scss">
@import '@/assets/css/main.scss';
</style>