const products = [
    { 
        name: 'Shirt', 
        price: 25.99, 
        discount: 0.2, 
        stock: [ 12, 17, 29 ] 
    },
    { 
        name: 'Pants', 
        price: 55.99, 
        discount: 0.1, 
        stock: [ 20, 33, 1 ] 
    }, 
    {
        name: 'Jacket',
        price: 80.99,
        discount: 0.15,
        stock: [ 7, 44, 32 ]
    },
    {
        name: 'Shoes',
        price: 60.99,
        discount: 0.25,
        stock: [ 47, 30, 21 ]
    },
    { 
        name: 'cap', 
        price: 15.99, 
        discount: 0.05, 
        stock: [ 3, 17, 3 ] 
    }
]

// products.forEach((product) => {
//     const storesArray = [];
//     for (let store = 0; store < 3; store += 1) {
//         storesArray.push(Math.abs(Math.round(Math.random()*100)-50))
//     } 
//     product.stock = storesArray;
// });

const customers = [
    {
        name: 'John',
        surname: 'Perez',
        age: 25,
        address: {
            street: 'Av. freedom',
            number: 123,
            city: 'Buenos Aires',
            country: 'ARGENTINA'
            }
    },
    {
        name: 'Mary',
        surname: 'Garcia',
        age: 30,
        address: {
            street: 'Calle 10',
            number: 456,
            city: 'Mexico City',
            country: 'MEXICO'
            }
    },
    {
        name: 'Peter',
        surname: 'Martinez',
        age: 40,
        address: {
            street: 'Rua Augusta',
            number: 789,
            city: 'São Paulo',
            country: 'BRAZIL'
        }
    }
]

const createBill = (userNameIn, productNameIn, productQuantityIn, storeIdIn) => {
    const userName = (user) => user.name === userNameIn;
    const productName = (product) => product['name'] === productNameIn;
    let currentUser = customers.find(userName);
    let currentProduct = products.find(productName);

    if (currentUser === undefined) {
        return "error: User not found";
    } else if (currentProduct === undefined) {
        return "error: Product not found"
    } else if (productQuantityIn <= 0) {
        return "error: Product quantity must be more than 0"
    } else if (currentProduct.stock[storeIdIn] === undefined) {
        return "error: Store not found";
    } 

    if (currentProduct.stock[storeIdIn] > 0 && productQuantityIn <= currentProduct.stock[storeIdIn]) {
        currentProduct.stock[storeIdIn] = currentProduct.stock[storeIdIn] - productQuantityIn;
        let discountPrice = currentProduct.price - (currentProduct.discount * currentProduct.price);
        let totalPurchase = productQuantityIn * discountPrice;
        let completeBill = {
            username: `${currentUser.name} ${currentUser.surname}`,
            address: `${currentUser.address.street}, ${currentUser.address.city}`, 
            productName: currentProduct.name,
            productQuantity: productQuantityIn,
            total: totalPurchase
        }
        return completeBill 
    } else {
        return "error: There's not enough product"
    } 
}

console.log(createBill('John', 'Shoes', 7, 0));
console.log(products)