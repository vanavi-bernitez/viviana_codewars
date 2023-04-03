/*
Create a method to addItem (where just ask for values. If enter id exist just add a new quantity. 
    else create new item), 
removeItem (id, quantity) if substraction iqual or less than zero delete the item, else just reduce quantity
getTotal(price*quantity)

Your task is to write a function called checkout that takes the 
shoppingCart object and applies a discount of 10% to the total price 
of all items in the cart. The function should then return the discounted total.
*/

const shoppingCart = {
    items: [
      { id: 1, name: 'Shirt', price: 20.99, quantity: 2 },
      { id: 2, name: 'Pants', price: 35.99, quantity: 1 },
      { id: 3, name: 'Socks', price: 4.99, quantity: 4 },
    ]
  }




































//   const shoppingCart = {
//     items: [
//       { id: 1, name: 'Shirt', price: 20.99, quantity: 2 },
//       { id: 2, name: 'Pants', price: 35.99, quantity: 1 },
//       { id: 3, name: 'Socks', price: 4.99, quantity: 4 },
//     ],
//     addItem: function(item) {
//       const itemIndex = this.items.findIndex(i => i.id === item.id);
//       if (itemIndex === -1) {
//         this.items.push(item);
//       } else {
//         this.items[itemIndex].quantity += item.quantity;
//       }
//     },
//     removeItem: function(itemId, quantity) {
//       const itemIndex = this.items.findIndex(i => i.id === itemId);
//       if (itemIndex !== -1) {
//         const remainingQuantity = this.items[itemIndex].quantity - quantity;
//         if (remainingQuantity <= 0) {
//           this.items.splice(itemIndex, 1);
//         } else {
//           this.items[itemIndex].quantity = remainingQuantity;
//         }
//       }
//     },
//     getTotal: function() {
//       return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
//     }
//   };