<template>
    <div>
        <a @click="removeLink" :data-id="id" href="javascript:void(0)">
            <svg :data-id="id" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path :data-id="id"
                    d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z" />
            </svg></a>
        <span>{{ value }}</span>
    </div>
</template>

<script lang="ts">
import { useMainStore } from "~/store"

export default defineComponent({
    setup () {
        const mainStore = useMainStore
        // const user = mainStore.getUser
        return { mainStore }
    },
    props: {
        value: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>
div {
    display: flex;
    margin-bottom: 5px;
    a {
        display: block;
        margin: auto 7.5px auto 0;
        svg {
            user-select: none;
            width: 16px;
            path {
                fill: #f00
            }
        }
    }

    span {
        font-size: 18px;
    }
}
</style>