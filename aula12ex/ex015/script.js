function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0  || Number(fano.value) > ano) {
        window.alert('[ERROR]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src','bb-H.jpg')
            }else if ( idade < 21){
                //JOVEM
                img.setAttribute('src','jovem-H.jpg')
            }else if (idade < 50){
                //ADULTO
                img.setAttribute('src','adulto-H.jpg')
            }else{
                //IDOSO
                img.setAttribute('src','idoso-H.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src','bb-M.jpg')
            }else if ( idade < 21){
                //JOVEM
                img.setAttribute('src','jovem-M.jpg')
            }else if (idade < 50){
                //ADULTO
                img.setAttribute('src','adulto-M.jpg')
            }else{
                //IDOSO
                img.setAttribute('src','idoso-M.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =  `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}