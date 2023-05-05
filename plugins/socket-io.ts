import io, { Socket } from "socket.io-client"

export default defineNuxtPlugin(() => {
    return {
        provide: {
            socket: io('https://profori.pro:1337')
        }
    }
})