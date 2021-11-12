let res = [];
const ar = [2, 3, 2, 4, 5, 2, 3, 6];
res = ar.sort((a, b) => b - a);
console.log(res);
while (res.length > 1) {
    res = ar.sort((a, b) => b - a);
    if (Math.abs(res[0] - res[1]) == 0) {
        res.splice(0, 2);
    } if (Math.abs(res[0] - res[1]) > 0) {
        let ayirma = Math.abs(res[0] - res[1]);
        res.push(ayirma)
        res.splice(0, 2);
    }
    console.log(res);
}