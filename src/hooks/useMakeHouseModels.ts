import { IEstateData, IHouseModels } from "@/types";

export default function useMakeHouseModels(estateData: IEstateData): IHouseModels {
    const houseModels = {} as IHouseModels;

    estateData.entrances.forEach((item) => {
        if(!houseModels[item.house_id]) {
            houseModels[item.house_id] = [];
        }

        houseModels[item.house_id].push(item)
    })

    return houseModels
}