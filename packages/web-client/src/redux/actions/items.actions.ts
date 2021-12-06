import {IItemList} from "../../shared/models/IItemsList";

export enum ActionType {
    GET_POST_ITEMS_PENDING = 'GET_POST_ITEMS_PENDING',
    GET_POST_ITEMS_SUCCESS = 'GET_POST_ITEMS_SUCCESS',
    GET_POST_ITEMS_FAIL = 'GET_POST_ITEMS_FAIL'
}

interface actionPending {
    type: ActionType.GET_POST_ITEMS_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_POST_ITEMS_SUCCESS;
    payload: IItemList;
}

interface actionFail {
    type: ActionType.GET_POST_ITEMS_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
