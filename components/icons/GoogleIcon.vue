<template>
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.75" y="0.109375" width="36" height="36" rx="18" :fill="color" fill-opacity="0.80" />
        <g clip-path="url(#clip0_30_5652)">
            <path
                d="M26.375 18.2906C26.375 22.7125 23.3469 25.8594 18.875 25.8594C14.5875 25.8594 11.125 22.3969 11.125 18.1094C11.125 13.8219 14.5875 10.3594 18.875 10.3594C20.9625 10.3594 22.7188 11.125 24.0719 12.3875L21.9625 14.4156C19.2031 11.7531 14.0719 13.7531 14.0719 18.1094C14.0719 20.8125 16.2312 23.0031 18.875 23.0031C21.9438 23.0031 23.0938 20.8031 23.275 19.6625H18.875V16.9969H26.2531C26.325 17.3937 26.375 17.775 26.375 18.2906Z"
                fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_30_5652">
                <rect width="15.25" height="16" fill="white" transform="translate(11.125 10.1094)" />
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