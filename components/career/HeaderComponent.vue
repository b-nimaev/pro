<template>
    <header>
        <div class="container">
            <div class="left-side">
                <h2>Добейтесь успеха в карьере <br>с нашими экспертами-консультантами</h2>
                <p>Разблокируйте свой потенциал и достигните своих карьерных целей вместе с нашими экспертами</p>
            </div>
            <div class="right-side">
                <div class="columns">
                    <div class="column">
                        <img src="~/assets/images/Frame 107.jpg" alt="frame 107">
                    </div>
                    <div class="column">
                        <img src="~/assets/images/Frame-108.jpg" alt="frame 108">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    margin: 100px 0;
}

.left-side {
    margin-right: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        font-size: 48px;
        line-height: 48px;
        color: #000;
        margin-bottom: 20px;
    }
    p {
        font-size: 20px;
        line-height: 26px;
    }
}
.columns {
    display: flex;
    flex-direction: row;
}
.column {
    margin: auto;
    &:nth-child(1) {
        margin-right: 30px;
    }
    img {
        border-radius: 300px;
    }
}

@media screen and (max-width: 1700px) {
    .left-side {
        h2 {
            font-size: 36px;
        }
    }
}

@media screen and (max-width: 1100px) {
    header {
        margin: 40px 0;
    }
    .left-side {
        margin-right: 15px;
        h2 {
            font-size: 32px;
            line-height: 42px;
        }
        p {
            line-height: 32px;
        }
    }
    .right-side {
        .columns {
            .column {
                &:first-child {
                    display: none;
                }
                &:last-child {
                    img {
                        height: 300px;
                    }
                }
            }
        }
    }
}

</style>
<script></script>