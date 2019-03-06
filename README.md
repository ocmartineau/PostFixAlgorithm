# PostFixAlgorithm
An assessment given to me by a prospective employer. 

Basically I was tasked with writing an algorithm that was able to read post-fix evaluations from 
a text file and properly evaluate the answers by logging them to the console. I had my choice of what 
language I wanted to write this in so I went with Node.

First I added some Node logic that would allow my application to read a text file. 
Next I had each of the lines in the text file split up so that I could loop through each of them separately. 
I then split the individual lines furthermore into individual characters for evaluation. 
I looped through each of the characters from each line, popping them off the loop array 
and pushing them onto a new array called "stack".

When the loop ran into a number it would simply push that number onto its respective "stack". 
If it ran into an operator then it would instead push the evaluation of the last two numbers 
pushed into "stack" (removing them in the process) with the operator in question. 
Once the application looped through the entire line it would then log the final version 
of the "stack" for that line and then move onto the next line to start the process over again. 

I also added and "else" statement instructing the application to quit wherever it 
was at if it ran into the letter "q" in a line.
