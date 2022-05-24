import { IFlats, IFlatID, ISortProperties, TStatusFlat } from "@/types";

export default class FlatValidator {
    private dataFlats: IFlats;

    constructor(dataFlats: IFlats) {
        this.dataFlats = dataFlats;
    }

    public price(flatCost: number, minCost: number, maxCost: number) {
        return flatCost >= minCost && flatCost <= maxCost;
    }

    public square(flatSquare: number, minSquare: number, maxSquare: number) {
        return flatSquare >= minSquare && flatSquare <= maxSquare;
    }

    public status(flatStatus: TStatusFlat, sortProperties: ISortProperties) {
        if (sortProperties.status[flatStatus]) {
            return true;
        }

        return false;
    }


    public someProperties(flat: IFlatID, sortProperties: ISortProperties) {
        if(sortProperties.someProperties.installment && !this.dataFlats[flat.id].installment) {
            return false
        }
        if(sortProperties.someProperties.marginal && !this.dataFlats[flat.id].marginal) {
            return false
        }
        if(sortProperties.someProperties.renovation && !this.dataFlats[flat.id].renovation) {
            return false
        }
        if(sortProperties.someProperties.subsidy && !this.dataFlats[flat.id].subsidy) {
            return false
        }

        return true
    }

    public all(flat: IFlatID, sortPropirties: ISortProperties) {
        if (
            this.price(
                this.dataFlats[flat.id].cost,
                sortPropirties.price.min,
                sortPropirties.price.max
            ) &&
            this.square(
                this.dataFlats[flat.id].square,
                sortPropirties.square.min,
                sortPropirties.square.max
            ) &&
            this.status(this.dataFlats[flat.id].status as TStatusFlat, sortPropirties) &&
            this.someProperties(flat, sortPropirties)
        ) {
            return true;
        }

        return false;
    }
}
