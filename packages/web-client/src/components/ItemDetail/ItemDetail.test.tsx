import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {ItemDetail} from "./ItemDetail";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

let container: any = null;
const history = createMemoryHistory();
const route = '/items/MLA123654895';
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

it('renderiza correctamente el detalle', () => {
    act(() => {
        let item = {
            "author": {
                "name": "Johnny",
                "lastname": "Chinchajoa"
            },
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
                    "sold_quantity": 250,
                    "description": "exelente condición",
                    "address": "Cali"
                }
            ]
        };

        render(<Router history={history}>
                <ItemDetail/>
            </Router>, container
        );
    });
    expect(container.getElementsByClassName("item-detail__title-container__title").item(0).textContent).toBe("R3");
    expect(container.getElementsByClassName("item-detail__title-container__price").item(0).textContent).toBe("$ 60.000.000.00");


    act(() => {

        let item = {
            "author": {
                "name": "Johnny",
                "lastname": "Chinchajoa"
            },
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
                    "sold_quantity": 250,
                    "address": "Cali"
                }
            ]
        };
        render(<Router history={history}>
                <ItemDetail/>
            </Router>, container
        );
    });
    expect(container.getElementsByClassName("item-detail__title-container__title").item(0).textContent).toBe("R3");
    expect(container.getElementsByClassName("item-detail__title-container__price").item(0).textContent).toBe("$ 60.000.000.00");
    expect(container.getElementsByClassName("item-detail__description").item(0)).toBeNull();
})
