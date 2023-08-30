<template>
    <div class="avatar">
        <!-- <img v-if="user.photo" :src="`/_nuxt/assets/avatars/${user.photo}`" alt="user-card-avatar"> -->
        <img v-if="user.photo" :src="`//profori.pro/avatars/${user.photo}`" alt="user-card-avatar">
        <IconsAvatarEmtyIcon v-if="!user.photo" />
        <div @click="jackclick" class="icon">
            <IconsCameraIcon />
        </div>
        <output></output>
        <input id="photo_input" type="file" accept="image/jpegm image/png, image/jpg" @change="previewFile">
    </div>
</template>

<script lang="ts">
import { useMainStore } from '~/store';
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        return { mainStore }
    },
    data() {
        return {
            hovered: false,
            photo: '',
            errorMessage: ''
        }
    },
    props: ['user'],
    methods: {
        jackclick: async () => await jackclick(),
        previewFile: async function previewfile(event: any) {
            
            // получаем файл
            const file = event.target.files[0]

            // создаем данные формы, и подгружаем файл в качестве аватарки
            const formdata = new FormData()
            formdata.append('avatar', file)

            // выполняем POST запрос по апи
            await fetch(`https://profori.pro/api/users/${this.user._id}/avatar`, {
                method: 'POST',
                body: formdata
            }).then(async (response) => { if (!response.ok) { throw new Error('Failed to upload avatar')  } else { return response.json() }
            }).then(async (resjson) => {
                
                console.log(resjson)
                this.mainStore.setUser(resjson)

                // let user = this.user
                // await fetch('https://profori.pro/api/users/' + user._id)
                    // .then(async (response) => await (response.json()))
                    // .then(async (resjson) => {  })
                
            }).catch(async (error) => { console.error(error) })
        }
    }
})

async function jackclick() {
    let input = document.getElementById('photo_input')
    if (input) {
        input.click()
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/dashboard.scss';

.avatar {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    position: relative;
    padding: 0;

    &.collapsed {
        margin-right: 20px;
    }

    img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .icon {
        background-color: #000000a1;
        position: absolute;
        height: 120px;
        width: 120px;
        top: 0;
        left: 0;
        display: flex;
        cursor: pointer;
        transition: 400ms;
        opacity: 0;
    }

    &:hover {
        .icon {
            opacity: 1;
        }
    }
}
</style>
