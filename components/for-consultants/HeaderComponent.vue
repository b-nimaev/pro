<template>
    <header>
        <div class="container">
            <div class="inner">
                <h1>Присоединяйтесь к нашей команде консультантов</h1>
                <ButtonsSendOrderComponent />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
header {
    padding: 70px 0;

    .inner {
        display: flex;
        flex-direction: column;
    }
}

h1 {
    font-size: $h1-size;
    line-height: 52px;
    color: $ohra-primary;
}

@media screen and (max-width: 1420px) {
    h1 {
        font-size: 36px;
        line-height: 48px;
    }

    header {
        .inner {
            p {
                font-size: 20px;
            }
        }
    }
}

@media screen and (max-width: 1100px) {
    h1 {
        font-size: 32px;
        line-height: 42px;
    }

    header {
        .inner {
            p {
                font-size: 18px;
                line-height: 32px;
            }
        }
    }
}
</style>