// PRINT ONLY THE NUMBERS THAT ARE BOTH EVEN AND PERFECT SQUARES
let n = 20;

for (let i = 1; i <= n; i++) {
    let root = Math.sqrt(i);

    if (i % 2 === 0 && Number.isInteger(root)) {
        console.log(i);
    }
}
