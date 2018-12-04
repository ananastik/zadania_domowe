"use strict";

const calculation = (table) => {
    let suma =0;
    let iloczyn =1;
    for (let i=0; i<table.length; ++i) {
        suma +=table[i];
        iloczyn *=table[i];
    }
    console.log(suma);
    console.log(iloczyn);
}
calculation([1,2,3,4,5,6]);
