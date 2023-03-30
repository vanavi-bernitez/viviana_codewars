/* There's an array of objects representing products in a store,
 Each object contains the product name and its price. 
 There's an array of product names that a customer is interested in. 
 Write a function that takes these two arrays as arguments and returns an
 array of objects representing only the products that the customer is interested in,
 along with their corresponding prices.
*/ 

const storeProducts = [
    { name: 'Apples', price: 0.5 },
    { name: 'Bananas', price: 0.25 },
    { name: 'Oranges', price: 0.75 },
    { name: 'Grapes', price: 1.5 },
  ];

const interestedProductsInformation = (storeProducts, interestedProductsNames) => {
    return storeProducts.filter((product) => interestedProductsNames.includes(product.name));
}
 
const interestedProductsNames = ['Apples', 'Oranges', 'Watermelon'];
console.log(interestedProductsInformation(storeProducts, interestedProductsNames));

