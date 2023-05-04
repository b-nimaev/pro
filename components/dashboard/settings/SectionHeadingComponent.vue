<template>
    <h4 class="section-heading"># {{ title }}</h4>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
    }
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/settings.scss';
h4 {
    margin-bottom: 30px;
    
    font-size: 26px;
    color: #eee;
    font-weight: 500;
    width: fit-content;
    cursor: pointer;
}
.pagewrapper.dark {
    h4 {
        color: #fff
    }
}
</style>