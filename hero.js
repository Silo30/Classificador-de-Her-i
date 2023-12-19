let hero = ["Dimitri", 1100]
let rank

if(hero[1] <= 1000){
    rank = "ferro"
} else if(hero[1] <= 2000){
    rank = "bronze"
} else {
    rank = "prata"
}

console.log(rank)