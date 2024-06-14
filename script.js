let hero2 = ["Heralda", 8500] 

let rankings = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (hero2[1] < 1000) {
  console.log("O ranking de " + hero2[0] + " é: " + rankings[0])
} else if (hero2[1] < 2000) {
  console.log("O ranking de " + hero2[0] + " é: " + rankings[1])

} else if (hero2[1] < 5000) {
  console.log("O ranking de " + hero2[0] + " é: " + rankings[2])

} else if (hero2[1] < 7000) {
  console.log("O ranking de " + hero2[0] + " é: " + rankings[3])

} else if (hero2[1] < 8000) {
  console.log("O ranking de " + hero2[0] + " é: " + rankings[4])

} else if (hero2[1] < 9000) {
  console.log("O ranking de " + hero2[0] + " é: " + rankings[5])

} else if (hero2[1] < 10000) {
  console.log("O ranking de " + hero2[0] + " é: " + rankings[6])

} else {
  console.log("O ranking de " + hero2[0] + " é: " + rankings[7])
}

/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/
