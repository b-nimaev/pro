<template>
    <div>
        <NavbarComponent />

        <main>
            <div class="container">
                <div class="post-list">
                    <article v-for="i in 12" :key="i">
                        <OurConcultantsSlideComponent />
                    </article>
                </div>
            </div>
        </main>
        <FooterComponent />
    </div>
</template>

<style lang="scss" scoped>
.post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

article {
    // width: 300px
}
</style>