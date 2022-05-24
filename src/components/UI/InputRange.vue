<template>
    <div class="inputRange">
        <span class="inputRange__title">{{ titleRangeInput }}: </span>
        <input @input="inputMin" :value="rangeValues.min" class="inputRange__input" type="text" />
        <span class="inputRange__separator"></span>
        <input @input="inputMax" :value="rangeValues.max" class="inputRange__input" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IRangeInput } from "@/types";

export default defineComponent({
    emits: ["inputMax", "inputMin"],
    props: {
        rangeValues: {
            type: Object as PropType<IRangeInput>,
            required: true,
        },
        titleRangeInput: {
            type: String,
            required: true,
        },
    },

    methods: {
        inputMax(e: Event) {
            this.$emit("inputMax", (<HTMLInputElement>e.target).value);
        },

        inputMin(e: Event) {
            this.$emit("inputMin", (<HTMLInputElement>e.target).value);
        },
    },
});
</script>

<style lang="scss">
.inputRange__input {
    border: 1px solid $cHover;
    width: 120px;
    padding: 5px;
    border-radius: 10px;
    transition: all 0.3s;

    &:focus {
        box-shadow: 0 0 4px 4px $cHover;
        border: 1px solid $cBackgroundMain;
    }
}

.inputRange__title {
    display: inline-block;
    width: 100px;
    font-weight: bold;
}

.inputRange__separator {
    display: inline-block;
    width: 10px;
    height: 2px;
    margin: 0 5px;
    position: relative;
    top: -4px;
    background-color: #000;
}
</style>
