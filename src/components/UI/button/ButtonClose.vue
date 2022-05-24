<template>
    <button class="buttonClose">
        <svg class="buttonClose__svg" viewBox="0 0 512 512">
            <path
                d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M327.115,365.904
			L256,294.789l-71.115,71.115l-38.789-38.789L217.211,256l-71.115-71.115l38.789-38.789L256,217.211l71.115-71.115l38.789,38.789
			L294.789,256l71.115,71.115L327.115,365.904z"
            />
        </svg>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.buttonClose {
    background: none;

    &:hover {
        svg {
            opacity: 1;
        }
    }
}

.buttonClose__svg {
    opacity: 0.5;
    transition: all 0.3s;
    width: 30px;
    height: 30px;
}
</style>
