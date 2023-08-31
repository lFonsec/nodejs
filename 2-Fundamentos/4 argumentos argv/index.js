
console.log(process.argv)

const args = process.argv.slice(2) // pegar a terceira linha do argumento argv (onde que esta o valor da variavel que foi passada)

console.log(args)

const nome = args[0].split('=')[1] // pega o primeiro argumento 'nome=lucas' corta a string no '=' e fica com a segunda metade da string

console.log(`o nome dele é ${nome}`)


const idade = args[1].split('=')[1]

console.log(`a idade dele é ${idade}`)

