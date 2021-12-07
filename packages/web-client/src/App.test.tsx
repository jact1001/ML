import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import * as selector from "./hooks/useTypeSelector";
const mockStore = configureStore();

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
jest.spyOn(selector, 'useTypedSelector');

test('renders learn react link', () => {
    jest.spyOn(selector, 'useTypedSelector').mockReturnValue({
        items: items,
        loading: false,
        error: null
    });
      render(
          <Provider store={mockStore()}>
            <App />
          </Provider>);
      const linkElement = screen.findAllByText('Nunca dejes de buscar');
        //expect(linkElement).toBeInTheDocument();
});
