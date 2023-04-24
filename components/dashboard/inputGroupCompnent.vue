<template>
    <div class="input-group">
        <label for="name">Имя</label>
        <input type="text" id="name" v-model="firstName" @input="userwatch">
    </div>
</template>

<script lang="ts">
import { useMainStore } from '~/store';
export default defineComponent({
    setup () {
        const mainStore = useMainStore()
        let { firstName } = mainStore.getUser
        return { firstName, mainStore }
    },
    data () {
        return {
            firstName: this.firstName
        }
    },
    methods: {
        async userwatch () {
            
        }
    }
})
</script>