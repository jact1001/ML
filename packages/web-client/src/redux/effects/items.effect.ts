import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType as ItemsActionTypes, Action as ItemsAction } from '../actions/items.actions';

const baseUrl = "http://localhost:5000";

export const findItems = (key: string) => {
    return async (dispatch: Dispatch<ItemsAction>) => {
        dispatch({
            type: ItemsActionTypes.GET_POST_ITEMS_PENDING
        });
        try {
            const { data } = await axios.get(`${baseUrl}/rest/items?q=${key}`);
            dispatch({
                type: ItemsActionTypes.GET_POST_ITEMS_SUCCESS,
                payload: data
            });

        } catch(err: any) {
            dispatch({
                type: ItemsActionTypes.GET_POST_ITEMS_FAIL,
                payload: err.message
            });
        }
    }
}
