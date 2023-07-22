'use client';
import {formatCurrency} from '../utilities/formatCurrency';
import Button from '../micro/btnButton';
import { useShoppingCart } from '../context/ShoppingCartContext';

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imageUrl: string
}

export function StoreItem({id, name, price, imageUrl}: StoreItemProps){
const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
const quantity = getItemQuantity(id);

  return(
  <div className='h-full'>
    <img src={imageUrl} className='object-cover h-[200px] w-full aspect-auto'/>
    <div className='flex flex-col'>
      <div className="flex justify-between items-baseline mb-4">
        <span className="text-xl">{name}</span>
        <span className="ml-2 text-gray-500">{formatCurrency(price)}</span>
      </div>
      <div className='mt-auto'>
        {quantity === 0 ? (<Button onClick={()=>increaseCartQuantity(id)}>+ Add to cart</Button>)
        :
        (
          <div className='flex items-center flex-col gap-2'>
            <div className='flex items-center justify-center gap-2'>
              <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
              <div><span>{quantity}</span> in cart</div>
              <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
            </div>
            <Button onClick={()=>removeFromCart(id)}>Remove</Button>
          </div>
        )}
      </div>
    </div>
  </div>);
}