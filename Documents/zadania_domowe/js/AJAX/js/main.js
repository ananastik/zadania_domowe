
'use strict';

let btn = document.createElement("button");
let btnText = document.createTextNode("Pobierz dane");

let classAtr = document.createAttribute("id");

classAtr.value = "pobierz-dane";

btn.setAttributeNode(classAtr);

btn.appendChild(btnText);

document.body.appendChild(btn);

$(function () {

    function pobierzDane () {
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: 'json',
            success: function (resultJSON) {
                
                var pierwszyUzytkownik = resultJSON[0];
                var division = document.createElement("div");

                $(division).html(`
                Imie: ${pierwszyUzytkownik.imie}, <br>
                Nazwisko: ${pierwszyUzytkownik.nazwisko}, <br>
                Zawod: ${pierwszyUzytkownik.zawod}, <br>
                Firma: ${pierwszyUzytkownik.firma}, <br>
            `);
                $("body").append(paragraf);

            },
            onerror: function (msg) {
                console.log(msg);
            }
        });
    }

    $("#pobierz-dane").click(function() {
        pobierzDane();
    })
});



