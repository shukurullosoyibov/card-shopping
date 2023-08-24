import React from 'react'

function Cart(props) {
    const {quantity = 0, handleBasketShow =Function.prototype } = props;
  return (
    <div className='cart #1b5e20 green darken-3 white-text ' onClick={ () => handleBasketShow()} >
        <i className='material-icons'>add_shopping_cart</i>
        {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}

export default Cart
