<template>
  <div class="pagewrapper"
    :class="{ 'mobile-menu-active': mobileMenu, 'dark': colorScheme.name === 'dark', 'light': colorScheme.name === 'light' }">
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/styles.scss';
</style>

<script lang="ts">

import { CookieRef } from 'nuxt/app';
import { useMainStore } from '~/store';
export default defineComponent({
  setup() {
    const mainStore = useMainStore()
    const userData = mainStore.getUser
    return { userData, mainStore }
  },
  data() {
    return {
      preloader: false,
      userData: this.userData
    }
  },
  computed: {
    mobileMenu: function () {
      return this.mainStore.mobileMenu
    },
    loggedStatus: function () {
      return this.mainStore.getSessionID
    },
    colorScheme() {
      return this.mainStore.getUser.colorScheme
    }
  },
  beforeCreate() {
    const id: CookieRef<string | null | undefined> = useCookie('id')
    // if (id.value) {
    //   // this.mainStore.setSessionID = id.value
    //   (async () => {
    //     await fetch('https://profori.pro/api/users/' + id.value, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     }).then(async (res) => {
    //       // @ts-ignore
    //       if (await res.json().message) {
          
    //       } else {
    //         this.mainStore.setUser(await res.json())
    //       }
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   })();
    // }
  },
  mounted() {
    // let user = this.mainStore.getUser
    // const cookie = useCookie('id')
    // cookie.value = user._id
  }
})
</script>