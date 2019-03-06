if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + 'numbers.txt');
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


    // For each line of the file....
    for (i = 0; i < lines.length; i++) {
        // console.log(lines);
        //....split the individual line into characters..
        let characters = lines[i].split(' ');


        //...then loop through characters...
        for (k = 0; k < characters.length; k++) {
            let character = characters[k];

            //...then decide what to do with the character
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
            }  else if (character === "q"){
                process.exit()
            } else {

                stack.push(parseInt(character))

            }


        }

        console.log(stack);
        stack = [];

    }

});


