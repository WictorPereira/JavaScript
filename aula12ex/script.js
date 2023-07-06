

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var boa = window.document.getElementById('boa')
    var data = new Date()
    var hora = data.getHours ()
    
   
    msg.innerHTML =   `Agora sao ${hora} horas`
    boa.innerHTML =  `Bom Dia `

    if (hora >=0 && hora < 12) {
        //BOM DIA
        img.src = 'fotos/manha.jpg'
        document.body.style.background = '#e2cd9f'
        boa.innerHTML =  `Bom Dia :-)`

    }else if (hora >=12 && hora < 18){
        //BOA TARDE
        img.src = 'fotos/tarde.jpg'
        document.body.style.background = '#b9846f'
        boa.innerHTML =  `Boa Tarde :-)`
    }else{
        //BOA NOITE
        img.src = 'fotos/noite.jpg'
        document.body.style.background = '#080c1d'
        boa.innerHTML =  `Boa Noite :-)`
    }
        
}
