import { useMainStore } from "~/store"
export default defineNuxtRouteMiddleware((to, from) => {

    const id = useCookie("id").value
    const mainStore = useMainStore()

    mainStore.setFillLink(to.fullPath)

    if (!id) {

        return navigateTo('/login')
        
    } else {
        console.log(to.fullPath.indexOf('settings'))
        if (to.fullPath.indexOf('settings') !== -1) {
            mainStore.setDashboardSettings(true)
        } else {
            mainStore.setDashboardSettings(false)
        }
    }

})
