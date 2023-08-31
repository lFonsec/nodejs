const chalk = require("chalk")

nota = 5


if(nota>=7){
    console.log(chalk.green("parabens"))

}else{
    console.log(chalk.bgRed.yellowBright.italic("recuperação"))
}