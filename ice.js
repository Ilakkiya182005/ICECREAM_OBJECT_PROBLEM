const icecreamObject = {
    butterscotch: {
        flavor: "butterscotch",
        price: 400,
        quantity: 48
    },
    redvelvet: {
        flavor: "redvelvet",
        price: 120,
        quantity: 60
    },
    blackcurrent: {
        flavor: "blackcurrent",
        price: 400,
        quantity: 10
    },
    blueberry: {
        flavor: "blueberry",
        price: 380,
        quantity: 10
    }
};
icecreamObject.chocolate= {flavor: "chocolate",price: 350,quantity: 40};
console.log(icecreamObject);

let totalquantity=icecreamObject.butterscotch.quantity+icecreamObject.blackcurrent.quantity+icecreamObject.blueberry.quantity+icecreamObject.chocolate.quantity+icecreamObject.redvelvet.quantity;
console.log(totalquantity);
let totalprice=icecreamObject.butterscotch.price+icecreamObject.blackcurrent.price+icecreamObject.blueberry.price+icecreamObject.chocolate.price+icecreamObject.redvelvet.price;
console.log(totalprice);