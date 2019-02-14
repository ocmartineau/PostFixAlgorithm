if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
    , filename = process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    // console.log(data)
    let lines = data.toString().split(/(?:\r\n|\r|\n)/g);
    let stack = [];
    // For each line of the file
    for (i = 0; i < lines.length; i++) {
        //split the individual line into characters
        let characters = lines[0].split(' ');
        //loop through characters
        for (k = 0; k < characters.length; k++) {
            let character = characters[k];

            //Decide what to do with the character
            if (character === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (character === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (character === '-') {
                let secondNum = stack.pop();
                let firstNum = stack.pop();
                stack.push(firstNum - secondNum);

            } else if (character === '/') {
                let secondNum = stack.pop();
                let firstNum = stack.pop();
                stack.push(firstNum / secondNum);
            } else {

                stack.push(parseInt(character))

            }


        }

        console.log(stack);
        stack = [];

    }

});



// console.log(lines[0]);
// // let characters = lines[0].split(' ');
// // console.log(characters[0]);
// })
// ;


// // {read line into a an array;
//
// // ex: [5, 7, "+"]
// // save array into variable;
// // for loop through the array
// {
//     var source = [5, 7, "+", 8, 6, *
// ]
//     var stack = [];
//
//     FOR
//     every
//     {
//         {
//             character
//         }
//     }
// in
//     [5, 7, "+", 8, 6, *
// ]
//
//
//     stack = [1, 5, 7, "+"]
//
//
//     var add_var = '+'
//     var minus_var = '-'
//     var times_var = '*'
//
//     for (i = 0; i < source.length(); i++) {
//         character = source[i];
//         stack.push(character);
//
//         if character = NaN {
//             if character === '+' {
//                 stack.push(stack.pop + stack.pop)
//             } else if character === '*'{
//                 stack.push(stack.pop * stack.pop)
//             } else if character === '-'{
//                 let secondNum = stack.pop;
//                 let firstNum = stack.pop;
//                 stack.push(firstNum - secondNum);
//
//             } else if character === '/'{
//                 let secondNum = stack.pop;
//                 let firstNum = stack.pop;
//                 stack.push(firstNum / secondNum);
//             }
//             "10942"
//             "10 9 4 2"
//
//
//             character
//             1
//             stack.push(1);
//             stack = [1]
//
//             character
//             5
//             stack.push(5);
//             stack = [1, 5]
//
//
//             character
//             7
//             stack.push(7);
//             stack = [1, 5, 7]
//
//             chracter
//             '+'
//             + NaN;
//
//
//             stack.push(stack.pop + stack.pop);
//
//             [1, 12]
