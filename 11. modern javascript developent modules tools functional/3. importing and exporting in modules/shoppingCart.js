console.log('Exporting module');

const shippingCost = 18;
const cart = [];

export const addToCart = function(product,quantity){
    cart.push({product, quantity});
    console.log(`${product} ${quantity}`);
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq};

// export default defaultData = 111;