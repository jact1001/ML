import { createMemoryHistory } from 'history';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {ItemDetail} from "./ItemDetail";
import React from "react";
import { Router } from 'react-router-dom';
import {Provider} from "react-redux";
import * as selector from "../../hooks/useTypeSelector";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let item = {
    "author": {
        "name": "Johnny",
        "lastname": "Chinchajoa"
    },
    "item": {
        "id": "MLA123654895",
        "title": "R3",
        "price": {
            "currency": "COP",
            "amount": 60000000
        },
        "picture": "",
        "condition": "new",
        "free_shipping": false,
        "sold_quantity": 250,
        "description": "exelente condición",
        "address": "Cali"
    }

};
let container: any = null;
const history = createMemoryHistory();
const route = '/items/MLA123654895';
history.push(route);


jest.spyOn(selector, 'useTypedSelector');

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.mock('react-redux', () => ({
        ...jest.requireActual('react-redux'),
        useDispatch: () => jest.fn(() => Promise.resolve([{ id: 1, username: 'foo' }])),
    }));
    jest.spyOn(selector, 'useTypedSelector').mockReturnValue({
        detail: item,
        loading: false,
        error: null
    });
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renderiza correctamente el detalle', () => {
    act(() => {
        render(
            <Provider store={mockStore()}>
                <Router history={history}>
                    <ItemDetail/>
                </Router>
            </Provider>, container
        );
    });
    expect(container.getElementsByClassName("item-detail__title-container__title").item(0).textContent).toBe("R3");
})
