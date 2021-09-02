export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Nuxt-tRPC-Prisma-example',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules

    modules: [
        // https://composition-api.nuxtjs.org/getting-started/setup
        // Below will move to buildModules after Nuxt>=2.9
        '@nuxtjs/composition-api/module',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    generate: {
        // delay added to SSR due to an open bug https://github.com/nuxt-community/composition-api/issues/44
        // choose to suit your project
        interval: 2000,
    },
}
