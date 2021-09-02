# Nuxt-tRPC-Prisma-example

A minimalistic app to display colors and names from a sqlite database managed by Prisma on the backend. Nuxt composition api + tRPC + a custom middleware wrapper for nuxt provide typesafe data transport between server and client.

## Build Setup

```bash
# install dependencies
$ npm install
```

After first installing, npm audit may complain about some security problem involving glob-parent. If this happens just run `npm install` again and it _should_ resolve.

```bash
# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
