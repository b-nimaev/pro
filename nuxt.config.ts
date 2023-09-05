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
            link: [{ rel: 'icon', type: 'image/png', href: '~/public/faviclon.ico' }]
        },
        pageTransition: { name: 'slide-left', mode: 'out-in' },
    },
    modules: [
        '@pinia/nuxt',
        '@nuxt/image-edge',
        // '@sidebase/nuxt-auth'
    ],

    plugins: [
        '~/plugins/pinia.js',
        '~/plugins/socket-io.ts',        
    ],

    css: [
        '@/assets/css/styles.scss',
        '@/assets/scss/_variables.scss'

    ],
    image: {
        // dir: 'assets/images',
        // domains: [ '//profori.pro' ]
    }
})
