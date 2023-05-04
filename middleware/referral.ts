import { useMainStore } from "~/store";

export default defineNuxtRouteMiddleware((to, from) => {
    const referralParam = 'ref'

    if (to.query[referralParam]) {
        return navigateTo('/login')
    }
    
})