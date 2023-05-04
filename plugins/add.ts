import { useMainStore } from "~/store"

export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', (to, from) => {
        // console.log('this global middleware was added in a plugin')
        if (to.query) {
            if (to.query.ref) {

                let mainStore = useMainStore()
                // @ts-ignore
                mainStore.setReferral(to.query.ref)
                // navigateTo('/login')

                to.fullPath = '/'
                console.log(to)
            }
        }
    }, { global: true })

    addRouteMiddleware('named-test', (to, from) => {
        console.log('this named middleware was added in a plugin')
    })
})
