'use strict';

const cart = {
    items : [],
    totalPrice : 0,
    count  : 0,
    getTotalPrice() {
        return this.totalPrice;
    },
    add(productName, productPrice, productQuantity = 1) {
        this.items.push({
            name: productName,
            price: productPrice,
            quantity: productQuantity,
        });
        this.increaseCount(productQuantity)
        this.calculateItemPrice();
    },
    increaseCount(number) {
        this.count += number;
    },
    calculateItemPrice() {
        let sum = 0, items = this.items;
        items.forEach(item => {sum += item.price * item.quantity});
        this.totalPrice = sum;
    },
    clear() {
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(this.totalPrice);
    },
};

cart.add('Яблоко', 10, 5);

cart.add('Апельсин', 15, 4);

cart.add('Арбуз', 100, 2);

cart.print();



