import React from "react";
import {Search} from "./Search";
import { Router } from 'react-router-dom';
import {mount} from 'enzyme';
import {createMemoryHistory} from "history";

describe('search test',()=>{
    const history = createMemoryHistory();
    const route = '/items/MLA829852590';
    history.push(route);
    const wrapper = mount(
        <Router history={history}>
            <Search/>
        </Router>
    );
    xtest('debe retornar lo que está escrito en la barra al hacer click',()=>{
        const search = wrapper.children().find('input').simulate('keypress', {key: 'Enter'})
        console.log(search);
    })

    xtest('retornar el texto al hacer click en el boton',async ()=>{
        const button = wrapper.find('button').at(0);
        console.log(button.html());
        const input = wrapper.find('input');
        input.simulate('keypress', {key: 'Enter'})
        console.log(input.html());
        console.log(input.text());
    })

})
