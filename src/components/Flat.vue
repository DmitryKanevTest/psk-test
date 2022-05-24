<template>
    <div
        class="flat"
        :class="{ flat_hover: flat.number === flatNumberHover }"
        @click="isPopupFlatInfoOponed = true"
        :title="isPopupFlatInfoOponed === false ? `цена:${dataFlats[flat.id].cost / 1000} тыс` : ''"
    >
        <div class="flat__content" :class="flatStatus">
            {{dataFlats[flat.id].plan_type || 'НП'}}
            <div v-if="dataFlats[flat.id].renovation" class="flat__renovation"></div>
        </div>

        <PopupFlatInfo
            v-if="isPopupFlatInfoOponed"
            @closePopup="
                isPopupFlatInfoOponed = false;
                resetLight();
            "
            :flatInfo="dataFlats[flat.id]"
        />
    </div>
</template>

<script lang="ts">
import { IFlatID, ISortProperties, IFlats } from "@/types";
import { defineComponent, inject, PropType, ref } from "vue";
import PopupFlatInfo from "@/components/PopupFlatInfo.vue";
import { computed } from "@vue/reactivity";
import FlatValidator from "@/libraries/flatValidator";

export default defineComponent({
    components: {
        PopupFlatInfo,
    },

    props: {
        flat: {
            type: Object as PropType<IFlatID>,
            required: true,
        },
        flatNumberHover: {
            type: Number,
            required: true,
        },
    },

    setup(props) {
        const isPopupFlatInfoOponed = ref(false);
        const sortProperties = inject<ISortProperties>("sortProperties")!;
        const resetLight = inject<() => void>("resetLight")!;
        const dataFlats = inject<IFlats>("flatsData")!;

        const flatValidator = new FlatValidator(dataFlats);

        const flatStatus = computed(() => {
            if (!flatValidator.all(props.flat, sortProperties)) {
                return "flat__content_disabled";
            }

            if (dataFlats[props.flat.id].status === "Выданы ключи") {
                return "flat_status-keyIssued";
            }

            if (dataFlats[props.flat.id].status === "Договор") {
                return "flat_status-contract";
            }

            if (dataFlats[props.flat.id].status === "Свободна") {
                return "flat_status-free";
            }

            if (dataFlats[props.flat.id].status === "Бронь") {
                return "flat_status-reserve";
            }

            if (dataFlats[props.flat.id].status === "Оформление") {
                return "flat_status-reserve";
            }
        });

        return {
            sortProperties,
            resetLight,
            dataFlats,
            flatStatus,
            isPopupFlatInfoOponed,
        };
    },
});
</script>

<style lang="scss">
.flat {
    height: 30px;
    width: 30px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.flat_hover {
    background-color: $cHover;
}

.flat__content {
    width: 24px;
    height: 24px;
    font-size: 13px;
    text-align: center;
    line-height: 24px;
    color: $cBackgroundMain;

    @include unselectable();
}

.flat__content_disabled {
    @include flatDisabled();
}

.flat_status-free {
    background-color: $cFlatStatusFree;
}

.flat_status-keyIssued {
    background-color: $cFlatStatusKeyIssued;
}

.flat_status-contract {
    background-color: $cFlatStatusContract;
}

.flat_status-reserve {
    background-color: $cFlatStatusReserve;
}

.flat_status-reserve {
    background-color: $cFlatSatusRegistration;
}

.flat__renovation {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 7px;
    height: 7px;
    background-color: $cBackgroundBar;
    border-radius: 100%;
    line-height: 21px;
    text-align: center;
    color: $cBackgroundMain;
    border: 1px solid $cBackgroundMain;
    z-index: 1;
}
</style>
