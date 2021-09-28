function sumFibonacy(x) {
    var fibo = [0, 1];
    if (x <= 0) {
        return 0;
    }
    var sum = fibo[0] + fibo[1];
    for (var i = 2; i <= x; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        sum += fibo[i];
    }
    return sum;
}
console.log("Sum of 3 Fibonacy number first is " + sumFibonacy(4));
