/* 3.(OBRIGATÓRIO)‌Faça‌ ‌um‌ ‌programa‌ ‌que‌ ‌lê‌ ‌o‌ ‌arquivo‌ ‌carro.json‌ ‌utilizando‌ ‌a‌ ‌biblioteca‌ ‌e‌ ‌
‘fs’‌ ‌para‌ ‌ler‌ ‌o‌ ‌arquivo‌ ‌e‌ ‌após‌ ‌isso‌ ‌utilize‌ ‌o‌ ‌método‌ ‌JSON.parse‌ ‌para‌ ‌deserializar‌ ‌o‌ ‌objeto‌ ‌
em‌ ‌string.‌ ‌ ‌
Após‌ ‌isso‌ ‌imprima‌ ‌os‌ ‌valores‌ ‌lidos‌ ‌do‌ ‌json‌ ‌do‌ ‌arquivo.‌ ‌
OBS:‌ ‌altere‌ ‌o‌ ‌arquivo‌ ‌salve‌ ‌e‌ ‌rode‌ ‌o‌ ‌programa‌ ‌novamente‌ ‌e‌ ‌veja‌ ‌os‌ ‌dados‌ ‌sendo‌ ‌
mudados‌ ‌a‌ ‌cada‌ ‌execução.‌ ‌*/
var fs = require('fs')
var jsonSerializado = fs.readFileSync('data/carro.json')
var carros = JSON.parse(jsonSerializado)

console.log(`\nForam encontrados ${carros.length} carros!`)
for(i=0;i<carros.length;i++){
    console.log(`Carro ${i+1}: ${carros[i].modelo} na cor ${carros[i].cor} da marca ${carros[i].marca}`)
}