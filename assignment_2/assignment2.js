/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
for (var i = 1; i <= 100; i++)
    console.log(i);

console.log("");        //Used to create spacing.

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

/* This method uses concatenation of a string var. */
var pound = "#";        //Symbol string
var i = 0;              //Counter

while(i < 7)
{
    console.log(pound);
    pound = pound + "#"
    i++;
}
console.log("\n");
