import {Controller, Get, PathParams, QueryParams} from "@tsed/common";
import {Guid} from "../commons/models/IItem";
import IItems from "../commons/models/IItem";
import {ItemService} from "../services/ItemService";

@Controller("/items")
export class ItemController {

    public constructor(private readonly _itemService: ItemService) {
    }

    @Get("/")
    async getItems(@QueryParams("q") key: string,): Promise<IItems> {
        return await this._itemService.searchItems(key);
    }

    @Get("/:itemId")
    async getItemDetail(@PathParams("itemId") itemId: Guid): Promise<any> {
        return await this._itemService.getItem(itemId);
    }

}


