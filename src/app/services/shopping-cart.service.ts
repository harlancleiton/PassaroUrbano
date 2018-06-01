//region Imports
import { CartItemModel } from '../shared/cart-item.model'
import { OfferModel } from '../shared/offer.model';
//endregion Imports

export class ShoppingCartService {

    //region Variables
    public cartItemModel: Array<CartItemModel> = new Array()
    //endregion Variables

    //region Methods
    public addToCart(offerModel: OfferModel): void {
        this.cartItemModel.push(this.cartItemFactory(offerModel))
    }

    private cartItemFactory(offerModel: OfferModel): CartItemModel {
        let cartItemModel: CartItemModel = new CartItemModel(
            offerModel.id,
            offerModel.title,
            offerModel.description,
            offerModel.value,
            1,
            offerModel.images[0]
        )
        return cartItemModel;
    }
    //endregion Methods
}