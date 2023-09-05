const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual sua primeira nota? ',
    },
    {
        name: 'p2',
        message: 'Qual sua segunda nota? ',

    },
]).then((answers)=>{
    console.log(answers)
}).cath(err=>console.log(err))