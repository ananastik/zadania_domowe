
$(document).ready(function() {

let $btn = $('<input/>').attr({type:'button', name:'myButton', value:'Click me'});
$("body").append($btn);

let square = $("<div></div>").css({"background-color":"red", "width":"200px", "height":"200px"});
$btn.after(square);

callbackZwrotny2 = () => {
    let text = $("<h2></h2>").text("Animacja zakonczona");
    square.append(text);
}

callbackZwrotny = () => {
    square.animate({
    backgroundColor:"blue"
    }, 5000, callbackZwrotny2)

}

$btn.click( function() {
    square.animate({
        marginLeft: "100px",
        width:"100px",
        height:"100px"
    }, 3000, callbackZwrotny);
     } );

});
