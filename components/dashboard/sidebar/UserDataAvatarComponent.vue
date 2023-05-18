<template>
    <div class="collapsed">
        <img v-if="user.photo" :src="`https://profori.pro/avatars/${user.photo}`" alt="user-avatar">
        <IconsAvatarEmtyIcon v-if="!user.photo" />
    </div>
</template>

<style lang="scss" scoped>
div {
    width: 80px;
    height: 80px;
    margin: 0 auto 10px;
    border-radius: 50%;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    &.collapsed {
        width: 120px;
        height: 120px;
    }
}

@media screen and (max-width: 992px) {
    div {
        display: none;
    }
}

</style>
<script lang="ts">
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            hovered: false
        }
    },
    computed: {
        user: function () {
            return this.mainStore.getUser
        }
    }
})
</script>