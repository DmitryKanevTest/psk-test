<template>
    <div class="mapEstates">
        <OptionsBar class="mapEstates__optionsBar" @clickSortFlats="isPopupSortFlatsOpened = true" @clickLegend="isPopupLegendOpened = true" />
        <PopupLegend v-if="isPopupLegendOpened" @closeLegend="isPopupLegendOpened = false" />
        <FormSortFlats v-if="isPopupSortFlatsOpened" @close="isPopupSortFlatsOpened = false"/>
        <House class="mapEstates__house" v-for="entrances of houseModels" :entrances="entrances"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import Entrance from "@/components/Entrance.vue";
import FormSortFlats from "@/components/FormSortFlats.vue";
import useFetchEstateData from "@/hooks/useFetchEstateData";
import useInitSortProperties from "@/hooks/useInitSortProperties";
import useMakeHouseModels from "@/hooks/useMakeHouseModels";
import House from "@/components/House.vue";
import OptionsBar from "@/components/OptionsBar.vue";
import PopupLegend from "@/components/PopupLegend.vue";

export default defineComponent({
    components: {
        Entrance,
        FormSortFlats,
        House,
        OptionsBar,
        PopupLegend,
    },

    setup() {
        const isPopupLegendOpened = ref(false);
        const isPopupSortFlatsOpened = ref(false);

        //estate - недвижимость
        const estateData = useFetchEstateData();
        const sortProperties = useInitSortProperties(estateData);
        const houseModels = useMakeHouseModels(estateData);

        provide("flatsData", estateData.flats);
        provide("sortProperties", sortProperties);

        return {
            estateData,
            sortProperties,
            houseModels,
            isPopupLegendOpened,
            isPopupSortFlatsOpened,
        };
    },
});
</script>

<style lang="scss">
.mapEstates {
    padding: 0 10px;
}

.mapEstates__house {
    position: relative;
    top: 60px;
}

.mapEstates__optionsBar {
    position: fixed;
    height: 50px;
    width: 100%;
    left: 0;
    z-index: 9999;
}
</style>
