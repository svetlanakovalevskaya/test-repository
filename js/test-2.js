let totalSpent = 2000;
let payment = 500;
let discount = 0;
if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;
    console.log(`Bronze partner! Discount ${discount * 100}%`);
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;
    console.log(`Silver partner! Discount ${discount * 100}%`);
} else if (totalSpent > 5000) {
    discount = 0.1;
    console.log(`Gold partner! Discount ${discount * 100}%`);
} else {
    console.log(`Don't a partner! Discount ${discount * 100}%`);
}

alert(`Оформляем заказ на сумму ${payment = payment - payment * discount} со скидкой ${discount *100}%`);
totalSpent += payment;
alert(`Общая сумма потраченного в магазине: ${totalSpent}`);