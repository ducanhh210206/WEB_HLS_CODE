let n;

do {
    n = parseInt(prompt("Nhập vào một số nguyên dương n:"));
} while (n <= 0 || isNaN(n));

if (n % 2 === 0) {
    console.log(n + " là số chẵn");
} else {
    console.log(n + " là số lẻ");
}
