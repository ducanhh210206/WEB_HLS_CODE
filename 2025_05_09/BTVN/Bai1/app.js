sum = 0
for (i = 1; i<=100; i++) {
    sum += i
    if (sum >= 100) {
        break
    }
}
console.log(sum)

let sum = 0
let i = 1
while (sum <= 100) {
    sum += i;
    i++;
}
console.log(sum)