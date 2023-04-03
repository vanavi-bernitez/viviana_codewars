const products = [
    {
        "name": "Shirt",
        "price": 25.99,
        "discount": 0.2
    },
    {
        "name": "Pants",
        "price": 55.99,
        "discount": 0.1
    },
    {
        "name": "Jacket",
        "price": 80.99,
        "discount": 0.15
    },
    {
        "name": "Shoes",
        "price": 60.99,
        "discount": 0.25
    },
    {
        "name": "cap",
        "price": 15.99,
        "discount": 0.05
    }
]

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

const discounts = [
    {
        country: 'ARGENTINA',
        discount: 0
    },
    {
        country: 'MEXICO',
        discount: 0.20
    },
    {
        country: 'BRAZIL',
        discount: 0.50
    }
]

const deleteDiscount = (product) => delete product['discount'];
products.forEach(deleteDiscount);

const applyDiscount = (customerCountry) => {
    const newProductsPrices = (product) => {
        return {
            name: product.name,
            price: product.price,
            newPrice: product.price-(customerCountry.discount*product.price)
        }
    }
    return products.map(newProductsPrices);
}

const createBill = (userNameIn, productNameIn, productQuantityIn) => {
    const userName = (user) => user.name === userNameIn;
    const productName = (product) => product['name'] === productNameIn;
    const countryDiscount = (discount) => discount.country === currentUser.address.country;
    let currentUser = customers.find(userName);
    let currentProductDiscount = discounts.find(countryDiscount); 
    const productsWithDiscount = applyDiscount(currentProductDiscount);
    let currentProductName = productsWithDiscount.find(productName);

    if (currentUser === undefined) {
        return "error: user not found"
    } else if (currentProductName === undefined) {
        return "error: product not found"
    } else if (productQuantityIn < 0 ) {
        return "only positive integer values are accepted"
    }

    let totalPurchase = currentProductName.newPrice * productQuantityIn;
    let completeBill = {
        username: `${currentUser.name} ${currentUser.surname}`,
        address: `${currentUser.address.street}, ${currentUser.address.city}`, 
        productName: currentProductName['name'],
        productQuantity: productQuantityIn,
        total: totalPurchase
    }
    return completeBill
    
}

console.log(createBill('John', 'Shoes', 2));
console.log(createBill('Mary', 'Shoes', 2));
console.log(createBill('Peter', 'Shoes', 2));