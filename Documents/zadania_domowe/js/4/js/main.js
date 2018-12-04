"use strict";

const calculation = (table) => {
    let sumaKwadratow =0;
    for (let i=0; i<table.length; ++i) {
        sumaKwadratow +=Math.pow(table[i],2);
    }
    console.log(sumaKwadratow);
}
calculation([1,2,3,4,5]);
