<template>
    <div :style="{ 'background-color': ccolor }">
        <p>List of colors</p>
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
