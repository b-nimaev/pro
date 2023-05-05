import { useMainStore } from "~/store"

export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', (to, from) => {
        // console.log('this global middleware was added in a plugin')
        if (to.query) {
            let mainStore = useMainStore()
            if (to.query.ref) {

                // @ts-ignore
                mainStore.setReferral(to.query.ref)
                // navigateTo('/login')

                to.fullPath = '/'
                console.log(to)
            }
            console.log(to.query)
            if (to.query.confirm) {
                // @ts-ignore
                mainStore.setConfirmID(to.query.confirm)

            }
        }
    }, { global: true })

    addRouteMiddleware('named-test', (to, from) => {
        console.log('this named middleware was added in a plugin')
    })
})
