import { IEstateData } from "@/types";
import _flatsData from "@/_flatsData";

export default function useFetchEstateData(): IEstateData {
    console.log(_flatsData);
    return _flatsData as IEstateData;
}
