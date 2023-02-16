const a = [1, 4, 11, 2, 37, -4]
let big = a[0]
let small = a[0]
for (x = 0; x < a.length; x++){
    if (big < a[x]){
        big = a[x];
        }
    if (small > a[x]){
        small = a[x];
        }
}
console.log(small,big)