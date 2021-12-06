import {createMemoryHistory} from "history";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import {ItemList} from "./ItemList";
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

it('renderiza la lista con los items que se le pasen', ()=>{
    let items = {
        "author": {
            "name": "Johnny",
            "lastname": "Chinchajoa"
        },
        "categories": [
            "Alimentos y Bebidas",
            "Frescos"
        ],
        "items": [
            {
                "id": "MLA717365574",
                "title": "Filet De Pechuga Fresco",
                "price": {
                    "currency": "ARS",
                    "amount": 370
                },
                "picture": "https://http2.mlstatic.com/D_Q_NP_905032-MLA26878830355_022018-Q.webp",
                "condition": "new",
                "free_shipping": false,
                "address": "Buenos Aires"
            },
            {
                "id": "MLA829852590",
                "title": "Pollos De Campo Pastoriles ",
                "price": {
                    "currency": "ARS",
                    "amount": 250
                },
                "picture": "https://http2.mlstatic.com/D_Q_NP_778746-MLA40100390528_122019-Q.webp",
                "condition": "new",
                "free_shipping": false,
                "address": "Capital Federal"
            },
            {
                "id": "MLA850907969",
                "title": "Nuggets De Pollo Granja Tres Arroyos X 2,5kgs",
                "price": {
                    "currency": "ARS",
                    "amount": 1080
                },
                "picture": "https://http2.mlstatic.com/D_Q_NP_717809-MLA41512744634_042020-Q.webp",
                "condition": "new",
                "free_shipping": false,
                "address": "Capital Federal"
            },
            {
                "id": "MLA900355631",
                "title": "Pollos De Campo Agroecológicos Criado A Maiz",
                "price": {
                    "currency": "ARS",
                    "amount": 290
                },
                "picture": "https://http2.mlstatic.com/D_Q_NP_775836-MLA44329637361_122020-Q.webp",
                "condition": "new",
                "free_shipping": false,
                "address": "Buenos Aires"
            }
        ]
    };
    const getItems = async (searchKeyword: string): Promise<void> => {
        items = {
            "author": {
                "name": "Johnny",
                "lastname": "Chinchajoa"
            },
            "categories": [
                "Alimentos y Bebidas",
                "Frescos"
            ],
            "items": [
                {
                    "id": "MLA717365574",
                    "title": "Filet De Pechuga Fresco",
                    "price": {
                        "currency": "ARS",
                        "amount": 370
                    },
                    "picture": "https://http2.mlstatic.com/D_Q_NP_905032-MLA26878830355_022018-Q.webp",
                    "condition": "new",
                    "free_shipping": false,
                    "address": "Buenos Aires"
                },
                {
                    "id": "MLA829852590",
                    "title": "Pollos De Campo Pastoriles ",
                    "price": {
                        "currency": "ARS",
                        "amount": 250
                    },
                    "picture": "https://http2.mlstatic.com/D_Q_NP_778746-MLA40100390528_122019-Q.webp",
                    "condition": "new",
                    "free_shipping": false,
                    "address": "Capital Federal"
                },
                {
                    "id": "MLA850907969",
                    "title": "Nuggets De Pollo Granja Tres Arroyos X 2,5kgs",
                    "price": {
                        "currency": "ARS",
                        "amount": 1080
                    },
                    "picture": "https://http2.mlstatic.com/D_Q_NP_717809-MLA41512744634_042020-Q.webp",
                    "condition": "new",
                    "free_shipping": false,
                    "address": "Capital Federal"
                },
                {
                    "id": "MLA900355631",
                    "title": "Pollos De Campo Agroecológicos Criado A Maiz",
                    "price": {
                        "currency": "ARS",
                        "amount": 290
                    },
                    "picture": "https://http2.mlstatic.com/D_Q_NP_775836-MLA44329637361_122020-Q.webp",
                    "condition": "new",
                    "free_shipping": false,
                    "address": "Buenos Aires"
                }
            ]
        };
    }
    act(()=>{
        render(<Router history={history}> <ItemList itemList={items} searchKey={getItems}/> </Router>, container)
    })
    expect(container.getElementsByClassName('list__list-item').length).toEqual(4);
})


it('Dirige al componente detail al hacer click sobre la imagen de un producto', ()=>{
    let items = {
        "author": {
            "name": "Johnny",
            "lastname": "Chinchajoa"
        },
        "categories": [
            "Alimentos y Bebidas",
            "Frescos"
        ],
        "items": [
            {
                "id": "MLA717365574",
                "title": "Filet De Pechuga Fresco",
                "price": {
                    "currency": "ARS",
                    "amount": 370
                },
                "picture": "https://http2.mlstatic.com/D_Q_NP_905032-MLA26878830355_022018-Q.webp",
                "condition": "new",
                "free_shipping": false,
                "address": "Buenos Aires"
            },
            {
                "id": "MLA829852590",
                "title": "Pollos De Campo Pastoriles ",
                "price": {
                    "currency": "ARS",
                    "amount": 250
                },
                "picture": "https://http2.mlstatic.com/D_Q_NP_778746-MLA40100390528_122019-Q.webp",
                "condition": "new",
                "free_shipping": false,
                "address": "Capital Federal"
            },
            {
                "id": "MLA850907969",
                "title": "Nuggets De Pollo Granja Tres Arroyos X 2,5kgs",
                "price": {
                    "currency": "ARS",
                    "amount": 1080
                },
                "picture": "https://http2.mlstatic.com/D_Q_NP_717809-MLA41512744634_042020-Q.webp",
                "condition": "new",
                "free_shipping": false,
                "address": "Capital Federal"
            },
            {
                "id": "MLA900355631",
                "title": "Pollos De Campo Agroecológicos Criado A Maiz",
                "price": {
                    "currency": "ARS",
                    "amount": 290
                },
                "picture": "https://http2.mlstatic.com/D_Q_NP_775836-MLA44329637361_122020-Q.webp",
                "condition": "new",
                "free_shipping": false,
                "address": "Buenos Aires"
            }
        ]
    };
    const getItems = async (searchKeyword: string): Promise<void> => {
        items = {
            "author": {
                "name": "Johnny",
                "lastname": "Chinchajoa"
            },
            "categories": [
                "Alimentos y Bebidas",
                "Frescos"
            ],
            "items": [
                {
                    "id": "MLA717365574",
                    "title": "Filet De Pechuga Fresco",
                    "price": {
                        "currency": "ARS",
                        "amount": 370
                    },
                    "picture": "https://http2.mlstatic.com/D_Q_NP_905032-MLA26878830355_022018-Q.webp",
                    "condition": "new",
                    "free_shipping": false,
                    "address": "Buenos Aires"
                },
                {
                    "id": "MLA829852590",
                    "title": "Pollos De Campo Pastoriles ",
                    "price": {
                        "currency": "ARS",
                        "amount": 250
                    },
                    "picture": "https://http2.mlstatic.com/D_Q_NP_778746-MLA40100390528_122019-Q.webp",
                    "condition": "new",
                    "free_shipping": false,
                    "address": "Capital Federal"
                },
                {
                    "id": "MLA850907969",
                    "title": "Nuggets De Pollo Granja Tres Arroyos X 2,5kgs",
                    "price": {
                        "currency": "ARS",
                        "amount": 1080
                    },
                    "picture": "https://http2.mlstatic.com/D_Q_NP_717809-MLA41512744634_042020-Q.webp",
                    "condition": "new",
                    "free_shipping": false,
                    "address": "Capital Federal"
                },
                {
                    "id": "MLA900355631",
                    "title": "Pollos De Campo Agroecológicos Criado A Maiz",
                    "price": {
                        "currency": "ARS",
                        "amount": 290
                    },
                    "picture": "https://http2.mlstatic.com/D_Q_NP_775836-MLA44329637361_122020-Q.webp",
                    "condition": "new",
                    "free_shipping": false,
                    "address": "Buenos Aires"
                }
            ]
        };
    }
    act(()=>{
        render(<Router history={history}> <ItemList itemList={items} searchKey={getItems}/> </Router>, container)
    });
    const productImage = container.querySelector('a');
    expect(productImage.href).toBe('http://localhost/items/MLA717365574');
})
