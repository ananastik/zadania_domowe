let btnClick = document.getElementsByTagName("button")


function myFunction() {
    let n = document.getElementsByTagName("LI").length;
    let x = document.createElement("LI");
    let t = document.createTextNode("Item");
    x.appendChild(t);
    document.getElementById("items").appendChild(x);
}