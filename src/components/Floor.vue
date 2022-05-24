<template>
    <div class="floor" :class="{ floor_hover: floor.floor == lighting.floorNumber }">
        <div class="floor__number">{{ floor.floor }}</div>
        <Flat
            v-for="flat of floor.flats"
            :key="flat.id"
            :flat="flat"
            :flatNumberHover="lighting.flatNumber"
            @mouseenter="mouseEntryFlat(flat)"
            @mouseleave="mouseLeaveFlat()"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";
import Flat from "@/components/Flat.vue";
import { IEntranceLighting, IFlats, IFlatID, IFloor } from "@/types";

export default defineComponent({
    props: {
        floor: {
            type: Object as PropType<IFloor>,
            required: true,
        },

        lighting: {
            type: Object as PropType<IEntranceLighting>,
            required: true,
        },
    },

    components: {
        Flat,
    },

    emits: ["flatHover"],

    setup(props, { emit }) {
        const flatsData = inject<IFlats>("flatsData")!;

        const mouseEntryFlat = (flat: IFlatID) => {
            setEntranceLighting(flat.number, flatsData[flat.id].floor);
        };

        const mouseLeaveFlat = () => {
            setEntranceLighting(0, 0);
        };

        const setEntranceLighting = (flatHover: number, floorHover: number) => {
            emit("flatHover", flatHover, floorHover);
        };

        return {
            mouseEntryFlat,
            mouseLeaveFlat,
            setEntranceLighting,
        };
    },
});
</script>

<style lang="scss">
.floor {
    display: flex;
    align-items: center;
    width: min-content;
    height: 30px;
}

.floor_hover {
    background-color: $cHover;

    .floor__number {
        color: #fff;
    }
}

.floor__number {
    width: 30px;
    color: $cHover;
    margin-left: 10px;
    @include unselectable();
}
</style>
