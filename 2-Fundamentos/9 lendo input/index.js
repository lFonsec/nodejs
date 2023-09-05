const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("qual seu nome? ",(nome) =>{
    console.log(`o nome é ${nome}`)
    readline.close()
})