import { useMainStore } from "~/store";

export default defineNuxtRouteMiddleware((to, from) => {
    const referralParam = 'ref'

    if (to.query[referralParam]) {
        return navigateTo('/login')
    }
    
    // https://profori.pro/?confirm/6453964a2c1e885bb9c1faf3
    console.log(to.query)
    if (to.query['confirm']) {
        // return navigateTo('confirm')
    }

})