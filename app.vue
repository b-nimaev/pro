<template>
  <div class="pagewrapper"
    :class="{ 'mobile-menu-active': mobileMenu, 'dark': colorScheme.name === 'dark', 'light': colorScheme.name === 'light' }">
    <NuxtPage />
    <div class="menu" :class="{ 'active': menuStatus }">
      <button @click="closeMenu()" class="close">Закрыть</button>
      <div class="container">
        <div class="row">
          <NuxtLink to="/">
            <LogotypeComponent themeClass="very-light" />
          </NuxtLink>
        </div>
        <div class="toggler-closer show">
        </div>
        <ul v-if="menuStatus">
          <li>
            <NuxtLink to="/">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tests">Тесты</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/proforientation">Профориентация</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/career">Карьера</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/for-consultants">Консультантам</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/for-consultants">Консультантам</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/styles.scss';

.close {
  padding: 10px 15px;
  background: #333;
  color: #eee;
  font-size: 18px;
  line-height: 18px;
  border-radius: 3px;
  transition: 400ms;
  position: relative;
  left: 0;

  &:hover {
    left: 5px
  }

  &:active {
    left: 7px;
  }
}

.menu {
  position: fixed;
  left: 100%;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  z-index: 99;
  padding: 50px;
  transition: 400ms;

  &.active {
    left: 0;
  }

  ul {
    margin-top: .5rem;

    li {
      a {
        font-size: 2rem;
        padding: .8rem 0;
        display: block;
        width: fit-content;
        font-family: 'Raleway', sans-serif;
        font-weight: 200;
        position: relative;
        left: 0;
        transition: 400ms;

        &:hover {
          left: 5px;
        }
      }
    }
  }
}

.pagewrapper {
  // display: flex;
}
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
    },
    menuStatus: function () {
      return this.mainStore.menuShowStatus
    },
  },
  methods: {
    closeMenu: function () {
      document.getElementsByTagName("body")[0].classList.remove('mobile-menu-active')
      return this.mainStore.setMenuStatus(false)
    }
  }
})
</script>