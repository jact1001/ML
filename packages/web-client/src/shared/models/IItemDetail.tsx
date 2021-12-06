import {IAuthor, IPrice} from "./IItemsList";

export interface IItemDetail{
    id: string;
    title: string;
    price: IPrice;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
    address: string;
}
export interface IItem {
    author: IAuthor;
    item: IItemDetail;
}
