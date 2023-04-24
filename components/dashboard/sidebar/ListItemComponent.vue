<template>
    <li>
        <NuxtLink to="/dashboard/finances">
            <div class="icon">
                <!-- <component :is="iconComponent" /> -->
                <component :is="Icon" />
            </div>
            <span>Финансы</span>
        </NuxtLink>
    </li>
</template>

<script>
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data () {
        return {

        }
    },
    props: {
        Icon: {
            type: String,
            required: true
        }
    },
})
</script>

<style lang="scss" scoped>
li {

    a {
        display: flex;
        font-family: 'Nunito', sans-serif;
        margin: 0 0 10px;
        font-size: 16px;
        color: #333333;
        font-weight: 600;
        width: 190px;
        padding: 10px 20px;
        position: relative;
        top: 0;
        left: 0;
        background-color: transparent;
        border: 1px solid transparent;
        transition: 400ms;

        span {}

        .icon {
            margin: auto 5px auto 0;
            display: flex;

            svg {
                margin: auto;
            }
        }

        &.acitve {
            background-color: #333;

            svg {

                g,
                path {
                    fill: #fff;
                }
            }

            a {
                color: #fff;
            }
        }

        &:hover {
            background-color: #fafafa;
            left: 5px;
        }
    }

}
</style>