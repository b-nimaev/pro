import io, { Socket } from "socket.io-client"

export default defineNuxtPlugin(() => {
    return {
        provide: {
            socket: io('https://87.236.22.124:1337')
        }
    }
})