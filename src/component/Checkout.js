import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'


function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Coupons/ART/Diwali-18/stripe_pc._CB483582784_.jpg' className='checkout__ad'/>

        {basket?.length === 0 ? (
          <div><h2>Your shopping basket is empty</h2></div>
        ):(
          <div>
            <h2 className='checkout__title'>Your Shopping basket</h2>

            {/* List all the Checkout Products*/}
            {basket?.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              ratings = {item.ratings}
              />
            ))}
          </div>
        )}
        </div>
        {basket.length  > 0 && (
          <div className='checkout__right'>
            <Subtotal/>
          </div>
        )}
    </div>
  )
}

export default Checkout