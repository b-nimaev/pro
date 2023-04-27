import { useMainStore } from "~/store"
export default defineNuxtRouteMiddleware((to, from) => {
    const id = useCookie("id")
    if (!id) {
        return navigateTo('/login')
    }

})
