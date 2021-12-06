import {Link} from "react-router-dom";
import './Item.scss';
import {IItem} from "../../shared/models/IItemsList";
import shippingLogo from '../../assets/ic_shipping.png';

export const Item = ({item}: {item: IItem}) =>{
    return (
        <div className="item" key={item.id}>
            <div className="item__image-container">
                <Link to={`/items/${item.id}`}>
                    <img className="item__image-container--image" src={item.picture} alt={item.title} width="160" height="160"/>
                </Link>
            </div>
            <div className="item__detail-container">
                <p  className="item__detail-container__title">
                    <strong>$ {item.price.amount.toLocaleString(navigator.language, { currency: item.price.currency, style:'decimal'})}</strong>
                    {item.free_shipping ? <img src={shippingLogo} alt="free shipping"/>:null}
                </p>
                <Link to={`/items/${item.id}`}  className="item__detail-container__link">
                    <h2 className="item__detail-container__description">
                        {item.title}
                    </h2>
                </Link>
            </div>
            <div className="item__address-container">
                <address className="item__item-address" >{item.address}</address>
            </div>
        </div>
    )
}
