import { creationDiv, creationIconeEdit } from '../module/Structure.js'

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

let myAFaire = document.querySelector('#filtre button')
let myTerminer = document.querySelectorAll('#filtre button')[1]
let myTout = document.querySelectorAll('#filtre button')[2]


myAjout.addEventListener('click', () => {
    if (myInputCreation.value == "") {
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


// Filtre

let tab;

myAFaire.addEventListener('click',()=>{
    tab = [].slice.call(myDivAvecLesTaches.children)
    tab.forEach(element => {

        if (element.classList == 'tache fini') {
            element.classList.add("disparait")

        } else {
            element.classList.remove("disparait");
        }
        
    });
})

myTerminer.addEventListener('click',()=>{
    tab = [].slice.call(myDivAvecLesTaches.children)
    tab.forEach(element => {
        if (element.classList == 'tache pasFini') {
            element.classList.add("disparait")
        } else {
            element.classList.remove("disparait");
        }
    });  
})

myTout.addEventListener('click',()=>{
    tab = [].slice.call(myDivAvecLesTaches.children)
    tab.forEach(element => {
        if (element.classList == 'tache fini disparait' || element.classList == 'tache pasFini disparait') {
            element.classList.remove("disparait");
        }
    });  
})