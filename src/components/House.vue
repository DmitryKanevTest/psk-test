<template>
    <fieldset class="house" v-if="sortProperties.house_id[entrances[0].house_id]">
        <legend class="house__legend">{{ entrances[0].house_id }}</legend>
        <Entrance v-for="entrance of entrances" :entrance="entrance" />
    </fieldset>
</template>

<script lang="ts">
import { IEntrance, ISortProperties } from "@/types";
import { defineComponent, inject, PropType } from "vue";
import Entrance from "@/components/Entrance.vue";

export default defineComponent({
    components: {
        Entrance,
    },

    props: {
        entrances: {
            type: Object as PropType<IEntrance[]>,
            required: true,
        },
    },

    setup() {
        const sortProperties = inject<ISortProperties>("sortProperties")!;

        return {
            sortProperties
        }
    }
});
</script>

<style lang="scss">
.house {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    border: 3px solid $cBackgroundBar;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 0;
    }
}

.house__legend {
    margin-left: 50px;
    padding: 10px;
    background-color: $cBackgroundBar;
    border-radius: 15px;
    color: $cBackgroundMain;
}
</style>
