"use strict";

const fibonacci = (n) => {

    let a=1;
    let b=0;
    let vartemp;

    while (n >= 0) {
        vartemp=a;
        a=a+b;
        b=vartemp;
        --n;
    }
    return(b);
}
fibonacci(4);
