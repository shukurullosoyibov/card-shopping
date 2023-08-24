import React from 'react'
import BaskItem from './BaskItem'
function BasketList(props) {
    const {order} = props;
    const totalPrice = order.reduce( (sum, el) => 
    {
        return sum+= el.price* el.quantity;
    } , 0)
  return (
    <div className='bsk'>
        <ul className='collection basket-list '>
                <li className="collection-item active">
                    Basket
                </li>
                {order.length ? order.map(item => {
                        return (
                        <BaskItem key={item.id} {...item} removeFromBasket={props.removeFromBasket} 
                        decrementBasket={props.decrementBasket}
                        incrementBasket={props.incrementBasket}
                        />
                        )
                    }
                    ) : <li className="collection-item">Ro'yxat bosh</li>
                }
                <li className="collection-item active">
                    Total cost: {totalPrice} <b>$</b>
                </li>
                <i className="material-icons basket-close" onClick={props.handleBasketShow}>close</i>
            </ul>
    </div>
   
  )
}

export default BasketList
