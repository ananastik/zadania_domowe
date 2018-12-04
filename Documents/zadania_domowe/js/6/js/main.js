let pracownicy = {
    'pracownicy': [
        { 'firstname': 'Krystian', 'lastname': 'Dziopa' },
        { 'firstname': 'Anna', 'lastname': 'Szapiel' },
        { 'firstname': 'Piotr', 'lastname': 'Żmuda' },
    ]
}
console.log(pracownicy);

let i = 0;
for(let key in pracownicy){
  if(pracownicy.hasOwnProperty(key)){
        pracownicy[key].forEach(element => {
            console.log(i+" "+element.firstname+" "+element.lastname);
               ++i;
        });
    }
}