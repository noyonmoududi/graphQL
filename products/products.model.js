const products = [
    {id:'redshoe',description:'Red Shoe',price:42.12,reviews:[]},
    {id:'bluejean',description:'Blue Jeans',price:52.12,reviews:[]}
];

function getAllProducts() {
    return products;
}
function getProductsByPrice(min, max) {
   return products.filter((product) => {
        return product.price >= min && product.price <= max;
   })
}

function getProductDetailsById(id) {
    return products.find((product) => {
         return product.id ===id;
    })
 }

 function addNewProduct(id,description,price) {
    const newProduct={
        id,price,description,reviews:[]
    };
    products.push(newProduct);
    return newProduct;
 }
 function addNewProductReview(id,rating,comment) {
   const matchProduct = getProductDetailsById(id);
   if (matchProduct) {
    const newProductReview = {
        rating,
        comment
    };
    matchProduct.reviews.push(newProductReview);
    return newProductReview;
   }
 }

module.exports ={
    getAllProducts,
    getProductsByPrice,
    getProductDetailsById,
    addNewProduct,
    addNewProductReview
}