<template>
    <section>
        <DashboardIndexAvatarCardComponent />
        <DashboardIndexUsernameComponent />
    </section>
</template>

<style lang="scss" scoped>
@import '~/assets/css/dashboard.scss';

.user-data {
    display: flex;
    width: fit-content;
    padding: 20px;
    border-radius: 8px;
    background-color: #fffafa;

    .avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 15px;

        img {
            cursor: pointer;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .username {
        margin: auto 0;
        display: flex;

        h4 {
            font-size: 20px;
            margin-bottom: 5px;
        }

        h6 {
            font-size: 12px;
            color: #c3c3c3
        }

        .change {
            margin-left: 15px;
        }
    }
}
</style>

<script>
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
        }
    },
    methods: {

    },
    props: {
        themeClass: 'light'
    }
})
</script>