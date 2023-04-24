<template>
    <div>
        <h4>{{ heading }}</h4>
    </div>
</template>

<script>
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {

        }
    },
    props: {
        heading: {
            type: String,
            default: 'heading'
        }
    }
})
</script>

<style lang="scss" scoped>
h4 {
    font-size: 24px;
}
div {
    margin-bottom: 15px;
}
</style>