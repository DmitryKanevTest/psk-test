<template>
    <div class="optionsBar">
        <ButtonDefault @click="$emit('clickLegend')" class="optionsBar__btns" >Легенда</ButtonDefault>
        <ButtonFilter @click="$emit('clickSortFlats')" class="optionsBar__btns" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonFilter from "@/components/UI/button/ButtonFilter.vue"
import ButtonDefault from "@/components/UI/button/ButtonDefault.vue"

export default defineComponent({
    emits: ['clickLegend', 'clickSortFlats'],
    components: {
        ButtonFilter,
        ButtonDefault,
    },
})
</script>

<style lang="scss">
.optionsBar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: $cBackgroundBar;  
}

.optionsBar__btns {
    margin-right: 15px;
}
</style>