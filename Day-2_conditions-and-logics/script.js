


// CALCULATE THE ELECTRICITY BILL
// INPUT: Units = 230
// OUTPUT: Total Bill = -/1500
// EX:
// -- 0-100 units = -/5 per unit
// -- 101-200 units = -/7 per unit
// -- 201-300 units = -/10 per unit
// -- Above 300 units = -/12 per unit

function calculateBill(unit){
    // console.log(unit);
    // wrong approach (own)
    // let bill = 0;
    // if(unit <= 100){
    //     bill = unit * 5;
    //     return bill;
    // } else if (unit >= 101 && unit <= 200){
    //     bill = unit * 7;
    //     return bill;
    // } else if (unit >= 201 && unit <= 300){
    //     bill = unit * 10;
    //     return bill;
    // } else if (unit < 300){
    //     bill = unit * 12;
    //     return bill;
    // }
    // right approach
    // let bill = 0;
    // if(unit <= 100){
    //     bill = unit * 5;
    // } else if (unit <= 200){
    //     bill = (100 * 5) + (unit - 100) * 7;
    // } else if (unit <= 300){
    //     bill = (100 * 5) + (100 * 7) + (unit - 200) * 10;
    // } else {
    //     bill  = (100 * 5) + (100 * 7) + (100 * 10) + (unit - 300) * 12;
    // }
    // return bill;
    // array based approach
}
console.log(calculateBill(250));