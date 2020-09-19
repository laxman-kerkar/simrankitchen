
import Route from '@ember/routing/route';
import items from '../controllers/card';

export default class CartRoute extends Route{
model(){
   return items;
}
}


