<template>
    <div>
        <NavbarComponent />
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: [
        'redirect'
    ]
})
</script>