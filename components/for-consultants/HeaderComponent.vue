<template>
    <header>
        <div class="container">
            <div class="inner">
                <h1>Присоединяйтесь к нашей команде консультантов</h1>
                <p>и помогите людям достигнуть успеха в карьере!</p>
                <ButtonsSendOrderComponent />
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    padding: 100px 0;

    .inner {
        display: flex;
        flex-direction: column;

        p {
            font-size: 32px;
            margin-top: 12px;
        }
    }
}

h1 {
    font-size: 42px;
    line-height: 62px;
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