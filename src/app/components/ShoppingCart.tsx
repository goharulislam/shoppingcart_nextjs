'use client';
import {useEffect, useState} from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem';
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from '../data/items.json';

type ShoppingCartProps = {
   isOpen: boolean
}

export function ShoppingCart(props: ShoppingCartProps){
   const {closeCart, cartItems} = useShoppingCart();
   const [isOpen, setIsOpen] = useState(false);

useEffect(()=>{
   props.isOpen === true ? setIsOpen(true) : setIsOpen(false);
}, [props])

return(
    <div>
{/*<div className='text-center'>
   <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='button' data-drawer-target='drawer-right-example' data-drawer-show='drawer-right-example' data-drawer-placement='right' aria-controls='drawer-right-example'>Show right drawer</button>
</div>*/}

<div id='drawer-right-example' className={isOpen ? 'right-[320px]' : 'right-0' +`${' w-[320px] float-right fixed top-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800'}`} tabIndex={-1} aria-labelledby='drawer-right-label'>
    <h5 id='drawer-right-label' className='inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400'><svg className='w-4 h-4 mr-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
    <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z'/>
  </svg>Selected items - {props.isOpen}</h5>
   <button onClick={()=>setIsOpen(false)} type='button' data-drawer-hide='drawer-right-example' aria-controls='drawer-right-example' className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white' >
      <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'/></svg>
      <span className='sr-only'>Close menu</span>
   </button>
   <div className='grid grid-cols-1 gap-3'>
      {cartItems.map(item => (
         <CartItem key={item.id} {...item} />
      ))}
      <div className='me-0'>
         Total{' '}{formatCurrency(cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id);
            return(total + (item?.price || 0) * cartItem.quantity)
         }, 0))}
      </div>
   </div>
</div>
</div>)
}