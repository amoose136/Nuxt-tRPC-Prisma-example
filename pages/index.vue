<template>
    <div class="main" :style="{ 'background-color': ccolor }">
        <div class="inner">
            <h2>List of colors</h2>
            <ul>
                <li
                    v-for="color in colors"
                    :key="color"
                    @click="
                        {
                            ccolor = '#' + color.color
                        }
                    "
                >
                    {{ color.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
// this should SSR render all color names as an unordered list
import Vue from 'vue'
import { PrismaClient } from '@prisma/client'

export default Vue.extend({
    async asyncData() {
        const prisma = new PrismaClient()
        const colors = await prisma.color.findMany({
            select: {
                color: true,
                id: false,
                name: true,
                createdAt: false,
            },
        })
        return { colors }
    },
    data() {
        return {
            ccolor: 'white',
        }
    },
})
</script>
<style scoped>
li:hover {
    color: darkslategray;
    background: rgba(255, 255, 255, 0.2);
}
.main {
    width: 100vw;
    height: 100vh;
    margin-left: -8px;
    margin-top: -8px;
    margin-bottom: -8px;
    padding: 0;
    overflow: hidden;
}
.inner {
    width: fit-content;
    margin: 0 auto;
    margin-top: 0 px;
    padding-top: 40 px;
}
body {
    background: black;
    margin: 0;
}
</style>
