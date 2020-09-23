import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';


 class CartItem 
 {
     @tracked count = 0;

    constructor(id,name,image,price,count)

    {
        this.id =id;
        this.name_id =name;
        this.image =image;
        this.price= price;
        this.count = count;



    }


 }

export default class CartService extends Service {
    @tracked cartList = [];
    
    add(item)
    {
        const existingItem = this.cartList.find(CartItem=>{return CartItem.id=item.id});

        if(existingItem)
        {
            existingItem.count+= 1;

        }
        else
        {
            this.cartList=[...this.cartList,new CartItem(
                item.id,
                item.name_id,
                item.image,
                item.price,
            )];
        }

    }

    remove(item)
    {
        const index = this.cartList.indexOf(item);
        const cartList =this.cartList;
        cartList.splice(index,1);
    this.cartList=cartList;
    }

}
