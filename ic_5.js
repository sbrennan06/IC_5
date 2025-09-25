// Esports Arena catalog (price per unit)
const products = [
  { id: 201, name: "Pro Mouse (wired)",   category: "gear",    price: 39.99 },
  { id: 202, name: "Team Jersey",         category: "apparel", price: 49.5  },
  { id: 203, name: "Energy Drink 6-pack", category: "snacks",  price: 12.0  },
  { id: 204, name: "Arena Day Pass",      category: "access",  price: 15.0  },
  { id: 205, name: "Switchable Keycaps",  category: "gear",    price: 19.0  }
];

// Example cart (product & quantity)
const cart = [
  { productId: 202, qty: 1 },
  { productId: 203, qty: 2 },
  { productId: 204, qty: 1 },
  { productId: 205, qty: 1 }
];

// Try: "regular", "student", "member", or "vip"
const customerType = "member";

//task 1: getCategoryDiscount(category)


function getCategoryDiscount(category) {
    switch (category) {
        case "gear": 
        return 0.1 //10%
        break;
        case "apparel": 
        return 0.15 // 15%
        break;
        case "snacks":
        return 0.08 // 8%
        break;
        case "access": 
        return 0.05 // 5%
        break;
        case "default": 
        return 0.00 // 0%
        break;
    }}


    console.log(getCategoryDiscount("gear"))

//task 2 - price after category discount

function priceAfterCategoryDiscount(product) {
    let rate = getCategoryDiscount(product.category);
    return product.price * (1-rate);

}

console.log(priceAfterCategoryDiscount(products[0]));

//step 3 - find products by ID


function findProductsbyId(id) {
    for (let p of products) {
        if (p.id === id) return p;
}  return null;

}
console.log(findProductsbyId(201));


//step 4 - line item total 

function lineItemTotal(cartItem) {
    const product = findProductById(cartItem.productId);
    if (!product || !Number.isFinite(cartItem.qty) || cartItem.qty <= 0) {
        return 0;
    }
}
