<template>
    <div class="popupInfoFlat" @click.self.stop="$emit('closePopup')" >
        <div class="popupInfoFlat__content">
            <ButtonClose @click.stop="$emit('closePopup')" />
            <h2>Справка</h2>
            <p><strong>article:</strong> {{flatInfo.article}}</p>
            <p><strong>cost: </strong>{{flatInfo.cost}}</p>
            <p><strong>floor: </strong>{{flatInfo.floor}}</p>
            <p><strong>id: </strong>{{flatInfo.id}}</p>
            <p><strong>installment: </strong>{{flatInfo.installment}}</p>
            <p><strong>marginal: </strong>{{flatInfo.marginal}}</p>
            <p><strong>number: </strong>{{flatInfo.number}}</p>
            <p><strong>plan_type: </strong>{{flatInfo.plan_type}}</p>
            <p><strong>renovation: </strong>{{flatInfo.renovation}}</p>
            <p><strong>square: </strong>{{flatInfo.square}}</p>
            <p><strong>state: </strong>{{flatInfo.state}}</p>
            <p><strong>status: </strong>{{flatInfo.status}}</p>
            <p><strong>subsidy: </strong>{{flatInfo.subsidy}}</p>
            <p><strong>type: </strong>{{flatInfo.type}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { IFlatDescriptions } from "@/types";
import ButtonClose from "./UI/button/ButtonClose.vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    emits: ['closePopup'],
    components: {
        ButtonClose,
    },

    props: {
        flatInfo: {
            type: Object as PropType<IFlatDescriptions>,
            required: true,
        },
    },

    methods: {
        show() {
            console.log('object');
        }
    }
});
</script>

<style lang="scss">
.popupInfoFlat {
    @include centerPopup();
}

.popupInfoFlat__content {
    @include popupContent();
}
</style>