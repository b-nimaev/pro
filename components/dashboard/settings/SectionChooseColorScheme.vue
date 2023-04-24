<template>
    <section>
        <DashboardSettingsSectionHeadingComponent title="Тема сайта" />
        <form>
            <div class="input-group">
                <label for="choose_theme">Цветовая схема</label>
                <!-- inputWrapper -->
                <div class="input-wrapper">
                    <div class="selected" @click="toggleSelectColorScheme" :data-color-theme="colorScheme.name">{{
                        colorScheme.value }}</div>
                    <div class="select-dropmenu">
                        <ul :class="{ 'active': selectedColorSchemeToggler }">
                            <li @click="selectColorSceheme" :data-color-theme="theme.name" v-for="theme in colorThemes"
                                :key="theme.name">{{ theme.value }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<style lang="scss" scoped>
@import '~/assets/css/settings.scss'
</style>

<script lang="ts">
import { useMainStore } from "~/store";
export default defineComponent({
    setup() {
        const mainStore = useMainStore()
        let { colorScheme } = mainStore.getUser
        return { mainStore, colorScheme }
    },
    data() {
        return {
            colorTheme: this.colorScheme,
            colorThemes: [
                {
                    name: 'light',
                    value: 'Светлая'
                },
                {
                    name: 'dark',
                    value: 'Темная'
                }
            ],
            selectedColorSchemeToggler: false
        }
    },
    methods: {
        async colorThemeWatcher(e: any) {

        },
        async toggleSelectColorScheme (e: any) {
            if (this.selectedColorSchemeToggler === false) {
                this.selectedColorSchemeToggler = true
            } else {
                this.selectedColorSchemeToggler = false
            }
        },
        async selectColorSceheme (e: any) {
            let name = e.target.getAttribute('data-color-theme')
            let value = e.target.innerHTML

            console.log(name + ' ' + value)

            if (value) {
                let updated = this.mainStore.getUser
                updated.colorScheme = {
                    name,
                    value
                }
                this.mainStore.setUser(updated)
                await fetch('http://localhost:1337/users/' + updated._id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.mainStore.getUser)
                }).then(response => {
                    console.log(response)
                    this.colorScheme = {
                        name,
                        value
                    }
                    this.selectedColorSchemeToggler = false
                }).catch(error => {
                    console.error(error)
                })
            }
        }
    }
})
</script>