import './ItemDetail.scss';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {findItem} from "../../redux/effects/details.effect";
import {Error} from "../../shared/components/Error/Error";
import {Loader} from "../../shared/components/Loader/Loader";

export const ItemDetail = () => {

    const params: any = useParams();
    const dispatch = useDispatch();
    const { detail, loading } = useTypedSelector((state:any) => state.detail);
    const item = detail ? detail.item : null;

    useEffect(()=>{
       dispatch(findItem(params.id));
    }, []);

    return !loading ? item ? <div className="item-detail">
                <div className="item-detail__item-container">
                    <div className="item-detail__product-detail">
                        <img src={item?.picture} alt="imagen del producto" className="item-detail__image"/>
                        <div className="item-detail__title-container">
                            <p className="item-detail__title-container__sold">{item?.condition.toLowerCase() === 'new' ? "Nuevo " : "Usado "} - {item?.sold_quantity} vendidos</p>
                            <h2 className="item-detail__title-container__title">{item?.title}</h2>
                            <span className="item-detail__title-container__price">$ {item?.price.amount.toLocaleString(navigator.language, { minimumFractionDigits: 2,currency: item?.price.currency, style:'decimal'})}</span>
                            <button className="item-detail__title-container__button">Comprar</button>
                        </div>
                    </div>
                    <div>
                        {item?.description !== '' ? (
                            <div className="item-detail__detail">
                                <h2 className="item-detail__title-description">Descripción del producto</h2>
                                <p className="item-detail__description">
                                    {item?.description}
                                </p>
                            </div>): <div className="item-detail__description-empty"></div>}
                    </div>
                </div>
            </div> : <Error/>: <Loader/>;
}
