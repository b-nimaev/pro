import { useMainStore } from "~/store"

export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', async (to, from) => {
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

        }

        let id = useCookie('id')
        if (id) {
            if (id.value) {
                await fetch("https://profori.pro/api/users/" + id.value, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(async (res) => {
                    let response = await res.json()
                    if (response._id) {
                        let mainStore = useMainStore()
                        mainStore.setUser(response)
                    }
                })
            }
        }
    }, { global: true })

    addRouteMiddleware('named-test', (to, from) => {
        // console.log('this named middleware was added in a plugin')
        let mainStore = useMainStore()
        if (to.query.confirm) {

            // @ts-ignore
            if (to.query.confirm) {
                console.log('true!')
            }

            mainStore.setConfirmID(to.query.confirm)
        }
    })
})
