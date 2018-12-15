"use strict";

let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

    let listContainer = document.createElement('div');

    document.getElementsByTagName('body')[0].appendChild(listContainer);

    let listElement = document.createElement('ul');
    let classAtr = document.createAttribute("class");

    classAtr.value = "city";

    listContainer.appendChild(listElement);
    listElement.setAttributeNode(classAtr);

    let numberOfListItems = cities.length;

    for (let i = 0; i < numberOfListItems; ++i) {
        let listItem = document.createElement('li');
         listItem.innerHTML = cities[i];
        listElement.appendChild(listItem);
    }

