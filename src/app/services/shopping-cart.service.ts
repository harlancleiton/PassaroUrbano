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
        let cartItemModel: CartItemModel = this.cartItemFactory(offerModel)
        this.addItemToCart(cartItemModel)
    }

    private addItemToCart(cartItemModel: CartItemModel) {
        let cartItem = this.cartItemModel.find((item: CartItemModel) => item.id === cartItemModel.id)
        if (cartItem)
            cartItem.amount++
        else this.cartItemModel.push(cartItemModel)
    }

    private removeItemToCart(cartItemModel: CartItemModel) {
        let cartItem = this.cartItemModel.find((item: CartItemModel) => item.id === cartItemModel.id)
        if (cartItem) {
            cartItem.amount--
            if (cartItem.amount === 0) {
                this.cartItemModel.splice(this.cartItemModel.indexOf(cartItem), 1)
            }
        }
    }

    private calculateCartValue(): number {
        let total: number = 0
        this.cartItemModel.map((cartItem: CartItemModel) => total += cartItem.amount * cartItem.price)
        return total
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

    public arrayToClear(): void {
        this.cartItemModel = new Array()
    }

    public decreaseQuantity(cartItem: CartItemModel): void {
        this.removeItemToCart(cartItem)
        console.log('decreaseQuantity', cartItem)
    }

    public increaseQuantity(cartItem: CartItemModel): void {
        this.addItemToCart(cartItem)
        console.log('increaseQuantity', cartItem)
    }
    //endregion Methods
}