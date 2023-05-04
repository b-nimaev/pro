<template>
    <div>
        <NavbarComponent />
    </div>
</template>

<script lang="ts">
definePageMeta({
    middleware: [
        'redirect'
    ]
})
</script>