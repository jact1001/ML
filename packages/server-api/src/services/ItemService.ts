import {Injectable, OnDestroy, Scope} from "@tsed/common";
import IItems, {Guid, IItemResult} from "../commons/models/IItem";
import axios from "axios";
import * as https from "https"

const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});

@Injectable()
@Scope('request')
export class ItemService implements OnDestroy {

    constructor() {}

    public async searchItems(keyWord: string): Promise<IItems> {
        try {
            const {data} = await instance.get(`https://api.mercadolibre.com/sites/MLA/search?q=${keyWord}`);
            let result: IItems ={
                author: {
                    name: 'Johnny',
                    lastname: 'Chinchajoa'
                },
                categories: [],
                items: []
            };
            if(data.results.length > 0) {
                result = {
                    author: {
                        name: 'Johnny',
                        lastname: 'Chinchajoa'
                    },
                    categories: data.filters.length > 0 ? data.filters[0].values[0].path_from_root.map((category: any) => {
                        return category.name
                    }) : [],
                    items: this.buildItems(data.results)
                }
            }
            return result;
        } catch (err) {
            throw err.message;
        }
    }

    public async getItem(itemId: Guid): Promise<any>{
        let data = null;
        let description = null;
        const result: IItemResult = {
            author: {
                name: 'Johnny',
                lastname: 'Chinchajoa'
            },
            item: null,
        }
        try {
            data = await instance.get(`https://api.mercadolibre.com//items/${itemId}`).then(response => response.data);
            description = await instance.get(`https://api.mercadolibre.com//items/${itemId}/description`).then(response => response.data);
            result.item = this.buildItem(data, description.plain_text);
            return result;
        } catch (err) {
            if (err.config.url.indexOf("description")>0){
                result.item = this.buildItem(data, "");
                return result;
            }
            throw err.message;
        }
    }

    private buildItems(products: any) {
        const items = [];
        if (products.length !== undefined) {
            for (let i = 0; i < 4; i++) {
                items.push({
                    "id": products[i].id,
                    "title": products[i].title,
                    "price": {
                        "currency": products[i].currency_id,
                        "amount": products[i].price,
                    },
                    "picture": `https://http2.mlstatic.com/D_Q_NP_${products[i].thumbnail_id}-Q.webp`,
                    "condition": products[i].condition,
                    "free_shipping": products[i].shipping.free_shipping,
                    "address": products[i].address.state_name
                })
            }
        }
        return items;
    }

    private buildItem(item: any, description = '') {
        return {
            "id": item.id,
            "title": item.title,
            "price": {
                "currency": item.currency_id,
                "amount": item.price,
            },
            "picture": item.pictures[0].url,
            "condition": item.condition,
            "free_shipping": item.shipping.free_shipping,
            "sold_quantity": item.sold_quantity,
            "description": description,
            "address": item.seller_address.state.name
        };
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}

