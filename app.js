var fs = require('fs'); // include in c
const chalk = require('chalk') // import package

/** create file */
// let data = 'This is a book'
// fs.writeFile("book.txt", data, function (error) {
//     if (error) {
//         /* if error, code here ! */
//         console.log(error)
//     }
//     /** if NOT error, code here */
//     console.log('saved')
// })

/** read file */
// fs.readFile('book.txt', 'utf8', function (error, data) {
//     if (error) {
//         console.log(error)
//     }
//     console.log(data)
// })

let todos = []

function printTodos() {
    console.log(chalk.bgGreen('****TODOS****'))
    for (let i = 0; i < todos.length; i++) {
        console.log(todos[i])
    }
    console.log(chalk.bgGreen('***************'))
}

// console.log(process.argv) // argv: argument vector, argument variables
let argv = process.argv
if (argv[2] == 'add') {

    fs.readFile('todos.txt', 'utf8', function (error, data) {   // get the paper
        if (error) {
            console.log(error)
        }
        todos = JSON.parse(data) // received the paper

        const found = todos.find(element => element == argv[3])
        if (found != undefined) {
            console.log(chalk.redBright('error: found "' + argv[3] + '" todos'))
        } else {
            todos.push(argv[3])
            let todoString = JSON.stringify(todos)
            fs.writeFile("todos.txt", todoString, function (error) {
                if (error) {
                    console.log(error)
                }
                console.log('saved')
            })
        }

    })

} else if (argv[2] == 'delete') {
    fs.readFile('todos.txt', 'utf8', function (error, data) {
        if (error) {
            console.log(error)
        }
        todos = JSON.parse(data)
        let isExist = false
        let deleteIndex = -1
        for (let i = 0; i < todos.length; i++) {
            if (argv[3] == todos[i]) {
                isExist = true
                deleteIndex = i
            }
        }
        if (isExist) {
            todos.splice(deleteIndex, 1)
            let todoString = JSON.stringify(todos)
            fs.writeFile("todos.txt", todoString, function (error) {
                if (error) {
                    console.log(error)
                }
                console.log('Deleted ' + argv[3] + ', Saved.')
            })
        } else {
            console.log(chalk.bgRed('Not found ' + argv[3] + ' in todos.'))
        }
    })

} else if (argv[2] == 'list') {

    fs.readFile('todos.txt', 'utf8', function (error, data) {   // get the paper
        if (error) {
            console.log(error)
        }
        todos = JSON.parse(data) // received the paper
        printTodos()
    })

} else {
    console.log('command does not match !')
}