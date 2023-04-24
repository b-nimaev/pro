<template>
    <div>
        <ul>
            <template v-for="n in rating" :key="n">
                <li :data-id="n">
                    <IconsStarIcon />
                </li>
            </template>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
div {
    margin: 0 auto 15px;

    ul {
        display: flex;

        li {
            margin-right: 5px;
        }
    }
}
</style>

<script lang="ts">
export default {
    props: {
        rating: {
            type: Number,
            default: 5
        }
    }
}
</script>