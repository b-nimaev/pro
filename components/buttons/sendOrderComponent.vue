<template>
    <button @click="contactModal">Заказать консультацию</button>
</template>

<script>
import { useMainStore } from '~/store'
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            themeClass: 'light'
        }
    },
    methods: {
        contactModal() {
            this.mainStore.setStatusModal(true)
        }
    },
})
</script>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

button {
    padding: 12px 30px;
    color: #fff;
    padding: 16px 32px;
    border-radius: 30px;
    background-color: $ohra-primary;
    border: 1px solid $ohra-primary;
    font-size: 24px;
    transition: 400ms;
    position: relative;
    top: 0;
    margin: 40px auto 0 0;

    &:hover {
        background-color: transparent;
        color: #000;
        padding: 15px 31px;
        top: -5px;
    }
    &:active {
        top: -3px;
    }
}

@media screen and (max-width: 1420px) {
    button {
        padding: 16px 28px;
        font-size: 20px;
    }
}
</style>