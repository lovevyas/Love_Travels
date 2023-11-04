import React from 'react'
import CartItem from './CartItem'
import './Cards.css'
// import Services from './pages/Services';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destination</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CartItem  
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path= '/Services'
                        />
                        <CartItem  
                            src='images/img-2.jpg'
                            text='Travel through the Islands of bali in a Private Cruise'
                            label='Luxury'
                            path='/Sevices'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CartItem  
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean Visited UnCarted Waters'
                            label='Mystery'
                            path='/Sevices'
                        />
                        <CartItem  
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himalion Mountains'
                            label='Adventure'
                            path='/Sevices'
                        />
                        <CartItem  
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adventure'
                            path='/Sevices'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
