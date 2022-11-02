import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
    const [{basket,user},dispatch] = useStateValue()

    function checkoutHandler(){
        if(!user){
            return alert('Please login to continue')
        }

        alert('Checkout Page and Admin Portal are in construction . . .')
    }

  return (
    <div className='subtotal'>
        {/* Price */}
        <CurrencyFormat
        renderText={(value) => (
            <>
                <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift" >
                    <input type="checkbox" /> 
                    This order contains gifts
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator = {true}
        prefix={"$"}
        />
        <button onClick={checkoutHandler}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal