import {StoreItem} from '../../components/StoreItem';
import storeItems from '../../data/items.json';

export default function Page(){
    return(
        <div>
        <h3>Store</h3>
        <div className="grid grid-cols-12 gap-4">
            {storeItems.map(item => (
                <div key={item.id} className="col-span-12 sm:col-span-2 md:col-span-3">
                    <StoreItem {...item} />
                </div>
            ))}
        </div>
        </div>
    );
}