export let creationDiv = (stock, nouvelleTache, iconYes, iconAnn, input2Modif, iconEdit, iconCheck, iconSuppr, myInputCreation) => {
    stock = document.createElement('div')
    nouvelleTache.appendChild(stock)

    let a = 0

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



    iconCheck.addEventListener('click', () => {
        if (a % 2 == 0) {
            nouvelleTache.setAttribute('id', 'fini')
            a++
        } else {
            nouvelleTache.setAttribute('id', 'pasFini')
            a++
        }
    })

    iconEdit.addEventListener('click', () => {
        creationIconeEdit(stock, nouvelleTache, iconYes, iconAnn, input2Modif, iconEdit, iconCheck, iconSuppr, myInputCreation)
    })

    iconSuppr.addEventListener('click',()=>{
        if(confirm('Voulez-vous vraiment supprimer cette tache ?')){
            nouvelleTache.remove()
        }
    })
}

export let creationIconeEdit = (stock, nouvelleTache, iconYes, iconAnn, input2Modif, iconEdit, iconCheck, iconSuppr, myInputCreation) => {

    let mot = nouvelleTache.textContent

    nouvelleTache.textContent = ''
    input2Modif = document.createElement('input')
    nouvelleTache.appendChild(input2Modif)

    

    stock = document.createElement('div')
    nouvelleTache.appendChild(stock)
    iconYes = document.createElement('i');
    iconYes.className = "fa fa-check-circle"
    iconAnn = document.createElement('i');
    iconAnn.className = 'fa fa-window-close'
    stock.appendChild(iconYes)
    stock.appendChild(iconAnn)


    iconYes.addEventListener('click', () => {
        if (input2Modif.value == "") {
            alert('Remplissez le champs !');
        } else {
            nouvelleTache.textContent = ''
            nouvelleTache.textContent = input2Modif.value
            creationDiv(stock, nouvelleTache, iconEdit, iconCheck, iconSuppr)
            mot = input2Modif.value
        }
    })
    iconAnn.addEventListener('click', () => {
        nouvelleTache.textContent = ''
        nouvelleTache.textContent = mot
        creationDiv(stock, nouvelleTache, iconEdit, iconCheck, iconSuppr)
    })
}

