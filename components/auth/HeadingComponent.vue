<template>
    <div>
        <h4>{{ message }}</h4>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/main.scss";
div {
    text-align: center;

    h4 {
        font-weight: 400;
        font-size: 24px;
        // color: $ohra-primary;
        color: #333;
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