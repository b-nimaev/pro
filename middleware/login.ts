import { useMainStore } from "~/store"
export default defineNuxtRouteMiddleware((to, from) => {
    const mainStore = useMainStore()
    let id = useCookie('id').value
    if (mainStore.getUser._id !== '' && id?.length !== 0) {
        return navigateTo('/dashboard')
    }
})
