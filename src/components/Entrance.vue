<template>
    <div class="entrance">
        <Floor
            @flatHover="flatHover"
            v-for="floor of entrance.floors"
            :key="floor.floor"
            :floor="floor"
            :lighting="entranceLighting"
        />
        <div class="entrance__info">
            <div class="entrance__title">{{ entrance.title }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Floor from "@/components/Floor.vue";
import { defineComponent, PropType } from "vue";
import { IEntrance, IEntranceLighting } from "@/types";

export default defineComponent({
    props: {
        entrance: {
            type: Object as PropType<IEntrance>,
            required: true,
        },
    },

    data() {
        return {
            entranceLighting: {
                flatNumber: 0,
                floorNumber: 0,
            } as IEntranceLighting,
        };
    },

    components: {
        Floor,
    },

    methods: {
        flatHover(flatNumberHover: number, floorNumberHover: number) {
            this.entranceLighting.flatNumber = flatNumberHover;
            this.entranceLighting.floorNumber = floorNumberHover;
        },

        resetLight() {
            this.entranceLighting.flatNumber = 0;
            this.entranceLighting.floorNumber = 0;
        },
    },

    provide() {
        return {
            resetLight: this.resetLight
        }
    },
});
</script>

<style lang="scss">
.entrance {
    width: min-content;
    border: 2px solid $cHover;
    margin: 10px;
}

.entrance__info {
    border-top: 1px solid $cHover;
    margin: 10px 5px 10px 5px;
    padding-top: 10px;
    font-size: 12px;
    color: $cTextDefault;
}
</style>
