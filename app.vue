<template>
  <div class="pagewrapper"
    :class="{ 'mobile-menu-active': mobileMenu, 'dark': colorTheme.name === 'dark', 'light': colorTheme.name === 'light' }">
    <div class="preloader" v-if="preloader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Raleway', sans-serif;
  transition: 400ms;
  overflow-x: hidden;

  &.mobile-menu-active {
    overflow: hidden;

    &::-webkit-scrollbar {
      width: 0;
    }

  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {}

  &::-webkit-scrollbar-thumb {
    background: #1c1313;
    border-radius: 2px;
  }
}

.pagewrapper {
  transition: 400ms;

  &.dark {
    background-image: linear-gradient(88deg, #0f0d12, #2a272e)
  }
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

.preloader {
  background: #8e8eff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  background-image: linear-gradient(45deg, #6cffc4, transparent);
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>

<script lang="ts">
import { CookieRef } from 'nuxt/app';
import { useMainStore } from '~/store';
export default defineComponent({
  setup() {
    const mainStore = useMainStore()
    return { mainStore }
  },
  data() {
    return {
      preloader: false
    }
  },
  computed: {
    mobileMenu: function () {
      return this.mainStore.mobileMenu
    },
    loggedStatus: function () {
      return this.mainStore.getSessionID
    },
    colorTheme() {
      return this.mainStore.getUser.colorScheme
    }
  },
  beforeMount() {
    const id: CookieRef<string | null | undefined> = useCookie('id')
    if (id.value) {
      // this.mainStore.setSessionID = id.value
      (async () => {
        await fetch('http://localhost:1337/users/' + id.value, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(async (res) => {
          this.mainStore.setUser(await res.json())
        }).catch(err => {
          console.log(err)
        })
      })();
    }
  },
  mounted() {
    // let user = this.mainStore.getUser
    // const cookie = useCookie('id')
    // cookie.value = user._id
  }
})
</script>