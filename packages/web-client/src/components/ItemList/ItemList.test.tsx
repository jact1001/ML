import {createMemoryHistory} from "history";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import {ItemList} from "./ItemList";
import React from "react";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import * as selector from "../../hooks/useTypeSelector";

const middlewares: any = [];
const mockStore = configureMockStore(middlewares);

const items = {
    "author": {
        "name": "Johnny",
        "lastname": "Chinchajoa"
    },
    "categories": [
        "Motos y Carros",
        "Motos"
    ],
    "items": [
        {
            "id": "MLA123654895",
            "title": "R3",
            "price": {
                "currency": "COP",
                "amount": 60000000
            },
            "picture": "",
            "condition": "new",
            "free_shipping": false,
            "address": "Cali"
        },
        {
            "id": "MLA123654896",
            "title": "R3",
            "price": {
                "currency": "COP",
                "amount": 60000000
            },
            "picture": "",
            "condition": "new",
            "free_shipping": false,
            "address": "Cali"
        },
        {
            "id": "MLA123654897",
            "title": "R3",
            "price": {
                "currency": "COP",
                "amount": 60000000
            },
            "picture": "",
            "condition": "new",
            "free_shipping": false,
            "address": "Cali"
        },
        {
            "id": "MLA123654898",
            "title": "R3",
            "price": {
                "currency": "COP",
                "amount": 60000000
            },
            "picture": "",
            "condition": "new",
            "free_shipping": false,
            "address": "Cali"
        }
    ]
};
let container: any = null;
const history = createMemoryHistory();
const route = '/items?search=R3';
history.push(route);

jest.spyOn(selector, 'useTypedSelector');

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.spyOn(selector, 'useTypedSelector').mockReturnValue({
        items: items,
        loading: false,
        error: null
    });
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renderiza la lista con los items encotrados', ()=>{
    act(()=>{
        render(<Provider store={mockStore()}><Router history={history}> <ItemList/> </Router></Provider>, container)
    })
    expect(container.getElementsByClassName('item').length).toEqual(4);
})

it('Dirige al componente detail al hacer click sobre la imagen de un producto', ()=>{
    act(()=>{
        render(<Provider store={mockStore()}><Router history={history}> <ItemList/> </Router></Provider>, container)
    });
    const productImage = container.querySelector('a');
    expect(productImage.href).toBe('http://localhost/items/MLA123654895');
})
