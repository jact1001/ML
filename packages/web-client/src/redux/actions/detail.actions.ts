import {IItem} from "../../shared/models/IItemDetail";

export enum ActionType {
    GET_POST_DETAIL_PENDING = 'GET_POST_DETAIL_PENDING',
    GET_POST_DETAIL_SUCCESS = 'GET_POST_DETAIL_SUCCESS',
    GET_POST_DETAIL_FAIL = 'GET_POST_DETAIL_FAIL'
}

interface actionPending {
    type: ActionType.GET_POST_DETAIL_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_POST_DETAIL_SUCCESS;
    payload: IItem;
}

interface actionFail {
    type: ActionType.GET_POST_DETAIL_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
