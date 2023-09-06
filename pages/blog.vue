<template>
    <div>
        <NavbarComponent />

        <!-- <HomeBlogComponent /> -->
        <main>
            <section class="blog-header">
                <div class="container">
                    <h3>Привет! Это наш блог. Сюда попадает всё самое интересное от наших экспертов.</h3>
                </div>
            </section>
            <div class="container">
                <div class="post-list">
                    <article v-for="i in 12" :key="i">
                        <BlogSlideComponent />
                    </article>
                </div>
            </div>
        </main>
        <FooterComponent />
    </div>
</template>

<style lang="scss" scoped>

@import '@/assets/css/main.scss';

article {
    width: 350px;
}

section {
    &.blog-header {
        padding: 100px 0 70px;
        h3 {
            font-size: 24px;
        }
    }
}

.post-list {
    justify-content: center;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    padding: 60px 0;
}
</style>