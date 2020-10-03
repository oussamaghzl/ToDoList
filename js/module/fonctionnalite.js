import { creationDiv, creationIconeEdit  } from '../module/Structure.js'

let myBody = document.querySelector('body')
let mySection = document.querySelector('section')

let myInputCreation = document.querySelector('input')

let nouvelleTache;



let myDivAvecLesTaches = document.createElement('div')
mySection.appendChild(myDivAvecLesTaches)

let myAjout = document.querySelectorAll('input')[1]

let stock;
let iconEdit;
let iconCheck;
let iconSuppr;

myAjout.addEventListener('click', () => {
    if (myInputCreation.value == "" ) {
        alert('Remplissez le champs !'); 
    } else {
        nouvelleTache = document.createElement('div')
        nouvelleTache.className = 'tache'

        nouvelleTache.textContent = myInputCreation.value

        myDivAvecLesTaches.appendChild(nouvelleTache)
        myDivAvecLesTaches.style = 'padding-bottom: 10px;padding-top: 10px;'

        creationDiv(stock, nouvelleTache, iconEdit, iconCheck, iconSuppr)
    }

})

