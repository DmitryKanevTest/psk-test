import { IEstateData, ISortProperties } from "@/types";
import { reactive } from "vue";

export default function useInitSortProperties(estateData: IEstateData) {
    const sortProperties = {} as ISortProperties;

    sortProperties.house_id = {};
    estateData.houses.forEach((item) => {
        sortProperties.house_id[item] = true;
    });

    sortProperties.price = {
        max: 10000000,
        min: 0,
    };

    sortProperties.square = {
        max: 150,
        min: 0,
    };

    sortProperties.status = {
        ["Выданы ключи"]: true,
        ["Договор"]: true,
        ["Свободна"]: true,
        ["Бронь"]: true,
        ["Оформление"]: true,
    };

    sortProperties.someProperties = {
        subsidy: false,
        marginal: false,
        renovation: false,
        installment: false,
    };

    return reactive(sortProperties)
}
