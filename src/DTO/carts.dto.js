export default  class cartDTO {
    constructor (cart) {
        this.id = cart.id || cart._id || null;
        this.userId = cart.userId || "";
        this.products = cart.products || [];
        this.totalPrice = cart.totalPrice || 0;

    }

}