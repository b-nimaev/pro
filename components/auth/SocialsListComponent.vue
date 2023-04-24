<template>
    <div>
        <ul>
            <li>
                <a href="javascript:void(0)">
                    <IconsVkIcon :color="color" />
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <IconsTelegramIcon :color="color" />
                </a>
            </li>
            <li><a href="javascript:void(0)">
                    <IconsYandexIcon :color="color" />
                </a></li>
            <li>
                <a href="javascript:void(0)">
                    <IconsGoogleIcon :color="color" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    data () {
        return {
            color: '#f00'
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    display: flex;
    margin: 15px auto;
    justify-content: center;

    a {
        display: flex;
        transition: 300ms;
        position: relative;
        top: 0;
        &:hover {
            top: -1px;
            svg {
                height: 36px;
            }
        }
        &:active {
            // transform: scale(.95);
            svg {
                height: 30px;
            }
        }
    }

    li {
        margin: 0 5px;
    }
    
    svg {
        height: 34px;
        transition: 400ms;
    }

    rect {
        fill: #f00;
    }
}
</style>