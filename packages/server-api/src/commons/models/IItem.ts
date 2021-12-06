interface IAuthor{
    name: string;
    lastname: string;
}

interface IPrice {
    currency: string;
    amount: number;
    decimals?: number;
}

interface IItem {
    id: string;
    title: string;
    price: IPrice;
    picture: string;
    condition: string;
    free_shipping: boolean
    sold_quantity?: number;
    description?: string;
    address: string;
}

export interface IItemResult {
    author: IAuthor;
    item: IItem | null;
}

export default interface IItems {
    author: IAuthor;
    categories?: string[];
    items: IItem[];
}

export interface Guid extends String {
    toString(): string;
}
