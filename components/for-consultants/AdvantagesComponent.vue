<template>
    <section>
        <div class="container">
            <h2>Наши преимущества</h2>
            <ul>
                <li class="active">
                    <a href="javascript:void(0)">Клиентам</a>
                </li>
                <li>
                    <a href="javascript:void(0)">Консультантам</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
h2 {
    font-size: 42px;
}
.container {
    display: block;
}

ul {
    display: flex;
    li {

        &.active {
            a {
                color: #fff;
                border-radius: 5px;
                padding: 10px 20px;
                background-image: linear-gradient(45deg, #f5e6a5, #dbdbdbb3);
            }
        }

        a {
            font-size: 24px;
            padding: 15px;
        }
        &:last-child {
            margin-right: 0;
        }
    }
}

h2 {
    margin-bottom: 40px;
}

section {
    padding: 100px 0;
}
</style>