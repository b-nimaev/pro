import { useMainStore } from "~/store"
export default defineNuxtRouteMiddleware((to, from) => {
    const mainStore = useMainStore()
    
    if (mainStore.getSessionID !== '') {
        return navigateTo('/dashboard')
    }
})
