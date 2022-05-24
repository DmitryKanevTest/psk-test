export interface IEstateData {
    entrances: IEntrance[];
    flats: IFlats;
    houses: string[];
}

export interface IEntrance {
    id: string;
    house_id: string;
    title: string;
    flats_max: number;
    floors: IFloor[];
}

export interface IFloor {
    floor: number;
    flats: IFlatID[];
}

export interface IFlatID {
    id: string;
    number: number;
}

export interface IFlatDescriptions {
    article: null;
    cost: number;
    floor: number;
    id: string;
    installment: boolean;
    marginal: boolean;
    number: string;
    plan_type: null;
    renovation: boolean;
    square: number;
    state: null;
    status: string;
    subsidy: boolean;
    type: string;
}

export interface IFlats {
    [key: string]: IFlatDescriptions;
}

export interface IEntranceLighting {
    flatNumber: number;
    floorNumber: number;
}

export type TStatusFlat = "Выданы ключи" | "Договор" | "Свободна" | "Бронь" | "Оформление";

export interface IStatusFlat {
    ["Выданы ключи"]: boolean;
    ["Договор"]: boolean;
    ["Свободна"]: boolean;
    ["Бронь"]: boolean;
    ["Оформление"]: boolean;
}

export interface ISortProperties {
    price: {
        min: number;
        max: number;
    };

    square: {
        min: number;
        max: number;
    };

    status: IStatusFlat;

    someProperties: {
        subsidy: boolean;
        marginal: boolean;
        renovation: boolean;
        installment: boolean;
    };

    house_id: {
        [key:string]: boolean
    }
}

export interface IRangeInput {
    max: number
    min: number
}

export interface IHouseModels {
    [key: string]: IEntrance[]
}