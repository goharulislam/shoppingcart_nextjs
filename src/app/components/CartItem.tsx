import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json';
import Button from "../micro/btnCart";
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
        <div className='gap-3 flex items-center'>
            <img src={item.imageUrl} alt='selected item' className='w-[125px] h-[75px] object-cover' />
            <div className='m-auto'>
                <div>
                    {item.name}{quantity && <span className='text-gray-700 text-[10px]'>x{quantity}</span>}
                </div>
                <div className='text-gray-700 text-[10px]'>{formatCurrency(item.price)}</div>
                <div className='text-gray-700 text-[10px]'>{formatCurrency(item.price * quantity)}</div>
                <Button onClick={()=>removeFromCart(item.id)}>&times;</Button>
                <div className='me-0'>
                    Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const item =storeItems.find(i => i.id === cartItem.id);
                    return(total + (item?.price || 0) * cartItem.quantity)
                }, 0))}</div>
            </div>
        </div>
    )
}