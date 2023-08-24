import React from 'react'

function BaskItem(props) {
    const   {id, name, price, quantity, decrementQuantity, incrementQuantity} = props;

  return (
    <li className="collection-item">
        {name} x{quantity} = {quantity * price}
        <span className="secondary-content">
             <a className="waves-effect waves-light btn btnq" onClick={()=> incrementQuantity(id)}> ADD<i class="material-icons">exposure_plus_1</i></a>
             <a className="waves-effect waves-light btn btnq" onClick={() => decrementQuantity(id)}> Remove<i class="material-icons">exposure_neg_1</i></a>
            <i className="material-icons basket-delete" 
            onClick={() => props.removeFromBasket(id)}>delete_forever</i>
        </span>
    </li>
      
    
  )
}

export default BaskItem
