import './ItemList.scss';
import {IItem} from "../../shared/models/IItemsList";
import {Item} from "../Item/Item";
import {useTypedSelector} from "../../hooks/useTypeSelector";
import {Error} from "../../shared/components/Error/Error";
import {Loader} from "../../shared/components/Loader/Loader";

export const ItemList = () =>{

    const { items, loading, error } = useTypedSelector((state:any) => state.items);
    return !loading ? items ? <div className="list">
        <ol className="list__list-container">
            {items?.items.map((item:IItem) => {
                return <li key={item.id}><Item item={item}></Item></li>
            })}
        </ol>
    </div> : error ? <Error/> : null : <Loader/>

}
