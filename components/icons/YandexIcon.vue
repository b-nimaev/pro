<template>
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.75" y="0.109375" width="36" height="36" rx="18" :fill="color" fill-opacity="0.80" />
        <g clip-path="url(#clip0_30_5645)">
            <path
                d="M19.5344 19.3613L16.8031 25.1094H14.8125L17.8125 18.9629C16.4031 18.292 15.4625 17.0762 15.4625 14.8291C15.4594 11.6826 17.5875 10.1094 20.1156 10.1094H22.6875V25.1094H20.9656V19.3613H19.5344ZM20.9656 11.4717H20.0469C18.6594 11.4717 17.3156 12.333 17.3156 14.8291C17.3156 17.2402 18.5469 18.0166 20.0469 18.0166H20.9656V11.4717Z"
                fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_30_5645">
                <rect width="8" height="16" fill="white" transform="translate(14.75 10.1094)" />
            </clipPath>
        </defs>
    </svg>
</template>

<script lang="ts">
export default {
    props: {
        color: {
            type: String,
            default: '#f00'
        }
    }
}
</script>