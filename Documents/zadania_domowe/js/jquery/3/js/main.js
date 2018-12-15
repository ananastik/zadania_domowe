$(document).ready(function() {

    let btn =  $("#count-sum");
    let salaryTotal = $('#sum');
    
    btn.click( function() {
    var sum = 0.0;
    $('.salary').each(function()
{
    sum += parseFloat($(this).text());
});
console.log(sum);
salaryTotal.text(sum);
    });

});