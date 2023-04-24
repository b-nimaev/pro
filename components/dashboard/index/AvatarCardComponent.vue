<template>
    <div class="avatar">
        <img v-if="user.photo" :src="`/_nuxt/assets/avatars/${user.photo}`" alt="user-card-avatar">
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
    computed: {
        user: function () {
            return this.mainStore.getUser
        }
    },
    methods: {
        jackclick: function () {
            let input = document.getElementById('photo_input')
            if (input) {
                input.click()
            }
        },
        previewFile(event: any) {
            const file = event.target.files[0]
            const formData = new FormData()
            formData.append('avatar', file)
            fetch(`http://localhost:1337/users/${this.user._id}/avatar`, {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to upload avatar')
                    }
                    return response.json()
                })
                .then(async (data) => {
                    console.log('Avatar uploaded successfully')
                    // обновляем данные пользователя на фронтенде
                    console.log(this.mainStore.getSessionID)
                    await fetch('http://localhost:1337/users/' + this.mainStore.getSessionID)
                        .then(response => response.json())
                        .then(async (user) => {
                            await this.mainStore.setUser(user)
                        })
                })
                .catch(error => {
                    console.error(error)
                    // выводим сообщение об ошибке на фронтенде
                    this.errorMessage = 'Failed to upload avatar'
                })
        }
    },
    mounted() {
        document.getElementById('photo_input')?.addEventListener("change", function (e) {
            // @ts-ignore
            console.log(e.target.files[0])
        })
    }
})
</script>

<style lang="scss" scoped>
@import '~/assets/css/dashboard.scss';

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    position: relative;
    padding: 0;

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
        width: 80px;
        height: 80px;
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
