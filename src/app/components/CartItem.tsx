'use client';
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json';
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if(item == null) return null;

    return (
        <div className='flex items-start justify-start'>
            <img src={item.imageUrl} alt='selected item' className='w-[125px] h-[75px] object-cover float-left mr-2' />
            <div className='flex flex-col'>
                <div>
                    {item.name}
                    <div className='text-gray-700 text-[14px]'>{formatCurrency(item.price)}{quantity > 1 && <span className='text-gray-700 text-[14px]'> x {quantity}</span>}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-gray-700 font-bold text-[18px]'>{formatCurrency(item.price * quantity)}</div>
                    <button onClick={()=>removeFromCart(item.id)} className='px-[7px] py-[0px] ml-1 bg-red-700 text-white cursor-pointer rounded-full'>&times;</button>
                </div>
            </div>
        </div>
    )
}