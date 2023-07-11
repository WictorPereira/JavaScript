var num = [5,8,4]
num [3] = 6
num.push(7)
num.sort()
var busc = num.indexOf(9)
console.log( num)
console.log('vetor tem : ' + num.length +' posições')


for (let pos = 0; pos < num.length; pos++) {
   console.log(`Aposiçao ${pos} tem o valor ${num[pos]}`);
    
}

/* 2 GEITO MAIS FÁCIL*/
console.log('SEGUNDO GEITO')
for (let pos in num){
    console.log(`Aposiçao ${pos} tem o valor ${num[pos]}`);
}

if (busc == -1 ) {
    console.log('O numero nao foi encontrado')
} else {
    console.log(`O numero esta na posição ${busc}`)
}