let btnClick = document.getElementsByTagName("button")


function myFunction() {
    let n = document.getElementsByTagName("LI").length+1;
    let x = document.createElement("LI");
    let t = document.createTextNode("Item"+" "+n);
    x.appendChild(t);
    document.getElementById("items").appendChild(x);
}