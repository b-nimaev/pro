<template>
    <div>
        <h4>{{ message }}</h4>
    </div>
</template>

<style lang="scss" scoped>
div {
    text-align: center;

    h4 {
        font-weight: 700;
        font-size: 28px;
        color: rgb(255 107 107);
        text-align: center;
        // margin-bottom: 20px;
        display: block;
        line-height: 1;
    }
}
</style>

<script lang="ts">
export default {
    props: {
        message: {
            type: String
        }
    }
}
</script>