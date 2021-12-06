import {createMemoryHistory} from "history";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import {Item} from "./Item";
import React from "react";
import {Router} from "react-router-dom";

let container: any = null;
const history = createMemoryHistory();
const route = '/items?search=pollo';
history.push(route);

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renderiza un item', ()=>{
    let item = {
        "id": "MLA23335332",
        "title": "R3",
        "price": {
            "currency": "COP",
            "amount": 60000000
        },
        "picture": "",
        "condition": "new",
        "free_shipping": false,
        "address": "Cali"
    };
    act(()=>{
        render(<Router history={history}> <Item item={item} /> </Router>, container)
    })
    expect(container.getElementsByClassName('item__detail-container__description').item(0).textContent).toEqual('R3');
})


it('Dirige al componente detail al hacer click sobre la imagen de un producto', ()=>{
    let item = {
        "id": "MLA23335332",
        "title": "R3",
        "price": {
            "currency": "COP",
            "amount": 60000000
        },
        "picture": "",
        "condition": "new",
        "free_shipping": false,
        "address": "Cali"
    };
    act(()=>{
        render(<Router history={history}> <Item item={item}/> </Router>, container)
    });
    const productImage = container.querySelector('a');
    expect(productImage.href).toBe('http://localhost/items/MLA23335332');
})
