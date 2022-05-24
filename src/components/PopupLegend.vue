<template>
    <div class="popupLegend" @click.self="$emit('closeLegend')">
        <div class="popupLegend__content">
            <ButtonClose @click.stop="$emit('closeLegend')" />
            <h2>Легенда</h2>

            <h3 class="popupLegend__subclause" >Тип помещения</h3>
            <div class="popupLegend__itemDescription">
                <div class="popupLegend__mark mark-nonResidential">НП</div>
                <div class="popupLegend__titleMark">Нежилые помещения</div>
            </div>

            <div class="popupLegend__itemDescription">
                <div class="popupLegend__mark mark-flat">C</div>
                <div class="popupLegend__titleMark">Квартира</div>
            </div>

            <h3 class="popupLegend__subclause" >Статус помещения</h3>
            <div class="popupLegend__itemDescription">
                <div class="popupLegend__mark mark-statusKeyIssued">C</div>
                <div class="popupLegend__titleMark">Выданы ключи</div>
            </div>

            <div class="popupLegend__itemDescription">
                <div class="popupLegend__mark mark-statusContract">C</div>
                <div class="popupLegend__titleMark">Договор</div>
            </div>

            <div class="popupLegend__itemDescription">
                <div class="popupLegend__mark mark-statusReserve">C</div>
                <div class="popupLegend__titleMark">Бронь</div>
            </div>

            <div class="popupLegend__itemDescription">
                <div class="popupLegend__mark mark-satusRegistration">C</div>
                <div class="popupLegend__titleMark">Оформление</div>
            </div>

            <div class="popupLegend__itemDescription">
                <div class="popupLegend__mark mark-statusFree">C</div>
                <div class="popupLegend__titleMark">Свободна</div>
            </div>

            <div class="popupLegend__itemDescription">
                <div class="popupLegend__mark mark-statusContract">
                    <div class="mark-renovation"></div>
                    C
                </div>
                <div class="popupLegend__titleMark">С ремонтом</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonClose from "@/components/UI/button/ButtonClose.vue";

export default defineComponent({
    emits: ['closeLegend'],
    components: {
        ButtonClose,
    },
});
</script>

<style lang="scss">
.popupLegend {
    @include centerPopup();
}

.popupLegend__content {
    @include popupContent();
}

.popupLegend__subclause {
    margin-top: 20px;
}

.popupLegend__itemDescription {
    display: flex;
    margin-top: 10px;

    &:last-child {
        border-top: 1px solid #000;
        padding-top: 25px;
    }
}

.popupLegend__mark {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: black;
    line-height: 24px;
    font-size: 13px;
    color: $cBackgroundMain;
    text-align: center;
    position: relative;
}

.popupLegend__titleMark {
    line-height: 24px;
    margin-left: 15px;
}

.mark-nonResidential,
.mark-flat {
    background-color: $cFlatStatusContract;
}

.mark-statusKeyIssued {
    background-color: $cFlatStatusKeyIssued;
}

.mark-statusContract {
    background-color: $cFlatStatusContract;
}

.mark-statusReserve {
    background-color: $cFlatStatusReserve;
}

.mark-satusRegistration {
    background-color: $cFlatSatusRegistration;
}

.mark-statusFree {
    background-color: $cFlatStatusFree;
}

.mark-renovation {
    position: absolute;
    right: -2px;
    top: -2px;
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
