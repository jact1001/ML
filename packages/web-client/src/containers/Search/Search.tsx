import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Search.scss';
import logo from '../../assets/Logo_ML.png';
import searchIcon from '../../assets/ic_Search.png';
import { findItems} from "../../redux/effects/items.effect";
import { useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom";

export const Search = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState<any | null>('');

    const getItems = () => {
        if (searchKey !== inputValue && inputValue !== '') {
            setSearchKey(inputValue);
            history.push(`/items?search=${inputValue}`);
            dispatch(findItems(inputValue));
        }
    }

    const onKeyDown = (e:any) => {
        if (e.keyCode === 13) {
            getItems();
        }
    }

    return (
        <div className="search">
            <Link to="/">
                <img src={logo} alt="logo" className="search__logo"/>
            </Link>
            <input type="search"
                   className="search__input"
                   id="inputSearch"
                   placeholder="Nunca dejes de buscar"
                   onKeyDown={onKeyDown}
                   onChange={(e) => setInputValue(e.target.value)}
                   value={inputValue}
            />
            <button className="search__button" onClick={getItems}>
                <img src={searchIcon} alt="logo" className="search__icon"/>
            </button>
        </div>
    )
}
