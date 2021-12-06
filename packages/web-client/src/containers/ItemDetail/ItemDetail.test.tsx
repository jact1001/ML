import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {ItemDetail} from "./ItemDetail";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

let container: any = null;
const history = createMemoryHistory();
const route = '/items/MLA829852590';
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

it('renderiza correctamente el objeto', () => {
    act(() => {
        let item = {
            "author": {
                "name": "Johnny",
                "lastname": "Chinchajoa"
            },
            "items": [
                {
                    "id": "MLA829852590",
                    "title": "Pollos De Campo Pastoriles",
                    "price": {
                        "currency": "ARS",
                        "amount": 250
                    },
                    "picture": "http://http2.mlstatic.com/D_778746-MLA40100390528_122019-O.jpg",
                    "condition": "new",
                    "free_shipping": false,
                    "sold_quantity": 250,
                    "description": "verdaderos pollos de campo pastoriles excelente textura sabor sin agregados químicos ni agua, no se achican al cocinarlos\n \nexcelentes calificaciones\n\npruebe los no se va a arrepentir\n\nenvió mínimos 4 unidades sin cargo solo en CABA",
                    "address": "Capital Federal"
                }
            ]
        };
        const getItemById = async (id: string): Promise<void> => {
            item = {
                "author": {
                    "name": "Johnny",
                    "lastname": "Chinchajoa"
                },
                "items": [
                    {
                        "id": "MLA829852590",
                        "title": "Pollos De Campo Pastoriles ",
                        "price": {
                            "currency": "ARS",
                            "amount": 250
                        },
                        "picture": "http://http2.mlstatic.com/D_778746-MLA40100390528_122019-O.jpg",
                        "condition": "new",
                        "free_shipping": false,
                        "sold_quantity": 250,
                        "description": "verdaderos pollos de campo pastoriles excelente textura sabor sin agregados químicos ni agua, no se achican al cocinarlos\n \nexcelentes calificaciones\n\npruebe los no se va a arrepentir\n\nenvió mínimos 4 unidades sin cargo solo en CABA",
                        "address": "Capital Federal"
                    }
                ]
            };
        }
        render(<Router history={history}>
                <ItemDetail/>
            </Router>, container
        );
    });
    expect(container.getElementsByClassName("item-detail__title").item(0).textContent).toBe("Pollos De Campo Pastoriles");
    expect(container.getElementsByClassName("item-detail__price").item(0).textContent).toBe("$ 250.00");


    act(() => {
        let item = {
            "author": {
                "name": "Johnny",
                "lastname": "Chinchajoa"
            },
            "items": [
                {
                    "id": "MLA829852590",
                    "title": "Pollos De Campo Pastoriles",
                    "price": {
                        "currency": "ARS",
                        "amount": 250
                    },
                    "picture": "http://http2.mlstatic.com/D_778746-MLA40100390528_122019-O.jpg",
                    "condition": "new",
                    "free_shipping": false,
                    "sold_quantity": 250,
                    "description": "",
                    "address": "Capital Federal"
                }
            ]
        };
        const getItemById = async (id: string): Promise<void> => {
            item = {
                "author": {
                    "name": "Johnny",
                    "lastname": "Chinchajoa"
                },
                "items": [
                    {
                        "id": "MLA829852590",
                        "title": "Pollos De Campo Pastoriles ",
                        "price": {
                            "currency": "ARS",
                            "amount": 250
                        },
                        "picture": "http://http2.mlstatic.com/D_778746-MLA40100390528_122019-O.jpg",
                        "condition": "new",
                        "free_shipping": false,
                        "sold_quantity": 250,
                        "description": "",
                        "address": "Capital Federal"
                    }
                ]
            };
        }
        render(<Router history={history}>
                <ItemDetail/>
            </Router>, container
        );
    });
    expect(container.getElementsByClassName("item-detail__title").item(0).textContent).toBe("Pollos De Campo Pastoriles");
    expect(container.getElementsByClassName("item-detail__price").item(0).textContent).toBe("$ 250.00");
    expect(container.getElementsByClassName("item-detail__description").item(0)).toBeNull();
})
