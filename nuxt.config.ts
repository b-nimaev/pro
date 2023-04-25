// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Profori',
            meta: [
                { name: 'description', content: 'Центр профориентации' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css' }
            ]
        },
        pageTransition: { name: 'slide-left', mode: 'out-in' },
    },
    modules: [
        '@pinia/nuxt',
        '@nuxt/image-edge'
    ],
    plugins: [
        '~/plugins/pinia.js'
    ],
    image: {
        dir: 'assets/images'
    }
})
