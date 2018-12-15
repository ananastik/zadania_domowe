
$(document).ready(function() {

    let btn =  $("#btn");
    let btnReverse = $("#btnReverse");
    
    btn.click( function() {
        $("p:last").remove().insertBefore($("p:first"));
    });

    btnReverse.click( function() {
        $("p:first").remove().insertAfter($("p:last"));

    });
});