"use strict";


const reverse = (word) => {
    let len = word.length;
    let reversed = "";
    for (let i=0; i<len; ++i) {
        reversed = word[i]+reversed;
    }
    console.log(reversed);
}

reverse ("Akademia108");