
let son = +prompt("Uyqingiz kelmasa qoylarni sanang!")

while(isNaN(son) || son / 1 === 0){
    son = +prompt("Qoylarni sonini kiriting")
}
let qoy = ''
for(let i = 1; i <= son; i++){
    qoy = qoy + i + "qoy..."
    
}
console.log(qoy);

