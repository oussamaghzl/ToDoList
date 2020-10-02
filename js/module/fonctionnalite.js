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
    

    nouvelleTache = document.createElement('div')
    nouvelleTache.className = 'tache'
    nouvelleTache.textContent = myInputCreation.value
    
    myDivAvecLesTaches.appendChild(nouvelleTache)

    stock = document.createElement('div')
    nouvelleTache.appendChild(stock)

    
    iconEdit = document.createElement('i');
    iconEdit.className = "fa fa-edit"
    iconCheck = document.createElement('i');
    iconCheck.className = "fa fa-check-square"
    iconSuppr = document.createElement('i');
    iconSuppr.className = "fa fa-trash-alt"
    iconSuppr.style = 'color: red;'

    stock.appendChild(iconEdit)
    stock.appendChild(iconCheck)
    stock.appendChild(iconSuppr)


})


