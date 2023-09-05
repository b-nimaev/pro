import { useMainStore } from "~/store"
export default defineNuxtRouteMiddleware((to, from) => {

    const mainStore = useMainStore()
    const id = mainStore.getUser._id
    
    mainStore.setFillLink(to.fullPath)

    if (!id) {

        return navigateTo('/login')
        
    } else if (!mainStore.getUser.firstName) {

        return navigateTo('/data-filling')

    } else {
        console.log(to.fullPath.indexOf('settings'))
        if (to.fullPath.indexOf('settings') !== -1) {
            mainStore.setDashboardSettings(true)
        } else {
            mainStore.setDashboardSettings(false)
        }
    }

})
