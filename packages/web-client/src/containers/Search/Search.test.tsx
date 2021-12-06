import React from "react";
import {Search} from "./Search";
import { Router } from 'react-router-dom';
import {mount} from 'enzyme';
import {createMemoryHistory} from "history";

describe('search test',()=>{
    const history = createMemoryHistory();
    const route = '/items/MLA123654895';
    history.push(route);
    const wrapper = mount(
        <Router history={history}>
            <Search/>
        </Router>
    );
    xtest('retorna el texto del input',()=>{
        const search = wrapper.children().find('input').simulate('keypress', {key: 'Enter'})
        console.log(search);
    })

    xtest('retorna el texto del input al hacer click en el botón',async ()=>{
        const button = wrapper.find('button').at(0);
        console.log(button.html());
        const input = wrapper.find('input');
        input.simulate('keypress', {key: 'Enter'})
        console.log(input.html());
        console.log(input.text());
    })

})
