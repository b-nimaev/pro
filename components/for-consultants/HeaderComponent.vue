<template>
    <header>
        <div class="container">
            <div class="inner">
                <h1>Современная платформа для поиска решений </h1>
                <ButtonsSendOrderComponent />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
header {
    padding: 70px 0 300px;

    .inner {
        display: flex;
        flex-direction: column;
    }
}

h1 {
    font-size: 42px;
    line-height: 60px;
    color: $ohra-primary;
    font-weight: 300;
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