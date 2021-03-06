export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'مرجع العيادات النفسية السعودية',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'مرجع العيادات النفسية السعودية هو موقع غير ربحي و يعتمد على تجارب الناس و ترشيحاتهم للعيادات النفسية و اهم اهدافه هي رفع الوعي بالصحة النفسية'
            },
            {hid: 'og:title', name: 'og:title', content: 'مرجع العيادات النفسية السعودية'},
            {hid: 'og:url', name: 'og:url', content: 'https://clinics-ref.com/'},
            {
                hid: 'og:description',
                name: 'og:description',
                content: 'مرجع العيادات النفسية السعودية هو موقع غير ربحي و يعتمد على تجارب الناس و ترشيحاتهم للعيادات النفسية و اهم اهدافه هي رفع الوعي بالصحة النفسية'
            },
            {hid: 'og:image', name: 'og:image', content: 'https://clinics-ref.com/ogImage.png'},

            {hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
            {hid: 'twitter:creator', name: 'twitter:creator', content: '@abdullahjsx'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    // plugins: [
    // ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        ['@nuxtjs/google-analytics', {
            id: 'UA-108447545-3',
        }]
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'nuxt-buefy',

    ],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend(config, {isDev, isClient}) {
            config.node = {
                fs: 'empty'
            }
        },
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
    }
}
