// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log(name);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentence = sentence.replace(/(^\w|\s\w)/g, convertToUpperCase => convertToUpperCase.toUpperCase());

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var output1 = money.substring(1,);
//more complex code using regex 
var output2 = money.replace( /^\D+/g, '');
