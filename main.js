//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.

//console.log("Question 1");
//console.log(yourAnswer);

console.log("Question 1")

var empty = [];

empty.push("Audi", "Ferrari", "Tesla", "Porsche");

console.log(empty);

//[ 'Audi', 'Ferrari', 'Tesla', 'Porsche' ]

// 2. Add an additional item to the beginning of your Array.

console.log("Question 2");

empty.unshift("Range Rover");

console.log(empty);

//[ 'Range Rover', 'Audi', 'Ferrari', 'Tesla', 'Porsche' ]

// 3. Remove the second and third items.

console.log("Question 3");

empty.splice(1, 2);

console.log(empty);

//[ 'Range Rover', 'Tesla', 'Porsche' ]

// 4. Add two new items after the second item.

console.log("Question 4");

empty.splice(1, 0, "Masarati", "Aston Martin");

console.log(empty);

//[ 'Range Rover', 'Masarati', 'Aston Martin', 'Tesla', 'Porsche' ]

// 5. Write 'The current length of the array is....' using the .length method

console.log("Question 5");

console.log("The current length of the array is...." + empty.length);

//The current length of the array is....5

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

console.log("Question 6");

var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

things.splice(2, 1, "keyboard");

console.log(things);

//[ 'mug', 'book', 'keyboard', 'plant', 'sunglasses' ]

// 7. Combine all of the elements of the array into a string.

console.log("Question 7");

console.log(things.toString());

//mug,book,keyboard,plant,sunglasses

// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, one at the beginning and one at the end.

console.log("Question 8");

var lastItem = [things.pop()];

lastItem.push("hat");

lastItem.push("shoes");

console.log(lastItem);

//[ 'sunglasses', 'hat', 'shoes' ]


// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.

console.log("Question 9");

var itemLast = lastItem.reverse();

console.log(itemLast);

//[ 'shoes', 'hat', 'sunglasses' ]

// 10. Remove the first item of itemLast.

console.log("Question 10");

itemLast.shift();

console.log(itemLast);

//[ 'hat', 'sunglasses' ]

// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)

console.log("Question 11");

itemLast.splice(0, itemLast.length);

console.log(itemLast);

//[]

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']

console.log("Question 12");

var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

var numberPets = [];

numberPets.push(firstArray, secondArray);

console.log(numberPets);

//[ [ 12, 5, 9, 27 ], [ 'fish', 'dog' ] ]

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'

console.log("Question 13");

var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

var newperson1 = ("Tommy");

var newperson2 = ("Chris");

people.push(newperson1);

people.push(newperson2);

console.log(people);

//[ 'Bill', 'Ted', 'Emily', 'Andrea', 'Doug', 'Tommy', 'Chris' ]

// 14. Remove everybody except 'Andrea' and 'Ted'

console.log("Question 14");

people.splice(4, 3);

people.splice(2, 1);

people.splice(0, 1);

console.log(people);

//[ 'Ted', 'Andrea' ]

// 15. Add a new person to the beginning of the Array

console.log("Question 15");

var newperson3 = ("Willem");

people.unshift(newperson3);

console.log(people);

//[ 'Willem', 'Ted', 'Andrea' ]

// 16. Arrange the items alphabetically. Store this Array as orderedPeople

console.log("Question 16");

var orderedPeople = [];

orderedPeople = people.sort();

console.log(orderedPeople);

//[ 'Andrea', 'Ted', 'Willem' ]

// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

console.log("Question 17");

var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

var array4 = [];

array4.splice(0, 4, array1, array2, array3);

console.log(array4);

//[ [ 'Fido', 'Spot', 'Rex', 'Sparky' ],[ 'Bulldog', 'Lab', 'Dalmation', 'Beagle' ],[ 'White', 'Black', 'Spotted', 'Tri-color' ] ]


// 18. Remove "Sparky" and "White" from the above array of arrays.

console.log("Question 18");

//bracket Notation

array4[0].pop();

array4[2].shift();

console.log(array4);

//[ [ 'Fido', 'Spot', 'Rex' ],[ 'Bulldog', 'Lab', 'Dalmation', 'Beagle' ],[ 'Black', 'Spotted', 'Tri-color' ] ]

// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// Explain why it doesn't sort as expected.

console.log("BONUS 1");

var sortingNumbers = [2, 5, 98, 55, 77, 300];

console.log(sortingNumbers);

//[ 2, 5, 98, 55, 77, 300 ]

//it sorts with the first number of each digit

//fix

sortingNumbers.sort(function(a, b){return a-b});

console.log(sortingNumbers);

//[ 2, 5, 55, 77, 98, 300 ]

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

console.log("BONUS 2");

var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

var array2 = array1;

array2.splice(2, 1);

array2.splice(4, 1);

array2.sort().unshift(array2.pop());

console.log(array2);

//[ 'plant', 17, 2, 'Bill', 'dog' ]

//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];




