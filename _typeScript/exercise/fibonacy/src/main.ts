function sumFibonacy(x: number) : number {
    let fibo: Array<number>=[0,1]
    if (x<=0){
        return 0
    }
    let sum = fibo[0]+fibo[1];
    for (let i =2;i<=x;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
        sum+=fibo[i];
    }
    return sum
}

console.log("Sum of Fibonacy number is " + sumFibonacy(4))


