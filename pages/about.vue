<template>
    <div>
        <NavbarComponent />
        <main>
            <section>
                <div class="container">
                    <h2>О нас</h2>
                    <div class="text">
                                            <p><b>Профориентация и карьера PROFORI</b> – это компетентное сообщество профориентологов и карьерных консультантов, которые помогут вам найти своё призвание</p>
                        <p><b>PROFORI</b> – современный сервис подбора ВАШЕГО консультанта.</p>
                        <p style="margin: 15px 0">Мы экономим ваше время: вы указываете ваш вопрос, мы подбираем вам решение</p>
                        <p>На нашей платформе регистрируются только квалифицированные консультанты в области профориентации и карьерной помощи со всего мира. Обращаясь к нам, вы получаете доступ к базе профессионалов и возможность выбора именно того, с кем вам будет максимально комфортно. Вы сами выбираете стоимость консультирования, формат и время встречи.</p>
    
                    </div>
            </div>
            </section>
        </main>
        <FooterComponent />
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
main {
    padding: 100px 0;
    text-align: center;
    h2 {
        font-size: 40px;
        margin-bottom: 30px;
    }
    p {
        font-size: 18px;
        line-height: 32px
    }
    .text {
        width: 940px;
        margin: auto;
    }
}

@media screen and (max-width: 992px) {
    main {
        .text {
            width: 100%
        }
    }
}
</style>