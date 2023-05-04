<template>
    <div>
        <NavbarComponent />

        <!-- <HomeBlogComponent /> -->
        <main>
            <div class="container">
                <div class="post-list">
                    <article v-for="i in 15" :key="i">
                        <BlogSlideComponent />
                    </article>
                </div>
            </div>
        </main>
        <FooterComponent />
    </div>
</template>

<style lang="scss" scoped>
article {
    width: 350px;
}

.post-list {
    justify-content: center;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}
</style>