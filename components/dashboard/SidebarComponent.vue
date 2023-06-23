<template>
    <aside class="">
        <DashboardSidebarUserDataComponent />
        <DashboardSidebarUserMenuComponent />
    </aside>
</template>

<script>
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    }
})
</script>

<style lang="scss" scoped>

aside {
    padding: 30px;
    border-radius: 5px;
    border-radius: 8px;
    height: fit-content;
    position: sticky;
    top: 20px;
    background-color: #ffffffd0;
    margin-right: 15px;
    height: auto;
    &.collapsed {
        padding: 20px;
        margin-right: 20px;
    }
}

@media screen and (max-width: 1420px) {
    aside {
        padding: 30px 20px;
        margin-right: 15px;
    }
    ul {
        li {
            a {
                margin: 0 0 6px;
                font-size: 14px;
                padding: 10px;
                width: 178px;       
            }
        }
    }
}

@media screen and (max-width: 992px) {
    aside {
        display: flex;
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 768px) {
    aside {
        margin-right: 15px;
    }
}
</style>