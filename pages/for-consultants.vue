<template>
    <div>
        <NavbarComponent />
        <ForConsultantsHeaderComponent />
        <section class="requirements">
            <div class="container">
                <h2>Условия сотрудничества</h2>
                <ul>
                    <li>- Изучить требования</li>
                    <li>- Заполнить анкету</li>
                    <li>- Пройти собеседование</li>
                </ul>
                <!-- <div class="row">
                    <article>
                        <h4>Изучить требования</h4>
                    </article>
                    <article>
                        <h4>Заполнить анкету</h4>
                    </article>
                    <article>
                        <h4>Пройти собеседование</h4>
                    </article>
                </div> -->
            </div>
        </section>
        <FooterComponent />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';

$primary: rgb(69, 41, 33);

.requirements {
    padding: 50px 0 160px;
    h2 {
        margin-bottom: 30px;
    }

    ul {
        padding-left: 10px;
        li {
            font-size: 18px;
            line-height: 26px;
        }
    }

    .row {
        display: flex;
        article {
            flex: 1;
            margin: auto 30px;
            padding: 30px;
            border: 1px solid  $primary;
            border-radius: 8px;
            h4 {
                font-size: 20px;
                text-align: center;
                margin: 0;
                color: $primary;
            }
        }
    }
}

</style>