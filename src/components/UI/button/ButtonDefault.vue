<template>
    <button class="buttonDefault"><slot>Button</slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

})
</script>

<style lang="scss">
.buttonDefault {
    padding: 10px;
    background: none;
    color: $cBackgroundMain;
    border: 1px solid $cBackgroundMain;
    border-radius: 10px;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
        background-color: $cBackgroundMain;
        color: $cBackgroundBar;
    }
}
</style>