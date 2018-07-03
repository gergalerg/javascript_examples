const fac = (n) => 
    n === 1
    ? n
    : n*fac(n-1)

let res = fac(10);
console.log(res);
