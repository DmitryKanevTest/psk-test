<template>
    <div class="formSortFlats" @click.self="$emit('close')">
        <form class="formSortFlats__form" @submit.prevent>
            <ButtonClose @click.stop="$emit('close')" />
            <h2>Фильтры</h2>

            <div class="formSortFlats__ranges">
                <InputRange
                    @inputMax="(maxValue: number) => sortProperties.price.max = maxValue"
                    @inputMin="(minValue: number) => sortProperties.price.min = minValue"
                    class="formSortFlats__inputRange"
                    :rangeValues="sortProperties.price"
                    :titleRangeInput="'цена'"
                />

                <InputRange
                    @inputMax="(maxValue: number) => sortProperties.square.max = maxValue"
                    @inputMin="(minValue: number) => sortProperties.square.min = minValue"
                    class="formSortFlats__inputRange"
                    :rangeValues="sortProperties.square"
                    :titleRangeInput="'площадь'"
                />
            </div>

            <fieldset class="formSortFlats__fieldsetStatus">
                <legend class="formSortFlats__legendStatus"><h3>Статус</h3></legend>
                <label
                    class="formSortFlats__labelKeyIssued"
                    :class="{
                        formSortFlats__checbox_disabled: !sortProperties.status['Выданы ключи'],
                    }"
                    for="Выданы ключи"
                    >Выданы ключи</label
                >
                <input
                    @change="(e: Event) => sortProperties.status['Выданы ключи'] = (e.target! as HTMLInputElement).checked"
                    id="Выданы ключи"
                    type="checkbox"
                    :checked="sortProperties.status['Выданы ключи']"
                />

                <label
                    class="formSortFlats__labelReserve"
                    :class="{ formSortFlats__checbox_disabled: !sortProperties.status['Бронь'] }"
                    for="Бронь"
                    >Бронь</label
                >
                <input
                    @change="(e: Event) => sortProperties.status['Бронь'] = (e.target! as HTMLInputElement).checked"
                    id="Бронь"
                    type="checkbox"
                    :checked="sortProperties.status['Бронь']"
                />

                <label
                    class="formSortFlats__labelContract"
                    :class="{ formSortFlats__checbox_disabled: !sortProperties.status['Договор'] }"
                    for="Договор"
                    >Договор</label
                >
                <input
                    @change="(e: Event) => sortProperties.status['Договор'] = (e.target! as HTMLInputElement).checked"
                    id="Договор"
                    type="checkbox"
                    :checked="sortProperties.status['Договор']"
                />

                <label
                    class="formSortFlats__labelRegistration"
                    :class="{
                        formSortFlats__checbox_disabled: !sortProperties.status['Оформление'],
                    }"
                    for="Оформление"
                    >Оформление</label
                >
                <input
                    @change="(e: Event) => sortProperties.status['Оформление'] = (e.target! as HTMLInputElement).checked"
                    id="Оформление"
                    type="checkbox"
                    :checked="sortProperties.status['Оформление']"
                />

                <label
                    class="formSortFlats__labelFree"
                    :class="{ formSortFlats__checbox_disabled: !sortProperties.status['Свободна'] }"
                    for="Свободна"
                    >Свободна</label
                >
                <input
                    @change="(e: Event) => sortProperties.status['Свободна'] = (e.target! as HTMLInputElement).checked"
                    id="Свободна"
                    type="checkbox"
                    :checked="sortProperties.status['Свободна']"
                />
            </fieldset>

            <fieldset class="formSortFlats__fieldsetSomeProperties">
                <legend class="formSortFlats__legendSomeProperties"><h3>Свойства</h3></legend>
                <label
                    :class="{
                        formSortFlats__checbox_disabled:
                            !sortProperties.someProperties['installment'],
                    }"
                    class="formSortFlats__labelSomeProperties"
                    for="installment"
                    >installment</label
                >
                <input
                    @change="(e: Event) => sortProperties.someProperties['installment'] = (e.target! as HTMLInputElement).checked"
                    id="installment"
                    type="checkbox"
                    :checked="sortProperties.someProperties['installment']"
                />

                <label
                    :class="{
                        formSortFlats__checbox_disabled: !sortProperties.someProperties['marginal'],
                    }"
                    class="formSortFlats__labelSomeProperties"
                    for="marginal"
                    >marginal</label
                >
                <input
                    @change="(e: Event) => sortProperties.someProperties['marginal'] = (e.target! as HTMLInputElement).checked"
                    id="marginal"
                    type="checkbox"
                    :checked="sortProperties.someProperties['marginal']"
                />

                <label
                    :class="{
                        formSortFlats__checbox_disabled:
                            !sortProperties.someProperties['renovation'],
                    }"
                    class="formSortFlats__labelSomeProperties"
                    for="renovation"
                    >renovation</label
                >
                <input
                    @change="(e: Event) => sortProperties.someProperties['renovation'] = (e.target! as HTMLInputElement).checked"
                    id="renovation"
                    type="checkbox"
                    :checked="sortProperties.someProperties['renovation']"
                />

                <label
                    :class="{
                        formSortFlats__checbox_disabled: !sortProperties.someProperties['subsidy'],
                    }"
                    class="formSortFlats__labelSomeProperties"
                    for="subsidy"
                    >subsidy</label
                >
                <input
                    @change="(e: Event) => sortProperties.someProperties['subsidy'] = (e.target! as HTMLInputElement).checked"
                    id="subsidy"
                    type="checkbox"
                    :checked="sortProperties.someProperties['subsidy']"
                />
            </fieldset>

            <fieldset class="formSortFlats__fieldsetHousesId">
                <legend><h3>houses_id</h3></legend>
                <div v-for="(isActive, houseId) of sortProperties.house_id">
                    <label
                        :class="{
                            formSortFlats__checbox_disabled: !sortProperties.house_id[houseId],
                        }"
                        :for="(houseId as string)"
                        >{{ houseId }}</label
                    >
                    <input
                        @change="(e: Event) => sortProperties.house_id[houseId] = (e.target! as HTMLInputElement).checked"
                        type="checkbox"
                        :id="(houseId as string)"
                        :checked="sortProperties.house_id[houseId]"
                    />
                </div>
            </fieldset>
            
        </form>
    </div>
</template>

<script lang="ts">
import { ISortProperties } from "@/types";
import { defineComponent, inject } from "vue";
import InputRange from "@/components/UI/InputRange.vue"
import ButtonClose from "@/components/UI/button/ButtonClose.vue";

export default defineComponent({
    emits: ["close"],
    components: {
        InputRange,
        ButtonClose,
    },

    setup() {
        const sortProperties = inject<ISortProperties>("sortProperties")!;
        console.log(sortProperties.someProperties.installment);

        return {
            sortProperties,
        };
    },
});
</script>

<style lang="scss">
.formSortFlats {
    @include centerPopup();
}

.formSortFlats__form {
    @include popupContent();
}

.formSortFlats input[type="checkbox"] {
    display: none;
}

.formSortFlats__ranges {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;

    .formSortFlats__inputRange {
        margin: 5px 0;
    }
}

@mixin sortFlatsCheckbox() {
    line-height: 30px;
    margin-right: 10px;
    padding: 1px 10px;
    color: $cBackgroundMain;
    display: inline-block;
    margin-bottom: 10px;
    font-size: 13px;
    @include unselectable();
}

@mixin sortFlatsFieldset {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 2px solid $cHover;
    padding: 10px 0px 10px 10px;
    border-radius: 20px;
    margin-bottom: 20px;

    legend {
        margin: 0 auto;

        h3 {
            margin: 0 15px;
        }
    }
}

.formSortFlats__fieldsetStatus {
    @include sortFlatsFieldset();

    .formSortFlats__labelKeyIssued {
        background-color: $cFlatStatusKeyIssued;
        @include sortFlatsCheckbox();
    }

    .formSortFlats__labelReserve {
        background-color: $cFlatStatusReserve;
        @include sortFlatsCheckbox();
    }

    .formSortFlats__labelContract {
        background-color: $cFlatStatusContract;
        @include sortFlatsCheckbox();
    }

    .formSortFlats__labelRegistration {
        background-color: $cFlatSatusRegistration;
        @include sortFlatsCheckbox();
    }

    .formSortFlats__labelFree {
        background-color: $cFlatStatusFree;
        @include sortFlatsCheckbox();
    }

    .formSortFlats__checbox_disabled {
        @include btnDisabled();
    }
}

.formSortFlats__fieldsetSomeProperties {
    @include sortFlatsFieldset();

    .formSortFlats__labelSomeProperties {
        @include sortFlatsCheckbox();
        color: $cBackgroundMain;
        background-color: $cBackgroundBar;
    }

    .formSortFlats__checbox_disabled {
        @include btnDisabled();
    }
}

.formSortFlats__fieldsetHousesId {
    @include sortFlatsFieldset();
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        background-color: $cBackgroundBar;
        @include sortFlatsCheckbox();
    }

    .formSortFlats__checbox_disabled {
        @include btnDisabled();
    }
}
</style>
