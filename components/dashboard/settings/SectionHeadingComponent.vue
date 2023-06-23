<template>
    <div class="section-heading"># {{ title }}</div>
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
@import '~/assets/scss/_variables.scss';

.section-heading {
    margin-bottom: calc($spacer*2);
    font-size: $h3-font-size;
    color: $primary;
    width: fit-content;
    cursor: pointer;
}

.pagewrapper.dark {
    h4 {
        color: #fff
    }
}
</style>