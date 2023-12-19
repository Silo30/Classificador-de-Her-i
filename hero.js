let hero = ["Dimitri", 95959]
let rank

if(hero[1] <= 1000){
    rank = "ferro"
} else if(hero[1] <= 2000){
    rank = "bronze"
} else if(hero[1] <= 5000){
    rank = "prata"
} else if(hero[1] <= 7000){
    rank = "Ouro"
} else if(hero[1] <= 8000){
    rank = "Platina"
} else if(hero[1] <= 9000){
    rank = "Ascendente"
} else if(hero[1] <= 10000){
    rank = "Imortal"
} else {
    rank = "Radiante"
}

console.log("O herói de nome " + hero[0] + " está no nível de " + rank)