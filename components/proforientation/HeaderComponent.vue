<template>
    <header>
        <div class="container">
            <h1>Хотите определить свои профессиональные цели? <br>Наш сервис вам поможет.</h1>
            <div class="description">
                <p class="primary_description">Получите доступ к базе профессионалов и выбору того, <br> с кем вам будет максимально комфортно находить свое призвание.</p>
                <p class="secondary_description">Вы сами выбираете стоимость консультирования, формат и время встречи</p>
            </div>
            <button @click="contactModal">Заказать консультацию</button>
        </div>
    </header>
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
header {
    padding: 150px 0;
}
.container {
    display: block;
}
h1 {
    font-size: 42px;
    line-height: 58px;
    margin-bottom: 40px;
}
.primary_description {
    font-size: 20px;
    line-height: 34px;
    color: #0A0E10;
}
.secondary_description {
    font-size: 20px;
    line-height: 26px;
    // font-weight: 700;
    color: #0A0E10;
    margin-top: 30px;
}
button {
    padding: 12px 30px;
    color: #fff;
    padding: 16px 32px;
    border-radius: 30px;
    background-color: #FF6610;
    border: 1px solid #FF6610;
    margin-top: 40px;
    font-size: 24px;
    transition: 400ms;
    &:hover {
        background-color: transparent;
        color: #000;
        padding: 15px 31px;
    }
}

@media screen and (max-width: 1420px) {
    header {
        padding: 60px 0
    }
    h1 {
        font-size: 36px;
        line-height: 46px;
    }
}
@media screen and (max-width: 1100px) {
    p {
        font-size: 18px;
        line-height: 32px !important;
        br {
            display: none
        }
    }
    button {
        padding: 16px 28px;
        font-size: 20px;
    }
    header {
        padding: 30px 0
    }
    h1 {
        font-size: 32px;
        br {
            display: none;
        }
    }
}
</style>